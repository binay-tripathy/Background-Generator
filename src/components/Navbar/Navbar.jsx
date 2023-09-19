import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <header className="header">
                <h1>Background Generator</h1>
            </header>
            <div className='nav-bar'>
                <nav>
                    <NavLink exact="true" activeclassname="active" to='/'>
                        Static
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className='about-link' to='/gradient'>
                        Gradient
                    </NavLink>
                </nav>
            </div>
            <div className="footer">
                <a href="http://github.com/binay-tripathy" target="_blank" rel="noopener noreferrer">Made with 🤍 by Binay Tripathy</a>
            </div>
            
        </>
    )
}

export default Navbar