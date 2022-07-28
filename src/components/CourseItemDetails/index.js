import {Component} from 'react'

import './index.css'

const oUrl = 'https://apis.ccbp.in/te/courses'

class CourseItemDetails extends Component {
  state = {coursedData: []}

  componentDidMount() {
    this.getCoursedItemData()
  }

  getCoursedItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${oUrl}${id}`)
    const data = await response.json()
    const updatedData = {
      imageUrl: data.image_url,
      name: data.name,
      description: data.description,
      id: data.id,
    }
    this.setState({coursedData: updatedData})
  }

  renderCoursedItemDetails = () => {
    const {coursedData} = this.state
    const {imageUrl, description, name} = coursedData
    return (
      <div className="blog-info">
        <img className="blog-image" src={imageUrl} alt={name} />
        <h2 className="blog-details-title">{name}</h2>
        <p className="blog-content">{description}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="blog-container">{this.renderCoursedItemDetails()}</div>
    )
  }
}

export default CourseItemDetails
