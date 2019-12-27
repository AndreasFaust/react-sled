import React from 'react'
import { useStateContext } from '../state'
import styled from 'styled-components'

const StyledSeprarator = styled.div`
  position: absolute;
  zIndex: 200;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  pointer-events: none;

  // Mimic "justify-content: space-evenly;"
  :before,
  :after {
    content: '';
    display: block;
    height: 100%;
  }
  ${props => props.styles}
`

const SledProgressSeparators = ({ style }) => {
  const [{ viewCount }] = useStateContext()

  return (
    <StyledSeprarator
      className='sled-progress-separators'
    >
      {[...Array(viewCount ? viewCount - 1 : 1)].map((view, index) => (
        <div
          key={index}
          className='sled-progress-separator'
          style={{
            position: 'relative',
            height: '100%'
          }}
        />
      ))}
    </StyledSeprarator>
  )
}

export default SledProgressSeparators
