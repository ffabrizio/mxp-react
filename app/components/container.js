import React, {Component} from 'react'
import AltContainer from 'alt-container'
import UserStore from '../stores/userstore'

class Container extends Component {
  

  render() {
    
    return (
      <AltContainer
        stores={[UserStore]}
        inject={{
          profile: () => UserStore.getState()
        }}>
        {this.props.children}
      </AltContainer>
    )
  }
}

export default Container