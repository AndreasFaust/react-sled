import React from 'react'
import styled from 'styled-components'

const StyledRail = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;
`

const SledProgressRail = ({ style }) => {
  return (
    <StyledRail
      className='sled-progress-rail'
    />
  )
}

export default SledProgressRail
