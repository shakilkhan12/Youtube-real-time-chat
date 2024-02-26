import { body } from "express-validator";

export const registerValidations = [
    body('name').notEmpty().escape().trim().withMessage('name is required'),
    body('email').isEmail().escape().trim().withMessage('email is required'),
    body('password').isLength({min: 6}).withMessage('password should be 6 characters long')
]
export const loginValidations = [
    body('email').isEmail().escape().trim().withMessage('email is required'),
    body('password').notEmpty().withMessage('Password is required')
]