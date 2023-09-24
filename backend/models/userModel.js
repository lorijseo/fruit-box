import mongoose from 'mongoose';
import { USER_ROLE } from '../gobal.js';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    location: {
        type: String,
        default: "Los Angeles"
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        // enum: Object.values(USER_ROLE),
        default: 'User'
    }
    
},
{timestamps:true}
);

export default mongoose.model('User', userSchema);