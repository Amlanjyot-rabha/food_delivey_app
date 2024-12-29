import express from "express"
import cors from "cors"
import {connectDB }from "./config/db.js"
import foodRouter from "./routes/foodrouter.js"
import userRouter from "./routes/userrouter.js"
import "dotenv/config"
import cartRouter from "./routes/cartrouter.js"

 
const app =express()
const port=4000

app.use(express.json())
app.use(cors())
 

connectDB()
app.get('/',(req,res)=>{
    res.send('app is working')
})


app.use('/api/user',userRouter)
app.use('/api/food',foodRouter)
app.use('/image',express.static('uploads'))
app.use('/api/cart',cartRouter)


app.listen(port,()=>{
   console.log(`app is running on ${port}`)
})

// mongodb+srv://<db_username>:<db_password>@cluster0.4gnxo.mongodb.net/?