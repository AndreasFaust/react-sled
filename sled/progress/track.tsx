import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { useStateContext } from '../state'

function getX(viewCount: number, currentIndex: number, goPrevNext: number = 0): number {
  return 100 - ((100 / viewCount) * (currentIndex + goPrevNext))
}

const SledProgressTrack: React.FC = () => {
  const [{
    currentIndex,
    prevIndex,
    viewCount,
    autoPlayInterval,
    pause,
    pauseOnMouseOver,
    config
  }] = useStateContext()

  const [props, set] = useSpring(() => ({
    from: { x: 100 }
  }))

  useEffect(() => {
    if (pauseOnMouseOver) {
      set({
        config,
        x: getX(viewCount, currentIndex),
        reset: false
      })
    }
  }, [pauseOnMouseOver])

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
      from: { x: getX(viewCount, currentIndex) },
      x: getX(viewCount, currentIndex, !pause && 1),
      reset: true
    })
  }, [pause, autoPlayInterval, viewCount, currentIndex])

  return (
    <animated.div
      className='sled-progress-track'
      style={{
        position: 'absolute',
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        transform: props.x.to(x => `translateX(-${x}%)`)
      }}
    />
  )
}

export default SledProgressTrack
