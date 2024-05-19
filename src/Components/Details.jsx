import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loadin from './Loadin'
import { ProductContext } from '../Utils/Context'

const Details = () => {
  const[products, setProducts] = useContext(ProductContext)
  const [product, setProduct] = useState(null)
  const{id} = useParams();
  const navigate = useNavigate()
  // const getSingleData = async () => {
  //   try {
  //     const {data} = await axios.get(`/products/${id}`)
  //     setProduct(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const removeProduct = () =>{
    const filteredProduct = products.filter(p => p.id !== id)
    setProducts(filteredProduct)
    localStorage.setItem('products', JSON.stringify(filteredProduct))
    navigate('/')
  }
  
  useEffect(()=>{
    // getSingleData()
    if(!product){
      setProduct(products.filter(p => p.id == id)[0])
    }
  },[])
  return ( product ?
    <div className='container m-auto w-[70%] h-[80%]  flex gap-10 items-center justify-center'>
      <img className='h-[35vh]' src={`${product.image}`} alt="" />

      <div className='content w-[40%] '>
        <h1 className='font-semibold text-2xl mb-3'>{product.title}</h1>
        <h6 className='text-xs font-semibold text-zinc-400 mb-3'>{product.category}</h6>
        <h3 className='font-semibold text-xl mb-3 opacity-80'>$ {product.price}</h3>
        <h5 className='font-semibold text-lg mb-5'>{product.description}</h5>
        <Link to={`/edit/${product.id}`} className='font-semibold text-md mr-5 px-3 py-[0.55vw] rounded  border-2 border-blue-300 text-blue-300'>Edit</Link>
        <button onClick={()=>removeProduct(product.id)} className='font-semibold text-base mr-5 px-3 py-1 rounded  border-2 border-red-300 text-red-300'>Delete</button>
      </div>
    </div> : <Loadin />
  )
}

export default Details
