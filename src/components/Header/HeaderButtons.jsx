import React from 'react'
import CV from '../../assets/Resume.pdf'

const HeaderButtons = () => {
  return (
    <div className="header-buttons">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Reach out
      </a>
    </div>
  )
}

export default HeaderButtons
