import React, { useEffect } from 'react'
import { useSprings } from 'react-spring'

import { useStateContext } from './state'
import useDragGesture from './hooks/useDragGesture'
import usePrevious from './hooks/usePrevious'
import SledSpring from './spring'

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
    prevIndex,
    viewCount,
    dimensions: { width, height },
    dragging,
    config
  }, dispatch] = useStateContext()

  const prevWidth = usePrevious(width)
  const prevHeight = usePrevious(height)

  const [props, set] = useSprings(React.Children.count(children), i => ({
    x: (i - currentIndex) * width,
    // scale: 1,
    config,
    // cursor: 'auto',
    immediate: true
  }))

  useEffect(() => {
    set(() => ({
      config,
      // cursor: dragging ? 'grab' : 'auto'
    }))
  }, [config, dragging])

  useEffect(() => {
    console.log(currentIndex)
    set((i) => ({
      x: (i - currentIndex) * width,
      immediate: false,
      onStart() {
        if (prevWidth !== width || prevHeight !== height) return // prevent callbacks, if just the sled is resized
        if (i === currentIndex) {
          dispatch({ type: 'SET_PAUSE', pause: true })
          if (typeof onAnimationStart === 'function') onAnimationStart()
        }
      },
      onRest() {
        if (prevWidth !== width || prevHeight !== height) return // prevent callbacks, if just the sled is resized
        if (i === currentIndex) {
          dispatch({ type: 'SET_PAUSE', pause: false })
          if (typeof onAnimationEnd === 'function') onAnimationEnd()
          if (currentIndex === viewCount - 1) {
            if (typeof onSledEnd === 'function') onSledEnd()
          }
        }
      },
    }))
  }, [currentIndex])

  const bind = useDragGesture(set)

  return (
    <>{
      props.map((prop, index) => (
        <SledSpring
          key={index}
          values={prop}
          bind={bind}
          index={index}
        >
          {children[index]}
        </SledSpring>
      ))
    }</>
  )
}

export default SledSprings
