import {Request,Response,NextFunction} from 'express'
const asyncHandler = (requestHandler:Function) =>{
    (req:Request,res:Response,next:NextFunction) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((error) => next(error))
    }
}

export {asyncHandler}