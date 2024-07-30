import { Router } from "express";
const router = Router();

// import controller
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller";
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
router.route('/refresh-token').post(refreshAccessToken);

export default router;