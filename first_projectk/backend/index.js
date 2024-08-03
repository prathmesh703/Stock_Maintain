const express=require("express");
const  {database} = require("./config/db.js")
const cookieParser=require("cookie-parser")
const cors = require("cors")
const {userRoute} = require("./routes/userroute.js")

const app=express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
database();


app.use(cors({
    
    origin:"http://localhost:3000",
    credentials:true,

}))
app.use("/api/v1/user",userRoute)
app.listen(3002,()=>{
    console.log("server is on ")
});