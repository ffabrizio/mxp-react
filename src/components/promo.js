import React, {Component} from 'react'

class Promo extends Component {
  

  render() {
    
    let userState = this.props.user || {}
    
    return (
      
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        { userState.name }
      </div>
      
    )
  }
}

export default Promo