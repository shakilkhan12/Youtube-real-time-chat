"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
class User {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (errors.isEmpty()) {
                const { name, email, password } = req.body;
                try {
                    const checkUser = yield user_model_1.default.findOne({ email });
                    if (!checkUser) {
                        const salt = yield bcrypt_1.default.genSalt(10);
                        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
                        const createdUser = yield user_model_1.default.create({
                            name,
                            email,
                            password: hashedPassword
                        });
                        createdUser.password = "";
                        return res.status(201).json({ msg: 'Your account has been created successfully', user: createdUser });
                    }
                    else {
                        return res.status(400).json({ error: 'Email is already taken' });
                    }
                }
                catch (error) {
                    return res.status(500).json({ error: 'Server internal error' });
                }
            }
            else {
                return res.status(400).json(errors.array());
            }
        });
    }
    // login
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (errors.isEmpty()) {
                try {
                    const { email, password } = req.body;
                    const user = yield user_model_1.default.findOne({ email });
                    if (user) {
                        const matched = yield bcrypt_1.default.compare(password, user.password);
                        if (matched) {
                            const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET);
                            res.cookie('chatUser', token, {
                                maxAge: 1000 * 60 * 60 * 24 * 7,
                                domain: process.env.domain,
                                httpOnly: true
                            });
                            return res.status(200).json({ message: 'You are logged in successfully' });
                        }
                        else {
                            return res.status(400).json({ error: 'Password not matched' });
                        }
                    }
                    else {
                        return res.status(404).json({ error: 'User not found' });
                    }
                }
                catch (error) {
                    return res.status(500).json({ error: 'Server internal error' });
                }
            }
            else {
                return res.status(400).json({ errors: errors.array() });
            }
        });
    }
}
exports.default = new User();
