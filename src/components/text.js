import React, {Component} from 'react'
import UserActions from '../actions/useractions'

class Text extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      txt: ''
    }
  }
  
  handleKeyChange = (event) => {
    this.setState({ txt: event.target.value })
  }
  
  handleSubmit = () => {
    if (this.state.txt !== '') {
      UserActions.sync({name: this.state.txt})
    }
  }

  render() {
    
    return (
      <div>
        <p>
          Enter your name: <input type="text" onChange={this.handleKeyChange} />
          <button onClick={this.handleSubmit}>Set</button>
        </p>
        <hr />
      </div>
    )
  }
}

export default Text