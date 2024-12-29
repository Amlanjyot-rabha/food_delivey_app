import { assest } from '../../assets/assest'
import './Add.css'
import { useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = ({url}) => {
  const[image,setImage]=useState(false)
  const [data,setData]=useState({
    name:"",
    discription:"",
    price:"",
    category:"salad",
  })

  const onChangeEvnt=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }
    
  const onSubmited=async (event)=>{
      event.preventDefault()
     
      const formData= new FormData();
      formData.append('name',data.name);
      formData.append('category',data.category);
      formData.append('price',Number(data.price));
      formData.append('discription',data.discription);
      formData.append('image',image);
      const response= await axios.post(`${url}/api/food/add`,formData);
      if(response.data.success){
        console.log('woreewking')
        setData({
          name:"",
          discription:"",
          price:"",
          category:"salad",
        })
        setImage(false)
        toast.success(response.data.message)
      }
      else{
        toast.error(response.data.messase)
      }
 
  }

 

  return (
    <div className='add'>
       <form className='flex-col' onSubmit={onSubmited}>
         <div className="add-image-upload flex-col"> 
          <p>upload image</p>
          <label htmlFor="image">
             <img id='upload-image' src={image?URL.createObjectURL(image):assest.upload} alt=""/>
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden  />
         </div>
         <div className="add-product-name flex-col">
           <p>product name</p>
           <input onChange={onChangeEvnt} value={data.name} type="text" name='name' placeholder='type here'/>
         </div>
         <div className="add-product-description flex-col">
              <p>product description</p>
              <textarea onChange={onChangeEvnt} value={data.discription} name="discription" rows="6" placeholder='right content here' required></textarea>
         </div>
          <div className="add-category-price">
               <div className="add-category flex-col">
                <p>product category</p>
                <select onChange={onChangeEvnt} name="category" >
                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Deserts">Deserts</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure veg">Pure veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles">Noodles</option>
                </select>
                </div> 
                <div className="add-price flex-col">
                  <p>product price</p>
                  <input  onChange={onChangeEvnt} value={data.price} type="number" name='price' placeholder='$50' />
                  <button  type='submit' className='add-btn' >Add</button>
                </div>
                 
          </div>
       </form>
    </div>
  )
}

export default Add
