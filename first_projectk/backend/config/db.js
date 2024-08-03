const mongoose=require("mongoose")
const database=()=>{
    mongoose.connect("mongodb+srv://coplay:941651619262@cluster0.oferh3v.mongodb.net/stockmaintainer").then(()=>{
        console.log("database connected")
    })

    
}

module.exports={
    database
}