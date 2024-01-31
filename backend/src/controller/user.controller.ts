import { Request, Response } from "express";
import { validationResult } from "express-validator";

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
    return res.status(200).json(req.body)
    } else {
      return res.status(400).json(errors.array())
    }
    
  }
}
export default new User()