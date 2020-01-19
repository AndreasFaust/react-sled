import React from 'react'
import SledProgressSeparators from './separators'
import SledProgressTrack from './track'
import SledProgressControls from './controls'
import CSS from 'csstype'

import './index.css'

interface IProps {
  className?: string
  style?: CSS.Properties
}

const SledProgress: React.FC<IProps> = ({ className, style }) => {
  const [defaultClass, setDefaultClass] = React.useState<string>(className || ' default')
  React.useEffect(() => {
    setDefaultClass(className || 'default')
  }, [className])

  return (
    <div
      className={`sled-progress-${defaultClass}`}
      style={style}
      role='progressBar'
    >
      <div className={`sled-progress-${defaultClass}-rail`} />
      <SledProgressTrack className={defaultClass} />
      <SledProgressSeparators className={defaultClass} />
      <SledProgressControls className={defaultClass} />
    </div>
  )
}

export default SledProgress
