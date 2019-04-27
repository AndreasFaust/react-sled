import React, { useState } from 'react'
import './index.css'
import { Sled, Views, Progress, Control } from 'react-sled'

import image1 from './images/image-1.jpg'
import image2 from './images/image-2.jpg'
import image3 from './images/image-3.jpg'
import image4 from './images/image-4.jpg'
import image5 from './images/image-5.jpg'
import Github from './github-logo'

const pages = [
  image1,
  image2,
  image3,
  image4,
  image5
]

const App = () => {
  const [index, setIndex] = useState(0)

  return (
    <div className='content'>
      <h1>
        <span role='img' aria-label='sled-emoji'>
          🛷
        </span>
        {' '}
        react-sled Example
      </h1>

      <a href='https://github.com/AndreasFaust/react-sled' className='github'>
        <Github />
      </a>

      <Sled
        autoPlay={3000}
        dragDistance='50ow'
      >
        <Views
          height='50ow'
          goto={index}
        >
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
      <div className='goto'>
        <h2>Go to:</h2>
        <input
          type='text'
          size={4}
          className='goto__input'
          value={index}
          onChange={(event) => setIndex(event.target.value)}
        />
      </div>
    </div>
  )
}

export default App
