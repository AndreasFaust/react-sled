import { useEffect } from 'react'
import { useStateContext } from './state'

const useMouse = (ref) => {
  const [{ pauseOnMouseOver }, dispatch] = useStateContext()

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
        ref.current.removeEventListener('mouseenter', onMouseEnter)
        ref.current.removeEventListener('mouseover', onMouseEnter)
        ref.current.removeEventListener('mouseout', onMouseLeave)
      }
    }
  }, [])
}

export default useMouse
