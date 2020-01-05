import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { useStateContext } from './state'
import useDragGesture from './hooks/useDragGesture'
import useFocus from './hooks/useFocus'
import useCursor from './hooks/useCursor'
import useX from './hooks/useX'
import { useSliderStyles, useViewStyles } from './hooks/useContainerStyles'

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
    direction,
    dimensions: { width, height },
    config,
  }, dispatch] = useStateContext()

  const cursor = useCursor()
  const x = useX()

  const [props, set] = useSpring(() => ({
    x: 0,
    cursor,
    config,
    immediate: true
  }))
  const springRef = React.useRef()

  useFocus(springRef)

  const [dimensionsUpdated, setDimensionsUpdated] = React.useState(false)

  useEffect(() => {
    setDimensionsUpdated(true)
  }, [width, height])

  useEffect(() => {
    if (!dimensionsUpdated) return
    setDimensionsUpdated(false)
    set({
      x,
      immediate: true,
      onStart: null,
      onRest: null,
    })
  }, [x, dimensionsUpdated])

  useEffect(() => {
    if (dimensionsUpdated) return
    set({
      config,
      x,
      cursor,
      immediate: false,
      onStart() {
        dispatch({ type: 'SET_PAUSE', pause: true })
        if (typeof onAnimationStart === 'function') onAnimationStart()
      },
      onRest() {
        dispatch({ type: 'SET_PAUSE', pause: false })
        if (typeof onAnimationEnd === 'function') onAnimationEnd()
        if (currentIndex === viewCount - 1) {
          if (typeof onSledEnd === 'function') onSledEnd()
        }
      },
    })
  }, [x, currentIndex, dimensionsUpdated, viewCount, cursor])

  const bind = useDragGesture(set)

  const sliderStyles = useSliderStyles()
  const viewStyles = useViewStyles()

  return (
    <animated.div
      {...bind ? bind() : {}}
      className='sled-slider'
      ref={springRef}
      style={{
        ...sliderStyles,
        transform: direction === 'horizontal'
          ? props.x.to((x) => `translate3d(${x}px,0,0)`)
          : props.x.to((x) => `translate3d(0,${x}px,0)`),
        cursor: props.cursor,
      }}
    >
      {
        React.Children.map(children, child => (
          <div
            className="sled-element"
            style={viewStyles}
          >
            {child}
          </div>
        ))
      }
    </animated.div >
  )
}


export default SledSprings
