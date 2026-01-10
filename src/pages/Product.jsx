import { Link } from 'react-router-dom'
import React from 'react'

const Product = () => {
  return (
    <div>
      <h1 className='text-5xl underline font-bold fixed top-50 left-[50vw] -translate-x-1/2 text-white'>Product Page</h1>

      <div className='flex gap-5 absolute top-70 left-[38%]'>
        <Link className='text-xl font-semibold underline text-white' to='/Product/MenProduct'>Men's Collection</Link>
        <Link className='text-xl font-semibold underline text-white' to='/Product/WomenProduct'>Women's Collection</Link>
      </div>
    </div>
  )
}

export default Product
