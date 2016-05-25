import alt from '../alt'
import UserActions from '../actions/useractions'
import LocalProfile from '../sources/localprofile'

const profileLocalStorageKey = 'mxp-profile'

class UserStore {

  constructor() {
    
    this.state = LocalProfile.get()
    this.bindActions(UserActions)
    
  }
  
  onSync(data) {
    this.setState(data)
    LocalProfile.set(this.state)
  }

}

export default alt.createStore(UserStore, 'UserStore')