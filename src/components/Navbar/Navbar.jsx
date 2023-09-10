import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav m-auto">
                <li className="nav-item " >
                    <a href="/"  activeclassname="active">Static</a>
                </li>
                <li className="nav-item" >
                    <a href="/" activeclassname="active" className="nav-link">Gradient</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar