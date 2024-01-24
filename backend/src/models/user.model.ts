import {Schema, Document, model} from "mongoose";
interface UserTypes extends Document {
    name: string 
    email: string 
    password: string 
    image: string
}
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String,
        required: false
    }
}, {timestamps: true})
const UserModel = model<UserTypes>('user', userSchema)
export default UserModel;