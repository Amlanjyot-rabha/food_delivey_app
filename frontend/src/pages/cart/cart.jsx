import React, { useContext } from 'react'
import './cart.css'
import { storeContex } from '../../contex/storeContex'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const{  food_list,cartItem,RemoveCartItems,getTotalAmount,url}=useContext(storeContex)
  const navigate=useNavigate()
  return (
    <div className='cart'>
       <div className="cart-item">
          <div className="cart-item-title">
            <p>item</p>
            <p>title</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {
            food_list.map((item,index)=>{
              if(cartItem[item._id]>0){
                return(
                  <> <div className="cart-item-title cart-items-item">
                  <img src={url+"/image/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price*cartItem[item._id]}</p>
                  <p onClick={()=>RemoveCartItems(item._id)} className='cross'>X</p>
                </div>
                <hr /></>
                
                )
              }
            })
            
          }
       </div>
       <div className="cart-bottom">
          <div className="cart-total">
            <h2>cart total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>${getTotalAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${getTotalAmount()===0?0:getTotalAmount()+2}</p>
              </div>
            </div>
            <button onClick={()=>navigate('/place-order')}>proceed checkout</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promocode please enter here</p>
              <div className="cart-promocode-input">
                 <input type="text" placeholder='promocode'/>
                 <button>Submit</button>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Cart
