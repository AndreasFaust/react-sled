import React from 'react'
import { Sled, Views, Progress, Control } from '../sled'
import { useStateValue } from './state'
import SledImage from './SledImage'

const images = [
  'https://source.unsplash.com/ANCoz0JMhiQ/1600x900',
  'https://source.unsplash.com/uR6dIgDnt38/1600x900',
  'https://source.unsplash.com/E2_k8SsuS7s/1600x900',
  'https://source.unsplash.com/mGy1Jjr2e6M/1600x900',
  'https://source.unsplash.com/TMHL7wald8I/1600x900'
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
          autoPlay={state.autoPlay}
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
