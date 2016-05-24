import React, {Component} from 'react'

class Video extends Component {
  
  
  

  render() {

    let mp4 = this.props.videoUrl
    let ogv = this.props.videoUrl.replace('.mp4', '.ogv')
    let webm = this.props.videoUrl.replace('.mp4', '.webm')
    
    return (
      
      <video id={this.props.id}>
        <source src={mp4} type="video/mp4" />
        <source src={ogv} type="video/ogv" />
        <source src={webm} type="video/webm" />
      </video>
      
    )
  }
}

export default Video