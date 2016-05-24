import React from 'react'
import Wrapper from './components/wrapper'
import Video from './components/video'
import Promo from './components/promo'
import Text from './components/text'

const modules = {
  'wrapper' : Wrapper,
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

export default moduleMapper