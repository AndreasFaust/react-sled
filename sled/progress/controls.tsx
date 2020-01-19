import React from 'react'
import CSS from 'csstype'

import { useStateContext } from '../state'
import Control from '../control'

interface IProps {
  className: string
}

const SledProgressControls: React.FC<IProps> = ({ className }) => {
  const [{ slideSteps }] = useStateContext()

  return (
    <div className={`sled-progress-${className}-controls`}>
      {
        [...Array(slideSteps ? slideSteps || 1 : 1)].map((view, index) => (
          <Control
            key={index}
            select={index}
            className={`sled-progress-${className}-control`}
            style={{
              flexGrow: 1,
              height: '100%',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              outline: 'none',
            }}
          />
        ))}
    </div>
  )
}

export default SledProgressControls
