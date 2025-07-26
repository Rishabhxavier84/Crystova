import React from 'react'
import './About.css'
import AboutContent from '../../Components/AboutContent/AboutContent'

const About = () => {
    return (
        <div className='about'>
            <div className="aboutLogo">
                <p>Crystova</p>
            </div>
            <AboutContent />
        </div>
    )
}

export default About
