import React, { useEffect, useRef } from 'react'
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
    config
  }] = useStateContext()

  useEffect(() => {
    setX(true)
  }, [width, height])

  useEffect(() => {
    setX(prevIndex === undefined)
  }, [currentIndex])

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
    cursor: 'grab'
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
