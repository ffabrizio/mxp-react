import React, {Component} from 'react'
import VisibilitySensor from './visibilitysensor'

class Image extends Component {
  
  constructor(props) {
    super(props)
    this.state = { loaded: false, src: this.props.loader }
  }
  

  render() {
    
    let onChange = (inView) => {
      if (this.state.loaded === false) {
        if (inView) {
          this.setState( { loaded: true, src: this.props.src })
        }
      }
    }
    
    return (
      <VisibilitySensor onChange={onChange}>
        <img ref="img" src={this.state.src} />
      </VisibilitySensor>
    )
  }
}

export default Image