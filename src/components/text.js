import React, {Component} from 'react'
import UserActions from '../actions/useractions'

class Text extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      txt: this.props.profile.user.name
    }
  }
  
  handleKeyChange = (event) => {
    this.setState({ txt: event.target.value })
  }
  
  handleSubmit = () => {
    if (this.state.txt !== '') {
      UserActions.sync({ user: { name: this.state.txt }} )
    }
  }

  render() {
    
    return (
      <div>
        <p>
          Enter your name: <input type="text" value={this.state.txt} onChange={this.handleKeyChange} />
          <button onClick={this.handleSubmit}>Set</button>
        </p>
        <hr />
      </div>
    )
  }
}

export default Text