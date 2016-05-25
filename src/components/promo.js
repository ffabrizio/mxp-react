import React, {Component} from 'react'

class Promo extends Component {
  

  render() {
    
    let user = this.props.profile.user || {}
    let greet = <h2>{this.props.title}</h2>
    if (user.name) {
      greet = 
        <div><h2>{this.props.title}</h2>
          <strong><i>Hi { user.name }</i></strong>
        </div>
    }
    
    return (
      
      <div>
        { greet }
        <p>{this.props.content}</p>
        
      </div>
      
    )
  }
}

export default Promo