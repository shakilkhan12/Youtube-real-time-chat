"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const validations_1 = require("../validations");
const router = (0, express_1.Router)();
router.post('/user/register', validations_1.registerValidations, user_controller_1.default.register);
router.post('/user/login', validations_1.loginValidations, user_controller_1.default.login);
exports.default = router;
