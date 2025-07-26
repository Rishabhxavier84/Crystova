import React from 'react'
import {} from './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="nav">
                <ul>
                <Link to={`/`}>
                    <li>Home</li>
                </Link>
                <li>Features</li>
                <li>Pricing</li>
                <Link to={`/about`}>
                    <li>About</li>
                </Link>
            </ul>
            </div>
            <p>&copy; 2025 Crystova. All rights reserved.</p>
        </div>
    )
}

export default Footer
