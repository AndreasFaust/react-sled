import { useEffect } from 'react'
import { useStateContext } from './useState'

const useMouse = (ref) => {
  const [{ pauseOnMouseOver, onMouseLeave }, dispatch] = useStateContext()

  useEffect(() => {
    function onMouseEnterCallback () {
      dispatch({ type: 'SET_MOUSEOVER', mouseover: true })
    }
    function onMouseLeaveCallback () {
      onMouseLeave()
      dispatch({ type: 'SET_MOUSEOVER', mouseover: false })
    }
    if (pauseOnMouseOver) {
      ref.current.addEventListener('mouseenter', onMouseEnterCallback)
      ref.current.addEventListener('mouseover', onMouseEnterCallback)
      ref.current.addEventListener('mouseout', onMouseLeaveCallback)
      return () => {
        ref.current.removeEventListener('mouseenter', onMouseEnterCallback)
        ref.current.removeEventListener('mouseover', onMouseEnterCallback)
        ref.current.removeEventListener('mouseout', onMouseLeaveCallback)
      }
    }
  }, [])
}

export default useMouse
