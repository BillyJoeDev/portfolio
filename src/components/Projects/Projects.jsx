import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import { FaEye, FaGithub, FaShoppingCart } from 'react-icons/fa';
import './Projects.css';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const projects = [
		{
			project_id: 'one',
			project_name: 'Codefling',
			short_desc:
				'This is a marketplace website, which allows vendors to sell products as well as customers being able to purchase, download, review, ect. Site has own credit system, which allows users to buy credit or vendors to withdraw the credit from their wallet.',
			display_img: 'images/codefling.webp',
			links: {
				github: '',
				website: 'https://codefling.com/',
				purchase: '',
			},
		},
		{
			project_id: 'two',
			project_name: 'Exclusively Imports',
			short_desc:
				'Website was made with plain js, as not much was requested other then a landing page for there company. Product was delivered fully responsive within 3 days.',
			display_img: 'images/exclusively.webp',
			links: {
				github: '',
				website: 'https://exclusivelyimportsautorepair.com/',
				purchase: '',
			},
		},
		{
			project_id: 'three',
			project_name: 'Vanity Rust',
			short_desc:
				'This was a freelance project for a company, I decided to make this website in PHP as they didnt want a backend overhead.',
			display_img: 'images/Vanity.webp',
			links: {
				github: '',
				website: 'https://vanity-rust.com/',
				purchase: '',
			},
		},
		{
			project_id: 'four',
			project_name: 'RPS API',
			short_desc:
				'This was a product for a game development company, they wanted a backend site that there developers could use to add/edit devblogs with thier work. Decided to use the MERN stack for saving developers login info, and react do to the perf gain.',
			display_img: 'images/API.webp',
			links: {
				github: '',
				website: 'https://i.gyazo.com/ef956ddfde9be986a5bb01b755c034cd.mp4',
				purchase: '',
			},
		},
		{
			project_id: 'five',
			project_name: 'Travcord',
			short_desc:
				'This project was to test my Frontend skills by recreating the Discord landing page, had to rename for IP Reasons.',
			display_img: 'images/Travcord.webp',
			links: {
				github: 'https://github.com/TravisDevLife/travcord',
				website: 'https://travcord.netlify.app/',
				purchase: '',
			},
		},
		{
			project_id: 'six',
			project_name: 'Stats Website',
			short_desc:
				'An advanced PHP statistics website for Rust Servers. Product is currently for sale on multiple sites and has grossed over $500.',
			display_img: 'images/stats.webp',
			links: {
				github: '',
				website: 'https://i.gyazo.com/c9dd9fe4b11f1114df818599a311462c.mp4',
				purchase: 'https://codefling.com/plugins/better-statistics',
			},
		},
	];

	useEffect(() => {
		gsap.fromTo(
			'.my-projects-header',
			{ x: 500, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '.my-projects-header',
				},
			}
		);

		gsap.fromTo(
			'.project.one',
			{ opacity: 0, y: 300 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: '.projects-grid',
				},
			}
		);

		gsap.fromTo(
			'.project.two',
			{ opacity: 0, y: 300 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: '.projects-grid',
				},
			}
		);

		gsap.fromTo(
			'.project.three',
			{ opacity: 0, y: 300 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: '.projects-grid',
				},
			}
		);

		gsap.fromTo(
			'.project.four',
			{ opacity: 0, y: 300 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: '.projects-grid',
				},
			}
		);

		gsap.fromTo(
			'.project.five',
			{ opacity: 0, y: 300 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: '.projects-grid',
				},
			}
		);

		gsap.fromTo(
			'.project.six',
			{ opacity: 0, y: 300 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: '.projects-grid',
				},
			}
		);
	}, []);

	return (
		<div className="projects-wrapper" id="projects">
			<h1 className="my-projects-header">My Projects</h1>
			<div className="projects-grid">
				{projects.map((item) => (
					<div key={item.project_id}>
						<div
							className={'project ' + item.project_id}
							style={{
								backgroundImage:
									'linear-gradient(transparent 0%, rgba(18,18,18,1) 100%), url(' +
									item.display_img +
									')',
							}}
						>
							<div className="project_summary">
								<h1>{item.project_name}</h1>
								<p>{item.short_desc}</p>
							</div>
							{item.links.github == '' &&
							item.links.website == '' &&
							item.links.purchase == '' ? null : (
								<div className="project-links">
									{item.links.github != '' ? (
										<a
											target="_blank"
											href={item.links.github}
											aria-label="Visit the github"
											rel="noreferrer"
										>
											<FaGithub className="icon github" aria-hidden="true" />
										</a>
									) : null}
									{item.links.website != '' ? (
										<a
											target="_blank"
											href={item.links.website}
											aria-label="Visit the website"
											rel="noreferrer"
										>
											<FaEye className="icon website" aria-hidden="true" />
										</a>
									) : null}
									{item.links.purchase != '' ? (
										<a
											target="_blank"
											href={item.links.purchase}
											aria-label="Visit the shop"
											rel="noreferrer"
										>
											<FaShoppingCart
												className="icon website"
												aria-hidden="true"
											/>
										</a>
									) : null}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
