import React from 'react'
import { useStateContext } from '../state'
import styled from 'styled-components'
import Control from '../control'

const StyledControls = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  ${props => props.styles}
`

const SledProgressControls = ({ style }) => {
  const [{ viewCount }] = useStateContext()

  return (
    <StyledControls
      className='sled-progress-controls'
    >
      {[...Array(viewCount || 1)].map((view, index) => (
        <Control
          key={index}
          goto={index}
          style={`
            flex-grow: 1;
            height: 100%;
            cursor: pointer; 
            background: none;
            border: none;
            outline: none;
          `}
        />
      ))}
    </StyledControls>
  )
}

export default SledProgressControls
