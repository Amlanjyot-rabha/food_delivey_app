import jwt from 'jsonwebtoken'

const authMiddleware=async(req,res,next)=>{
    const {token}=req.headers
    if(!token){
        res.json({success:false,messgae:'Not authorized'})
    }
    
    try {
        const token_decoded=jwt.verify(token,process.env.JWT_SECRET_TOKEN)
        req.body.userId=token_decoded.id;
        next() 
    } catch (error){ 
        console.log(error)
        res.json({success:false,message:"authentication fail"})
    }
}

export default authMiddleware