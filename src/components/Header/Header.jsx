import React from 'react'
import HeaderButtons from './HeaderButtons'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Pariwesh Tamrakar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderButtons />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header
