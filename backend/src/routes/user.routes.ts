import { Router } from "express";
import userController from "../controller/user.controller";
import { loginValidations, registerValidations } from "../validations";
const router = Router();
router.post('/user/register', registerValidations, userController.register)
router.post('/user/login', loginValidations, userController.login)
export default router;