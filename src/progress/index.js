import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { useStateContext } from '../utils/useState'

const ProgressBar = () => {
  const [{ currentIndex, elementCount, auto, pause }] = useStateContext()

  const config = { mass: 1, tension: 210, friction: 20, clamp: true }

  const [props, set] = useSpring(() => ({
    from: { x: 100 }
  }))

  useEffect(() => {
    if (currentIndex === 0) {
      set({
        config: auto && !pause ? { duration: auto } : config,
        from: { x: 100 },
        x: 100 - ((100 / elementCount) * (currentIndex + 1)),
        reset: true
      })
    } else {
      set({
        config: auto && !pause ? { duration: auto } : config,
        x: 100 - ((100 / elementCount) * (currentIndex + 1)),
        reset: false
      })
    }
  }, [currentIndex, pause])

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

const StyledProgress = styled.div`
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

const Progress = ({ style }) => {
  const [{ elementCount }] = useStateContext()

  return elementCount && (
    <StyledProgress
      className='viewpager-progress'
      styles={style}
      tabIndex={-1}
    >
      <ProgressBar />
      {[...Array(elementCount - 1)].map((_, index) => (
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
    </StyledProgress>
  )
}

Progress.propTypes = {
  style: PropTypes.string
}

Progress.defaultProps = {
  style: ''
}

export default Progress
