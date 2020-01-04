import React from 'react'
import SledProgressSeparators from './separators'
import SledProgressTrack from './track'
import SledProgressControls from './controls'
import CSS from 'csstype'

import './index.css'

interface IProps {
  style?: CSS.Properties
}

const SledProgress: React.FC<IProps> = ({ style }) => {
  return (
    <div
      className='sled-progress'
      style={style}
      role='progressBar'
    >
      <div className='sled-progress-rail' />
      <SledProgressTrack />
      <SledProgressSeparators />
      <SledProgressControls />
    </div>
  )
}

export default SledProgress
