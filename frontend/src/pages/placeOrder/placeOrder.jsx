import React, { useContext,useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './placeOrder.css'
import axios from 'axios'
import { storeContex } from '../../contex/storeContex.jsx'

const PlaceOrder = () => {
 
  const {getTotalAmount,token,food_list,cartItem,url}=useContext(storeContex)

  const [data,setData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
    

  

   const onChangedHandeler=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
       setData(data=>({...data,[name]:value}))
   }
  

   const placeorder=async(event)=>{
    event.preventDefault()
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItem[item._id]>0){
        let itemInfo=item;
        itemInfo['quantity']=cartItem[item._id]
        orderItems.push(itemInfo)
      }
    })
    
    let orderData={
      adress:data,
      items:orderItems,
      amount:getTotalAmount()+2
    }
    let response =await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
      const{session_url}=response.data;
      window.location.replace(session_url)
    }
    else{
      console.log(token,orderData);
      console.log('error in placeorder')
      
    }
   }
   let navigate=useNavigate()
   useEffect(()=>{
     if(!token){
      navigate("/cart")
     }
     else if(getTotalAmount()===0){
      navigate("/cart")
     }
   },[token])

  return (
     <form onSubmit={placeorder} className='place-order'>
            <div className="place-order-left">
              <p className='title'>Delivery information</p>
              <div className="multi-fields">
                <input required type="text" name="firstname" value={data.firstname} onChange={onChangedHandeler}  placeholder='First name'/>
                <input required type="text" name="lastname" onChange={onChangedHandeler}  value={data.lastname} placeholder='Last name'/>
              </div>
              <input required type="email" name="email" onChange={onChangedHandeler} value={data.email} placeholder='email'/>
              <input required type="text" name="street" onChange={onChangedHandeler} value={data.street} placeholder='street' />
              <div className="multi-fields">
                <input required type="text" name="city" onChange={onChangedHandeler} value={data.city} placeholder='city'/>
                <input required type="text" placeholder='state'/>
              </div>
              <div className="multi-fields">
                <input required type="text" name="zipcode" onChange={onChangedHandeler} value={data.zipcode} placeholder='zipcode'/>
                <input required type="text" name="country" onChange={onChangedHandeler} value={data.country} placeholder='cuntry'/>
              </div>
              <input required type="number" name="number" onChange={onChangedHandeler} value={data.number} placeholder='phone'/>
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
            <button type='submit'>proceed checkout</button>
          </div>
            </div>
     </form>
  )
}

export default PlaceOrder
// type='submit' onClick={()=>navigate('/place-order')}

 