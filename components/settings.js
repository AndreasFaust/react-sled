import React, { useEffect, useState, useRef } from 'react'
import Toggle from 'react-toggle'
import debounce from 'lodash/debounce'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { slide as Menu } from 'react-burger-menu'
import { useStateValue } from './state'
import useWindowSize from './useWindowSize'
import Select from 'react-select'

const customStyles = {
  control: () => ({
    width: 200,
    display: 'flex'
  }),
  input: () => ({
    color: '#fff'
  }),
  singleValue: () => ({
    color: '#222',
    fontSize: '14px'
  }),
  placeholder: () => ({
    fontSize: '14px'
  }),
  menu: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #111',
    background: '#222',
    fontSize: '14px',
    color: state.isSelected ? '#888' : '#fff',
    margin: 0,
    borderRadius: 0,
    cursor: 'pointer',
    pointerEvents: state.isSelected ? 'none' : 'auto',
    ':hover': { background: '#111' }
  })
}

const useDebounce = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)
  const dSetValue = useRef((event) => {
    event.persist()
    debounce(() => setValue(event.target.value), 150)()
  })
  return [value, dSetValue]
}

const Wrapper = ({ children }) => {
  const { width } = useWindowSize()
  return width > 1024
    ? <div className='settings'>{children}</div>
    : <Menu className='settings'>{children}</Menu>
}

const Settings = () => {
  const [state, dispatch] = useStateValue()

  const [width, setWidth] = useDebounce(state.width)
  const [height, setHeight] = useDebounce(state.height)
  const [proportion, setProportion] = useDebounce(state.proportion)
  const [direction, setDirection] = React.useState(state.direction)
  const [autoPlayInterval, setAutoPlayInterval] = useDebounce(state.autoPlayInterval)

  function onDirectionChange(option) {
    setDirection(option.value)
  }

  useEffect(() => {
    dispatch({ type: 'width', value: width })
    dispatch({ type: 'height', value: height })
    dispatch({ type: 'direction', value: direction })
    dispatch({ type: 'autoPlayInterval', value: +autoPlayInterval })
  }, [width, height, proportion, direction, dispatch, autoPlayInterval])

  return (
    <Wrapper>
      <h2
        className="settings__h2 bold"
        tabIndex="0"
      >
        Settings:
      </h2>
      <div className='settings__column'>
        <label className='settings__label'>
          <h3 className='settings__h3'>width</h3>
          <input
            type='text'
            size={7}
            className='settings__input'
            defaultValue={state.width}
            onChange={(event) => setWidth.current(event)}
          />
        </label>
        <label className='settings__label'>
          <h3 className='settings__h3'>height</h3>
          <input
            type='text'
            size={7}
            className='settings__input'
            defaultValue={state.height}
            onChange={(event) => setHeight.current(event)}
          />
        </label>
        <label className='settings__label'>
          <h3 className='settings__h3'>proportion</h3>
          <input
            type='text'
            size={3}
            className='settings__input'
            defaultValue={state.proportion}
            onChange={(event) => setProportion.current(event)}
          />
        </label>

        <label className='settings__label'>
          <h3 className='settings__h3'>direction</h3>
          <Select
            className='settings__select'
            placeholder='horizontal'
            onChange={onDirectionChange}
            options={[
              { value: 'horizontal', label: 'horizontal' },
              { value: 'vertical', label: 'vertical' }
            ]}
            styles={customStyles}
          />

        </label>

        <label className='settings__label'>
          <h3 className='settings__h3'>select</h3>
          <input
            type='text'
            size={7}
            className='settings__input'
            value={state.select}
            onChange={(event) => dispatch({ type: 'select', value: event.target.value })}
          />
        </label>
        <label className='settings__label'>
          <h3 className='settings__h3'>autoPlayInterval</h3>
          <input
            type='text'
            size={7}
            className='settings__input'
            defaultValue={state.autoPlayInterval}
            onChange={(event) => setAutoPlayInterval.current(event)}
          />
        </label>
        <label className='settings__label'>
          <h3 className='settings__h3'>dragDistance</h3>
          <input
            type='text'
            size={7}
            className='settings__input'
            defaultValue={state.dragDistance}
            onChange={(event) => dispatch({ type: 'dragDistance', value: event.target.value })}
          />
        </label>
      </div>

      <div className='settings__column settings__column--2'>
        <label className='settings__label'>
          <h3 className='settings__h3'>rewind</h3>
          <Toggle
            defaultChecked={state.rewind}
            icons={false}
            onChange={() => dispatch({ type: 'rewind', value: !state.rewind })}
          />
        </label>

        <label className='settings__label'>
          <h3 className='settings__h3'>pauseOnMouseOver</h3>
          <Toggle
            defaultChecked={state.pauseOnMouseOver}
            icons={false}
            onChange={() => dispatch({ type: 'pauseOnMouseOver', value: !state.pauseOnMouseOver })}
          />
        </label>
        <label className='settings__label'>
          <h3 className='settings__h3'>stopOnInteraction</h3>
          <Toggle
            defaultChecked={state.stopOnInteraction}
            icons={false}
            onChange={() => dispatch({ type: 'stopOnInteraction', value: !state.stopOnInteraction })}
          />
        </label>

        <label className='settings__label'>
          <h3 className='settings__h3'>keyboard</h3>
          <Toggle
            defaultChecked={state.keyboard}
            icons={false}
            onChange={() => dispatch({ type: 'keyboard', value: !state.keyboard })}
          />
        </label>
        <label className='settings__label'>
          <h3 className='settings__h3'>dragging</h3>
          <Toggle
            defaultChecked={state.dragging}
            icons={false}
            onChange={() => dispatch({ type: 'dragging', value: !state.dragging })}
          />
        </label>

      </div>

      <div className='settings__column settings__column--3'>
        <label className='settings__label background'>
          <h3 className='settings__h3 bold'>config</h3>
        </label>
        <label className='settings__label settings__label--config'>
          <h3 className='settings__h3'>mass: {state.mass}</h3>
          <Slider
            min={1}
            max={500}
            defaultValue={1}
            onChange={(value) => dispatch({ type: 'mass', value })} />
        </label>
        <label className='settings__label settings__label--config'>
          <h3 className='settings__h3'>tension: {state.tension}</h3>
          <Slider
            min={1}
            max={500}
            defaultValue={210}
            onChange={(value) => dispatch({ type: 'tension', value })} />
        </label>
        <label className='settings__label settings__label--config'>
          <h3 className='settings__h3'>friction: {state.friction}</h3>
          <Slider
            min={1}
            max={500}
            defaultValue={20}
            onChange={(value) => dispatch({ type: 'friction', value })} />
        </label>
        <label className='settings__label settings__label--config'>
          <h3 className='settings__h3'>clamp</h3>
          <Toggle
            defaultChecked={state.clamp}
            icons={false}
            onChange={() => dispatch({ type: 'clamp', value: !state.clamp })}
          />
        </label>
      </div>
    </Wrapper>
  )
}

export default Settings
