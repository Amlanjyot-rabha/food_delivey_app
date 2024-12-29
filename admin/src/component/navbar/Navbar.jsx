import React from 'react'
import {assest} from "../../assets/assest.js"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assest.logo} alt="" className='logo' />
       <img src={assest.profile} alt="" className='profile' />
    </div>
  )
}

export default Navbar
