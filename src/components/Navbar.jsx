import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-3xl font-bold text-white h-20  flex justify-between items-center px-7 py-10 bg-pink-800 mt-10'>
      <h2>Navbar</h2>
      <div className='flex gap-9'>
       <Link to='/'>Home</Link>
       <Link to='/About'>About</Link>
       <Link to='/Product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
