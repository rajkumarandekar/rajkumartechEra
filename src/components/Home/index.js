import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CourseItem from '../CourseItem'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/te/courses'

class Home extends Component {
  state = {
    isLoading: true,
    courseData: [],
  }

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    const response = await fetch(teamsApiUrl)
    const fetchedData = await response.json()
    const formattedData = fetchedData.courses.map(course => ({
      name: course.name,
      id: course.id,
      logoURL: course.logo_url,
    }))
    this.setState({courseData: formattedData, isLoading: false})
  }

  renderCourseList = () => {
    const {courseData} = this.state

    return (
      <ul className="course-list">
        {courseData.map(team => (
          <CourseItem coursedDetails={team} key={team.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-route-container">
        <div className="course-list-container">
          <div className="ipl-dashboard-heading-container">
            <h1 className="ipl-dashboard-heading">Courses</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderCourseList()}
        </div>
      </div>
    )
  }
}

export default Home
