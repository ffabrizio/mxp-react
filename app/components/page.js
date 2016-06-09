import React, {Component} from 'react'
import UserActions from '../actions/useractions'

class Page extends React.Component {

  componentDidMount() {
    UserActions.initStore()
  }

  render() {
    const build = (m) => {
      if (m.submodules) {
        m.props.children = m.submodules.map(build)
      }
      
      return React.createElement(this.props.modules[m.type], m.props)
    }

    return (
      <div className="page">
        {this.props.data.map(build)}
      </div>
  )}
}

export default Page