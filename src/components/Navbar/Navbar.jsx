import React, {useState} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  const jumpToTop = () => {
    scroll.scrollToTop();
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'navscroll' : ''}>
        <h1 className='logo' onClick={jumpToTop}>TP</h1>
        <ul>
            <Link className='navbar-item' to='about' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}>About</Link>
            <Link className='navbar-item' to='projects' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}>Projects</Link>
            <Link className='navbar-item' to='contact' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}>Contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar