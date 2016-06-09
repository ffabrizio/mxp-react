import React, {Component} from 'react'
import ProfileComponent from './profilecomponent'
import UserActions from '../actions/useractions'

class Text extends ProfileComponent {
  constructor(props) {
    super(props)
    
    this.state = {
      txt: 'Your name'
    }
    
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleKeyChange = this.handleKeyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBlur(e) {
    e.target.value = this.state.txt
  }
  
  handleFocus(e) {
    e.target.value = ''
  }
  
  handleKeyChange(e) {
    this.setState({ txt: e.target.value })
  }
  
  handleSubmit(e) {
    if (e.key === 'Enter' && this.state.txt !== '') {
      UserActions.sync({ user: { name: this.state.txt }} )
      e.target.blur()
    }
  }
  
  render() {
    let input = (
        <input ref="input" className="name-input" type="text" 
          value={this.state.txt} 
          onBlur={this.handleBlur} 
          onFocus={this.handleFocus} 
          onKeyPress={this.handleSubmit} 
          onChange={this.handleKeyChange} />
      )
    
    
    return (
      <div>
        <p>
          {input}
        </p>
      </div>
    )
  }
}

export default Text