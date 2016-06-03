import React from 'react';
import ReactDOM from 'react-dom'
import Container from './components/container'
import Video from './components/video'
import Promo from './components/promo'
import Text from './components/text'
import TopNav from './components/topNav'
import TestAnimation from './components/testanimation'

window.pageData.moduleMap['title'] = TestAnimation
window.pageData.moduleMap['container'] = Container
window.pageData.moduleMap['video'] = Video
window.pageData.moduleMap['promo'] = Promo
window.pageData.moduleMap['text'] = Text
window.pageData.moduleMap['nav'] = TopNav

var moduleMapper = function(module) {
  if (module.modules) module.props.children = module.modules.map(moduleMapper);
  return React.createElement(window.pageData.moduleMap[module.type], module.props);
}

var modules = window.pageData.modules.map(moduleMapper);
var reactRoot = React.createElement('div', {}, modules);
ReactDOM.render(reactRoot, document.getElementById('root'))
