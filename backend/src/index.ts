import express, {Request, Response} from "express";
import 'dotenv/config'
import connection from "./config/db";
import userRoutes from "./routes/user.routes"
const app = express();
const PORT = process.env.PORT || 5000;
// connect database
connection()
app.use(express.json())
// routes
app.use('/api', userRoutes);
app.listen(PORT, () => {
    console.log(`You server is running on port number: ${PORT}`)
})  