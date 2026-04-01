import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center items-center gap-5'>
        <Link to='men' className='text-xl'>Men</Link>
        <Link to='women' className='text-xl'>Women</Link>
      </div>
      <Outlet/>
      <h3>Product</h3>
    </div>
  )
}

export default Product