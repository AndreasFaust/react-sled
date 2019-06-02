import React from 'react'
import PropTypes from 'prop-types'
import { StateProvider, reducer } from './state'

const Sled = (props) => {
  const { children, ...rest } = props
  return (
    <StateProvider reducer={reducer} initialState={{
      currentIndex: 0,
      prevIndex: undefined,
      pause: false,
      viewCount: 0,
      hasFocus: false,
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
  onSledEnd: PropTypes.func
}

Sled.defaultProps = {
  children: null,
  onSledEnd: null
}

export { Sled }
export { default as Views } from './views'
export { default as Control } from './control'
export { default as Progress } from './progress'
