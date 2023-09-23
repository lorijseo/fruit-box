import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: Number,
    email: String,
    location: {
        type: String,
        default: "Los Angeles"
    },
    role: {
        type: String,
        default: 'User'
    }
    
},
{timestamps:true}
);

export default mongoose.model('User', userSchema);