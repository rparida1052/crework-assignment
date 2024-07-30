import { Document,Model, Types } from "mongoose";

export  interface IUser extends Document {
	_id:string;
	name: string;
	email: string;
	password: string;
	tasks: ITask[];
	refreshToken?: string; // Optional field
}

export interface IUserMethods{
	isPasswordMatch(enteredPassword: string): Promise<boolean>;
	generateAccessToken(): string;
	generateRefreshToken(): string;
}

export interface UserModel extends Model<IUser,{},IUserMethods>{}
export interface ITask extends Document {
    title:String;
    status:"todo" | "inProgress" | "underReview" | "finished";
    priority:"urgent" | "medium" | "low";
    deadline:Date;
    description:String;
	user:Types.ObjectId;
}
