import React, {Component} from 'react'
import Container from './container'

class Scroller extends Component {
  
  constructor(props) {
    super(props)
    
    const modules = document.getElementsByClassName('module')
    const videos = document.getElementsByTagName('video')
    
    this.state = {
      modules,
      modulesInViewPort: [],
      videos,
      playingVideo: null
    }
    
    this.scroll = this.scroll.bind(this)
    
    window.addEventListener('scroll', this.scroll)
    document.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'video') {
        this.toggle(e.target)
      }
    }, false)
    
    setTimeout(() => {
      this.play(videos[0])
    }, 10)
  }
  
  play(v) {
    v.play().then(() => {
      if (this.playingVideo && this.playingVideo !== v) this.playingVideo.pause()
        this.playingVideo = v
      })
  }
  
  toggle(v) {
    if (v.paused) {
      this.play(v)
    } else {
      v.pause()
      this.playingVideo = v
    }
  }
  
  scroll() {
    this.modulesInViewPort = []
    let modules = [].slice.call(this.state.modules)
    
    modules.map((m) => {
      if (this.isElementInViewport(m)) { 
        this.modulesInViewPort.push(m)
      }
    })
    
    let videos = [].slice.call(this.state.videos)
    videos.map((v) => {
      if (this.isElementInViewport(v) &&
        !this.isElementInViewport(this.playingVideo) && 
        this.playingVideo !== v) {
        this.play(v)
      }
    })
    
  }
  
  isElementInViewport(el) {
    let rect = el.getBoundingClientRect()
    
    return rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
  }

  render() {
    
    return (
      
      <Container>
        {this.props.children}
      </Container>
      
    )
  }
}

export default Scroller
