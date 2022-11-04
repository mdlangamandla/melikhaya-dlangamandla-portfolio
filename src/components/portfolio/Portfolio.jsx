import React from 'react'

import './portfolio.css'
import IMG1 from '../../assets/Tours.png'
import IMG2 from '../../assets/Todo.png'
import IMG3 from '../../assets/weather.png'
// import IMG4 from '../../assets/crowdfunding.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tours of Heroes',
    description: "The Tour of Heroes application I builded to help a staffing agency to manage its stable of heroes.The application has many of the features that you'd expect to find in any data-driven application.",
    github: "https://github.com/mdlangamandla/angular-tour-of-heroes",
    demo: "https://mdlangamandla-angular-tour-of-heroes.vercel.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Todo-List',
    description: "Reason behind comming up with this App many people they forget and they not organised and this App acts as an external memory aid,Increases productivity and it is great motivational tool because you can use it to clarify your goals.",
    github: "https://github.com/mdlangamandla/Todolist",
    demo: "https://mdlangamandla-todolist.vercel.app//"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather App',
    description: "What would be a website with little or no traffic?. With this app users are enabled to search or check weather of any Town in South African.",
    github: "https://github.com/mdlangamandla/weather",
    demo: "https://mdlangamandlaweather.vercel.app/?"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio