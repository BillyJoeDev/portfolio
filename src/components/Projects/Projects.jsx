import React, {useEffect} from 'react'
import { FaGithub, FaEye } from 'react-icons/fa'
import './Projects.css'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    { project_id: 'one', project_name: 'RPS API', short_desc: 'An API using MERN Stack allowing devs to post/update devblogs with sections to Four Website.', display_img: 'images/API.webp', links: { github: '', website: 'https://i.gyazo.com/ef956ddfde9be986a5bb01b755c034cd.mp4' } },
    { project_id: 'two', project_name: 'Four Website', short_desc: 'This website is for a Game Studio, made in React and uses my MERN API.', display_img: 'images/four.webp', links: { github: 'https://github.com/TravisDevLife/four', website: 'https://fourgamee.netlify.app/' } },
    { project_id: 'three', project_name: 'Tip Calculator', short_desc: 'A website that generates a tip based off a few input fields, made in React.', display_img: 'images/tipcalc.webp', links: { github: 'https://github.com/TravisDevLife/tip-calculator', website: 'https://tipcalculatorr.herokuapp.com/' } },
    { project_id: 'four', project_name: 'Portfolio', short_desc: 'Designed and created by me, wanted to have a little touch to my piece of art.', display_img: 'images/portfolio.webp', links: { github: 'https://github.com/TravisDevLife/portfolio', website: 'https://travisp.dev/' } },
    { project_id: 'five', project_name: 'Advice Generator', short_desc: 'An advice generator that grabs advice from a REST API, made in React.', display_img: 'images/advice.webp', links: { github: 'https://github.com/TravisDevLife/advice-generator', website: 'https://advice-generatorr.herokuapp.com/' } },
    { project_id: 'six', project_name: 'Huddle Landing Page', short_desc: 'A 1:1 landing page based off a Figma design from Frontend Mentor.', display_img: 'images/huddle.webp', links: { github: 'https://github.com/TravisDevLife/huddle-landing-page', website: 'https://huddlelp.herokuapp.com/' } },
  ];

  useEffect(() => {
    gsap.fromTo(".my-projects-header", {x: 500, opacity: 0}, { x: 0, opacity: 1, duration: 1, scrollTrigger: {
      trigger: ".my-projects-header"
    } });

    gsap.fromTo(".warning-notice", {opacity: 0, x: 400}, {opacity: 1, x: 0, duration: 1, scrollTrigger: {
      trigger: ".my-projects-header"
    } });

    gsap.fromTo(".project.one", {opacity: 0, x: -300}, {opacity: 1, x: 0, duration: 0.8, scrollTrigger: {
      trigger: ".projects-grid"
    } });

    gsap.fromTo(".project.two", {opacity: 0, y: -300}, {opacity: 1, y: 0, duration: 0.8, scrollTrigger: {
      trigger: ".projects-grid"
    } });

    gsap.fromTo(".project.three", {opacity: 0, x: 300}, {opacity: 1, x: 0, duration: 0.8, scrollTrigger: {
      trigger: ".projects-grid"
    } });

    gsap.fromTo(".project.four", {opacity: 0, x: -300}, {opacity: 1, x: 0, duration: 0.8, scrollTrigger: {
      trigger: ".projects-grid"
    } });

    gsap.fromTo(".project.five", {opacity: 0, y: 300}, {opacity: 1, y: 0, duration: 0.8, scrollTrigger: {
      trigger: ".projects-grid"
    } });

    gsap.fromTo(".project.six", {opacity: 0, x: 300}, {opacity: 1, x: 0, duration: 0.8, scrollTrigger: {
      trigger: ".projects-grid"
    } });
  }, []);

  return (
    <div className='projects-wrapper' id='projects'>
        <h1 className='my-projects-header'>My Projects</h1>
        <p className='warning-notice'>(Ran on heroku, may be slow loading)</p>
        <div className='projects-grid'>
          { 
            projects.map((item) => (
              <a href={item.links.website} target="_blank" key={item.project_id} >
                <div className={'project ' + item.project_id} style={{ backgroundImage: 'linear-gradient(transparent 0%, rgba(18,18,18,1) 100%), url(' + item.display_img + ')'}}>
                  <div className='project_summary'>
                    <h1>{item.project_name}</h1>
                    <p>{item.short_desc}</p>
                  </div>
                  { item.links.github == "" && item.links.website == "" ? null :
                    <div className='project-links'>
                      { item.links.github != "" ? <a target="_blank" href={item.links.github} aria-label="Visit the github"><FaGithub className='icon github' aria-hidden="true" /></a> : null }
                      { item.links.website != "" ? <a target="_blank" href={item.links.website} aria-label="Visit the website"><FaEye className='icon website' aria-hidden="true"/></a> : null }
                    </div>
                  }
                </div>
              </a>
            ))
          }
        </div>
    </div>
  )
}

export default Projects