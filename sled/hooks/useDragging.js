import { useEffect } from 'react'
import { useStateContext } from '../state'

function getDistanceRef(distance, width) {
  switch (typeof distance) {
    case 'number': return distance
    case 'string':
      if (distance.indexOf('ow') >= 0) {
        return (width / 100) * +distance.replace('ow', '')
      }
      return 40
    default:
      return 40
  }
}

export default (dragging, dragDistance) => {
  const [{ dimensions: { width } }, dispatch] = useStateContext()

  useEffect(() => {
    const distance = getDistanceRef(dragDistance, width)
    dispatch({ type: 'SET_DRAG_DISTANCE', dragDistance: distance })
  }, [dispatch, dragDistance, width])

  useEffect(() => {
    dispatch({ type: 'SET_DRAGGING', dragging })
  }, [dispatch, dragging])
}
