const jwt =require("jsonwebtoken");
const { User } = require("../modes/userschema");
const JWT_SCERET = require("../config/jwt");
const isauthentication = async (req,res,next)=>{
    try{
        console.log("authern")
        const token=req.cookies.token;
        console.log("token:",token)
        
        if(!token){
            return res.status(401).json({
                msg:"user not authenticated"
            })
        }
        const decode=  jwt.verify(token,JWT_SCERET)
        console.log(decode)
        if(decode){
            req.userId=decode.Id;
            
        }
        next();
    }
    catch(error){
        console.log(error);
    }
}

module.exports={
    isauthentication
}