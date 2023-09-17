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
            
        </>
    )
}

export default Navbar