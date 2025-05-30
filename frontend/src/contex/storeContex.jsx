import { createContext,  useEffect,  useState } from "react";
import axios from "axios";
import { food_list } from "../assets/assets";


export const storeContex=createContext(null)

 

const StoreContexProvider=(props)=>{
    const[cartItem,setCartItem]=useState({})
    const [token,setToken]=useState("")
     const url="https://food-delivey-app-3.onrender.com"
    const [food_list,setFood_list]=useState([])

    const addTocart= async (itemId)=>{
          if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
          }
          else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
          }
          if(token){
             await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
          }
    }

    const RemoveCartItems=async (itemId)=>{
       setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
       if(token){
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
     }
    }

    const getTotalAmount=()=>{
      let totalAmount=0;
      for(const item in cartItem){
        if(cartItem[item]>0){
           const itemInfo=food_list.find((product)=>product._id===item)
           totalAmount+=itemInfo.price*cartItem[item]
        }
      }
      return totalAmount

    }

      const fetchFoodItem =async()=>{
      const response = await axios.get(url+'/api/food/list')
      setFood_list(response.data.data)
    }

    const loadCartData=async(token)=>{
        const response= await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItem(response.data.cartData)
      }

    useEffect(()=>{
     
      async function loadData(){
         await fetchFoodItem()
        //  console.log(food_list)
         if(localStorage.getItem('token')){
          setToken(localStorage.getItem('token'))
          await loadCartData(localStorage.getItem('token'))
        }
       


      }
        loadData()
       
 },[])
 
   
  //  http://localhost:4000/api/user/register
    const contextValue={
      getTotalAmount,
      food_list,
      cartItem,
      addTocart,
      setCartItem,
      RemoveCartItems,
      url,
      token,
      setToken
    }
    return (
        <storeContex.Provider value={contextValue}>
            {props.children}
        </storeContex.Provider>
    )
}

export default StoreContexProvider

