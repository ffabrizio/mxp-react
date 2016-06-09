import React, {Component} from 'react'
import AltContainer from 'alt-container'
import UserStore from '../stores/userstore'
import UserActions from '../actions/useractions'

class ProfileComponent extends Component {

  componentDidMount() {
    UserStore.listen(this.onProfileChange.bind(this))
    UserActions.initStore()
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onProfileChange.bind(this))
  }

  onProfileChange(state) {
    this.setState(state)
  }

}

export default ProfileComponent