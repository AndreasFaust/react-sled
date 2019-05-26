import { useEffect } from 'react'
import { useStateContext } from '../state'

export default (pauseOnMouseOver, ref) => {
  const [, dispatch] = useStateContext()

  useEffect(() => {
    function onMouseEnter () {
      dispatch({ type: 'SET_MOUSEOVER', mouseover: true })
    }
    function onMouseLeave () {
      dispatch({ type: 'SET_MOUSEOVER', mouseover: false })
    }
    if (pauseOnMouseOver) {
      ref.current.addEventListener('mouseenter', onMouseEnter)
      ref.current.addEventListener('mouseover', onMouseEnter)
      ref.current.addEventListener('mouseout', onMouseLeave)
      return () => {
        dispatch({ type: 'SET_MOUSEOVER', mouseover: false })
        ref.current.removeEventListener('mouseenter', onMouseEnter)
        ref.current.removeEventListener('mouseover', onMouseEnter)
        ref.current.removeEventListener('mouseout', onMouseLeave)
      }
    }
  }, [pauseOnMouseOver])
}
