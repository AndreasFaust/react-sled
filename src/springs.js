import React, { useEffect, useRef } from 'react'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import useInterval from './utils/useInterval'
import { useStateContext } from './utils/useState'

const ViewpagerSprings = ({
  children,
  width,
  height
}) => {
  const [{ currentIndex, prevIndex, auto, pause, mouseover, config, dragDistance }, dispatch] = useStateContext()
  const indexRef = useRef(0)
  const widthRef = useRef(width)
  const distanceRef = useRef()

  useEffect(() => {
    function getDistanceRef (distance) {
      switch (typeof distance) {
        case 'number': return distance
        case 'string':
          if (distance.indexOf('ow') >= 0) {
            return (width / 100) * +distance.replace('ow', '')
          }
          return 25
        default:
          return 25
      }
    }
    distanceRef.current = getDistanceRef(dragDistance)
  }, [dragDistance, width])

  useEffect(() => {
    widthRef.current = width
    setX()
  }, [width])

  useEffect(() => {
    setX()
    indexRef.current = currentIndex
  }, [currentIndex])

  useInterval(() => {
    dispatch({ type: 'NEXT' })
  }, !pause && !mouseover ? auto : null)

  function setX () {
    set(i => ({
      x: (i - currentIndex) * width,
      immediate: prevIndex === undefined
    }))
  }

  const [props, set] = useSprings(children.length, i => ({
    x: i * width,
    sc: 1,
    immediate: true,
    config
  }))

  const bind = useGesture(({
    down,
    delta: [xDelta],
    direction: [xDir],
    distance,
    cancel
  }) => {
    if (down && distance > distanceRef.current) {
      dispatch({ type: xDir > 0 ? 'PREV' : 'NEXT', pause: true })
      cancel()
    }
    set(i => {
      const x = (i - indexRef.current) * widthRef.current + (down ? xDelta : 0)
      // const sc = down ? 1 - distance / widthRef.current / 2 : 1
      return { x, immediate: false }
    })
    dispatch({ type: 'SET_PAUSE', pause: true })
  })

  return props.map(({ x }, index) => (
    <animated.div
      {...bind()}
      key={index}
      style={{
        position: 'absolute',
        top: 0,
        transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
        width: '100%',
        height: '100%',
        willChange: 'transform',
        overflow: 'hidden'
      }}
      tabIndex={index + 1}
    >
      {children[index]}
    </animated.div>
  ))
}

export default ViewpagerSprings
