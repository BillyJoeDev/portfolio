import React, {useEffect} from 'react'
import './About.css'
import { FaHtml5, FaCss3Alt, FaNodeJs, FaMicrosoft, FaReact, FaDatabase } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(".about-me-header", {scaleY: 0, scaleX: 0}, { scaleY: 1, scaleX: 1, duration: 0.5, scrollTrigger: {
      trigger: ".about-me-header"
    } });

    gsap.fromTo(".who-is-section", {opacity: 0, x: -300}, {opacity: 1, x: 0, duration: 1, scrollTrigger: {
      trigger: ".who-is-section"
    } });

    gsap.fromTo(".about-section", {opacity: 0, x: 300}, {opacity: 1, x: 0, duration: 1, scrollTrigger: {
      trigger: ".about-section"
    } });
  }, []);

  return (
    <article className='about-wrapper' id='about'>
        <h1 className='about-me-header'>About Me</h1>
        <div className='about-section-wrapper'>
          <div className='who-is-section'>
            <h1>Who is Travis?</h1>
            <img src='images/about-image.svg' alt="Guy at desk looking at laptop next to window at night time" />
          </div>
          <div className='about-section'>
            <p>I specialize in building the frontend of websites, although I do like to flash some of my backend experience when I can. I have done work in software development, front-end/back-end web, database/server management, graphic design, and video game development. I hate coffee, but love me some good pizza and vitamin water. Last but not least, after a good day of slamming my fingers, I love to use the other parts of my hand to lift weights in the gym.</p>
            <h1>My Skills:</h1>
            <div className='skills-section'>
              <div className='skill-container'>
                <FaHtml5 className='skill'/>
                <h1>HTML</h1>
              </div>
              <div className='skill-container'>
                <FaCss3Alt className='skill'/>
                <h1>CSS</h1>
              </div>
              <div className='skill-container'>
                <FaReact className='skill'/>
                <h1>REACT</h1>
              </div>
              <div className='skill-container'>
                <FaNodeJs className='skill'/>
                <h1>JAVAS</h1>
              </div>
              <div className='skill-container'>
                <SiExpress className='skill'/>
                <h1>EXPRESS</h1>
              </div>
              <div className='skill-container'>
                <FaMicrosoft className='skill'/>
                <h1>.NET</h1>
              </div>
              <div className='skill-container'>
                <DiMongodb className='skill'/>
                <h1>MONGODB</h1>
              </div>
              <div className='skill-container'>
                <FaDatabase className='skill'/>
                <h1>MYSQL</h1>
              </div>
            </div>
          </div>
        </div>
    </article>
  )
}

export default About