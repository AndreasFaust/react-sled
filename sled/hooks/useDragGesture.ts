import { useDrag } from 'react-use-gesture'
import { useStateContext } from '../state'
import { SpringsUpdateFn } from 'react-spring'

interface ISet {
  x: number
}

export default (set: SpringsUpdateFn<ISet>) => {
  const [{
    dragging,
    dragDistance,
    dimensions: { width, height },
    currentIndex,
    direction,
    stopOnInteraction,
    showElements,
    slideBy
  }, dispatch] = useStateContext()

  const bind = useDrag(({
    down,
    movement: [xDelta, yDelta],
    direction: [xDir, yDir],
    distance,
    cancel,
    canceled,
  }) => {
    if (canceled) return

    if (stopOnInteraction) {
      dispatch({ type: 'SET_AUTOPLAY', autoPlayInterval: undefined })
    }
    if (down && distance > dragDistance) {
      const dirValue = direction === 'horizontal' ? xDir : yDir
      dispatch({
        type: dirValue > 0
          ? 'PREV'
          : 'NEXT',
        pause: true
      })
      cancel()
    }
    set(() => {
      const x = direction === 'horizontal'
        ? (-currentIndex * (width / showElements * slideBy)) + (down ? xDelta : 0)
        : (-currentIndex * (height / showElements * slideBy)) + (down ? yDelta : 0)
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
