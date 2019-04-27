import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DefaultArrow from './arrow'
import useDisabled from './useDisabled'

import { useStateContext } from '../state'
import useFocus from '../hooks/useFocus'

const defaultStyle = `
  cursor: pointer;
  padding: 10px;
  width: 40px;
  height: 40px;

  :disabled svg {
    opacity: 0.4;
  }
`

const StyledButton = styled.button`
  ${props => props.disabled && 'pointer-events: none;'}
  ${props => props.styles}
`

const SledControl = ({ children, type, style }) => {
  const [, dispatch] = useStateContext()
  const controlRef = useRef()
  useFocus(controlRef)

  const disabled = useDisabled(type)

  return (
    <StyledButton
      className={`sled__control sled__control--${type} ${disabled ? 'sled__control--disabled' : ''}`}
      disabled={disabled}
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
