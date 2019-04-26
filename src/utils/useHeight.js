
import { useState, useEffect } from 'react'

function getHeight (customHeight) {
  if (typeof customHeight === 'number' || customHeight.indexOf('ow') < 0) {
    return `height: ${customHeight};`
  }
  return `
    :after {
      content: '';
      display: block;
      width: 100%;
      height: 0;
      padding-top: ${+customHeight.replace('ow', '')}%;
    }
  `
}

export default (customHeight) => {
  const [height, setHeight] = useState(getHeight(customHeight))

  useEffect(() => {
    setHeight(getHeight(customHeight))
  }, [customHeight])

  return height
}
