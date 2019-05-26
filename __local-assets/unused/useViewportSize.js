
import { useState, useEffect } from 'react'
import debounce from './debounce'

export default () => {
  const [size, setSize] = useState([0, 0])
  useEffect(() => {
    function onResize () {
      const { innerWidth, innerHeight } = window
      setSize([innerWidth, innerHeight])
    }
    onResize()
    const dOnResize = debounce(onResize, 150)
    window.addEventListener('resize', dOnResize)
    return () => window.removeEventListener('resize', dOnResize)
  }, [])
  return size
}
