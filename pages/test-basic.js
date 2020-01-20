import React from 'react'
import images from '../components/images'
import { Sled, Views, Progress, Control } from '../sled'

const App = () => {
  return (
    <div className='testcontent'>
      <Sled>
        <Views
          // width={'100%'}
          proportion='3:1'
        >
          {images.map(image => (
            <img
              key={image}
              src={image}
              alt="My Image"
            />
          ))}
        </Views>
        <Progress />
        <div className="controls arrows">
          <Control select="prev" />
          <Control select="next" />
        </div>
        <div className="controls dots">
          {images.map((image, index) => (
            <Control key={image} select={index} />
          ))}
        </div>
      </Sled>
      <style jsx>{`
        .testcontent {
          max-width: 1000px;
          margin: 1rem auto;
        }
      `}</style>
    </div>
  )
}

export default App
