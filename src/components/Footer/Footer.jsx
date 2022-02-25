import React from 'react'
import './footer.css'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <div className="footer__waves">
        <div className="footer__wave" id="wave1"></div>
        <div className="footer__wave" id="wave2"></div>
        <div className="footer__wave" id="wave3"></div>
        <div className="footer__wave" id="wave4"></div>
      </div>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/pariwesh-tamrakar-a33200217/">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/pariweshtamr">
          <FiGithub />
        </a>
        <a href="https://www.facebook.com/pariweshtamr7/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/pariwesh.tamrakar/">
          <FaInstagram />
        </a>
      </div>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
