import React, {Component} from 'react'
import Actions from '../actions/actions'

class Text extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      txt: ''
    }
  }
  
  handleKeyChange(event) {
    this.setState({
      txt: event.target.value,
    })
  }
  
  handleSubmit() {
    if (this.state.txt !== '') {
      Actions.sync({name: this.state.txt})
    }
  }

  render() {
    
    return (
      <div>
        <p>&nbsp;</p>
        Enter your name: <input type="text" onChange={this.handleKeyChange.bind(this)} />
        <button onClick={this.handleSubmit.bind(this)}>Click</button>
        <p>&nbsp;</p>
      </div>
    )
  }
}

export default Text