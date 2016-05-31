import React, {Component} from 'react'

class Promo extends Component {
  
  render() {

    let greet = <h2>{this.props.title}</h2>
    if (this.props.profile.user.name) {
      greet = 
        <div key={this.props.profile.user.name}><h2>{this.props.title}</h2>
          <strong><em>Hi { this.props.profile.user.name }</em></strong>
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