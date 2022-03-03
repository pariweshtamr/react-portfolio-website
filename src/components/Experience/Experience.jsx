import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FiFigma } from 'react-icons/fi'
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa'
import { SiJavascript, SiExpress } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills do I have?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Figma{' '}
                  <span>
                    <FiFigma />
                  </span>
                </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  HTML{' '}
                  <span>
                    <FaHtml5 />
                  </span>
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  CSS{' '}
                  <span>
                    <FaCss3Alt />
                  </span>
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Javascript{' '}
                  <span>
                    <SiJavascript />
                  </span>
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Bootstrap <FaBootstrap />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  React{' '}
                  <span>
                    <FaReact />
                  </span>
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Node JS{' '}
                  <span>
                    <FaNodeJs />
                  </span>
                </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  MongoDB{' '}
                  <span>
                    <DiMongodb />
                  </span>
                </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  ExpressJS{' '}
                  <span>
                    <SiExpress />
                  </span>
                </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
