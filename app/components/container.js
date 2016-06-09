import React, {Component} from 'react'
import AltContainer from 'alt-container'
import UserStore from '../stores/userstore'

class Container extends Component {
  

  render() {
    
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Container