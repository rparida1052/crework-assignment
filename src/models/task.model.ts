import mongoose,{Schema,Model} from "mongoose";
import { ITask } from "../types/types";

const taskSchema:Schema<ITask> = new Schema<ITask>({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    status:{
        type:String,
        enum:["todo","inProgress","underReview","finished"],
        default:"todo"
    },
    priority:{
        type:String,
        enum:["urgent","medium","low"],
        default:"medium"
    },
    deadline:{
        type:Date,
        required:[true,"Deadline is required"]
    },
    description:{
        type:String,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
}
)

export const Task:Model<ITask> = mongoose.model<ITask>("Task",taskSchema)