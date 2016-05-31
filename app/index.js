import React from 'react';
import ReactDOM from 'react-dom'

import Container from './components/container'
import Video from './components/video'
import Promo from './components/promo'
import Text from './components/text'
import TopNav from './components/topNav'
import TestAnimation from './components/testanimation'

const moduleMap = {
  'container' : Container,
  'video' : Video,
  'promo' : Promo,
  'text' : Text,
  'nav' : TopNav
}

const moduleMapper = (module) => {
  if (module.modules) module.props.children = module.modules.map(moduleMapper)
  
  return (
      React.createElement(moduleMap[module.type], module.props)
  )
}

const modules = window.pageData.modules.map(moduleMapper)

ReactDOM.render(
  <div>
    <TestAnimation copy="Welcome to POC III" />
    <Container>
      { modules }
    </Container>
  </div>
  , document.getElementById('root')
)