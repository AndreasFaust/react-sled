
import React from 'react'
import { debounce } from '../utils/debounce'
import { useStateContext } from '../state'
import { TRef, TDimension } from '../state/types-defaults'

interface IDimensions {
  width: TDimension
  height: TDimension
}

function getDimensions(width: TDimension, height: TDimension, proportion: string, ref: TRef, dispatch): IDimensions {
  const { offsetWidth, offsetHeight } = ref.current
  let dimensions: IDimensions = { width: offsetWidth, height: offsetHeight }
  let returnDimensions: IDimensions = { width, height }

  if (!width && !height) {
    const heightValue = offsetWidth / 2
    dimensions = { width: offsetWidth, height: heightValue }
    returnDimensions = { width: '100%', height: heightValue }
    console.warn('Sled-Error: You need to provide either a width or a height. Falling back to "width: 100%" and proportion "2:1".')
  }

  if (proportion) {
    const [proportionWidth, proportionHeight] = proportion.split(':')
    if (width) {
      const heightValue = (offsetWidth * +proportionHeight) / +proportionWidth
      dimensions = {
        width: offsetWidth,
        height: heightValue
      }
      returnDimensions = {
        width,
        height: heightValue
      }
    } else {
      const widthValue = (offsetHeight * +proportionWidth) / +proportionHeight
      dimensions = {
        width: widthValue,
        height: offsetHeight
      }
      returnDimensions = {
        width: widthValue,
        height
      }
    }
  }

  dispatch({
    type: 'SET_DIMENSIONS',
    dimensions
  })

  return returnDimensions
}

export default (width: TDimension, height: TDimension, proportion: string, ref: TRef): IDimensions => {
  const [{ }, dispatch] = useStateContext()

  const [dimensions, setDimensions] = React.useState<IDimensions>({ width: 0, height: 0 })

  React.useEffect(() => {
    setDimensions(() => getDimensions(width, height, proportion, ref, dispatch))
    function onResize() {
      setDimensions(() => getDimensions(width, height, proportion, ref, dispatch))
    }
    const dOnResize = debounce(onResize, 200)
    window.addEventListener('resize', dOnResize)
    return () => window.removeEventListener('resize', dOnResize)
  }, [width, height, proportion, ref.current])

  return dimensions
}
