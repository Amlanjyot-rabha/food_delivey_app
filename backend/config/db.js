import mongoose from "mongoose"

export const connectDB= async()=>{
  await mongoose.connect('mongodb+srv://amlan:872494@cluster0.4gnxo.mongodb.net/food-delivery').then(()=>console.log('Database is connected'))
}
 