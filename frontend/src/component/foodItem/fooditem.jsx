import React, { useContext } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import { storeContex } from '../../contex/storeContex'
 

const  FoodItem = ({id,name,price,description,image}) => {
    const {addTocart,cartItem, RemoveCartItems,url}=useContext(storeContex)
    let newUrl=url+"/image/"
    // console.log(cartItem.id)
  return (
    
    
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-iamge' src={newUrl+image} alt="" />
        {
            !cartItem[id]? 
            <img className='add' onClick={()=>addTocart(id)} src={assets.add_icon_white} alt="" />:
            <div className="food-item-counter">
              <img onClick={()=>RemoveCartItems(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItem[id]}</p>
              <img onClick={()=>addTocart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price}</p>
      </div>
    </div>
  )
}

export default  FoodItem
