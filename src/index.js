import React from 'react'
import PropTypes from 'prop-types'
import { StateProvider } from './utils/useState'

// import Wrapper from './wrapper'

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT': return {
      ...state,
      currentIndex: (state.currentIndex + 1) % state.elementCount,
      pause: action.pause || state.pauses
    }
    case 'PREV': return {
      ...state,
      currentIndex: (state.currentIndex - 1 + state.elementCount) % state.elementCount,
      pause: action.pause || state.pauses
    }
    case 'GOTO': return {
      ...state,
      currentIndex: action.index,
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
    default: return state
  }
}

const Viewpager = (props) => {
  const { children, ...rest } = props
  return (
    <StateProvider reducer={reducer} initialState={{
      currentIndex: 0,
      pause: false,
      elementCount: 0,
      hasFocus: true,
      ...rest
    }}>
      {children}
    </StateProvider>
  )
}

Viewpager.propTypes = {
  children: PropTypes.node,
  wrapperWidth: PropTypes.number,
  wrapperHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  auto: PropTypes.number,
  config: PropTypes.object,
  goTo: PropTypes.number,
  keys: PropTypes.bool,
  pauseOnMouseOver: PropTypes.bool,
  dragDistance: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Viewpager.defaultProps = {
  children: null,
  wrapperWidth: undefined,
  wrapperHeight: '50%',
  auto: undefined,
  config: { mass: 1, tension: 210, friction: 20, clamp: true },
  goTo: undefined,
  keys: true,
  pauseOnMouseOver: true,
  dragDistance: '25ow'
}

export { Viewpager }
export { default as Views } from './views'
export { default as Control } from './control'
export { default as Progress } from './progress'
