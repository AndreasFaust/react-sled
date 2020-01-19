import React from 'react'
import { useStateContext } from '../state'

interface IProps {
  className: string
}

const SledProgressSeparators: React.FC<IProps> = ({ className }) => {
  const [{ slideSteps }] = useStateContext()
  return slideSteps && (
    <div className={`sled-progress-${className}-separators`}>
      {[...Array(slideSteps - 1)].map((_, index) => (
        <div
          key={index}
          className={`sled-progress-${className}-separator`}
          style={{
            position: 'relative',
            height: '100%'
          }}
        />
      ))}
    </div>
  )
}

export default SledProgressSeparators
