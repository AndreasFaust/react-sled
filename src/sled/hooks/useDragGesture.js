import { useEffect, useRef } from 'react'
import { useGesture } from 'react-with-gesture'
import { useStateContext } from '../state'

export default (set) => {
  const [{ dragging, dragDistance, width, pauseOnInteraction, currentIndex }, dispatch] = useStateContext()

  const indexRef = useRef()
  const draggingRef = useRef()
  const widthRef = useRef()
  const distanceRef = useRef()

  useEffect(() => {
    indexRef.current = currentIndex
    draggingRef.current = dragging
    widthRef.current = width
    distanceRef.current = dragDistance
  }, [currentIndex, dragging, dragDistance, width])

  const bind = useGesture(({
    down,
    delta: [xDelta],
    direction: [xDir],
    distance,
    cancel
  }) => {
    if (!draggingRef.current) return

    if (down && distance > distanceRef.current) {
      dispatch({ type: xDir > 0 ? 'PREV' : 'NEXT', pause: true })
      cancel()
    }
    set(i => {
      const x = (i - indexRef.current) * widthRef.current + (down ? xDelta : 0)
      // const sc = down ? 1 - distance / widthRef.current / 2 : 1
      return { x, immediate: false, cursor: down ? 'grabbing' : 'grab' }
    })
    dispatch({ type: 'SET_PAUSE', pause: true })
  })

  return bind
}
