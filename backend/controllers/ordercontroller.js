import userModel from "../models/usermodel.js";
import orderModel from "../models/ordermodel.js";
import Stripe from "stripe"
import express from "express"

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

 

  const placeOrder=async (req,res)=>{
  const frontend_url="http://localhost:5173"
  try {
    const newOrder= new orderModel({
        userId:req.body.userId,
        items:req.body.items,
        amount:req.body.amount,
        adress:req.body.adress
    })
    await newOrder.save()
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
    const line_items=req.body.items.map((item)=>({
        price_data:{
            currency:"inr",
            product_data:{
              name:item.name
            },
            unit_amount:item.price*100*80
        },
        quantity:item.quantity
    }))
  
    line_items.push({
      price_data:{ 
            currency:'inr',
            product_data:{
                name:"delivey charges"
            },
            unit_amount:2*200*80
        },
         
        quantity: 1 
    })
     
    const session = await stripe.checkout.sessions.create({
      line_items:line_items,
      mode:'payment',
      success_url:`${frontend_url}/verify?sucess=true&orderId=${newOrder._id}`,
      cancel_url:`${frontend_url}/verify?sucess=false&orderId=${newOrder._id}`
    })
    
   res.json({success:true,session_url:session.url})
  
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"error in ordercontroller"})
    
  }
}

const verifyOrder=async(req,res)=>{
   let {orderId,success}=req.body
 try{
   if(success==="true"){
        await orderModel.findByIdAndUpdate(orderId,{payment:true})
        res.json({success:true,message:"paid"})
        console.log('working')
   }

   else{
    await userModel.findByIdAndDelete(orderId)
    res.json({success:false,message:"not paid"})
    console.log(' not working')
    
   }
 }catch(error){
     console.log("error in orderControl ")
     res.json({success:false,message:'error in orderController'})
 }
}

const userOrder=async(req,res)=>{
 try{
   const orders= await orderModel.find({userId:req.body.userId})
   res.json({success:true,data:orders})
 }catch{
  console.log('error in userOrder')
  res.json({success:false,massage:"error in userorder"})
 }
}
// listing orders for admin panel
const listOrder=async(req,res)=>{
  try{
   const orders = await orderModel.find({})
   res.json({success:true,data:orders})
  }catch(error){
   console.log('error in listorder')
   res.json({success:false,message:'error in listOrder'})
  }
}
// to update order status

const updateStatus= async (req,res)=>{
  try{
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})   
     

  
    res.json({success:true,message:"status updated"})
  }catch(error){
     
    res.json({success:false,message:"unable to update"})
  }
}


export {placeOrder,verifyOrder,userOrder,listOrder,updateStatus}
