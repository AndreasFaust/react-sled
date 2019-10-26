import React, { useRef } from 'react'
import { animated } from 'react-spring'

import useFocus from './hooks/useFocus'
import useZIndex from './hooks/useZIndex'

const SledSpring = ({ values: { x, cursor }, index, bind, children }) => {
  const springRef = useRef()

  useFocus(springRef)
  const zIndex = useZIndex(index)

  return (
    <animated.div
      {...bind ? bind() : {}}
      className='sled-view'
      ref={springRef}
      style={{
        position: 'absolute',
        zIndex,
        top: 0,
        // transform: interpolate([x, sc], (x, sc) => `translate3d(${x}px,0,0) scale3d(${sc}, ${sc}, 1)`),
        transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
        width: '100%',
        height: '100%',
        willChange: 'transform',
        overflow: 'hidden',
        cursor
      }}
    >
      {children}
    </animated.div>
  )
}

export default SledSpring
