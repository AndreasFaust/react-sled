
import { useState, useEffect } from 'react'

export default (customHeight, width) => {
  const [height, setHeight] = useState(customHeight)

  useEffect(() => {
    switch (typeof customHeight) {
      case 'number':
        setHeight(`${customHeight}px`)
        break
      case 'string':
        if (customHeight.indexOf('ow') >= 0) {
          const inPx = (width / 100) * +customHeight.replace('ow', '')
          setHeight(`${inPx}px`)
        } else {
          setHeight(customHeight)
        }
        break
    }
  }, [width])

  return height
}
