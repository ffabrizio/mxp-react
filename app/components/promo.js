import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import {Parallax, Background} from 'react-parallax'
import ProfileComponent from './profilecomponent'
import VisibilitySensor from './visibilitysensor'

class Promo extends ProfileComponent {
  
  constructor(props) {
    super(props)

    this.state = {
      style: {x: 0, y: 0},
      user: {}
    }
  }

  render() {

    let greet = <h2>{this.props.title}</h2>
    if (this.state.user && this.state.user.name) {
      greet = 
        <div><h2>{this.props.title}</h2>
          <strong><em>Hi { this.state.user.name }</em></strong>
        </div>
    }
    

    let onChange = (inView) => {
      if (inView) {
        this.setState( { style: { x: spring(0), y: spring(0) } } )
      } else {
        this.setState( { style: { x: spring(0), y: spring(100) } } )
      }
    }

    return (
      <VisibilitySensor partialVisibility={true} onChange={onChange}>
        <Motion key="3W0m" style={this.state.style}>
          {({x,y}) => 
          <Parallax strength={300} blur={100}>
            <Background>
                <img src={this.props.img} />
            </Background>
            <div className="module promo" style={{
                WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                transform: `translate3d(${x}px, ${y}px, 0)`,
              }}>
              { greet }
              <p>{this.props.content}</p>
            </div>
          </Parallax>
          }
        </Motion>
      </VisibilitySensor>
        
    )
  }
}

export default Promo