import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import VisibilitySensor from 'react-visibility-sensor'

class Promo extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      style: {x: 0, y: 0}
    }
  }
  
  render() {

    let greet = <h2>{this.props.title}</h2>
    if (this.props.profile.user.name) {
      greet = 
        <div><h2>{this.props.title}</h2>
          <strong><em>Hi { this.props.profile.user.name }</em></strong>
        </div>
    }
    

    let onChange = (inView) => {
      if (inView) {
        this.setState( { style: { x: spring(0), y: spring(0) } } )
      } else {
        this.setState( { style: { x: spring(5), y: spring(5) } } )
      }
    }

    return (
      <VisibilitySensor onChange={onChange}>
        <Motion key="3W0m" style={this.state.style}>
          {({x,y}) => 
          <div className="module" style={{
              WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
              transform: `translate3d(${x}px, ${y}px, 0)`,
            }}>
            { greet }
            <p>{this.props.content}</p>
          </div>
          }
        </Motion>
      </VisibilitySensor>
        
    )
  }
}

export default Promo