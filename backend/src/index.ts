import express, {Request, Response} from "express";
import 'dotenv/config'
import connection from "./config/db";
const app = express();
const PORT = process.env.PORT || 5000;
// connect database
connection()
app.get('/', (req: Request, res: Response) => {
   return res.status(200).json({msg: 'Hello home route changed second change 3rd change'})
})
app.listen(PORT, () => {
    console.log(`You server is running on port number: ${PORT}`)
})