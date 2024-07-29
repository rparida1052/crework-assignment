import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/user.model";

import { NextFunction, Request, Response } from 'express';



export const verifyJWT = asyncHandler(async (req:Request,res:Response, next:NextFunction) => { 
try {
    console.log("calling from verifyJWT");
        console.log(req.cookies?.accessToken);
        
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
        
        if(!token || token == undefined){
            throw new ApiError(401,"Unauthorized access");
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
        const user = await User.findById((decodedToken as JwtPayload)?._id)
        .select("-password -refreshToken");
    
        if(!user){ 
            throw new ApiError(401,"Invalid Access Token");
        }
    
        req.user = user;
        next();
} catch (error) {
    throw new ApiError(401,(error as Error)?.message || "Invalid Access Token");
}

})