import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="nav">
            <h3>Kaif Wahab</h3>
            <div>
                {/* This makes the app relaod after switching the route */}

                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}

                {/* This is actual react router  */}
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar