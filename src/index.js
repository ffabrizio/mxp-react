import React from 'react';
import ReactDOM from 'react-dom';
import PageCoordinator from './pageCoordinator'
import Container from './components/container'
import _vp from 'is-in-viewport'

let pageData = {
  modules: [
   { type: 'text', props: {key: '10'} },
   { type: 'container', props: { key: '0'}, modules: [
     { type: 'container', props: { key: '01'}, modules: [
      { type: 'promo', props: { key: '000002', title: '00AAAA', content: '00BBBB ' } }
    ]}
   ]},
   { type: 'video',  props: { key: '1', videoUrl: 'http://cdnlive.syzygy.net/mazda-videos/mme/960/2519425312458647946.webm' } }, 
   { type: 'promo', props: { key: '2', title: 'AAAA', content: 'BBBB ' } },
   { type: 'video',props: { key: '3',  videoUrl: 'http://cdnlive.syzygy.net/mazda-videos/mme/960/2519562740232961572.webm' } },
   { type: 'promo', props: { key: '4',  title: 'CCCCC', content: 'DDDDD ' } },
   { type: 'video', props: { key: '5',videoUrl: 'http://cdnlive.syzygy.net/mazda-videos/mme/960/2519573017122381411.webm' } },
   { type: 'promo', props: { key: '6',title: 'EEEEE', content: 'FFFFF ' } },
   { type: 'video', props: { key: '7', videoUrl: 'http://cdnlive.syzygy.net/mazda-videos/mme/960/2520584847651543502.webm' } },
   { type: 'promo', props: {key: '8', title: 'HHHHH', content: 'GGGGG ' } }
  ]
}

ReactDOM.render(
  <Container>
    { pageData.modules.map(PageCoordinator) }
  </Container>
  , document.getElementById('root')
)

window.v = $('video:in-viewport()').get(0)
window.v.play()
  
$(window).scroll(() => {
  
  let v = $('video:in-viewport()').get(0)
  if (v && window.v !== v) {
    v.play().then(() => {
      window.v.pause()
      window.v = v
    })
  }
  
})