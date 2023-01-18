import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import './styles.css';

ReactDOM.render(
	<div className="wrapper">
		<Navbar />
		<Hero />
		<About />
		<Projects />
		<Contact />
	</div>,
	document.getElementById('root')
);
