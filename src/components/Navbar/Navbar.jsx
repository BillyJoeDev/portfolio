import React, {useState} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  const jumpToTop = () => {
    setOpen(false);
    scroll.scrollToTop();
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div>
      <nav className={navbar ? 'navscroll' : ''}>
          <h1 className='logo' onClick={jumpToTop}>TP</h1>
          <ul className='navLinks'>
              <Link className='navbar-item' to='about' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}>About</Link>
              <Link className='navbar-item' to='projects' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}>Projects</Link>
              <Link className='navbar-item' to='contact' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}>Contact</Link>
          </ul>
          { isOpen ? <label className='mobileNavClose' onClick={() => {setOpen(!isOpen)} }>X</label> : <FaBars className='mobileNav' onClick={() => {setOpen(!isOpen)} } />}
      </nav>

      <div className={isOpen ? 'mobileNavMenu show' : 'mobileNavMenu'}>
        <ul className='mobilNavLinks'>
          <Link className='navbar-item' onClick={() => {setOpen(!isOpen)} } to='about' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}>About</Link>
          <Link className='navbar-item' onClick={() => {setOpen(!isOpen)} } to='projects' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}>Projects</Link>
          <Link className='navbar-item' onClick={() => {setOpen(!isOpen)} } to='contact' activeClass="active" smooth={true} spy={true} duration={500} offset={-90}>Contact</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar