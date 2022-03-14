import React, {useEffect} from 'react'
import { FaGithub, FaEye } from 'react-icons/fa'
import './Projects.css'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    { project_id: 'one', project_name: 'Four Website', short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugiat, ratione quo reprehenderit explicabo totam.', display_img: 'images/four.png', links: { github: '', website: '' } },
    { project_id: 'two', project_name: 'Tip Calculator', short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugiat, ratione quo reprehenderit explicabo totam.', display_img: 'images/tipcalc.png', links: { github: 'https://github.com/TravisDevLife/tip-calculator', website: 'https://tipcalculatorr.herokuapp.com/' } },
    { project_id: 'three', project_name: 'Portfolio', short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugiat, ratione quo reprehenderit explicabo totam.', display_img: 'images/portfolio.png', links: { github: 'https://github.com/TravisDevLife/portfolio', website: '' } },
    { project_id: 'four', project_name: 'Advice Generator', short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugiat, ratione quo reprehenderit explicabo totam.', display_img: 'images/advice.png', links: { github: 'https://github.com/TravisDevLife/advice-generator', website: 'https://advice-generatorr.herokuapp.com/' } },
    { project_id: 'five', project_name: 'Huddle Landing Page', short_desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugiat, ratione quo reprehenderit explicabo totam.', display_img: 'images/huddle.png', links: { github: 'https://github.com/TravisDevLife/huddle-landing-page', website: 'https://huddlelp.herokuapp.com/' } },
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
              <a href={item.links.website} target="_blank" >
                <div className={'project ' + item.project_id} style={{ backgroundImage: 'linear-gradient(transparent, rgba(18,18,18,1) 100%), url(' + item.display_img + ')'}}>
                  <h1>{item.project_name}</h1>
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