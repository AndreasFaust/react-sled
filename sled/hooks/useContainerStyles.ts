import React from 'react'
import { useStateContext } from '../state'
import CSS from 'csstype'

export function useSliderStyles() {
  const [{ dimensions: { width, height }, viewCount, direction, dragging }] = useStateContext()
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
        height: height * viewCount,
      })
    } else {
      setStyles({
        ...defaultStyles,
        width: width * viewCount,
        height: '100%',
        display: 'flex',
      })
    }
  }, [width, height, viewCount, direction, dragging])

  return styles
}


export function useViewStyles(): CSS.Properties {
  const [{ dimensions: { width, height }, viewCount, direction }] = useStateContext()
  const [styles, setStyles] = React.useState({})

  React.useEffect(() => {
    const defaultStyles = {
      position: 'relative',
    }
    if (direction === 'vertical') {
      setStyles({
        ...defaultStyles,
        width: '100%',
        height: height
      })
    } else {
      setStyles({
        ...defaultStyles,
        width: width,
        height: '100%'
      })
    }
  }, [width, height, direction, viewCount])

  return styles
}
