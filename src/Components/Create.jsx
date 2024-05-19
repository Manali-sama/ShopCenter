import { nanoid } from 'nanoid'
import React, { useContext, useState } from 'react'
import { ProductContext } from '../Utils/Context'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Create = () => {
  const[products, setProducts] = useContext(ProductContext)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const Navigate = useNavigate()
    const addProduct = (e)=>{
      e.preventDefault()
      if(title.trim().length<5 || image.trim().length<5 ||category.trim().length<5 || price.trim().length<1 || description.trim().length<5)
      {
        alert("Please fill all the fields")
        return
      }
      const Product = {
        id: nanoid(),
        title: title,
        image: image,
        category: category,
        price: price,
        description: description
      }
      setProducts([...products, Product])
      localStorage.setItem('products', JSON.stringify([...products, Product]))
      toast.success("Product added successfully ")
      Navigate("/")
    }

  return (
    <div>
      <form onSubmit={addProduct} className='w-screen h-screen p-[5%] flex flex-col items-center'>
        <h1 className='font-semibold text-2xl mb-5 w-1/2'>Add New Product</h1>
        <input type="url" placeholder='image' 
        className='w-1/2 mb-3 p-2 text-lg font-semibold rounded bg-zinc-100' 
        onChange={(e)=> setImage(e.target.value)}
        value={image}/>
        <input type="text" placeholder='title' 
        className='w-1/2 mb-3 p-2 text-lg font-semibold rounded bg-zinc-100' 
        onChange={(e)=> setTitle(e.target.value)}
        value={title}/>
        <div className='w-1/2 mb-3 flex justify-between'>
        <input type="text" placeholder='category' 
        className='w-[48%] mb-3 p-2 text-lg font-semibold rounded bg-zinc-100' 
        onChange={(e)=> setCategory(e.target.value)}
        value={category}/>
        <input type="number" placeholder='price' 
        className='w-[48%] mb-3 p-2 text-lg font-semibold rounded bg-zinc-100' 
        onChange={(e)=> setPrice(e.target.value)}
        value={price}/>
        </div>
        <textarea className='w-1/2 mb-3 p-2 text-lg font-semibold rounded bg-zinc-100' placeholder='Enter product description'
        onChange={(e)=> setDescription(e.target.value)}
        value={description}
        rows='10'></textarea>
        <div className='w-1/2'>
        <button className='px-3 py-2 rounded  border-2 font-semibold text-lg text-zinc-600' >Add New Product</button >
        </div>
      </form>

      
    </div>
  )
}

export default Create
