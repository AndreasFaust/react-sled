import { useEffect, useRef } from 'react'
import { useDrag } from 'react-use-gesture'
import { useStateContext } from '../state'

export default (set) => {
  const [{ dragDistance, width, pause, currentIndex }, dispatch] = useStateContext()

  const bind = useDrag(({
    down,
    movement: [xDelta],
    direction: [xDir],
    distance,
    cancel,
    canceled
  }) => {
    if (canceled) return
    if (down && distance > dragDistance) {
      dispatch({ type: xDir > 0 ? 'PREV' : 'NEXT', pause: true })
      cancel()
    }
    set(i => {
      if (i < currentIndex - 1 || i > currentIndex + 1) return { display: 'none' }
      // const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      const x = (i - currentIndex) * width + (down ? xDelta : 0)
      return {
        x,
        immediate: false,
        display: 'block',
        cursor: down ? 'grabbing' : 'grab',
        onStart: undefined,
        onRest: undefined
      }
    })
    dispatch({ type: 'SET_PAUSE', pause: true })
  })

  return bind
}
