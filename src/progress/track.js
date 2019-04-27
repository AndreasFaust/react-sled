import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { useStateContext } from '../state'

const springConfig = { mass: 1, tension: 210, friction: 20, clamp: true }

function getX (viewCount, currentIndex, goPrevNext = 0) {
  return 100 - ((100 / viewCount) * (currentIndex + goPrevNext))
}

const SledProgressTrack = () => {
  const [{
    currentIndex,
    prevIndex,
    viewCount,
    mouseover,
    autoPlayInterval,
    pause
  }] = useStateContext()

  const [props, set] = useSpring(() => ({
    from: { x: 100 }
  }))

  useEffect(() => {
    if (!autoPlayInterval || pause) return
    set({
      config: { duration: autoPlayInterval },
      from: getX(viewCount, currentIndex),
      x: getX(viewCount, currentIndex, 1),
      reset: false
    })
  }, [autoPlayInterval])

  useEffect(() => {
    if (!autoPlayInterval || pause) return

    if (mouseover) {
      set({
        config: springConfig,
        from: {},
        x: getX(viewCount, currentIndex),
        reset: false
      })
    } else {
      set({
        config: { duration: autoPlayInterval },
        from: getX(viewCount, currentIndex),
        x: getX(viewCount, currentIndex, 1),
        reset: false
      })
    }
  }, [mouseover])

  useEffect(() => {
    const config = autoPlayInterval && !pause && !mouseover ? { duration: autoPlayInterval } : springConfig
    const xCalc = getX(viewCount, currentIndex, 1)

    if (currentIndex === 0) {
      set({
        config,
        from: { x: 100 },
        x: xCalc,
        reset: prevIndex !== 1
      })
    } else {
      set({
        config,
        x: xCalc,
        reset: false
      })
    }
  }, [viewCount, currentIndex, prevIndex, pause])

  return (
    <animated.div
      className='sled-progress-track'
      style={{
        position: 'absolute',
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        transform: props.x.interpolate(x => `translateX(-${x}%)`)
      }}
    />
  )
}

export default SledProgressTrack
