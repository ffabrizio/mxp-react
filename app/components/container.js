import React, {Component} from 'react'

class Container extends Component {
  
  render() {
    
    return (
      <section>
        {this.props.children}
      </section>
    )
  }
}

export default Container