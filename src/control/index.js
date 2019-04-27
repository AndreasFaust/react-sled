import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useStateContext } from '../state'
import useFocus from '../hooks/useFocus'

const ArrowRight = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 210 140'>
    <polyline fill='none' stroke='#000000' strokeWidth='10' strokeMiterlimit='10' points='133,130 194,70 133,10 ' />
    <line stroke='#000000' strokeWidth='10' strokeMiterlimit='10' x1='194' y1='70' x2='15' y2='70' />
  </svg>
)

const ArrowLeft = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 210 140'>
    <polyline fill='none' stroke='#000000' strokeWidth='10' strokeMiterlimit='10' points='76,130 15,70 76,10 ' />
    <line stroke='#000000' strokeWidth='10' strokeMiterlimit='10' x1='15' y1='70' x2='194' y2='70' />
  </svg>
)

const DefaultArrow = ({ type }) => {
  return (
    type === 'next'
      ? <ArrowRight />
      : <ArrowLeft />
  )
}

const defaultStyle = `
  cursor: pointer;
  padding: 10px;
  width: 40px;
  height: 40px;
`

const StyledButton = styled.button`
  ${props => props.styles}
`

const SledControl = ({ children, type, style }) => {
  const [, dispatch] = useStateContext()
  const controlRef = useRef()
  useFocus(controlRef)

  return (
    <StyledButton
      className={`sled__control sled__control--${type}`}
      ref={controlRef}
      type={type}
      styles={style || defaultStyle}
      ariaLabel={`Go to ${type === 'next' ? 'next' : 'previous'} view`}
      tabIndex={0}
      onClick={() => {
        dispatch({ type: type === 'next' ? 'NEXT' : 'PREV', pause: true })
      }}
    >
      {children || <DefaultArrow type={type} />}
    </StyledButton>
  )
}

SledControl.propTypes = {
  type: PropTypes.oneOf(['next', 'prev']),
  style: PropTypes.string
}

SledControl.defaultProps = {
  type: 'next',
  style: ''
}

export default SledControl
