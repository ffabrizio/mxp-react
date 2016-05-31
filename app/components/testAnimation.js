import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Motion, spring} from 'react-motion'
class TestAnimation extends Component {
  constructor(props) {
    super(props)
    
    
  }
  render() {

    return (
        <div className="module">
        
            <ReactCSSTransitionGroup
              transitionName="fade" 
              transitionAppear={true} 
              transitionAppearTimeout={500} 
              transitionEnterTimeout={500} 
              transitionLeaveTimeout={300}>

              <Motion defaultStyle={{x: 0,}} style={{x: spring(10)}}>
                {({x}) => <h1 style={{
                    WebkitTransform: `translate3d(${x}px, ${x}px, 0)`,
                    transform: `translate3d(${x}px, ${x}px, 0)`,
                  }} >{this.props.copy}</h1>
                }
              </Motion>
            
            </ReactCSSTransitionGroup>
            
        
      </div>
    )
  }
}

export default TestAnimation