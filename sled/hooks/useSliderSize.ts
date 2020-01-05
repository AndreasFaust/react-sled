import React from 'react'
import { useStateContext } from '../state'

export default function useSliderStyles() {
  const [{ dimensions: { width, height }, viewCount, direction, showSlides }, dispatch] = useStateContext()

  React.useEffect(() => {
    if (direction === 'vertical') {
      dispatch({ type: 'SET_SLIDERSIZE', sliderSize: (height / showSlides) * viewCount })
    } else {
      dispatch({ type: 'SET_SLIDERSIZE', sliderSize: (width / showSlides) * viewCount })
    }
  }, [direction, width, height, showSlides, viewCount])

}