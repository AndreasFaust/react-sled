import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { useStateContext } from '../utils/useState'

const springConfig = { mass: 1, tension: 210, friction: 20, clamp: true }

const SledProgressBar = () => {
  const [{
    currentIndex,
    prevIndex,
    elementCount,
    mouseover,
    auto,
    pause
  }] = useStateContext()

  const [props, set] = useSpring(() => ({
    from: { x: 100 }
  }))

  useEffect(() => {
    if (!auto || pause) return

    const xStart = 100 - ((100 / elementCount) * (currentIndex))
    const xEnd = 100 - ((100 / elementCount) * (currentIndex + 1))

    set({
      config: mouseover ? springConfig : { duration: auto },
      from: mouseover ? {} : { x: xStart },
      x: xEnd,
      reset: !mouseover
    })
  }, [mouseover])

  useEffect(() => {
    const config = auto && !pause && !mouseover ? { duration: auto } : springConfig
    const xCalc = 100 - ((100 / elementCount) * (currentIndex + 1))

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
  }, [elementCount, currentIndex, prevIndex, pause])

  return (
    <animated.div
      className='viewpager-progress-bar'
      style={{
        position: 'absolute',
        left: 0,
        width: '100%',
        top: 0,
        bottom: 0,
        transform: props.x.interpolate(x => `translateX(-${x}%)`)
      }}
    />
  )
}

const StyledSledProgress = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 4px;
  background: black;
  margin: 10px 0;

  // Mimic "justify-content: space-evenly;"
  :before,
  :after {
    content: '';
    display: block;
    height: 100%;
  }
  .viewpager-progress-bar {
    background: red;
  }
  .viewpager-progress-separator {
    width: 4px;
    background: white;
  }
  ${props => props.styles}
`

const SledProgress = ({ style }) => {
  const [{ elementCount }] = useStateContext()

  return (
    <StyledSledProgress
      className='viewpager-progress'
      styles={style}
      tabIndex={-1}
    >
      <SledProgressBar />
      {[...Array(elementCount ? elementCount - 1 : 1)].map((_, index) => (
        <div
          key={index}
          className='viewpager-progress-separator'
          style={{
            position: 'relative',
            zIndex: 100,
            height: '100%'
          }}
        />
      ))}
    </StyledSledProgress>
  )
}

SledProgress.propTypes = {
  style: PropTypes.string
}

SledProgress.defaultProps = {
  style: ''
}

export default SledProgress
