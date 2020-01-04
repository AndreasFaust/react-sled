import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { useStateContext } from './state'
import useDragGesture from './hooks/useDragGesture'
import usePrevious from './hooks/usePrevious'
import useFocus from './hooks/useFocus'
import dimensionsHaveChanged from './utils/dimensionsHaveChanged'


interface IProps {
  onAnimationStart(): void
  onAnimationEnd(): void
  onSledEnd(): void
  children?: React.ReactNode
}

const SledSprings: React.FC<IProps> = ({
  onAnimationStart,
  onAnimationEnd,
  onSledEnd,
  children
}) => {
  const [{
    currentIndex,
    viewCount,
    dimensions: { width, height },
    dragging,
    config,
  }, dispatch] = useStateContext()

  const prevWidth = usePrevious(width)
  const prevHeight = usePrevious(height)
  const [props, set] = useSpring(() => ({
    x: 0,
    config,
    immediate: true
  }))

  const springRef = React.useRef()

  useFocus(springRef)

  useEffect(() => {
    set({
      config,
    })
  }, [config])

  useEffect(() => {
    set({
      x: -currentIndex * width,
      immediate: dimensionsHaveChanged(width, prevWidth, height, prevHeight),
      onStart() {
        dispatch({ type: 'SET_PAUSE', pause: true })
        if (dimensionsHaveChanged(width, prevWidth, height, prevHeight)) return
        if (typeof onAnimationStart === 'function') onAnimationStart()
      },
      onRest() {
        dispatch({ type: 'SET_PAUSE', pause: false })
        if (dimensionsHaveChanged(width, prevWidth, height, prevHeight)) return
        if (typeof onAnimationEnd === 'function') onAnimationEnd()
        if (currentIndex === viewCount - 1) {
          if (typeof onSledEnd === 'function') onSledEnd()
        }
      },
    })
  }, [currentIndex, viewCount, width, prevWidth, height, prevHeight])

  const bind = useDragGesture(set)

  return (
    <animated.div
      {...bind ? bind() : {}}
      className='sled-slider'
      ref={springRef}
      style={{
        position: 'absolute',
        top: 0,
        transform: props.x.to((x) => `translate3d(${x}px,0,0)`),
        width: width * viewCount,
        height: '100%',
        willChange: 'transform',
        overflow: 'hidden',
        display: 'flex',
        cursor: dragging ? 'grab' : 'auto'
      }}
    >
      {React.Children.map(children, child => (
        <div
          className="sled-view"
          style={{
            width,
            height: '100%',
            position: 'relative',
          }}
        >
          {child}
        </div>
      ))}
    </animated.div>
  )
}

export default SledSprings
