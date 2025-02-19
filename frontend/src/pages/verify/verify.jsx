import react,{useContext, useEffect,} from 'react'
import axios from 'axios'
import './verify.css'
import { storeContex } from '../../contex/storeContex.jsx'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Verify=()=>{
    const [searchParams,serSearchParams]=useSearchParams()
    const success=searchParams.get("sucess")
    const orderId=searchParams.get("orderId")
    const {url}=useContext(storeContex)
   
    const navigate=useNavigate()
    const paymentVerify=async()=>{
          const response=await axios.post(url+"/api/order/verify",{success,orderId})
          console.log(response)
          if(response.data.success){
          navigate("/myorders")
          }
          else{
            navigate("/")
             
          }
    }
 
    useEffect(()=>{
      paymentVerify()
    },[])

    return(
     <div className='verify'>
       <div className='spineer'></div>
     </div>
    )
}

export default Verify


// // AIzaSyB8x08ctEYDv9kjZuvSRQfnl6Cd8Cvr08Y