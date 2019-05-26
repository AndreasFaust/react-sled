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
  }] = useStateContext()

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
    cursor: 'auto'
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
