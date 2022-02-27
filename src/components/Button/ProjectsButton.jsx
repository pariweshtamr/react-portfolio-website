import React from 'react'
import './button.css'

const ProjectsButton = ({ filter, button }) => {
  return (
    <button className="projects__btns">
      {button.map((btn, i) => {
        return (
          <button className="projects__btn" key={i} onClick={() => filter(btn)}>
            {btn}
          </button>
        )
      })}
    </button>
  )
}

export default ProjectsButton
