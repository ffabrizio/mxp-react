import alt from '../alt'

class UserActions {
  
  constructor() {
    
    this.generateActions (
      'sync',
      'syncComplete'
    )
        
  }
}

export default alt.createActions(UserActions)