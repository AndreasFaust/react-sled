import React from 'react'
import { useStateContext } from '../state'

export default function useSliderStyles() {
  const [{ dimensions: { width, height }, viewCount, direction, showElements }, dispatch] = useStateContext()

  React.useEffect(() => {
    if (direction === 'vertical') {
      dispatch({ type: 'SET_SLIDERSIZE', sliderSize: (height / showElements) * viewCount })
    } else {
      dispatch({ type: 'SET_SLIDERSIZE', sliderSize: (width / showElements) * viewCount })
    }
  }, [direction, width, height, showElements, viewCount])

}