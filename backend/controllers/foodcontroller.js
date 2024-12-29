import foodModel from "../models/foodmodel.js";
import fs from "fs"

const addfood=async(req,res)=>{
    const image_filename=`${req.file.filename}`
    const food= new foodModel({
        name:req.body.name,
        discription:req.body.discription,
        price:req.body.price,
        image:image_filename,
        category:req.body.category

    })
    try{
        await food.save()
        res.json({success:true,message:'food item has been saved'})
    }
    catch(error){
        res.json({message:'something is wrong with foodmodel'})
    }
}

const foodList= async (req,res)=>{
try {
     const foods=await foodModel.find({})
     res.json({success:true,data:foods})
} catch (error){
    console.log('error')
    res.json({success:false,message:"error foodlist"})
    
}  
}

const foodRemove= async(req,res)=>{
    try {
        const food=foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"image delete successfully"})
    } catch (error){
        console.log('error')
        res.json({success:false,message:'not deleted'})
    }
}

export {addfood,foodList,foodRemove}