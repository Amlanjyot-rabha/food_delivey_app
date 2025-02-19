import React ,{useContext, useState,useEffect, Profiler} from 'react'
import './navbar.css'
import {assets} from '../../assets/assets.js'
import {Link, useNavigate} from 'react-router-dom'
import { storeContex } from '../../contex/storeContex.jsx'
 
const Navbar = ({setShowLogin}) => {
    const {getTotalAmount,token,setToken}=useContext(storeContex)
    const[menu,setMenu]=useState('menu')
    const navigate=useNavigate()
    const Logout=()=>{
      localStorage.removeItem('token')
      navigate("/")
    }
  return (
    <div className='navbar'>
    <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link> 
     <ul className='nav-menu'>
        <Link to={'/'} onClick={()=>setMenu('home')}  className={menu==='home'?'active':''}>home</Link>
        <a href='#app-download' onClick={()=>setMenu('mobile-app')}  className={menu==='mobile-app'?'active':''}>mobile-app</a>
        <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
        <a href='#Footer' onClick={()=>setMenu('contact')} className={menu==='contact'?'active':''}>contact us</a>
     </ul>
     <div className="right-nav">
        <img src={assets.search_icon} alt="" />
        <div className="nav-search">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalAmount()===0?'':'dot'}></div>
        </div>
         {!token?
        <button onClick={()=>setShowLogin(true)} >sign-in</button>:
        <div className='navbar-profile'>
           <img src={assets.profile_icon} alt="" />
           <ul className='nav-profile-dropdown'>
            <li  ><img src={assets.bag_icon} alt="" onClick={()=>navigate('/myorders')}/><p>Orders</p></li>
            <hr/>
            <li onClick={Logout}><img src={assets.logout_icon} alt="" />Logout</li>
           </ul>
        </div>
} 
        
         
     </div>
    </div>
  )
}

export default Navbar
