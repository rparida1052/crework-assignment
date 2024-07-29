import { NextFunction, Request ,Response} from 'express';
import { asyncHandler } from "../utils/asyncHandler";
import { Task } from '../models/task.model';
import { ApiResponse } from '../utils/ApiRespnse';
import { User } from '../models/user.model';
import { isValidObjectId } from 'mongoose';
import { ApiError } from '../utils/ApiError';

const addTask = asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    // user is already authenticated
    // collect the userId from the request object
    //save the task to the db
    console.log(req.body);
    console.log(req.user);    
    const {title,status,description,priority,deadline} = req.body;

    const task = {
        title,
        status,
        description,
        priority,
        deadline,
        user:req.user?._id
    }

    const newTask = await Task.create(task);
    if(!newTask){
         res.status(400).json({
            message:"Task could not be added"
        })
    }
    const user = await User.findOneAndUpdate({_id:req.user?._id},{
        $push:{
            tasks:newTask._id
        }
    },
    {
        new:true
    }
    );
   
    console.log("Updated user form task ",user);
    return res.status(200).json(
        new ApiResponse(200,newTask,"Task added successfully")
    )
})

const getTasks = asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    // user is already authenticated
    // collect the userId from the request object
    //save the task to the db
    console.log(req.user);    
    const tasks = await Task.find({user:req.user?._id});
    if(!tasks){
         res.status(400).json({
            message:"Tasks not found"
        })
    }
    return res.status(200).json(
        new ApiResponse(200,tasks,"Tasks fetched successfully")
    )
}
)

const updateTask = asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {taskId,title,description,status,deadline,priority,user} = req.body;

    if(!isValidObjectId(taskId)){
        throw new ApiError(400,"Invalid task id")
    }

    const updatedTask = await Task.findByIdAndUpdate(taskId,{
        title,
        description,
        status,
        deadline,
        priority,
        user
    },
    {
        new:true
    }
    )
        console.log('Updated task ', updatedTask);

    if(!updatedTask){
        throw new ApiError(400,"Task could not be updated")
    }
    console.log("Updated task ",updatedTask);
    
    return res.status(200).json(
        new ApiResponse(200,updatedTask,"Task updated successfully")
    )

    
})

const deleteTask = asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    const {taskId} = req.body;

    if(!isValidObjectId(taskId)){
        throw new ApiError(400,"Invalid task id")
    }

    const deletedTask = await Task.findByIdAndDelete(taskId);
    if(!deletedTask){
        throw new ApiError(400,"Task could not be deleted")
    }
    console.log("Deleted task ",deletedTask);
    
    return res.status(200).json(
        new ApiResponse(200,deletedTask,"Task deleted successfully")
    )

    
}
)
export {addTask,getTasks,updateTask,deleteTask}