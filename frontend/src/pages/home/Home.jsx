import React, { useState } from 'react'
import './home.css'
import Header from '../../component/Header/Header.jsx'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../component/foodDisplay/foodDisplay.jsx'
import Appdownload from '../../component/appdownload/Appdownloa.jsx'

const Home = () => {
  const[category,setcategory]=useState('All')
  return (
    
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/> 
      <Appdownload/>
    </div>
  )
}

export default Home
