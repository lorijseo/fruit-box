import User from "../models/userModel.js";

export const getUser = async(req,res) =>{
    const user = await User.findOne({ _id: req.user.userId });
    // console.log(user)
    // const userData = user.toJSON();
    res.status(200).json({user});
    // res.json({msg:"you found me"})

    try {
        const user = await User.findOne({ _id: req.user.userId });
        res.status(200).json({user});
        
    } catch (error) {
        res.status(200).json({msg:"user not logged in"})
    }
}