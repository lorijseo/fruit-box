import mongoose from 'mongoose';


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
        default: 'User'
    }
    
},
{timestamps:true}
);

export default mongoose.model('User', userSchema);