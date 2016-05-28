import React, {Component} from 'react'

class Promo extends Component {

  render() {
    let greet = <h2>{this.props.title}</h2>
    if (this.props.profile.user.name) {
      greet = 
        <div><h2>{this.props.title}</h2>
          <strong><i>Hi { this.props.profile.user.name }</i></strong>
        </div>
    }
    
    return (
      
      <div className="module">
        { greet }
        <p>{this.props.content}</p>
        
      </div>
      
    )
  }
}

export default Promo