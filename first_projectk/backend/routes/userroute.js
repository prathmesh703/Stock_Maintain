const express = require("express");
const zod = require('zod');
const {User} = require("../modes/userschema");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/jwt.js");
const { isauthentication } = require("../authentication/auth.js");

const signupschema = zod.object({
    name: zod.string(),
    username: zod.string(),
    email: zod.string(),
    password: zod.string()
});
const loginschema = zod.object({
   
    username: zod.string(),
    
    password: zod.string()
});

router.post("/signup", async function(req, res) {
    const { success, error } = signupschema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            msg: "Wrong inputs",
            error: error.errors
        });
    }

    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).json({
                msg: "Email or username already exists"
            });
        }

        const hashPassword = await bcrypt.hash(req.body.password, 16);
        const dbuser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
        });
        
        const token = jwt.sign({ userId: dbuser._id }, JWT_SECRET);
        res.status(201).cookie("token",token,{expiresIn:"1d",httpOnly:true}).json({
            msg: "User account created",
            success:true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            msg: "Internal server error",
            error: err.message
        });
    }
});

router.post("/login",async function (req,res){
    const {success}=  loginschema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            msg:"wrong inputs"
        })
    }
    try{
        
        const user=await User.findOne({
            username:req.body.username,
            
        })
        const passwordcheck=await bcrypt.compare(req.body.password,user.password)
        
        if(!user){
            return res.status(411).json({
                msg:"wrong credentials"
            })
        }
        if(!passwordcheck){
            return res.status(411).json({
                msg:"incorrect password"
            })
        }
         const  token=await jwt.sign({
            userId:User._id
        },JWT_SECRET);
        console.log(token)
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            maxAge:1*24*60*60*1000
        });
        
        return res.status(200).json({
            msg:"logged in ",
            user,
            success:true
            
        })
        
    }
    catch(error){
        console.log(error)
    }
})

router.get("/logout",function(req,res){
   return res.cookie("token","",{expiresIn:new Date(Date.now())}).json({
        msg:"user logged out successfully"
   })
})




module.exports = { userRoute: router };
