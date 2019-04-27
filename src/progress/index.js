import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SledProgressSeparators from './separators'
import SledProgressRail from './rail'
import SledProgressTrack from './track'
import SledProgressControls from './controls'

const StyledSledProgress = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 20px;

  .sled-progress-rail {
    background: black;
    height: 4px;
  }
  .sled-progress-track {
    background: red;
    height: 4px;
  }
  .sled-progress-separator {
    width: 4px;
    background: white;
  }
  ${props => props.styles}
`

const SledProgress = ({ style }) => {
  return (
    <StyledSledProgress
      className='sled-progress'
      styles={style}
      role='progressBar'
    >
      <SledProgressRail />
      <SledProgressTrack />
      <SledProgressSeparators />
      <SledProgressControls />
    </StyledSledProgress>
  )
}

SledProgress.propTypes = {
  style: PropTypes.string
}

SledProgress.defaultProps = {
  style: ''
}

export default SledProgress
