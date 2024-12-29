import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { addToCart,removeFormCart,getCart } from '../controllers/cartcontroller.js'
 
const cartRouter = express.Router()

cartRouter.post('/add',authMiddleware,addToCart)
cartRouter.post('/remove',authMiddleware,removeFormCart)
cartRouter.post('/get',authMiddleware,getCart)

export default cartRouter