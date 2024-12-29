import React, { useContext } from 'react'
import './placeOrder.css'
import { storeContex } from '../../contex/storeContex'

const PlaceOrder = () => {
  const {getTotalAmount}=useContext(storeContex)
  return (
     <form className='place-order'>
            <div className="place-order-left">
              <p className='title'>Delivery information</p>
              <div className="multi-fields">
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name'/>
              </div>
              <input type="email" placeholder='email'/>
              <input type="text" placeholder='street' />
              <div className="multi-fields">
                <input type="text" placeholder='city'/>
                <input type="text" placeholder='state'/>
              </div>
              <div className="multi-fields">
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name'/>
              </div>
              <input type="number" placeholder='phone'/>
            </div>
             <div className="place-order-right">
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
            </div>
     </form>
  )
}

export default PlaceOrder
