import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import { addTask, deleteTask, getTasks, updateTask } from "../controllers/task.controller";

const router = Router();

router.route("/addTask").post(verifyJWT,addTask);
router.route("/getTasks").get(verifyJWT,getTasks);
router.route("/updateTask").put(verifyJWT,updateTask);
router.route("/deleteTask").delete(verifyJWT,deleteTask);
export default router;