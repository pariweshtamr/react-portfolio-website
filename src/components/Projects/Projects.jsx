import React from 'react'
import './projects.css'
import { projects } from '../../constants'

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {projects.map((project, index) => (
          <article className="projects__item" key={index}>
            <div className="projects__item-image">
              <img src={project.image} alt="Project 1" />
            </div>
            <h3>{project.title}</h3>
            <p className="projects__item-description">{project.description}</p>
            <div className="projects__item-tech">
              <h4>Stack</h4>
              <div className="projects__item-tags">
                {project.tags.map((tag, i) => (
                  <ul className="projects__item-tag" key={i}>
                    {tag}
                  </ul>
                ))}
              </div>
            </div>

            <div className="projects__item-buttons">
              <a
                href={project.source}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
              <a
                href={project.visit}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
