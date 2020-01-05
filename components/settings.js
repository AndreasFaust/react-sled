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

  container: () => ({
    width: 150,
    position: 'relative',
  }),
  placeholder: () => ({
    fontSize: '0.9rem'
  }),
  option: (provided) => ({
    ...provided,
    fontSize: '0.9rem',
  }),

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

  const [proportion, setProportion] = React.useState(state.proportion)
  const [direction, setDirection] = React.useState(state.direction)

  const [width, setWidth] = useDebounce(state.width)
  const [height, setHeight] = useDebounce(state.height)
  const [autoPlayInterval, setAutoPlayInterval] = useDebounce(state.autoPlayInterval)
  const [select, setSelect] = useDebounce(state.select)


  useEffect(() => {
    dispatch({ type: 'width', value: width })
    dispatch({ type: 'height', value: height })
    dispatch({ type: 'direction', value: direction })
    dispatch({ type: 'autoPlayInterval', value: +autoPlayInterval })
    dispatch({ type: 'proportion', value: proportion })
  }, [width, height, direction, autoPlayInterval, proportion])

  useEffect(() => {
    if (parseInt(select, 10)) {
      dispatch({ type: 'select', value: parseInt(select, 10) })
    }
    if (select === 'prev' || select === 'next') {
      dispatch({ type: 'select', value: select })
    }
  }, [select])

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
            placeholder='auto'
            onChange={(event) => setHeight.current(event)}
          />
        </label>
        <label className={`settings__label`}>
          <h3 className='settings__h3'>proportion</h3>
          <Select
            className='settings__select'
            placeholder='2:1'
            onChange={(option) => setProportion(option.value)}
            options={[
              { value: '1:1', label: '1:1' },
              { value: '1:2', label: '1:2' },
              { value: '2:1', label: '2:1' },
              { value: '3:1', label: '3:1' },
              { value: '3:2', label: '3:2' },
            ]}
            styles={customStyles}
          />

        </label>

        <label className='settings__label settings__label--select'>
          <h3 className='settings__h3'>direction</h3>
          <Select
            className='settings__select'
            placeholder='horizontal'
            onChange={(option) => setDirection(option.value)}
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
            placeholder={state.select}
            onChange={(event) => setSelect.current(event)}
          />
        </label>
        <label className='settings__label'>
          <h3 className='settings__h3'>showSlides</h3>
          <input
            type='number'
            size={1}
            className='settings__input'
            value={state.showSlides}
            onChange={(event) => dispatch({ type: 'showSlides', value: event.target.value })}
          />
        </label>
        <label className='settings__label'>
          <h3 className='settings__h3'>slideBy</h3>
          <input
            type='number'
            size={1}
            className='settings__input'
            value={state.slideBy}
            onChange={(event) => dispatch({ type: 'slideBy', value: event.target.value })}
          />
        </label>
        <label className='settings__label'>
          <h3 className='settings__h3'>autoPlayInterval</h3>
          <input
            type='number'
            size={5}
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
