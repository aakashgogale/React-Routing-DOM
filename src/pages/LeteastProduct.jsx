import React from 'react'

const LeteastProduct = () => {

    const params = useParams()
  return (
    <div>
      <h1 className='text-5xl underline font-bold fixed top-50 left-[50vw] -translate-x-1/2 text-white'>
      {params.ProductId}Leteast Product</h1>
    </div>
  )
}

export default LeteastProduct
