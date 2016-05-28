import React from 'react';
import ReactDOM from 'react-dom';
import PageCoordinator from './pageCoordinator'
import Scroller from './components/scroller'

let defaultTxt = ['Aenean consectetur tincidunt efficitur. Vivamus a justo et mi dapibus fringilla. Maecenas cursus arcu vel mauris efficitur vestibulum. Morbi quis leo in purus cursus vehicula. Ut dui ante, maximus vel nunc sed, mollis luctus mi. In at velit et ipsum euismod sodales id eget metus. Duis elementum nulla sit amet ligula pharetra congue. Donec sit amet nisl sed purus ornare rutrum. Maecenas vitae feugiat magna, nec maximus est.']

let pageData = {
  modules: [
   { type: 'text', props: {key: '10'} },
   { type: 'container', props: { key: '0'}, modules: [
     { type: 'container', props: { key: '01'}, modules: [
      { type: 'promo', props: { key: '000002', title: 'Promo title', content: defaultTxt[0] } }
    ]}
   ]},
   { type: 'video',  props: { key: '1', videoUrl: 'http://cdnlive.syzygy.net/mazda-videos/mme/960/2519425312458647946.mp4' } }, 
   { type: 'promo', props: { key: '2', title: 'Promo title', content: defaultTxt[0] } },
   { type: 'video',props: { key: '3', videoUrl: 'http://cdnlive.syzygy.net/mazda-videos/mme/960/2519562740232961572.mp4' } },
   { type: 'promo', props: { key: '4', title: 'Promo title', content: defaultTxt[0] } },
   { type: 'video', props: { key: '5', videoUrl: 'http://cdnlive.syzygy.net/mazda-videos/mme/960/2519573017122381411.mp4' } },
   { type: 'promo', props: { key: '6', title: 'Promo title', content: defaultTxt[0] } },
   { type: 'video', props: { key: '7', videoUrl: 'http://cdnlive.syzygy.net/mazda-videos/mme/960/2520584847651543502.mp4' } },
   { type: 'promo', props: {key: '8', title: 'Promo title', content: defaultTxt[0] } }
  ]
}

ReactDOM.render(
  <Scroller>
    { pageData.modules.map(PageCoordinator) }
  </Scroller>
  , document.getElementById('root')
)