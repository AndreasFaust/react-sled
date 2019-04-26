import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ViewpagerSprings from './springs'

import useWidth from './utils/useWidth'
import useHeight from './utils/useHeight'
import useKeys from './utils/useKeys'
import useMouse from './utils/useMouse'
// import useFocus from './utils/useFocus'
import { useStateContext } from './utils/useState'

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props => props.wrapperWidth ? props.wrapperWidth + 'px' : '100%'};
  height: ${props => props.heightNormalized};
  ${props => props.styles}
`

const SledViews = ({ children, style }) => {
  const [{ wrapperWidth, wrapperHeight, hasFocus, keys }, dispatch] = useStateContext()
  const wrapperRef = useRef()
  const width = useWidth(wrapperRef, wrapperWidth)
  const height = useHeight(wrapperHeight, width)

  // useFocus(wrapperRef)
  useKeys(keys, hasFocus, dispatch)
  useMouse(wrapperRef, dispatch)

  useEffect(() => {
    dispatch({ type: 'ELEMENT_COUNT', count: React.Children.toArray(children).length })
  }, [children.length])

  return (
    <StyledDiv
      className='sled'
      ref={wrapperRef}
      styles={style}
      wrapperWidth={wrapperWidth}
      heightNormalized={height}
      tabIndex={-1}
    >
      {height && (
        <ViewpagerSprings
          width={width}
          height={height}
        >
          {children}
        </ViewpagerSprings>
      )}
    </StyledDiv>
  )
}

SledViews.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string
}

SledViews.defaultProps = {
  children: null,
  style: ''
}

export default SledViews
