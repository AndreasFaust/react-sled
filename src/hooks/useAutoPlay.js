import { useRef, useEffect } from 'react'
import { useStateContext } from '../state'

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick () {
      savedCallback.current()
    }
    if (typeof delay === 'number') {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default (autoPlay) => {
  const [{ mouseover, pause, autoPlayInterval }, dispatch] = useStateContext()

  useEffect(() => {
    const newInterval = parseInt(autoPlay, 10)
    if (!isNaN(newInterval)) {
      dispatch({ type: 'SET_AUTOPLAY', autoPlayInterval: newInterval })
    } else {
      dispatch({ type: 'SET_AUTOPLAY', autoPlayInterval: undefined })
    }
  }, [autoPlay])

  useInterval(() => {
    dispatch({ type: 'NEXT' })
  }, !pause && !mouseover ? autoPlayInterval : null)
}
