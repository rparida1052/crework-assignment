import dotenv from 'dotenv';
import connectDB from './db';
import { app } from './app';
import { connection } from 'mongoose';

dotenv.config({
  path:'./.env'
})


connectDB().then(()=>{
  app.on('error',(error)=>{
    console.log("Error in server",error);
    throw error;
  })
  app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
  })

}).catch((err) =>{
  console.log("MongoDB connection failed !",err);
  
})

