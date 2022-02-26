import React from 'react'
import './timeline.css'

const TimelineContent = ({ year, title, subTitle, text }) => {
  return (
    <div className="timeline__contents">
      <div className="timeline__left-content">
        <p>{year}</p>
      </div>

      <div className="timeline__right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default TimelineContent
