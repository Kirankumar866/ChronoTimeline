import './index.css'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderingcards = () =>
    timelineItemsList.map(eachDetail => {
      switch (eachDetail.categoryId) {
        case 'COURSE':
          return (
            <CourseTimelineCard itemList={eachDetail} key={eachDetail.id} />
          )
        case 'PROJECT':
          return (
            <ProjectTimelineCard itemList={eachDetail} key={eachDetail.id} />
          )
        default:
          return null
      }
    })

  return (
    <div className="page-container">
      <h1>MY JOURNEY OF CCBP 4.0</h1>

      <div className="chrono-container">
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          enableOutline
          theme={{
            primary: '#0967d2',
            secondary: 'white',
            cardBgColor: 'white',
            titleColor: 'black',
            titleColorActive: '#0967d2',
          }}
          slideShow
          slideItemDuration={4500}
          slideShowType="reveal"
        >
          {renderingcards()}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
