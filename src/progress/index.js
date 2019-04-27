import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useStateContext } from '../state'
import SledProgressBar from './progressBar'

const StyledSledProgress = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 4px;
  background: black;
  margin: 10px 0;

  // Mimic "justify-content: space-evenly;"
  :before,
  :after {
    content: '';
    display: block;
    height: 100%;
  }
  .sled-progress-bar {
    background: red;
  }
  .sled-progress-separator {
    width: 4px;
    background: white;
  }
  ${props => props.styles}
`

const SledProgress = ({ style }) => {
  const [{ viewCount }] = useStateContext()

  return (
    <StyledSledProgress
      className='sled-progress'
      styles={style}
      role='progressbar'
    >
      <SledProgressBar />
      {[...Array(viewCount ? viewCount - 1 : 1)].map((_, index) => (
        <div
          key={index}
          className='sled-progress-separator'
          style={{
            position: 'relative',
            zIndex: 100,
            height: '100%'
          }}
        />
      ))}
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
