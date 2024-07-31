import express,{ Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: Express = express();
app.use(
	cors({
		origin: '*', // 
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true, // Allow cookies to be sent with requests
	})
);

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//routes import
import userRoute from "./routes/user.routes";
import taskRoute from "./routes/task.routes";

// routes declare
app.use("/api/v1/user",userRoute);
app.use('/api/v1/task', taskRoute);


export {app}