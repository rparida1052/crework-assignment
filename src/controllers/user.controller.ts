import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";


const registerUser = asyncHandler(async(req: Request, res: Response) => {
    const {name,email,password} = req.body;   
    
    res.status(200).json({
        success: true,
        message: "User registered successfully",
    });
})


export { registerUser }