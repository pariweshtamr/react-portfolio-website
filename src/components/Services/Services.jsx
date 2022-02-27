import React from 'react'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import './services.css'
const Services = () => {
  return (
    <section id="services">
      <h5>What I have to offer?</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillBookmarkCheckFill className="service__list-icon" />
              <p>Website Designing</p>
            </li>
            <li>
              <BsFillBookmarkCheckFill className="service__list-icon" />
              <p>Mobile Responsive Designs</p>
            </li>
            <li>
              <BsFillBookmarkCheckFill className="service__list-icon" />
              <p>Front-end Development</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillBookmarkCheckFill className="service__list-icon" />
              <p>Ecommerce Applications</p>
            </li>
            <li>
              <BsFillBookmarkCheckFill className="service__list-icon" />
              <p>Custom Applications</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services
