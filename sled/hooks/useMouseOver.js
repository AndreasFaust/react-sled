import { useEffect } from 'react'
import { useStateContext } from '../state'

export default (pauseOnMouseOver, ref) => {
  const [{ autoPlayInterval }, dispatch] = useStateContext()
  useEffect(() => {
    dispatch({ type: 'SET_PAUSE', pause: false })

    function onMouseEnter() {
      dispatch({ type: 'SET_MOUSEOVER', pauseOnMouseOver: true })
      dispatch({ type: 'SET_PAUSE', pause: true })
    }
    function onMouseLeave() {
      dispatch({ type: 'SET_MOUSEOVER', pauseOnMouseOver: false })
      dispatch({ type: 'SET_PAUSE', pause: false })
    }
    if (pauseOnMouseOver && autoPlayInterval) {
      ref.current.addEventListener('mouseenter', onMouseEnter)
      ref.current.addEventListener('mouseover', onMouseEnter)
      ref.current.addEventListener('mouseout', onMouseLeave)
      return () => {
        dispatch({ type: 'SET_MOUSEOVER', pauseOnMouseOver: false })
        ref.current.removeEventListener('mouseenter', onMouseEnter)
        ref.current.removeEventListener('mouseover', onMouseEnter)
        ref.current.removeEventListener('mouseout', onMouseLeave)
      }
    }
  }, [pauseOnMouseOver, autoPlayInterval, dispatch, ref])
}
