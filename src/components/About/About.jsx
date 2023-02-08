import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import { DiMongodb } from 'react-icons/di';
import {
	FaDatabase,
	FaMicrosoft,
	FaNodeJs,
	FaPhp,
	FaReact,
} from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import './About.css';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
	useEffect(() => {
		gsap.fromTo(
			'.about-me-header',
			{ scaleY: 0, scaleX: 0 },
			{
				scaleY: 1,
				scaleX: 1,
				duration: 0.5,
				scrollTrigger: {
					trigger: '.about-me-header',
				},
			}
		);

		gsap.fromTo(
			'.who-is-section',
			{ opacity: 0, x: -300 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '.who-is-section',
				},
			}
		);

		gsap.fromTo(
			'.about-section',
			{ opacity: 0, x: 300 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '.about-section',
				},
			}
		);
	}, []);

	return (
		<article className="about-wrapper" id="about">
			<h1 className="about-me-header">About Me</h1>
			<div className="about-section-wrapper">
				<div className="who-is-section">
					<h1>Who is Travis?</h1>
					<img
						src="images/about-image.svg"
						alt="Guy at desk looking at laptop next to window at night time"
					/>
				</div>
				<div className="about-section">
					<p>
						I specialize in frontend development, although I love to do backend
						work when I can. I have done work in the software development
						industry for around 6+ years. I started off with database/server
						management, then ventured into game development and finally I have
						found my love for Web Development. I love helping out developers
						where I can, and currently am a Code Reviewer for a website known as
						Codefling.com. I make sure that all developers are pushing through
						fast and responsive code as well as providing feedback where I can.
					</p>
					<h1>My Skills:</h1>
					<div className="skills-section">
						<div className="skill-container">
							<FaReact className="skill" />
							<h1>REACT</h1>
						</div>
						<div className="skill-container">
							<FaNodeJs className="skill" />
							<h1>JAVAS</h1>
						</div>
						<div className="skill-container">
							<SiExpress className="skill" />
							<h1>EXPRESS</h1>
						</div>
						<div className="skill-container">
							<FaMicrosoft className="skill" />
							<h1>.NET</h1>
						</div>
						<div className="skill-container">
							<DiMongodb className="skill" />
							<h1>MONGODB</h1>
						</div>
						<div className="skill-container">
							<FaDatabase className="skill" />
							<h1>MYSQL</h1>
						</div>
						<div className="skill-container">
							<FaPhp className="skill" />
							<h1>PHP</h1>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default About;
