
import { useState, useEffect } from 'react'
import debounce from './debounce'

export default (ref, customWidth) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function onResize () {
      if (typeof customWidth === 'number') return
      setWidth(ref.current.offsetWidth)
    }
    onResize()
    const dOnResize = debounce(onResize, 150)
    window.addEventListener('resize', dOnResize)
    return () => window.removeEventListener('resize', dOnResize)
  }, [])

  useEffect(() => {
    if (typeof customWidth !== 'number') return
    setWidth(customWidth)
  }, [customWidth])

  return width
}
