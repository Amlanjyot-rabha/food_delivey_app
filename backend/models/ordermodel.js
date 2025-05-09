import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
userId:{
    type:String,
    required:true
},
items:{
    type:Array,
    required:true
},
amount:{
    type:Number,
    reuired:true
},
adress:{
    type:Object,
    reuired:true
},
status:{
    type:String,
    default:"food processing"
},
date:{
    type:Date,
    default:Date.now()
},
payment:{
    type:Boolean,
    defalult:false
}

})
const  orderModel= mongoose.models.order || mongoose.model('order',orderSchema)
export default orderModel