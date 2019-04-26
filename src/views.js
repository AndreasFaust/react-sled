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
  width: ${props => props.viewsWidth ? props.viewsWidth + 'px' : '100%'};
  ${props => props.viewsHeight}
  ${props => props.styles}
`

const SledViews = ({ children, width, height, style }) => {
  const [{ hasFocus, keys }, dispatch] = useStateContext()

  const viewsRef = useRef()
  const viewsWidth = useWidth(viewsRef, width)
  const viewsHeight = useHeight(height)

  // useFocus(viewsRef)
  useKeys(keys, hasFocus, dispatch)
  useMouse(viewsRef, dispatch)

  useEffect(() => {
    dispatch({ type: 'ELEMENT_COUNT', count: React.Children.toArray(children).length })
  }, [children.length])

  return (
    <StyledDiv
      className='sled'
      ref={viewsRef}
      styles={style}
      viewsWidth={viewsWidth}
      viewsHeight={viewsHeight}
      tabIndex={-1}
    >
      {viewsHeight && (
        <ViewpagerSprings
          width={viewsWidth}
          height={viewsHeight}
        >
          {children}
        </ViewpagerSprings>
      )}
    </StyledDiv>
  )
}

SledViews.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

SledViews.defaultProps = {
  children: null,
  style: '',
  width: undefined,
  height: '50ow'
}

export default SledViews
