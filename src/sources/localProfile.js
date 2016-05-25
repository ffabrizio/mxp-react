import uuid from 'uuid'

const profileLocalStorageKey = 'mxp-profile'

class LocalProfile {

  get() {
    
    let profile = localStorage.getItem(profileLocalStorageKey)
    if (profile === null) {
      profile = this.getInitialProfile()
      localStorage.setItem(profileLocalStorageKey, JSON.stringify(profile))
    } else {
      profile = JSON.parse(profile)
    }
    
    return profile
  }
  
  set(data) {
    if (typeof data === 'object')
      localStorage.setItem(profileLocalStorageKey, JSON.stringify(data))
  }
  
  getInitialProfile() {
    
    return {
      id: uuid.v1(),
      user: {
        name: '',
        location: '',
        dealer: ''
      },
      appState: {
        
      },
      sessionStart: new Date(),
      previousVisits: 0,
      lastVisit: null,
      interests: []
    }
  }
  
}

export default new LocalProfile()
