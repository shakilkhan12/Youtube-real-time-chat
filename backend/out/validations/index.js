"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidations = exports.registerValidations = void 0;
const express_validator_1 = require("express-validator");
exports.registerValidations = [
    (0, express_validator_1.body)('name').notEmpty().escape().trim().withMessage('name is required'),
    (0, express_validator_1.body)('email').isEmail().escape().trim().withMessage('email is required'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('password should be 6 characters long')
];
exports.loginValidations = [
    (0, express_validator_1.body)('email').isEmail().escape().trim().withMessage('email is required'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required')
];
