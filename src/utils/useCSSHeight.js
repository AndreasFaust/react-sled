
import { useState, useEffect } from 'react'

function getResponsive (padding) {
  return `
  :after {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding-top: ${padding}%;
  }
`
}

function getHeight (customHeight) {
  if (typeof customHeight === 'string') {
    const isValidCSS = /^\d+(\.\d+)?(px|r?em|%|vw|vh|vmin|vmax)$/
    if (isValidCSS.test(customHeight)) {
      return `height: ${customHeight};`
    }
    const isOW = /^\d+(\.\d+)?ow$/
    if (isOW.test(customHeight)) {
      return getResponsive(+customHeight.replace('ow', ''))
    }
  }
  return getResponsive(50)
}

export default (customHeight) => {
  const [height, setHeight] = useState(getHeight(customHeight))

  useEffect(() => {
    const cssHeight = getHeight(customHeight)
    setHeight(cssHeight)
  }, [customHeight])

  return height
}
