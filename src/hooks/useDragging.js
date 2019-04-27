import { useEffect } from 'react'
import { useStateContext } from '../state'

function getDistanceRef (distance, width) {
  switch (typeof distance) {
    case 'number': return distance
    case 'string':
      if (distance.indexOf('ow') >= 0) {
        return (width / 100) * +distance.replace('ow', '')
      }
      return 25
    default:
      return 25
  }
}

export default (dragging, dragDistance) => {
  const [{ width }, dispatch] = useStateContext()

  useEffect(() => {
    const distance = getDistanceRef(dragDistance, width)
    dispatch({ type: 'SET_DRAG_DISTANCE', dragDistance: distance })
  }, [dragDistance, width])

  useEffect(() => {
    if (dragging) {
      dispatch({ type: 'SET_DRAGGING', dragging })
    }
  }, [dragging])
}
