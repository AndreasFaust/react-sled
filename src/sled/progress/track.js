import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { useStateContext } from '../state'

// const springConfig = { mass: 1, tension: 210, friction: 20, clamp: true }

function getX(viewCount, currentIndex, goPrevNext = 0) {
  return 100 - ((100 / viewCount) * (currentIndex + goPrevNext))
}

const SledProgressTrack = () => {
  const [{
    currentIndex,
    prevIndex,
    viewCount,
    autoPlayInterval,
    pause,
    mouseOver,
    config
  }] = useStateContext()

  const [props, set] = useSpring(() => ({
    from: { x: 100 }
  }))

  useEffect(() => {
    if (mouseOver) {
      set({
        config,
        x: getX(viewCount, currentIndex),
        reset: false
      })
    }
  }, [mouseOver])

  useEffect(() => {
    if (!viewCount) return
    const xCalc = getX(viewCount, currentIndex, !autoPlayInterval && 1)
    if (currentIndex === 0) {
      set({
        config,
        from: { x: 100 },
        x: xCalc,
        reset: viewCount > 2
          ? prevIndex !== 1
          : true
      })
    } else {
      set({
        config,
        x: xCalc,
        reset: false
      })
    }
  }, [viewCount, currentIndex, autoPlayInterval])

  useEffect(() => {
    if (!autoPlayInterval) return
    set({
      config: autoPlayInterval && !pause
        ? { duration: autoPlayInterval }
        : config,
      x: getX(viewCount, currentIndex, !pause && 1),
      reset: false
    })
  }, [pause, autoPlayInterval])

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
