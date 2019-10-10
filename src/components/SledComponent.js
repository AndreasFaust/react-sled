import React, { useState, useEffect } from 'react'
import { Sled, Views, Progress, Control } from '../sled'
import { useStateValue } from './state'
import SledImage from './SledImage'

import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.jpg'
import image3 from '../images/image-3.jpg'
import image4 from '../images/image-4.jpg'
import image5 from '../images/image-5.jpg'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
]

const SledComponent = () => {
  const [state] = useStateValue()

  return (
    <div className='sled-wrapper'>
      <Sled>
        <Views
          onSledEnd={() => {
            console.log('THIS IS THE END')
          }}
          width={state.width}
          height={state.height}
          goto={state.goto}
          autoPlay={undefined}
          // autoPlay={state.autoPlay}
          rewind={state.rewind}
          pauseOnMouseOver={state.pauseOnMouseOver}
          stopOnInteraction={state.stopOnInteraction}
          keyboard={state.keyboard}
          dragging={state.dragging}
          dragDistance={state.dragDistance}
          config={{
            mass: state.mass,
            tension: state.tension,
            friction: state.friction,
            clamp: state.clamp
          }}
          onAnimationStart={() => {
            console.log('START Animation!')
          }}
          onAnimationEnd={() => {
            console.log('END Animation!')
          }}
          style={`
            // transition: all 1s;
          `}
        >
          {images.map((image, index) => (
            <SledImage
              key={image}
              image={image}
              index={index}
            />
          ))}
        </Views>
        <Progress />
        <div className='controls'>
          <Control goto='prev' />
          <Control goto='next' />
        </div>
        <div className='controls'>
          {images.map((image, index) => (
            <Control key={image} goto={index} />
          ))}
        </div>
      </Sled>
    </div>
  )
}
export default SledComponent
