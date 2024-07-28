import { Router } from "express";
const router = Router();

// import controller
import { registerUser } from "../controllers/user.controller";
import { validateData } from "../middlewares/validationMiddleware";
import { userRegistrationSchema } from "../schema/user.schema";

// controllers
router
	.route('/register')
	.post(validateData(userRegistrationSchema), registerUser);

export default router;