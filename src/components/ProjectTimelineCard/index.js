// Write your code here
// Write your code here'
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {itemList} = props
  const {projectTitle, duration, description, imageUrl, projectUrl} = itemList
  return (
    <div className="project-container">
      <img src={imageUrl} className="image" alt="project" />
      <div className="heading-container">
        <h1 className="heading"> {projectTitle}</h1>
        <p className="duration">
          <AiFillCalendar className="clocksize" /> {duration}
        </p>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
