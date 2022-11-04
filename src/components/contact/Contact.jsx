import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import {FiMail} from 'react-icons/fi'
import {BsMessenger} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'

import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zy7vgja', 'template_arem4ys', form.current, '30O15_r-0t-YxVRoy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mdlangamandla048@gmail.com</h5>
            <a href="mdlangamandla048@gmail.com" target="_blank">send an email</a>
          </article>
      
          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+27 78 920 3177</h5>
            <a href="https://api.whatsapp.com/send?phone=+27789203177" target="_blank">send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} action='https://formspree.io/f/xgeqvqwe' method='POST'>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact