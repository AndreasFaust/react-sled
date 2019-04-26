import React from 'react'
import PropTypes from 'prop-types'
import { StateProvider } from './utils/useState'

// import Wrapper from './wrapper'

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT': return {
      ...state,
      currentIndex: (state.currentIndex + 1) % state.elementCount,
      prevIndex: state.currentIndex,
      pause: action.pause || state.pauses
    }
    case 'PREV': return {
      ...state,
      currentIndex: (state.currentIndex - 1 + state.elementCount) % state.elementCount,
      prevIndex: state.currentIndex,
      pause: action.pause || state.pauses
    }
    case 'GOTO': return {
      ...state,
      currentIndex: action.index,
      prevIndex: state.currentIndex,
      pause: action.pause || state.pauses
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
      ...rest
    }}>
      {children}
    </StateProvider>
  )
}

Sled.propTypes = {
  children: PropTypes.node,
  auto: PropTypes.number,
  config: PropTypes.object,
  goTo: PropTypes.number,
  keys: PropTypes.bool,
  pauseOnMouseOver: PropTypes.bool,
  dragDistance: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Sled.defaultProps = {
  children: null,
  auto: undefined,
  config: { mass: 1, tension: 210, friction: 20, clamp: true },
  goTo: undefined,
  keys: true,
  pauseOnMouseOver: true,
  dragDistance: '25ow'
}

export { Sled }
export { default as Views } from './views'
export { default as Control } from './control'
export { default as Progress } from './progress'
