import React from 'react'
import CSS from 'csstype'

import { useStateContext } from '../state'
import Control from '../control'

interface IProps {
}

const SledProgressControls: React.FC<IProps> = () => {
  const [{ viewCount }] = useStateContext()

  return (
    <div className='sled-progress-controls'>
      {
        [...Array(viewCount || 1)].map((view, index) => (
          <Control
            key={index}
            select={index}
            className='progress-control'
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
