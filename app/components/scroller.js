import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
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
    }
  }
  
  transitionEnter() {
    return {
      WebkitTransform: `translate3d(${spring(0)}px, ${spring(0)}px, 0)`,
    }
  }
  
  transitionExit() {
    return {
      WebkitTransform: `translate3d(${spring(20)}px, ${spring(0)}px, 0)`,
    }
  }
  
  scroll() {
    this.modulesInViewPort = []
    let modules = [].slice.call(this.state.modules)
    
    modules.map((m) => {
      if (this.isElementInViewport(m)) { 
        this.modulesInViewPort.push(m)
        m.className = 'module active'
        // spring(10).then((x) => { 
        // m.style={
        //     WebkitTransform: `translate3d(${x}px, ${x}px, 0)`,
        //     transform: `translate3d(${x}px, ${x}px, 0)`,
        //   }
        // })
      } else {
        m.className = 'module inactive'
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
    if (!el) return false
    let rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || doc.documentElement.clientWidth,
        vHeight  = (window.innerHeight || doc.documentElement.clientHeight),
        efp      = (x, y) => { return document.elementFromPoint(x, y) }     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 10 
            || rect.left > vWidth || rect.top > vHeight -10)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    )
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
