import React from 'react'
import { useStateContext } from '../state'
import CSS from 'csstype'

export function useSliderStyles() {
  const [{ sliderSize, direction, dragging }] = useStateContext()
  const [styles, setStyles] = React.useState({})

  React.useEffect(() => {
    const defaultStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      willChange: 'transform',
      overflow: 'hidden',
      cursor: dragging ? 'grab' : 'auto'
    }
    if (direction === 'vertical') {
      setStyles({
        ...defaultStyles,
        width: '100%',
        height: sliderSize || 0,
      })
    } else {
      setStyles({
        ...defaultStyles,
        width: sliderSize || 0,
        height: '100%',
        display: 'flex',
      })
    }
  }, [direction, dragging, sliderSize])

  return styles
}


export function useViewStyles(): CSS.Properties {
  const [{ dimensions: { width, height }, viewCount, direction, showSlides }] = useStateContext()
  const [styles, setStyles] = React.useState({})

  React.useEffect(() => {
    const defaultStyles = {
      position: 'relative',
    }
    if (direction === 'vertical') {
      setStyles({
        ...defaultStyles,
        width: '100%',
        height: height / showSlides
      })
    } else {
      setStyles({
        ...defaultStyles,
        width: width / showSlides,
        height: '100%'
      })
    }
  }, [width, height, direction, viewCount, showSlides])

  return styles
}
