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
  
  onSync(data) {
    setTimeout(() => UserActions.syncComplete(data), 500)
  }
  
  onSyncComplete(data) {
    let profile = this.extend(this.state, data)
    this.setState(profile)
    LocalProfile.set(profile)
  }

  extend(o, n) {
    Object.keys(n).forEach((key) => { o[key] = n[key] })
    return o
  }

}

export default alt.createStore(UserStore, 'UserStore')