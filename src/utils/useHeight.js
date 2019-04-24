
import { useState, useEffect } from 'react'
import useViewportSize from './useViewportSize'

export default (customHeight, width) => {
  const [height, setHeight] = useState(0)
  const [vw, vh] = useViewportSize()

  useEffect(() => {
    switch (typeof customHeight) {
      case 'number':
        setHeight(customHeight)
        break
      case 'string':
        if (customHeight.indexOf('%') >= 0) {
          setHeight((width / 100) * +customHeight.replace('%', ''))
        }
        if (customHeight.indexOf('vw') >= 0) {
          setHeight((vw / 100) * +customHeight.replace('vw', ''))
        }
        if (customHeight.indexOf('vh') >= 0) {
          setHeight((vh / 100) * +customHeight.replace('vh', ''))
        }
        break
    }
  }, [width])

  return height
}
