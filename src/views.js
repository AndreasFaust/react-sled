import React, { useEffect, useRef } from 'react'
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
  width: ${props => props.wrapperWidth && props.wrapperWidth + 'px'};
  height: ${props => props.heightNormalized}px;
  ${props => props.styles}
`

const ViewpagerViews = ({ children, style }) => {
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
      className='viewpager'
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

export default ViewpagerViews
