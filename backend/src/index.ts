import express from "express";
import 'dotenv/config'
import cookieParser from "cookie-parser"
import cors from "cors"
import connection from "./config/db";
import userRoutes from "./routes/user.routes"
const app = express();
const PORT = process.env.PORT || 5000;
// connect database
connection()
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/api', userRoutes);
app.listen(PORT, () => {
    console.log(`You server is running on port number: ${PORT}`)
})  