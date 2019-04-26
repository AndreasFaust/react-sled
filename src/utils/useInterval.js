import { useRef, useEffect } from 'react'

export default (callback, delay) => {
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
