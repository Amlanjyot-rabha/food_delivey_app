import React,{useContext} from 'react'
import './FoodDisplay.css'
import { storeContex } from '../../contex/storeContex'
import FoodItem from '../foodItem/fooditem.jsx'
// import axios from 'axios'


const FoodDisplay = ({category}) => {
    const {food_list}=useContext(storeContex)
    // console.log(food_list._id)
  return (
    <div className='food-display' id='food-display'>
    <h2>to dishes </h2>
      <div className="food-list-item">
        
         {
            food_list.map((item,index)=>{
              if(category==='All' || category===item.category)
                return <FoodItem  key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}/>
               
            })
         
           

         }
         
      </div>
    </div>
  )
  
}

export default FoodDisplay
