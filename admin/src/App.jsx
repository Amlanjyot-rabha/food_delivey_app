  import React from 'react'
  import Navbar from './component/navbar/Navbar.jsx'
  import Sidebar from './component/sidebar/Sidebar.jsx'
  import {Routes,Route} from 'react-router-dom'
  import Add from './pages/add/Add.jsx'
  import List from './pages/list/List.jsx'
  import Order from './pages/order/Order.jsx'
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
 const App = () => {
  const url='https://food-delivey-app-3.onrender.com'
   return (
       <>
       
       <div>
        <ToastContainer/>
        <Navbar/>
       </div>
       <hr />
       <div className="app-content">
        <Sidebar/>
        <Routes>
             <Route path="/add" element={<Add url={url}/>}/> 
             <Route path="/list" element={<List url={url}/>}/> 
             <Route path="/order" element={<Order url={url}/>}/> 
        </Routes>
       </div>
       </>
     
   )
 }
 
 export default App
 
