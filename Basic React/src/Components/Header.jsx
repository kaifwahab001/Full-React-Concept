import React from 'react'
import Button from './Button'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo"></div>
            <div className="content">
                <Button />
            </div>
        </div>
    )
}

export default Header