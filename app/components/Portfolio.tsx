import React from 'react'
import Image from 'next/image'
import "../css/portfolio.css"

const Portfolio = () => {

  const projects = [
    {
      id:1,
      title: "E-Commerce Website",
      image: "/images/project1.png",
    },

    {
      id:2,
      title: "Todo List App",
      image: "/images/project2.png",
    },

    {
      id:3,
      title: "Cryptexcreation ",
      image: "/images/project3.png"
    },

    {
      id:4,
      title: "To Grow Marketing",
      image: "/images/project4.png"
    },

    {
      id:5,
      title: "Netflix Application",
      image: "/images/project5.png",
    },

    {
      id:6,
      title: "Dropbox website",
      image: "/images/project6.png"
    },
  ]
  
  return (
    
    <section className='portfolio-section' id='portfolio'>
    
      <div className='portfolio-header'>
        <h1>Our Portfolio</h1>
        <p>A showcase of our best work across design, development and marketing.</p>
      </div>

      <div className='portfolio-grid'>
        {projects.map((project) => (
          <div className='portfolio-card' key={project.id}>

            <div className='portfolio-img'>
              <Image src={project.image} alt={project.title}  fill style={{ objectFit: "cover" }}/>
            </div>

            <div className='portfolio-title'>
              <h3>{project.title}</h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Portfolio