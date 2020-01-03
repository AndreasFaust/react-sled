import React from 'react'
import { Sled, Views, Progress, Control } from '../sled'
import { useStateValue } from './state'

const images = [
  'id-1',
  'id-2',
  'id-3',
  'id-4',
  'id-5',
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
          proportion={state.proportion}
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
            background: 'lightyellow'
          }}
        >
          {images.map((image, index) => (
            <div
              key={image}
              className="testContent"
              style={{
                background: `rgb(1${index}5, 1${index}0, 1${index}0)`
              }}
            >
              {index + 1}
            </div>
          ))}
        </Views>
        <Progress />
        <div className='controls'>
          <Control select='prev' />
          <Control select='next' />
        </div>
        <div className='controls'>
          {images.map((image, index) => (
            <Control key={image} select={index} />
          ))}
        </div>
      </Sled>
    </div >
  )
}
export default SledComponent
