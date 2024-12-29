import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { storeContex } from '../../contex/storeContex'
import axios from "axios"
// const newUrl=url
const Login = ({setShowLogin}) => {
   const {url,setToken} = useContext(storeContex)
    const [currState,setCurrState] =useState('login')
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })

    const onchangeHandeler=(event)=>{
     const name=event.target.name
     const value=event.target.value;
     setData({...data,[name]:value})
    }
 
    
    
    const onLogin= async()=>{
      event.preventDefault()
      let newUrl=url
      if(currState=="login"){
        newUrl +="/api/user/login"
      }
      else{
        newUrl +="/api/user/register"
      } 
        const response=await axios.post(newUrl,data)
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
          console.log(response.data.token);
          
          setShowLogin(false) 
        }
        else{
          alert(response.data.message)
          setShowLogin(false)
         
        }
    }
     

  return (
    <div className='login-popup'>
         <form onSubmit={onLogin} className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==='login'?<></>:<input type="text" onChange={onchangeHandeler} name="name" placeholder='Your name' value={data.name} required/>}
                <input type="email" name="email"   onChange={onchangeHandeler} value={data.email} placeholder='email' required />
                <input type="password" name='password' onChange={onchangeHandeler} value={data.password}  placeholder='password' required />
                <button type='submit' >{currState==='sign-in'?"create-account":'login'}</button>
            </div>
            
            <div className="login-popup-condition"> 
                <input type="checkbox" required />
                  <p>by continuing,i agree to the terms and condition</p>
            </div>
            {currState==='login'? <p>Create a new account? <span onClick={()=>{setCurrState('sign-in');}}>Click here</span> </p>:<p>Already have a account?<span onClick={()=>{setCurrState('login');}}>Login-here</span></p>} 
         </form>
    </div>
  )
}

export default Login
