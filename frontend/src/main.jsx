// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import StoreContexProvider from './contex/storeContex.jsx'
 

createRoot(document.getElementById('root')).render(
   
   <BrowserRouter>
    <StoreContexProvider>
       <App/>  
    </StoreContexProvider>   
   </BrowserRouter>
 
   
)
