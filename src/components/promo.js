import React, {Component} from 'react'

class Promo extends Component {
  greeter() {
    let greet = <h2 key="greet">{this.props.title}</h2>
    if (this.props.profile.user.name) {
      greet = 
        <div key="greet"><h2>{this.props.title}</h2>
          <strong><i key="name">Hi { this.props.profile.user.name }</i></strong>
        </div>
    }
    
    return greet
  }
  render() {

    return (
        <div className="module">
        { this.greeter() }
        <p>{this.props.content}</p>
        
      </div>
    )
  }
}

export default Promo