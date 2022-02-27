import React, { useState } from 'react'
import './projects.css'
import { projects } from '../../constants'
import ProjectsButton from '../Button/ProjectsButton'

const allButtons = ['All', ...new Set(projects.map((item) => item.category))]

const Projects = () => {
  const [projectItem, setProjectItem] = useState(projects)

  const [button, setButton] = useState(allButtons)

  const filter = (button) => {
    if (button === 'All') {
      setProjectItem(projects)
      return
    }

    const filteredData = projects.filter((item) => item.category === button)
    setProjectItem(filteredData)
  }
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <ProjectsButton filter={filter} button={button} />

      <div className="container projects__container">
        {projectItem.map((project, index) => (
          <article className="projects__item" key={index}>
            <div>
              <div className="projects__item-image">
                <img src={project.image} alt="Project 1" />
              </div>
              <h3>{project.title}</h3>
              <p className="projects__item-description">
                {project.description}
              </p>
            </div>
            <div className="projects__item-tech">
              <h4>Tech / Stack</h4>
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
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
              {project.visit ? (
                <a
                  href={project.visit}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              ) : (
                ''
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
