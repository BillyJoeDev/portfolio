import React, {useState, useRef, useEffect} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Result = () => {
    return (
        <div className='result'>Your message has been successfully sent. I will contact you back as soon as possible.</div>
    )
}

const Contact = () => {
    const form = useRef();
    const [result, showResult] = useState(false);

    const sendEmail = (email) => {
        email.preventDefault();

        emailjs.sendForm('service_x66hkru', 'template_0fi69zo', form.current, 'Rr21Psskw8wkspsOj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        email.target.reset();
        showResult(true);
    }

    setTimeout(() => {
        if (result) showResult(false);
    }, 5000);

    useEffect(() => {
        gsap.fromTo(".contact-me-header", {x: 900}, { x:0, duration: 1, scrollTrigger: {
            trigger: ".contact-me-header"
        } });

        gsap.fromTo(".contact-me-wrapper", {opacity: 0, scaleX: 0, scaleY: 0}, {opacity: 1, scaleX: 1, scaleY: 1, duration: 1, scrollTrigger: {
            trigger: ".contact-me-wrapper"
        } });
    }, []);

    return (
        <footer id="contact">
            <h1 className='contact-me-header'>Contact Me</h1>
            { result ? <Result /> : null }
            <div className='contact-me-wrapper'>
                <img src='images/contact.svg' />
                <form ref={form} className='contact-me-container' onSubmit={sendEmail}>
                    <label>Full Name:</label>
                    <input name='name' type='text' placeholder="Curious George" required />
                    <label>Email:</label>
                    <input name='email' type='email' placeholder="curiousgeorge@detectives.com" required />
                    <label>Subject:</label>
                    <input name='subject' type='text' placeholder="Looking to hire!" required />
                    <label>Message:</label>
                    <textarea name='message' placeholder="I love your amazing work, we want to hire you!" required />
                    <button>Submit</button>
                </form>
            </div>
        </footer>
    )
}

export default Contact