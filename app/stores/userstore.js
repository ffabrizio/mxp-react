import alt from '../alt'
import UserActions from '../actions/useractions'
import LocalProfile from '../sources/localprofile'

const profileLocalStorageKey = 'mxp-profile'

class UserStore {

  constructor() {
    
    this.state = { }
    this.bindActions(UserActions)
    
  }

  onInitStore() {
    setTimeout(() => UserActions.syncComplete(LocalProfile.get()), 500)
  }
  
  onSync(profile) {
    setTimeout(() => UserActions.syncComplete(profile), 500)
  }
  
  onSyncComplete(profile) {
    this.setState(profile)
    LocalProfile.set(profile)
  }

}

export default alt.createStore(UserStore, 'UserStore')