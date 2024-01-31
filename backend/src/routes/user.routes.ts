import { Router } from "express";
import userController from "../controller/user.controller";
import { registerValidations } from "../validations";
const router = Router();
router.post('/user/register', registerValidations, userController.register)
export default router;