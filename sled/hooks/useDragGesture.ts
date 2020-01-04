import { useDrag } from 'react-use-gesture'
import { useStateContext } from '../state'
import { SpringsUpdateFn } from 'react-spring'

interface ISet {
  x: number
}

export default (set: SpringsUpdateFn<ISet>) => {
  const [{ dragging, dragDistance, dimensions: { width }, currentIndex, viewCount }, dispatch] = useStateContext()

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
    set(() => {
      const x = (-currentIndex * width) + (down ? xDelta : 0)
      return {
        x,
        immediate: false,
        cursor: down ? 'grabbing' : 'grab',
        onStart: undefined,
        onRest: undefined
      }
    })
    dispatch({ type: 'SET_PAUSE', pause: true })
  })

  return dragging && bind
}
