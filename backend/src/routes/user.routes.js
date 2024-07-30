"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// import controller
const user_controller_1 = require("../controllers/user.controller");
const validationMiddleware_1 = require("../middlewares/validationMiddleware");
const user_schema_1 = require("../schema/user.schema");
const auth_middleware_1 = require("../middlewares/auth.middleware");
// controllers
router
    .route('/signup')
    .post((0, validationMiddleware_1.validateData)(user_schema_1.userRegistrationSchema), user_controller_1.registerUser);
router
    .route('/login')
    .post((0, validationMiddleware_1.validateData)(user_schema_1.userLoginSchema), user_controller_1.loginUser);
router.route("/logout").post(auth_middleware_1.verifyJWT, user_controller_1.logoutUser);
router.route('/refresh-token').post(user_controller_1.refreshAccessToken);
exports.default = router;
