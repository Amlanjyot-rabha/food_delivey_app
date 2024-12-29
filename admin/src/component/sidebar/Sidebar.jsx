import React from 'react'
import {assest} from '../../assets/assest.js'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebar-options">
         <NavLink to='/add' className="sidebar-option">
            <img src={assest.addicon} alt="" className='icons'/>
            <p>add icon</p>
         </NavLink>
         <NavLink to='/list' className="sidebar-option">
            <img src={assest.parcel} alt="" className='icons'/>
            <p>list item</p>
         </NavLink>
         <NavLink to='/order'className="sidebar-option">
            <img src={assest.parcel} alt=""className='icons' />
            <p>order</p>
         </NavLink>
       </div>
    </div>
  )
}

export default Sidebar
