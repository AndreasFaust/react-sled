
import { useEffect } from 'react'
import debounce from '../utils/debounce'
import { useStateContext } from '../state'

function set (ref, dispatch) {
  const { offsetWidth, offsetHeight } = ref.current
  dispatch({ type: 'SET_DIMENSIONS', width: offsetWidth, height: offsetHeight })
}

export default (ref, width, height, cssHeight) => {
  const [, dispatch] = useStateContext()

  useEffect(() => {
    set(ref, dispatch)
  }, [width, height, cssHeight])

  useEffect(() => {
    function onResize () {
      set(ref, dispatch)
    }
    const dOnResize = debounce(onResize, 150)
    window.addEventListener('resize', dOnResize)
    return () => window.removeEventListener('resize', dOnResize)
  }, [])
}
