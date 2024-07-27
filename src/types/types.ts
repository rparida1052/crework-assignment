import { Document } from "mongoose";

export  interface IUser extends Document {
	name: string;
	email: string;
	password: string;
    tasks: ITask[];
	refreshToken?: string; // Optional field
}

export interface ITask extends Document {
    title:String;
    status:"todo" | "inProgress" | "underReview" | "finished";
    priority:"urgent" | "medium" | "low";
    deadline:Date;
    description:String;
}
