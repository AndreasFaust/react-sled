import { useEffect } from 'react'
import { useStateContext } from '../state'

function getDistance(distance: string | number, width: number): number {
  switch (typeof distance) {
    case 'number': return distance
    case 'string':
      if (distance.indexOf('%') >= 0) {
        return (width / 100) * +distance.replace('%', '')
      }
      const distanceNumber = parseInt(distance, 10)
      if (distanceNumber) {
        return distanceNumber
      }
      console.warn('Sled-Error: dragDistance must either be a String with unit % or a number.')
      return 40
    default:
      return 40
  }
}

export default (dragging: boolean, dragDistance: string | number) => {
  const [{ dimensions: { width } }, dispatch] = useStateContext()

  useEffect(() => {
    const distance = getDistance(dragDistance, width)
    dispatch({ type: 'SET_DRAG_DISTANCE', dragDistance: distance })
  }, [dispatch, dragDistance, width])

  useEffect(() => {
    dispatch({ type: 'SET_DRAGGING', dragging })
  }, [dispatch, dragging])
}
