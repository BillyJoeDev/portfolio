import React, {useEffect} from 'react'
import { FaGithub, FaEye, FaShoppingCart } from 'react-icons/fa'
import './Projects.css'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    { project_id: 'one', project_name: 'Travcord', short_desc: 'Tested my skills by recreating the Discord Landing Page, renamed site and logos for IP reasons.', display_img: 'images/Travcord.webp', links: { github: 'https://github.com/TravisDevLife/travcord', website: 'https://travcord.netlify.app/', purchase: '' } },
    { project_id: 'two', project_name: 'Bookmark', short_desc: 'A landing page designed in Figma and brought to light using HTML & CSS.', display_img: 'images/Bookmark.webp', links: { github: 'https://github.com/TravisDevLife/bookmark-landing', website: 'https://bookmarklandingp.netlify.app/', purchase: '' } },
    { project_id: 'three', project_name: 'RPS API', short_desc: 'An API using MERN Stack allowing devs to post/update devblogs with sections to Four Website.', display_img: 'images/API.webp', links: { github: '', website: 'https://i.gyazo.com/ef956ddfde9be986a5bb01b755c034cd.mp4', purchase: '' } },
    { project_id: 'four', project_name: 'Misfits Boxing', short_desc: 'A website built for a boxing promotion company, allowing users to vote on the fighters that are on the card.', display_img: 'images/MisfitsBoxing.webp', links: { github: '', website: 'https://misfitsboxing.netlify.app/', purchase: '' } },
    { project_id: 'five', project_name: 'Stats Website', short_desc: 'An advanced PHP statistics website for Rust Servers. Product is currently for sale on multiple sites and has grossed over $500.', display_img: 'images/stats.webp', links: { github: '', website: 'https://i.gyazo.com/c9dd9fe4b11f1114df818599a311462c.mp4', purchase: 'https://codefling.com/plugins/better-statistics' } },
    { project_id: 'six', project_name: 'Four Website', short_desc: 'This website is for a Game Studio, made in React and uses my MERN API.', display_img: 'images/four.webp', links: { github: 'https://github.com/TravisDevLife/four', website: 'https://fourgamee.netlify.app/', purchase: '' } },
  ];

  useEffect(() => {
    gsap.fromTo(".my-projects-header", {x: 500, opacity: 0}, { x: 0, opacity: 1, duration: 1, scrollTrigger: {
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
        <div className='projects-grid'>
          { 
            projects.map((item) => (
              <a href={item.links.website} target="_blank" key={item.project_id} >
                <div className={'project ' + item.project_id} style={{ backgroundImage: 'linear-gradient(transparent 0%, rgba(18,18,18,1) 100%), url(' + item.display_img + ')'}}>
                  <div className='project_summary'>
                    <h1>{item.project_name}</h1>
                    <p>{item.short_desc}</p>
                  </div>
                  { item.links.github == "" && item.links.website == "" && item.links.purchase == "" ? null :
                    <div className='project-links'>
                      { item.links.github != "" ? <a target="_blank" href={item.links.github} aria-label="Visit the github"><FaGithub className='icon github' aria-hidden="true" /></a> : null }
                      { item.links.website != "" ? <a target="_blank" href={item.links.website} aria-label="Visit the website"><FaEye className='icon website' aria-hidden="true"/></a> : null }
                      { item.links.purchase != "" ? <a target="_blank" href={item.links.purchase} aria-label="Visit the shop"><FaShoppingCart className='icon website' aria-hidden="true"/></a> : null }
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