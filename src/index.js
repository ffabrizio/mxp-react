import React from 'react';
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Scroller from './components/scroller'
import Container from './components/container'
import Video from './components/video'
import Promo from './components/promo'
import Text from './components/text'

const modules = {
  'container' : Container,
  'video' : Video,
  'promo' : Promo,
  'text' : Text
}

const moduleMapper = (module) => {
  if (module.modules) module.props.children = module.modules.map(moduleMapper)
  
  return (
    React.createElement(modules[module.type], module.props)
  )
}

ReactDOM.render(
  
  <Scroller>
    <ReactCSSTransitionGroup
      transitionName="fade" 
      transitionAppear={true} 
      transitionAppearTimeout={500} 
      transitionEnterTimeout={500} 
      transitionLeaveTimeout={300}>
      <Container>
        { window.pageData.modules.map(moduleMapper) }
      </Container>
    </ReactCSSTransitionGroup>
  </Scroller>
  
  , document.getElementById('root')
)