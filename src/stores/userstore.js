import alt from '../alt'
import UserActions from '../actions/useractions'

class UserStore {
  
  constructor() {
    
    this.state = { }
    this.bindActions(UserActions)
    
  }
  
  onSync(data) {
    this.setState(data)
  }

}

export default alt.createStore(UserStore, 'UserStore')