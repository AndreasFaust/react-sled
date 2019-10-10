import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useSprings } from 'react-spring'

import { useStateContext } from './state'
import useDragGesture from './hooks/useDragGesture'
import usePrevious from './hooks/usePrevious'
import SledSpring from './spring'

const SledSprings = ({
  onAnimationStart,
  onAnimationEnd,
  onSledEnd,
  children
}) => {
  const [{
    currentIndex,
    prevIndex,
    viewCount,
    width,
    height,
    dragging,
    config
  }, dispatch] = useStateContext()

  const [props, set] = useSprings(children.length, i => ({
    x: (i - currentIndex) * width,
    sc: 1,
    config,
    cursor: 'auto',
  }))

  const prevWidth = usePrevious(width)
  const prevHeight = usePrevious(height)

  useEffect(() => {
    set(() => ({
      cursor: dragging ? 'grab' : 'auto'
    }))
  }, [dragging, set])

  useEffect(() => {
    set((i) => ({
      x: (i - currentIndex) * width,
      immediate: prevIndex === undefined,
      onStart() {
        if (prevWidth !== width || prevHeight !== height) return // prevent callbacks, if just the sled is resized
        if (i === currentIndex) {
          dispatch({ type: 'SET_PAUSE', pause: true })
          if (!this.immediate) {
            if (typeof onAnimationStart === 'function') onAnimationStart()
          }
        }
      },
      onRest() {
        if (prevWidth !== width || prevHeight !== height) return // prevent callbacks, if just the sled is resized
        if (i === currentIndex) {
          dispatch({ type: 'SET_PAUSE', pause: false })
          // dispatch({ type: 'SET_RESTED_INDEX' })
          if (!this.immediate) {
            if (typeof onAnimationEnd === 'function') onAnimationEnd()
          }
          if (currentIndex === viewCount - 1) {
            if (typeof onSledEnd === 'function') onSledEnd()
          }
        }
      },
    }))
  }, [currentIndex, dispatch, height, onAnimationEnd, onAnimationStart, onSledEnd, prevHeight, prevIndex, prevWidth, set, viewCount, width])

  useEffect(() => {
    set(() => ({ config }))
  }, [config, set])

  const bind = useDragGesture(set)

  return props.map((prop, index) => (
    <SledSpring
      key={index}
      values={prop}
      bind={bind}
      index={index}
    >
      {children[index]}
    </SledSpring>
  ))
}

export default SledSprings
