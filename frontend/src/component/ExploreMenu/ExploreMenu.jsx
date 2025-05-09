import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets.js'
const ExploreMenu = ({category,setcategory}) => {  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>explore menu</h1>
      <p className='explore-menu-text'>  autem obcaecati tempore deserunt delectus. Reiciendis commodi sit ducimus velit provident adipisci delectus, aut quo, hic, est laboriosam.</p>
      <div className='explore-menu-list'>
         {
            menu_list.map((item,index)=>{
                return(
                   <div onClick={()=>{setcategory(prev=>prev===item.menu_name?'All':item.menu_name)}} key={index} className='explore-menu-list-item'>   
                      <img className={category===item.menu_name?'active':""} src={item.menu_image} alt="" />
                      <p className='foodname'>{item.menu_name}</p>
                      
                   </div>
                )
            })
         }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
