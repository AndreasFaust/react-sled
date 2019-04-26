import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ViewpagerSprings from './springs'

import useCSSHeight from './utils/useCSSHeight'
import useDimensions from './utils/useDimensions'
import useKeyboard from './utils/useKeyboard'
import useMouse from './utils/useMouse'
// import useFocus from './utils/useFocus'
import { useStateContext } from './utils/state'

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props => props.cssWidth || '100%'};
  ${props => props.cssHeight}
  ${props => props.styles}
`

const SledViews = ({ width, height, children, style }) => {
  const [{ hasFocus, keyboard }, dispatch] = useStateContext()

  const viewsRef = useRef()
  const cssHeight = useCSSHeight(height)
  useDimensions(viewsRef, width, height, cssHeight)

  // useFocus(viewsRef)
  useKeyboard(keyboard, hasFocus, dispatch)
  useMouse(viewsRef, dispatch)

  useEffect(() => {
    dispatch({ type: 'ELEMENT_COUNT', count: React.Children.toArray(children).length })
  }, [children.length])

  return (
    <StyledDiv
      className='sled'
      ref={viewsRef}
      styles={style}
      cssWidth={width}
      cssHeight={cssHeight}
      tabIndex={-1}
    >
      <ViewpagerSprings>
        {children}
      </ViewpagerSprings>
    </StyledDiv>
  )
}

SledViews.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

SledViews.defaultProps = {
  children: null,
  style: '',
  width: undefined,
  height: '50ow'
}

export default SledViews
