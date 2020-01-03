import React, { useRef } from 'react'
import { SpringValue, animated } from 'react-spring'

import useFocus from './hooks/useFocus'
import useZIndex from './hooks/useZIndex'

interface IProps {
  values: {
    x: SpringValue
    // cursor: SpringValue
  }
  index: number
  bind: any
  children?: React.ReactNode
}

const SledSpring: React.FC<IProps> = ({
  values: { x }, index, bind, children
}) => {
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
        transform: x.to((x) => `translate3d(${x}px,0,0)`),
        width: '100%',
        height: '100%',
        willChange: 'transform',
        overflow: 'hidden',
        // cursor
      }}
    >
      {children}
    </animated.div>
  )
}

export default SledSpring
