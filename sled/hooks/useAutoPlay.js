import { useRef, useEffect } from 'react'
import { useStateContext } from '../state'

const useInterval = (callback, interval) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (typeof interval === 'number') {
      let id = setInterval(tick, interval)
      return () => clearInterval(id)
    }
  }, [interval])
}

export default (autoPlayIntervalNew) => {
  const [{ pause, autoPlayInterval }, dispatch] = useStateContext()

  useEffect(() => {
    const newInterval = parseInt(autoPlayIntervalNew, 10)
    if (!isNaN(newInterval)) {
      dispatch({ type: 'SET_AUTOPLAY', autoPlayInterval: newInterval })
    } else {
      dispatch({ type: 'SET_AUTOPLAY', autoPlayInterval: null })
    }
  }, [autoPlayIntervalNew, dispatch])

  useInterval(() => {
    dispatch({ type: 'NEXT' })
  }, !pause && autoPlayInterval)
}
