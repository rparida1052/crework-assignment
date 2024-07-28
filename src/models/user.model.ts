import mongoose, { Schema, Document, Model } from 'mongoose';
import {IUser} from '../types/types';
import bcrypt from 'bcrypt';
import  jwt from 'jsonwebtoken';



const userSchema: Schema<IUser> = new Schema<IUser>(
	{
		name: {
			type: String,
			required: [true, 'name is required'],
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		tasks: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Task',
			},
		],
		refreshToken: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save",async function(next){
	
	if(!this.isModified("password")) return next()

	this.password = await bcrypt.hash(this.password,10);
	next()
})

//check if password is correct or not
userSchema.methods.isPasswordMatch = async function(enteredPassword: string){
	return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.generateAccessToken = function(){
	return jwt.sign(
		{
			_id: this._id,
			email: this.email,
			name: this.name,
		},
		process.env.ACCESS_TOKEN_SECRET!,
		{
			expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
		}
	);
}
userSchema.methods.generateRefreshToken = function(){
	return jwt.sign(
		{
			_id: this._id,
		},
		process.env.REFRESH_TOKEN_SECRET!,
		{
			expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
		}
	);
}

export const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
