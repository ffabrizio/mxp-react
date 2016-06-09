import React from 'react';
import ReactDOM from 'react-dom'
import Page from './components/page'
import Container from './components/container'
import Video from './components/video'
import Promo from './components/promo'
import Text from './components/text'
import TopNav from './components/topnav'
import TestAnimation from './components/testanimation'

window.mxp.modules['title'] = TestAnimation
window.mxp.modules['container'] = Container
window.mxp.modules['video'] = Video
window.mxp.modules['promo'] = Promo
window.mxp.modules['text'] = Text
window.mxp.modules['nav'] = TopNav

console.log('mxp', window.mxp)

ReactDOM.render(
  <Page
    modules={window.mxp.modules}
    data={window.mxp.data}
  ></Page>, window.mxp.mountPoint)
