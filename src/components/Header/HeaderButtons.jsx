import React from "react"
import CV from "../../assets/Pariwesh.Resume.pdf"

const HeaderButtons = () => {
  return (
    <div className="header-buttons">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  )
}

export default HeaderButtons
