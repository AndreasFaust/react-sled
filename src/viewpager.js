import React, { useState, useEffect, useRef } from 'react'
import clamp from './utils/clamp'
import { useSprings, animated, config } from 'react-spring'
import { useGesture } from 'react-with-gesture'

const Viewpager = ({
  auto,
  children,
  width,
  height
}) => {
  const index = useRef(0)

  const [props, set] = useSprings(children.length, i => ({
    x: i * width,
    sc: 1,
    display: 'block',
    config: config.stiff
  }))

  useEffect(() => {
    console.log(auto)
    if (!auto) return
    const intervalID = setInterval(() => {
      index.current++
      set(i => ({
        x: (i - index.current) * width
      }))
    }, auto)

    return () => { clearInterval(intervalID) }
  }, [])

  const bind = useGesture(({
    down,
    delta: [xDelta],
    direction: [xDir],
    distance,
    cancel
  }) => {
    if (down && distance > width / 4) {
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, children.length - 1)
      cancel()
    }
    set(i => {
      // if (i < index.current - 1 && i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * width + (down ? xDelta : 0)
      const sc = down ? 1 - distance / width / 2 : 1
      return { x, sc }
    })
  })

  return props.map(({ x, display, sc }, i) => (
    <animated.div
      {...bind()}
      key={i}
      style={{
        position: 'absolute',
        top: 0,
        display,
        transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
        width: !!width && width,
        height: '100%',
        willChange: 'transform',
        overflow: 'hidden',
        userSelect: 'none'
      }}>
      <animated.div
        style={{
          // transform: sc.interpolate(s => `scale(${s})`)
        }}
      >
        {children[i]}
      </animated.div>
    </animated.div>
  ))
}

export default Viewpager
