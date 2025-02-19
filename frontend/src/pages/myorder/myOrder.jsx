 import React, { useContext, useEffect, useState } from 'react'
 import { storeContex } from '../../contex/storeContex'
 import axios from "axios"
import { assets } from '../../assets/assets'
import './myOrder.css'
 const MyOrders = () => {
    const {url,token}=useContext(storeContex)
    const [data,setdata]=useState([])

    const fetchApi=async()=>{
        const response=await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setdata(response.data.data)
        console.log(response.data.data);
        
    }

    useEffect(()=>{
        if(token){
            fetchApi()
        }
    },[token])
   return (
     <div className='my-order'>
       <h2>My orders</h2>
       <div className="container">
          {data.map((order,index)=>{
            return(
                <div key={index} className="my-orders-order">
                    <img src={assets.parcel_icon} alt="" />
                    <p>{order.items.map((item,index)=>{
                            if(index===order.items.length-1){
                                return item.name+ "X" +item.quantity
                            }       
                            else{
                                  return item.name+ "X" +item.quantity+"," 
                            }               
                    })}</p>
                    <p>{`$${order.amount}.00`}</p>
                    <p>{`item:${order.items.length}`}</p>
                    <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                    <button onChange={fetchApi()}>track order</button>
                </div>
                 
            )
          })}
       </div>
     </div>
   )
 }
 
 export default MyOrders
 