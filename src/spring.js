import React, { useRef } from 'react'
import { animated } from 'react-spring'

import useFocus from './hooks/useFocus'
import { useStateContext } from './state'

const SledSpring = ({ values: { x, cursor }, index, bind, children }) => {
  const springRef = useRef()
  const [{ viewCount }] = useStateContext()
  useFocus(springRef)

  return (
    <animated.div
      {...bind()}
      ref={springRef}
      style={{
        position: 'absolute',
        top: 0,
        // transform: interpolate([x, sc], (x, sc) => `translate3d(${x}px,0,0) scale3d(${sc}, ${sc}, 1)`),
        transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
        width: '100%',
        height: '100%',
        willChange: 'transform',
        overflow: 'hidden',
        cursor
      }}
      tabIndex={index + 1}
    >
      {viewCount && children}
    </animated.div>
  )
}

export default SledSpring
