import React from 'react'
import TimelineContent from './TimelineContent'
import { MdSchool } from 'react-icons/md'

const TimelineSection = () => {
  return (
    <div className="timeline">
      <div className="timeline__headers">
        <div className="timeline__header" data-text="&nbsp;Timeline">
          &nbsp;Timeline
        </div>
      </div>

      <div className="timeline__inner-layout">
        <div className="timeline__title">
          <div className="timeline__icon">
            <MdSchool />
          </div>
          <div className="timeline__small-title">Education</div>
        </div>
      </div>

      <div className="timeline__content">
        <TimelineContent
          year={'2021 - 2022'}
          title={'Full Stack Developer Course'}
          subTitle={'Dented Code Academy'}
          text={'MERN STACK'}
        />
        <TimelineContent
          year={'2019 - 2021'}
          title={'Master of Applied Information Technology'}
          subTitle={'Victoria University'}
          text={'AWARD: First Year Course Champion'}
        />
      </div>
    </div>
  )
}

export default TimelineSection
