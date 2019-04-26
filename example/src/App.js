import React from 'react'
import './index.css'
import { Sled, Views, Progress, Control } from 'react-sled'

import image1 from './image-1.jpg'
import image2 from './image-2.jpg'
import image3 from './image-3.jpg'
import image4 from './image-4.jpg'
import image5 from './image-5.jpg'

const pages = [
  image1,
  image2,
  image3,
  image4,
  image5
]

const App = () => {
  return (
    <>
      <h1><span role='img' aria-label='sled-emoji'>🛷</span> react-sled Example</h1>
      <Sled
        autoPlay={3000}
        dragDistance='50ow'
      >
        <Views height='50ow'>
          {pages.map((page) => (
            <div
              key={page}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundImage: `url(${page})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </Views>
        <Progress />
        <div className='controls'>
          <Control type='prev' />
          <Control type='next' />
        </div>
      </Sled>
    </>
  )
}

export default App
