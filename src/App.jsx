import React from 'react'
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'
import Create from './Components/Create'
import Edit from './Components/Edit'
function App() {
  const {search, pathname} = useLocation()
  

  return (
    <div className='flex h-screen w-screen'>
      {(pathname != '/' || search.length > 0) && <Link to='/' className='text-lg text-red-400 absolute left-[17%] top-[5%]'>Home</Link>}

    

        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path='/create' element={<Create/>} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      
    </div>
  )
}

export default App

