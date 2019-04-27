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

export default (autoPlay) => {
  const [{ mouseover, pause }, dispatch] = useStateContext()

  useEffect(() => {
    dispatch({ type: 'SET_AUTOPLAY', autoPlay })
  }, autoPlay)

  useInterval(() => {
    dispatch({ type: 'NEXT' })
  }, !pause && !mouseover ? autoPlay : null)
}
