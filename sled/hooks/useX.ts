import React from 'react'
import { useStateContext } from '../state'

export default function () {
  const [{ direction, dimensions: { width, height }, showElements, slideBy, currentIndex }] = useStateContext()
  const [x, setX] = React.useState(0)
  React.useEffect(() => {
    if (direction === 'horizontal') {
      setX(-currentIndex * (width / showElements * slideBy))
    } else {
      setX(-currentIndex * (height / showElements * slideBy))
    }
  }, [direction, width, height, showElements, slideBy, currentIndex])

  return x
}
