const express=require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const authRouter=express.Router();
const jwt=require("jsonwebtoken");
const auth = require("../middlewares/auth");

// SIGN UP
authRouter.post("/api/signup",async(req,res)=>{
    try 
    {
        const {auth_name_signup , auth_email_signup , auth_password_signup} = req.body;
        const existingUser = await User.findOne({email:auth_email_signup});
        if(existingUser)
        {
            return res.status(400).json({msg:"User with same Email already exists!"});
        }
        
        const hashedPassword =await bcryptjs.hash(auth_password_signup,8);
        let user = new User({
            email:auth_email_signup,
            password: hashedPassword,
            name:auth_name_signup,
        })
        user = await user.save();
        res.json(user);
    } 
    catch (e) 
    {
        res.status(500).json({error: e.message});
    }
});

// SIGN IN
authRouter.post("/api/signin", async(req,res) => {
    try
    {
        const {auth_email_signin,auth_password_signin} = req.body;
        const user = await User.findOne({email:auth_email_signin});
        if(!user)
        {
            return res.status(400).json({msg:"User with this email does not exist!"});
        }
        const isMatch = await bcryptjs.compare(auth_password_signin,user.password);
        if(!isMatch)
        {
            return res.status(400).json({msg:"Incorrect password!"});
        }
        const token = jwt.sign({id:user._id},"passwordKey");
        res.json({token, ...user._doc});
    }
    catch(e)
    {
        res.status(500).json({error: e.message});
    }
});

authRouter.post("/tokenIsValid", async(req,res) => {
    try
    {
        const token = req.header('x-auth-token');
        if(!token) return res.json(false);
        const verified = jwt.verify(token,"passwordKey");
        if(!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if(!user) return res.json(false);
        res.json(true);
    }
    catch(e)
    {
        res.status(500).json({error: e.message});
    }
});

module.exports = authRouter;