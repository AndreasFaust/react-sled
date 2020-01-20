
import React from 'react'
import { debounce } from '../utils/debounce'
import { useStateContext } from '../state'
import { TRef, TDimension } from '../state/types-defaults'

interface IProportion {
  width: TDimension
  height: TDimension
  offsetWidth: number
  offsetHeight: number
  proportion: string
  dispatch
}

interface IDimensions {
  width: TDimension
  height: TDimension
}

function getProportion({
  width,
  height,
  offsetWidth,
  offsetHeight,
  proportion,
  dispatch
}: IProportion) {
  if (!proportion) return

  const [proportionWidth, proportionHeight] = proportion.split(':')
  let dimensions: IDimensions = { width: 0, height: 0 }

  if (width) {
    const heightValue = (offsetWidth * +proportionHeight) / +proportionWidth
    dimensions = {
      width: offsetWidth,
      height: heightValue
    }
  } else {
    const widthValue = (offsetHeight * +proportionWidth) / +proportionHeight
    dimensions = {
      width: widthValue,
      height: offsetHeight
    }
  }
  dispatch({
    type: 'SET_DIMENSIONS',
    dimensions: dimensions
  })
}

export default (ref: TRef) => {
  const [{ dimensionsDOM, proportion }, dispatch] = useStateContext()

  React.useEffect(() => {
    function onResize() {
      const { offsetWidth, offsetHeight } = ref.current
      getProportion({
        ...dimensionsDOM,
        offsetWidth,
        offsetHeight,
        proportion,
        dispatch
      })
    }
    onResize()
    const dOnResize = debounce(onResize, 200)
    window.addEventListener('resize', dOnResize)
    return () => window.removeEventListener('resize', dOnResize)

  }, [dimensionsDOM, proportion])

}
