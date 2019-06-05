import React, { useEffect } from 'react'
import { useSprings } from 'react-spring'

import { useStateContext } from './state'
import useDragGesture from './hooks/useDragGesture'
import SledSpring from './spring'

const SledSprings = ({ children }) => {
  const [{
    currentIndex,
    prevIndex,
    width,
    height,
    dragging,
    config
  }, dispatch] = useStateContext()

  useEffect(() => {
    setX(true)
  }, [width, height])

  useEffect(() => {
    set(() => ({ cursor: dragging ? 'grab' : 'auto' }))
  }, [dragging])

  useEffect(() => {
    setX(prevIndex === undefined)
  }, [currentIndex])

  useEffect(() => {
    set(i => ({ config }))
  }, [config])

  function setX (immediate) {
    set(i => ({
      x: (i - currentIndex) * width,
      immediate
    }))
  }

  const [props, set] = useSprings(children.length, i => ({
    x: i * width,
    sc: 1,
    immediate: true,
    config,
    cursor: 'auto',
    onStart: (a1, a2, a3) => {
      if (i === children.length - 1) {
        dispatch({ type: 'SET_PAUSE', pause: true })
      }
    },
    onRest: (a1, a2, a3) => {
      if (i === children.length - 1) {
        dispatch({ type: 'SET_PAUSE', pause: false })
        dispatch({ type: 'SET_RESTED_INDEX' })
      }
    }
  }))

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
