// Write your code here
// Write your code here'
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {itemList} = props
  const {courseTitle, duration, description, tagsList} = itemList
  return (
    <div className="whole-container">
      <div className="heading-container">
        <h1 className="heading">{courseTitle}</h1>
        <p className="duration">
          <AiFillClockCircle className="clocksize" /> {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <ul>
        {tagsList.map(each => (
          <li className="name-container">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
