import React, {Component} from 'react'

class Promo extends Component {
  

  render() {
    
    let userState = this.props.user || {}
    let greet = <h2>{this.props.title}</h2>
    if (userState.name) {
      greet = <div><h2>{this.props.title}</h2><strong><i>Hi { userState.name }</i></strong></div>
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