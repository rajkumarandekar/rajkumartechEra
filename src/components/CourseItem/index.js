import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {coursedDetails} = props
  const {name, id, logoURL} = coursedDetails

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={logoURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default CourseItem
