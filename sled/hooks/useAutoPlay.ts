import { useRef, useEffect } from 'react'
import { useStateContext } from '../state'

const useInterval = (callback: any, interval: number): void => {
  const savedCallback = useRef(callback)

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

export default (autoPlayIntervalNew: number): void => {
  const [{ pause, autoPlayInterval }, dispatch] = useStateContext()

  useEffect(() => {
    if (typeof autoPlayIntervalNew === 'number') {
      dispatch({ type: 'SET_AUTOPLAY', autoPlayInterval: autoPlayIntervalNew })
    } else {
      console.warn(`Sled-Error: "autoplay" must be of type "number", not "${typeof autoPlayIntervalNew}".`)
    }
  }, [autoPlayIntervalNew])

  useInterval(() => {
    dispatch({ type: 'NEXT' })
  }, !pause && autoPlayInterval)
}
