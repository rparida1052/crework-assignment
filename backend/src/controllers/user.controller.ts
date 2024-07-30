import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiRespnse";
import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";
import jwt from "jsonwebtoken"


const generateAccessRefreshToken = async (userId:String) => {
    try{

        const user = await User.findById(userId);
        if(!user){
            throw new ApiError(404,"User not found");
        }
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
       await user.save({validateBeforeSave:false});

       return {accessToken,refreshToken};
    }catch(error){
        throw new ApiError(500,"Something went wrong while generating access token");
    }
}

const registerUser = asyncHandler(async(req: Request, res: Response) => {
    const {name,email,password} = req.body;   

    const existedUser = await User.findOne({email});
    if(existedUser){
       throw new ApiError(409,"User with email already exists"); 
    }

    const user = await  User.create({
       name,
       email,
       password  
    });

    const createdUser = await User.findById(user._id).select(
		"-password -refreshToken"
	);
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while creating user");
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered successfully")
    )
})

const loginUser = asyncHandler(async(req: Request, res: Response) => {
    const {email,password} = req.body;

    const user = await User.findOne({
        email
    });
    if(!user){
        throw new ApiError(404,"User not found");
    }

    console.log("user is ",user);
    
   const isPasswordValid =  await user.isPasswordMatch(password);
   if(!isPasswordValid){
       throw new ApiError(401,"Invalid user credentials");
   }

    const {accessToken,refreshToken} = await generateAccessRefreshToken(user._id);
    const logedInUser = await User.findById(user._id).select("-password -refreshToken");
    const cookiesOptions = {
        httpOnly:true,
        secure:true,
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,cookiesOptions)
    .cookie("refreshToken",refreshToken,cookiesOptions)
    .json(
        new ApiResponse(
            200,
            {logedInUser,accessToken,refreshToken},
            "User logged in successfully"
        )
    )
})

const logoutUser = asyncHandler(async(req: any, res: Response) => {

    console.log("logging the user value",req.user);

   await User.findByIdAndUpdate(req.user._id,
        {
            $set:{
                refreshToken:undefined  
            }
        },
        {
            new:true
        }
)
const cookiesOptions = {
	httpOnly: true,
	secure: true,
};
console.log("returngin logout response");

 res
    .status(200)
    .clearCookie("accessToken", cookiesOptions)
    .clearCookie("refreshToken", cookiesOptions)
    .json(new ApiResponse(200,{},"User logged out successfully"));
})

const refreshAccessToken = asyncHandler(async(req: Request, res: Response) => {

    const incommingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if(!incommingRefreshToken){
        throw new ApiError(401,"unauthorized request");
    }

   try {
     const decodedToken:any = jwt.verify(incommingRefreshToken, process.env.REFRESH_TOKEN_SECRET!) as any;
     
     const user = await User.findById(decodedToken?._id);
     if(!user){
         throw new ApiError(401,"Invaid refresh token");
     } 
     if(incommingRefreshToken !== user.refreshToken){
         throw new ApiError(401,"Refresh token is expired or used");
     }
 
     const option ={
         httpOnly:true,
         secure:true
     }
     const {accessToken,refreshToken} = await generateAccessRefreshToken(user._id);
     return res
 		.status(200)
 		.cookie('accessToken', accessToken, option)
 		.cookie('refreshToken', refreshToken, option)
         .json(new ApiResponse(200, {
             accessToken,
             refreshToken
         }, "Access token refreshed successfully"
         ));
   } catch (error) {
         throw new ApiError(401,"Invalid refresh token");
    
   }
})
export { registerUser ,loginUser,logoutUser,refreshAccessToken}