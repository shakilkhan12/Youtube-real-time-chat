import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt"
import UserModel from "../models/user.model";

type BodyTypes = {
  name: string;
  email: string;
  password: string
}
class User {
  async register(req: Request, res: Response) {
    const errors = validationResult(req)
    if(errors.isEmpty()) {
    const {name, email, password}: BodyTypes = req.body;
      try {
        const checkUser = await UserModel.findOne({email})
        if(!checkUser) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const createdUser = await UserModel.create({
              name,
              email,
              password: hashedPassword
            })
            createdUser.password = ""
            return res.status(201).json({msg: 'Your account has been created successfully', user: createdUser})
        } else {
          return res.status(400).json({error: 'Email is already taken'})
        }
      } catch (error) {
        return res.status(500).json({error: 'Server internal error'})
      }
    } else {
      return res.status(400).json(errors.array())
    }
    
  }
}
export default new User()