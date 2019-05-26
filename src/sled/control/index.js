import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useDisabled from './hooks/useDisabled'
import usePreset from './hooks/usePreset'
import useDefaultPreset from './hooks/useDefaultPreset'
import useClassName from './hooks/useClassName'
import useLabel from './hooks/useLabel'
import useClick from './hooks/useClick'

import useFocus from '../hooks/useFocus'

const StyledButton = styled.button`
  ${props => props.disabled && 'pointer-events: none;'}
  ${props => props.styles}
`

const SledControl = ({ children, goto, style, preset }) => {
  const controlRef = useRef()
  useFocus(controlRef)
  const presetStyles = usePreset(preset)
  const defaultPreset = useDefaultPreset(goto)
  const disabled = useDisabled(goto)
  const className = useClassName(goto, disabled)
  const label = useLabel(goto)
  const onClick = useClick(goto)

  return (
    <StyledButton
      className={className}
      disabled={disabled}
      ref={controlRef}
      styles={presetStyles + style || defaultPreset}
      ariaLabel={label}
      tabIndex={0}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

SledControl.propTypes = {
  goto: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.string,
  preset: PropTypes.string
}

SledControl.defaultProps = {
  goto: 'next',
  style: '',
  preset: ''
}

export default SledControl
