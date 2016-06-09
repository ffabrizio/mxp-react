import React, {Component} from 'react'
import UserStore from '../stores/userstore'
import UserActions from '../actions/useractions'

// Inherit components from this if need to read or write the user data (accessible as this.state.user)
class ProfileComponent extends Component {

  componentDidMount() {
    UserStore.listen(this.onProfileChange.bind(this))
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onProfileChange.bind(this))
  }

  onProfileChange(state) {
    this.setState(state)
  }

}

export default ProfileComponent