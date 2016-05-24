import React, {Component} from 'react'

class Promo extends Component {
  

  render() {
    
    let userState = this.props.user || {}
    let greet = <p></p>
    if (userState.name) {
      greet = <p>Hi { userState.name }</p>
    }
    
    return (
      
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        { greet }
      </div>
      
    )
  }
}

export default Promo