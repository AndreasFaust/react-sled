
import { useState, useEffect } from 'react'
// import useViewportSize from './useViewportSize'

export default (customHeight, width) => {
  const [height, setHeight] = useState(customHeight)
  // const [vw, vh] = useViewportSize()

  useEffect(() => {
    switch (typeof customHeight) {
      case 'number':
        setHeight(customHeight)
        break
      case 'string':
        if (customHeight.indexOf('ow') >= 0) {
          setHeight((width / 100) * +customHeight.replace('ow', ''))
        } else {
          setHeight(customHeight)
        }
        // if (customHeight.indexOf('vw') >= 0) {
        //   return
        //   // setHeight((vw / 100) * +customHeight.replace('vw', ''))
        // }
        // if (customHeight.indexOf('vh') >= 0) {
        //   setHeight((vh / 100) * +customHeight.replace('vh', ''))
        // }
        break
    }
  }, [width])

  return height
}
