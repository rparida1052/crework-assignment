import express,{ Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: Express = express();
app.use(cors({
  origin:process.env.CROS_ORIGIN,
  credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

export {app}