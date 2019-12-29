
import { useEffect } from 'react'
import { debounce } from '../utils/debounce'
import { useStateContext } from '../state'

type TRef = React.MutableRefObject<HTMLDivElement>
type TDimension = string | number | null

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

export default (ref: TRef, width: TDimension, height: TDimension) => {
  const [, dispatch] = useStateContext()

  useEffect(() => {
    setDimensions(ref, dispatch)
  }, [width, height, ref, dispatch])

  useEffect(() => {
    function onResize() {
      setDimensions(ref, dispatch)
    }
    const dOnResize = debounce(onResize, 150)
    window.addEventListener('resize', dOnResize)
    return () => window.removeEventListener('resize', dOnResize)
  }, [dispatch, ref])
}
