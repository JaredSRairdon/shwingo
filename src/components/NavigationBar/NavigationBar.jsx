import React from 'react'
import { Link } from 'react-router-dom';
import './NavigationBar.css'

function NavigationBar({ session }) {
  return (
    <>
        <nav className="navbar">
            <Link to="/" id='site-logo'><h3 className="site-logo">Shwingo</h3></Link>
            <ul className="nav-links">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="account" className='nav-link'>{session ? "My Account" : "Login"}</Link>
                <li></li>
            </ul>
        </nav>
    </>
  )
}

export default NavigationBar