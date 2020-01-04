import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { useStateContext } from './state'
import useDragGesture from './hooks/useDragGesture'
import usePrevious from './hooks/usePrevious'
import useFocus from './hooks/useFocus'
import { useSliderStyles, useViewStyles } from './hooks/useContainerStyles'
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
    direction,
    dimensions: { width, height },
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
      x: direction === 'horizontal'
        ? -currentIndex * width
        : -currentIndex * height,
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
  }, [currentIndex, viewCount, width, prevWidth, height, prevHeight, direction])

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
          : props.x.to((x) => `translate3d(0,${x}px,0)`)
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
