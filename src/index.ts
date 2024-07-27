import express,{Express,Request,Response} from "express";
import 'dotenv/config';

const app:Express = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req:Request, res:Response) => {
  res.send("Hello from workflo!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
