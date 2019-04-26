import React from 'react'
import PropTypes from 'prop-types'
import { StateProvider } from './utils/state'

// import Wrapper from './wrapper'

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT': return {
      ...state,
      currentIndex: (state.currentIndex + 1) % state.elementCount,
      prevIndex: state.currentIndex,
      pause: action.pause || state.pause
    }
    case 'PREV': return {
      ...state,
      currentIndex: (state.currentIndex - 1 + state.elementCount) % state.elementCount,
      prevIndex: state.currentIndex,
      pause: action.pause || state.pause
    }
    case 'GOTO': return {
      ...state,
      currentIndex: action.index,
      prevIndex: state.currentIndex,
      pause: action.pause || state.pause
    }
    case 'SET_PAUSE': return {
      ...state,
      pause: action.pause
    }
    case 'ELEMENT_COUNT': return {
      ...state,
      elementCount: action.count
    }
    case 'SET_FOCUS': return {
      ...state,
      hasFocus: action.focus
    }
    case 'SET_MOUSEOVER': return {
      ...state,
      mouseover: action.mouseover
    }
    case 'SET_DIMENSIONS': return {
      ...state,
      width: action.width,
      height: action.height
    }
    default: return state
  }
}

const Sled = (props) => {
  const { children, ...rest } = props
  return (
    <StateProvider reducer={reducer} initialState={{
      currentIndex: 0,
      prevIndex: undefined,
      pause: false,
      elementCount: 0,
      hasFocus: true,
      mouseover: false,
      width: 0,
      height: 0,
      ...rest
    }}>
      {children}
    </StateProvider>
  )
}

Sled.propTypes = {
  children: PropTypes.node,
  autoPlay: PropTypes.number,
  config: PropTypes.object,
  keyboard: PropTypes.bool,
  pauseOnMouseOver: PropTypes.bool,
  dragDistance: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Sled.defaultProps = {
  children: null,
  autoPlay: undefined,
  config: { mass: 1, tension: 210, friction: 20, clamp: true },
  keyboard: true,
  pauseOnMouseOver: true,
  dragDistance: '25ow'
}

export { Sled }
export { default as Views } from './views'
export { default as Control } from './control'
export { default as Progress } from './progress'
