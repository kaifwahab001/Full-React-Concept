import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between px-15 py-5 text-white bg-cyan-900'>
            <h2 className='text-xl font-bold'>Kaif Wahab</h2>
            <div className='flex gap-10'>
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/course">Course</Link>
            </div>
        </div>
    )
}

export default Navbar