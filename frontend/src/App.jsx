 import React, { useState } from 'react'
 import Navbar from './component/navbar/navbar.jsx'
 import { Routes,Route} from 'react-router-dom'
 import Home from './pages/home/Home.jsx'
import Cart from './pages/cart/cart.jsx'
import PlaceOrder from './pages/placeOrder/placeOrder.jsx'
import Footer from '../src/component/footer/Footer.jsx'
import Login from './component/login/Login.jsx'

 
 const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return(
  <>
      {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
       <div className='app'>
        
     <Navbar setShowLogin={setShowLogin}/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
      </Routes>
     
   </div> 
   <Footer/>
  </>
  )
                      
 }
 
 export default App
 