import alt from '../alt'
import Actions from '../actions/actions'

class UserStore {
  
  constructor() {
    
    this.state = { }
    this.bindActions(Actions)
    
  }
  
  onSync(data) {
    this.setState(data)
  }

}

export default alt.createStore(UserStore, 'UserStore')