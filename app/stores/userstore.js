import alt from '../alt'
import UserActions from '../actions/useractions'
import LocalProfile from '../sources/localprofile'

const profileLocalStorageKey = 'mxp-profile'

class UserStore {

  constructor() {
    
    this.state = LocalProfile.get()
    this.bindActions(UserActions)
    
  }
  
  onSync(profile) {
    this.setState({ fetching: true })
    
    Promise.resolve(profile)
      .then((profile) => {
        this.setState(profile)
        LocalProfile.set(this.state)
      })
      .then(() => {
        setTimeout(() => UserActions.syncComplete(), 500)
      })
  }
  
  onSyncComplete() {
    console.log(this.state)
    this.setState({ fetching: false })
  }

}

export default alt.createStore(UserStore, 'UserStore')