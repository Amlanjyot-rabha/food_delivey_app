import React from 'react'
import './Order.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { assest } from '../../assets/assest'
const Order = ({url}) => {
  const [orders,setOrders]=useState([])

  const fetchAllOrder= async()=>{
    const response= await axios.get(url+"/api/order/list")
    if(response.data.success){
      setOrders(response.data.data)
      // console.log(response.data.data)
       
    }
    else{
      console.log('error in orderJSx')
    }
  }

  const statusHandler= async (event,orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
       await fetchAllOrder()
    }
  } 

  useEffect(()=>{
    fetchAllOrder()
  },[])

  return (
    <div className='order add'>
      <h3>Order page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="order-item">
            <img src={assest.parcel} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item,index)=>{
                   if(index===order.items.length-1){
                    return item.name +" X "+item.quantity
                   }
                   else{
                    return item.name +" X "+item.quantity + " ,"
                   }
                })}
              </p>
              
              <p className='order-item-name'>{order.adress.firstname+" "+order.adress.lastname}</p>
              <div className="order-item-address">
                 <p>{order.adress.street}</p>    
                 <p>{order.adress.state+","+order.adress.country+","+order.adress.zipcode}</p>    
                </div>
               <p className='order-item-phone'>{order.adress.phone}</p>
            </div>
            <p>items:{order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="food processing">Food porcessing</option>
              <option value="out for delivery">Out for delivery</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
