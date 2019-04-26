import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { useStateContext } from '../utils/useState'

const StyledSegment = styled.div`        
  width: ${props => props.segmentWidth};
  background: black;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  
  div {
    background: red;
  }
  ${props => props.styles}
`

const hidden = `translateX(-100%)`
const visible = `translateX(0%)`

const Segment = ({ index, width, styleSegment }) => {
  const [{ currentIndex, auto, pause }, dispatch] = useStateContext()

  const [props, set] = useSpring(() => ({
    from: { transform: hidden }
  }))

  useEffect(() => {
    if (index === currentIndex) {
      set({
        config: { duration: !pause && auto ? auto : undefined },
        transform: visible,
        reset: true,
        immediate: false
      })
    }
    if (index > currentIndex) {
      set({
        transform: hidden,
        config: {},
        reset: false,
        immediate: true
      })
    }
    if (index < currentIndex) {
      set({
        transform: visible,
        config: {},
        reset: false,
        immediate: true
      })
    }
  }, [currentIndex, pause])

  return (
    <StyledSegment
      segmentWidth={width}
      styles={styleSegment}
      onClick={() => {
        dispatch({ type: 'GOTO', index, pause: true })
      }}
      tabIndex={index + 1}
    >
      <animated.div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          transform: props.transform
        }}
      />
    </StyledSegment>
  )
}

const StyledProgress = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4px;
  margin: 10px 0;
  ${props => props.styles}
`

const Progress = ({ style, color, colorBackground, gutter }) => {
  const [width, setWidth] = useState(0)
  const [{ elementCount }] = useStateContext()

  useEffect(() => {
    setWidth(`calc(((100% - ${gutter}) / ${elementCount}) - ${gutter})`)
  }, [elementCount])

  return (
    <StyledProgress
      className='viewpager-progress'
      styles={style}
      tabIndex={-1}
    >
      {[...Array(elementCount)].map((_, index) => (
        <Segment
          key={index}
          width={width}
          index={index}
          color={color}
          colorBackground={colorBackground}
          gutter={gutter}
        />
      ))}
    </StyledProgress>
  )
}

Progress.propTypes = {
  style: PropTypes.string,
  styleSegment: PropTypes.string,
  gutter: PropTypes.string
}

Progress.defaultProps = {
  style: '',
  styleSegment: '',
  gutter: '5px'
}

export default Progress
