import React from "react"
import "./about.css"
import ME from "../../assets/about.png"
import { FaAward } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"
import TimelineSection from "../Timeline/TimelineSection"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Achievements</h5>
              <small>First Year Course Champion</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Intermediate</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed </small>
            </article>
          </div>

          <TimelineSection />

          <div className="about__button">
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
