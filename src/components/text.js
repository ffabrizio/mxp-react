import React, {Component} from 'react'
import Actions from '../actions/actions'

class Text extends Component {
  

  render() {
    
    return (
      <div>
        <button onClick={() => Actions.sync({name: 'Fabio'})}>Click</button>
      </div>
    )
  }
}

export default Text