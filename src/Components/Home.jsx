import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../Utils/Context'
import Loadin from './Loadin'
import axios from '../Utils/Axios'

const Home = () => {
  const [products] = useContext(ProductContext)
  const {search} = useLocation()
  const category = decodeURIComponent( search.split('=')[1])

  const [filteredProduct, setFilteredProduct] = useState(null)

  const getCategory = async()=>{
    try {
      const {data} = await axios.get(`/products/category/${category}`)
      setFilteredProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(!filteredProduct || category == 'undefined') setFilteredProduct(products)
    if (category != 'undefined') {
      // getCategory()
      setFilteredProduct(products.filter(p=> p.category == category))
    }
  },[category, products])


  return ( products ?
    <>
    <Nav />
     
<div className='w-[85%] h-full p-5 pt-[5%] bg-zinc-100 flex gap-5 flex-wrap overflow-x-hidden'>
        
{filteredProduct &&
filteredProduct.map((p, i)=>(
  <Link key={p.id} to={`/details/${p.id}`} className='card border rounded shadow hover:shadow-lg p-5 w-[16%] h-[30vh] flex flex-col bg-white items-center gap-3'>
  <div className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center' style={{backgroundImage: `url(${p.image})`}}></div>
  <h1 className='hover:text-blue-300 font-semibold text-xs'>{p.title}</h1>
</Link>
))}
        
           
    </div> 
    </> : <Loadin/>
  )
}

export default Home
