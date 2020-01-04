
import { useLayoutEffect, useEffect } from 'react'
import { debounce } from '../utils/debounce'
import { useStateContext } from '../state'
import { TRef, TDimension, TProportion } from '../state/types-defaults'

function setDimensions(ref: TRef, dispatch) {
  const { offsetWidth, offsetHeight } = ref.current
  dispatch({
    type: 'SET_DIMENSIONS',
    dimensions: {
      width: offsetWidth,
      height: offsetHeight
    }
  })
}

export default (widthFromProps: TDimension, heightFromProps: TDimension, ref: TRef) => {
  const [{ dimensions: { width, height } }, dispatch] = useStateContext()

  useLayoutEffect(() => {
    setDimensions(ref, dispatch)
  }, [widthFromProps, heightFromProps, width, height, ref.current])

  useEffect(() => {
    function onResize() {
      setDimensions(ref, dispatch)
    }
    const dOnResize = debounce(onResize, 150)
    window.addEventListener('resize', dOnResize)
    return () => window.removeEventListener('resize', dOnResize)
  }, [])
}
