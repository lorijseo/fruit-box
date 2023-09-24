import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import { createJWT } from "../token.js";

export const userRegister = async(req,res)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({msg: "user successfully registered"})
    } catch (error) {
        res.status(500).json({msg: "Couldn't create user"})
    }
}

export const userLogin = async(req,res)=>{
    const user = await User.findOne({username:req.body.username});
    if(user === null){
        res.send("user doesn't exist")
    }
    else{
        const verifyPassword = bcrypt.compare(req.body.password, user.password);
        if (!verifyPassword){
            return res.status(500).json({msg: "Password incorrect"})
        }

        const token = createJWT({userId:user._id, userRole: user.role});
        res.cookie('token', token, {
            httpOnly:true,
            expires: new Date(Date.now()+(1000*60*60*24)),
            secure: process.env.NODE_ENV === 'production' 
        })
        res.status(200).json({msg: 'user logged in successfully'})
    }

}

export const userLogout = async(req,res) =>{
    res.cookie('token', 'logout', {
        httpOnly:true,
        expires: new Date(Date.now())
    });
    res.status(200).json({msg:'user logged out'})
}