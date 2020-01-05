import React from 'react'
import { useStateContext } from '../state'

const SledProgressSeparators: React.FC = () => {
  const [{ slideSteps }] = useStateContext()
  return slideSteps && (
    <div
      className='sled-progress-separators'
    >
      {[...Array(slideSteps - 1)].map((_, index) => (
        <div
          key={index}
          className='sled-progress-separator'
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
