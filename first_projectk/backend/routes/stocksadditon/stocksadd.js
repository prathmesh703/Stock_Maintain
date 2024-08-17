const express=require("express");
const { isauthentication } = require("../../authentication/auth");
const router=express.Router();
const zod = require('zod');
const { item, cat } = require("../../modes/userschema");



const stockSchema=zod.object({
    name:zod.string(),
    category:zod.string(),
    cost:zod.number(),
    quantity:zod.number()
})
router.post("/",isauthentication,async (req,res)=>{
    const {success}=stockSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg:"fill all the fields"
        })
    }
    const stock=req.body;
    
    await   item.create({
        category:req.body.category,
        name:req.body.name,
        quantity:req.body.quantity,
        cost:req.body.cost
    })

    return res.status(200).json({
        msg:"stock added succesfully",
        stock
    })
})

router.post("/addcat",isauthentication,async(req,res)=>{
    const category=req.body.category;
    await cat.create({
        category:category
    })
    return res.status(200).json({
        msg:"category added"
    })
})

router.get("/",isauthentication,async (req,res)=>{
    const stocks=await item.find({})
    if(!stocks){
        return res.status(200).json({
            msg:"no stock"
        })
    }
    return res.status(200).json({
        stocks
    })
})


module.exports={stocksRouter:router}