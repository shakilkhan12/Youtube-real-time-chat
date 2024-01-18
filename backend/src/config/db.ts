import mongoose from "mongoose";
const connection = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URL as string); 
       console.log('Database connected!')
    } catch (error) {
        console.log('Connection error -> ', error)
    }
}
export default connection;