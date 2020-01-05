import React from 'react'
import { useStateContext } from '../state'

export default function () {
  const [{ direction, dimensions: { width, height }, showSlides, slideBy, currentIndex }] = useStateContext()
  const [x, setX] = React.useState(0)
  React.useEffect(() => {
    if (direction === 'horizontal') {
      setX(-currentIndex * (width / showSlides * slideBy))
    } else {
      setX(-currentIndex * (height / showSlides * slideBy))
    }
  }, [direction, width, height, showSlides, slideBy, currentIndex])

  return x
}
