import alt from '../alt'

class UserActions {
  
  constructor() {
    
    this.generateActions (
      'initStore',
      'sync',
      'syncComplete'
    )
        
  }
}

export default alt.createActions(UserActions)