import React from 'react'
import './AboutContent.css'
import { Link } from 'react-router-dom'

const AboutContent = () => {
    return (
        <div className="aboutContent">
            <h1>Your Trusted Companion in the <br />Crypto World</h1>
            <p>Track, analyze, and stay informed about your favorite cryptocurrencies — all in one place.</p>
            <Link to={`/`}>
                <button>Explore Coins</button>
            </Link>
        </div>
    )
}

export default AboutContent
