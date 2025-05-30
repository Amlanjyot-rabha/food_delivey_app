import userModel from "../models/usermodel.js";

const addToCart =async (req,res)=>{
      try {
        let userData=await userModel.findOne({_id:req.body.userId})
        let cartData= await  userData.cartData
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1
        }
        else{
          cartData[req.body.itemId]+=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:'added to cart '})
      } catch (error) {
        console.log(error)
        res.json({success:false,message:'error in cartcontroller'})
      }
      
}

const removeFormCart=async (req,res)=>{
  try {
    let userData=await userModel.findById(req.body.userId)
    let cartData= await  userData.cartData
    if(cartData[req.body.itemId]>0){
       cartData[req.body.itemId]-=1
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true,message:"removed from cart"})

  } catch (error) {
    console.log(error)
    res.json({success:false,message:"not removed from cart"})
  }

}

const getCart = async (req,res)=>{
  try {
    let userData=await userModel.findById(req.body.userId)
    let cartData= await  userData.cartData
    res.json({success:"this is true",cartData})
  } catch (error){
    console.log(error)
    res.json({success:false,message:'error in getCart'})
  }
}

export {addToCart,removeFormCart,getCart}