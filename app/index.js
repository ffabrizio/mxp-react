import React from 'react';
import ReactDOM from 'react-dom'
import Container from './components/container'
import Video from './components/video'
import Promo from './components/promo'
import Text from './components/text'
import TopNav from './components/topNav'
import TestAnimation from './components/testanimation'

window.pageData.moduleMap['package1.title'] = TestAnimation
window.pageData.moduleMap['package1.container'] = Container
window.pageData.moduleMap['package1.video'] = Video
window.pageData.moduleMap['package1.promo'] = Promo
window.pageData.moduleMap['package1.text'] = Text
window.pageData.moduleMap['package1.nav'] = TopNav

var moduleMapper = function(module) {
  if (module.modules) module.props.children = module.modules.map(moduleMapper);
  return React.createElement(window.pageData.moduleMap[module.type], module.props);
}

var modules = window.pageData.modules.map(moduleMapper);
var reactRoot = React.createElement('div', {}, modules);
ReactDOM.render(reactRoot, document.getElementById('root'))
