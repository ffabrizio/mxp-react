import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
class TestAnimation extends Component {
  constructor(props) {
    super(props)
    
    
  }
  render() {

    return (
      <Motion key="4Fe4" defaultStyle={{x: -200, y: -500}} style={{x: spring(10), y: spring(20)}}>
        {({x, y}) => <h1 style={{
            WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
            transform: `translate3d(${x}px, ${y}px, 0)`,
          }} >{this.props.copy}</h1>
        }
      </Motion>
    )
  }
}

export default TestAnimation