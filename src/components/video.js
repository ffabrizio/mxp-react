import React, {Component} from 'react'

class Video extends Component {
  

  render() {

    return (
      
      <video id={this.props.id}>
        <source src={this.props.videoUrl} type="video/mp4" />
      </video>
      
    )
  }
}

export default Video