import React, {Component} from 'react'
import VisibilitySensor from './visibilitysensor'

class Video extends Component {
  
  constructor(props) {
    super(props)
    
    this.toggle = this.toggle.bind(this)  
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }
  
  
  toggle() {
    if (this.refs.video.paused) {
      this.play()
    } else {
      this.pause()
    }
  }
  
  play() {
    this.refs.video.play().then(() => {
      if (window.currentVideo && window.currentVideo !== this.refs.video) {
        window.currentVideo.pause()
      }
      window.currentVideo = this.refs.video
    })
  }
  
  pause() {
    setTimeout(() => this.refs.video.pause(), 100)
  }
  
  render() {

    let mp4 = this.props.videoUrl
    let ogv = this.props.videoUrl.replace('.mp4', '.ogv')
    let webm = this.props.videoUrl.replace('.mp4', '.webm')
    let poster = this.props.videoUrl
      .replace('/960/', '/')
      .replace('.mp4', '.jpg')
    
    let onChange = (inView) => {
      if (inView) {
        this.play()
      } else {
        this.pause()
      }
    }
    
    return (
      <VisibilitySensor partialVisibility={true} onChange={onChange}>
        <video ref="video" width="400" poster={poster} onClick={this.toggle}>
          <source src={mp4} type="video/mp4" />
          <source src={ogv} type="video/ogv" />
          <source src={webm} type="video/webm" />
        </video>
      </VisibilitySensor>
    )
  }
}

export default Video