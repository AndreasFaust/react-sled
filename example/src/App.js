import React, { useState, useRef } from 'react'
import Toggle from 'react-toggle'
import debounce from 'lodash/debounce'
import './toggle.css'
import './index.css'
import SledComponent from './SledComponent'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import Github from './github-logo'

const App = () => {
  const [goto, setGoto] = useState(0)
  const [rewind, setRewind] = useState(true)
  const [pauseOnMouseOver, setPauseOnMouseOver] = useState(true)
  const [keyboard, setKeyboard] = useState(true)
  const [dragging, setDragging] = useState(true)
  const [autoPlay, setAutoPlay] = useState(3000)
  const [dragDistance, setDragDistance] = useState('25ow')
  const dSetAutoPlay = useRef((event) => {
    event.persist()
    debounce(() => setAutoPlay(event.target.value), 150)()
  })
  const [width, setWidth] = useState('100%')
  const dSetWidth = useRef((event) => {
    event.persist()
    debounce(() => setWidth(event.target.value), 150)()
  })
  const [height, setHeight] = useState('50ow')
  const dSetHeight = useRef((event) => {
    event.persist()
    debounce(() => setHeight(event.target.value), 150)()
  })

  const [clamp, setClamp] = useState(true)
  const [mass, setMass] = useState(1)
  const [tension, setTension] = useState(170)
  const [friction, setFriction] = useState(26)

  return (
    <div className='wrapper'>
      <header className='header'>
        <h1>
          <span role='img' aria-label='sled-emoji'>
          🛷
          </span>
          {' '}
        react-sled
        </h1>

        <a href='https://github.com/AndreasFaust/react-sled' className='github'>
          <Github />
        </a>
      </header>

      <div className='content'>
        <SledComponent
          width={width}
          height={height}
          goto={goto}
          rewind={rewind}
          pauseOnMouseOver={pauseOnMouseOver}
          keyboard={keyboard}
          dragging={dragging}
          autoPlay={autoPlay}
          dragDistance={dragDistance}
          clamp={clamp}
          mass={mass}
          tension={tension}
          friction={friction}
        />

        <div className='props'>
          <div className='column'>
            <label className='props__label'>
              <input
                type='text'
                size={7}
                className='props__input'
                defaultValue={width}
                onChange={(event) => dSetWidth.current(event)}
              />
              <h2 className='props__h2'>width</h2>
            </label>
            <label className='props__label'>
              <input
                type='text'
                size={7}
                className='props__input'
                defaultValue={height}
                onChange={(event) => dSetHeight.current(event)}
              />
              <h2 className='props__h2'>height</h2>
            </label>

            <label className='props__label'>
              <input
                type='text'
                size={7}
                className='props__input'
                value={goto}
                onChange={(event) => setGoto(event.target.value)}
              />
              <h2 className='props__h2'>goto</h2>
            </label>
            <label className='props__label'>
              <input
                type='text'
                size={7}
                className='props__input'
                defaultValue={autoPlay}
                onChange={(event) => dSetAutoPlay.current(event)}
              />
              <h2 className='props__h2'>autoPlay</h2>
            </label>
            <label className='props__label'>
              <input
                type='text'
                size={7}
                className='props__input'
                defaultValue={dragDistance}
                onChange={(event) => setDragDistance(event.target.value)}
              />
              <h2 className='props__h2'>dragDistance</h2>
            </label>
          </div>

          <div className='column'>
            <label className='props__label'>
              <Toggle
                defaultChecked={rewind}
                icons={false}
                onChange={() => setRewind(prev => !prev)}
              />
              <h2 className='props__h2'>rewind</h2>
            </label>

            <label className='props__label'>
              <Toggle
                defaultChecked={pauseOnMouseOver}
                icons={false}
                onChange={() => setPauseOnMouseOver(prev => !prev)}
              />
              <h2 className='props__h2'>pauseOnMouseOver</h2>
            </label>

            <label className='props__label'>
              <Toggle
                defaultChecked={keyboard}
                icons={false}
                onChange={() => setKeyboard(prev => !prev)}
              />
              <h2 className='props__h2'>keyboard</h2>
            </label>
            <label className='props__label'>
              <Toggle
                defaultChecked={dragging}
                icons={false}
                onChange={() => setDragging(prev => !prev)}
              />
              <h2 className='props__h2'>dragging</h2>
            </label>

          </div>

          <div className='column column--2'>
            <label className='props__label'>
              <h2 className='props__h2'>config</h2>
            </label>
            <label className='props__label props__label--config'>
              <h3 className='props__h3'>mass: {mass}</h3>
              <Slider min={1} max={500} defaultValue={1} onChange={(value) => setMass(value)} />
            </label>
            <label className='props__label props__label--config'>
              <h3 className='props__h3'>tension: {tension}</h3>
              <Slider min={1} max={500} defaultValue={210} onChange={(value) => setTension(value)} />
            </label>
            <label className='props__label props__label--config'>
              <h3 className='props__h3'>friction: {friction}</h3>
              <Slider min={1} max={500} defaultValue={20} onChange={(value) => setFriction(value)} />
            </label>
            <label className='props__label props__label--config'>
              <h3 className='props__h3'>clamp</h3>
              <Toggle
                defaultChecked={clamp}
                icons={false}
                onChange={() => setClamp(prev => !prev)}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
