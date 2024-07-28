import { Router } from "express";
const router = Router();

// import controller
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller";
import { validateData } from "../middlewares/validationMiddleware";
import { userLoginSchema, userRegistrationSchema } from "../schema/user.schema";
import { verifyJWT } from "../middlewares/auth.middleware";

// controllers
router
	.route('/signup')
	.post(validateData(userRegistrationSchema), registerUser);
router
.route('/login')
.post(validateData(userLoginSchema),loginUser)

router.route("/logout").post( verifyJWT,logoutUser);
export default router;