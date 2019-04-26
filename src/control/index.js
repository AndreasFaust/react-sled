import React from 'react'
import PropTypes from 'prop-types'
import { useStateContext } from '../utils/useState'
import styled from 'styled-components'

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

const Control = ({ children, type, style }) => {
  const [, dispatch] = useStateContext()

  return (
    <StyledButton
      className={`viewpager-control--${type}`}
      type={type}
      styles={style || defaultStyle}
      onClick={() => {
        dispatch({ type: type === 'next' ? 'NEXT' : 'PREV', pause: true })
      }}
    >
      {children || <DefaultArrow type={type} />}
    </StyledButton>
  )
}

Control.propTypes = {
  type: PropTypes.oneOf(['next', 'prev']),
  style: PropTypes.string
}

Control.defaultProps = {
  type: 'next',
  style: ''
}

export default Control
