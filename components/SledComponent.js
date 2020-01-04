import React from 'react'
import { Sled, Views, Progress, Control } from '../sled'
import { useStateValue } from './state'
import images from './images'

const SledComponent = ({ children }) => {
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
          proportion={state.proportion}
          direction={state.direction}
          select={state.select}
          autoPlayInterval={state.autoPlayInterval}
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
          style={{
            background: 'red'
          }}
        >
          {children}
        </Views>
        <Progress />
        <div className='controls sled-controls-direction'>
          <Control select='prev' />
          <Control select='next' />
        </div>
        <div className='controls sled-controls-index'>
          {images.map((image, index) => (
            <Control key={image} select={index} />
          ))}
        </div>
      </Sled>
    </div>
  )
}
export default SledComponent
