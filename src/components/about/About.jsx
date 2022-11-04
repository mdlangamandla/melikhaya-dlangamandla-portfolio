import React from 'react'
import {FaAward} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiTwotoneFolderOpen} from 'react-icons/ai'

import './about.css'
import ME from '../../assets/123360302_3680917011940302_902560685131996327_n.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Who is Melikhaya Dlangamandla?</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Melikhaya Dlangamandla" />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <BsFillPeopleFill className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ Clients</small>
            </article>

            <article className='about__card'>
              <AiTwotoneFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>            
          </div>

          <div>
            <p>
              I am an ex-bartender who loves doing magic with code.
              <br /><br />
              I first became fascinated by programming in 2017. I was still working as a bartender at some local tarven,a 
              friend of mine was telling me about how he was looking for people to build him a website
              for his business. We started looking for companies that do web development, and as someone who was always been fascinated 
              by technology, I was hooked.
              <br /><br />
              The year, 2019,After a few months of self-teaching, I knew this was what I wanted 
              to do for my career. So, I signed up for the codeX web dev programme and put my heart and soul into it. I was coding every day, late into the night, and on weekends.
              <br /><br />
              Since the programme, I have grown as a developer, I'm now seeking a full-time role at SovTech where I can contribute my skills to help a company achieve their goals on-the-job experience, 
              and engagement with professionals who have years of experience across Software & Business Development.
            </p>
          </div>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>   
          <a href="../../assets/Melikhaya_dlangamandlaCV.pdf" download className='btn btn-primary'>Download CV</a> 
        </div>
      </div>
    </section>
  )
}

export default About