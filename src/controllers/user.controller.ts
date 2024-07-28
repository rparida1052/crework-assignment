import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiRespnse";
import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";


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


export { registerUser }