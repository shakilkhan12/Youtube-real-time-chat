import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import UserModel from "../models/user.model";

type BodyTypes = {
  name: string;
  email: string;
  password: string
}
type LoginBodyTypes = {
  email: string;
  password: string
}
class User {
  async register(req: Request, res: Response) {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      const { name, email, password }: BodyTypes = req.body;
      try {
        const checkUser = await UserModel.findOne({ email })
        if (!checkUser) {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          const createdUser = await UserModel.create({
            name,
            email,
            password: hashedPassword
          })
          createdUser.password = ""
          return res.status(201).json({ msg: 'Your account has been created successfully', user: createdUser })
        } else {
          return res.status(400).json({ error: 'Email is already taken' })
        }
      } catch (error) {
        return res.status(500).json({ error: 'Server internal error' })
      }
    } else {
      return res.status(400).json(errors.array())
    }

  }
  // login
  async login(req: Request, res: Response) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      try {
        const { email, password }: LoginBodyTypes = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
          const matched = await bcrypt.compare(password, user.password)
          if (matched) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string)
            res.cookie('chatUser', token, {
              maxAge: 1000 * 60 * 60 * 24 * 7,
              domain: process.env.domain,
              httpOnly: true
            })
            return res.status(200).json({ message: 'You are logged in successfully' })
          } else {
            return res.status(400).json({ error: 'Password not matched' })
          }
        } else {
          return res.status(404).json({ error: 'User not found' })
        }
      } catch (error) {
        return res.status(500).json({ error: 'Server internal error' })
      }
    } else {
      return res.status(400).json({ errors: errors.array() })
    }
  }
}
export default new User()