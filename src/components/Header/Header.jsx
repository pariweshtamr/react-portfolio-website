import React from 'react'
import HeaderButtons from './HeaderButtons'
import ME from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'
import TypeAnimation from 'react-type-animation'
import './header.css'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Pariwesh Tamrakar</h1>
        <h5 className="text-light">
          <TypeAnimation
            cursor={true}
            sequence={[
              'Enthusiastic Dev',
              1000,
              'Full Stack Developer ',
              1000,
              'MERN Stack Dev',
              1000,
              'React Dev',
              1000,
            ]}
            repeat={Infinity}
          />
        </h5>
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
