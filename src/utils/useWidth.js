
import { useState, useEffect } from 'react'
import debounce from './debounce'

export default (ref) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function onResize () {
      setWidth(ref.current.offsetWidth)
    }
    onResize()
    const dOnResize = debounce(onResize, 150)
    window.addEventListener('resize', dOnResize)
    return () => window.removeEventListener('resize', dOnResize)
  }, [])

  return width
}
