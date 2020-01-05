import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { useStateContext } from '../state'

function getX(slideSteps: number, currentIndex: number, goPrevNext: number = 0): number {
  return 100 - ((100 / slideSteps) * (currentIndex + goPrevNext))
}

const SledProgressTrack: React.FC = () => {
  const [{
    currentIndex,
    prevIndex,
    slideSteps,
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
        x: getX(slideSteps, currentIndex),
        reset: false
      })
    }
  }, [pauseOnMouseOver])

  useEffect(() => {
    if (!slideSteps) return
    const xCalc = getX(slideSteps, currentIndex, !autoPlayInterval && 1)
    if (currentIndex === 0) {
      set({
        config,
        from: { x: 100 },
        x: xCalc,
        reset: slideSteps > 2
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
  }, [slideSteps, currentIndex, autoPlayInterval])

  useEffect(() => {
    if (!autoPlayInterval) return
    set({
      config: autoPlayInterval && !pause
        ? { duration: autoPlayInterval }
        : config,
      from: { x: getX(slideSteps, currentIndex) },
      x: getX(slideSteps, currentIndex, !pause && 1),
      reset: true
    })
  }, [pause, autoPlayInterval, slideSteps, currentIndex])

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
