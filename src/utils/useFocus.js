import { useEffect } from 'react'
import { useStateContext } from './useState'

const useFocus = (ref) => {
  const [, dispatch] = useStateContext()

  useEffect(() => {
    function onFocus () {
      dispatch({ type: 'SET_FOCUS', focus: true })
    }
    function onBlur () {
      dispatch({ type: 'SET_FOCUS', focus: false })
    }
    ref.current.addEventListener('focus', onFocus)
    ref.current.addEventListener('blur', onBlur)
    return () => {
      ref.current.removeEventListener('focus', onFocus)
      ref.current.removeEventListener('blur', onBlur)
    }
  }, [])
}

export default useFocus
