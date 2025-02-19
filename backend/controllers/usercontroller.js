import userModel from "../models/usermodel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import mongoose from "mongoose"
import express from 'express'

        
 
  const createToken =(id)=>{
     return  jwt.sign({id},process.env.JWT_SECRET_TOKEN)
  }
   
 const registerUser = async(req,res)=>{
   const {name,email,password} =req.body;
   try {
       const exists  =await userModel.findOne({email});
    if(exists){
      return res.json({sucess:false,message:'email is already exists'})
    }
     if(!validator.isEmail(email)){
      return res.json({success:false,message:'enter valid email'})
     }
     if(password.length<8){
        res.json({success:false,message:'enter strong password'})
     }
   
     const salt = await bcrypt.genSalt(10)
     const hasedPasswrod=await bcrypt.hash(password,salt)
   
     const newUser= new userModel({
       name:name,
       email:email,
       password:hasedPasswrod
     })
   
     const user=await newUser.save()
     const token = createToken(user._id)
     res.json({success:true,token,message:"register successfully"})
   
   }catch (error) {
      console.log(error);
       res.json({status:false,messgae:"error in usercontroller"})
   }
 }

 const loginUser = async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await userModel.findOne({ email });
      if (!user) {
         return res.json({ success: false, message: "User doesn't exist" }); // Add return here
      }

      const matching = await bcrypt.compare(password, user.password);
      if (!matching) {
         return res.json({ success: false, message: "Invalid credentials" }); // Add return here
      }

      const token = createToken(user._id);
      res.json({ success: true, token, message: "Login successfully" });

   } catch (error) {
      console.log("Error in login:", error);
      res.status(500).json({ success: false, message: "Error in login" });
   }
};


 export {loginUser,registerUser}