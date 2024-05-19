import React, { useContext } from 'react'
import { ProductContext } from '../Utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [products] = useContext(ProductContext)

  let categories = 
    products && products.reduce((acc, cv)=>[...acc, cv.category], [])
    categories = [...new Set(categories)]

    const color = ()=>{
      return `rgba(${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, 0.8)`
    }

  return (
    <div className='w-[15%] h-screen'>
      <nav className='w-full h-full bg-zinc-200 flex flex-col gap-2 items-center pt-10'>
        <Link to= '/create' className='px-3 py-2 rounded-md  border-2 border-blue-200 font-semibold text-lg text-blue-300' >Add New Product</Link >
        <hr className='w-[80%] my-3 pt-[0.2vh] bg-white' />
        <h1 className='font-semibold w-[80%] text-2xl text-zinc-900'>Categories</h1>
        <div className='w-[80%] '>
            {categories.map((c,i)=>(
              <Link key={i} to={`/?category=${c}`} className='flex items-center font-semibold gap-3 mt-1'>
              <span style={{backgroundColor: color()}} className='w-[15px] flex h-[15px]  rounded-full'></span>
                  {c}</Link>
            ))}
                
        </div>
    </nav>
    </div>
  )
}

export default Nav
