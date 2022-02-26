import React, { useState } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'
import './scroll.css'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 1000) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  //   window.addEventListener('scroll', toggleVisible)

  return (
    <div className="scroll__button">
      <FaAngleDoubleUp
        className="scroll-button-icon"
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </div>
  )
}

export default ScrollButton
