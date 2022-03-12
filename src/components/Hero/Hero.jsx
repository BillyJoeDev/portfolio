import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './Hero.css'
const Hero = () => {
  return (
    <header>
        <div className='hero-text-container'>
            <h1 className='welcome-text'>HELLO! I'M <span className='welcome-text alt-color'>TRAVIS</span></h1>
            <p className='role-type'>I AM A <span className='role-type alt-color'>FRONTEND</span> DEVELOPER.</p>
            <Link to='contact' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}><button className='contact-me'>Contact Me</button></Link>
            <Link to='projects' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}><button className='view-projects'>View Projects</button></Link>
            <div className='social-icons'>
                <a href='https://github.com/TravisDevLife' target="_blank"><FaGithub className='social-icon' /></a>
                <a href='https://www.linkedin.com/in/travis-price-328519220/' target="_blank"><FaLinkedinIn className='social-icon' /></a>
            </div>
        </div>
        <img src='images/hero-image.svg' />
    </header>
  )
}

export default Hero