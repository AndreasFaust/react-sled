import { useEffect, useRef } from 'react'
import { useStateContext } from '../state'

const useKeyboard = (keyboard) => {
  const [{ hasFocus }, dispatch] = useStateContext()
  const hasFocusRef = useRef()

  useEffect(() => {
    hasFocusRef.current = hasFocus
  }, [hasFocus])

  useEffect(() => {
    function onKeyup (event) {
      if (!hasFocusRef.current) return
      switch (event.keyCode) {
        case 37:
          dispatch({ type: 'PREV', pause: true })
          break
        case 39:
          dispatch({ type: 'NEXT', pause: true })
          break
      }
    }
    if (keyboard) {
      document.addEventListener('keyup', onKeyup)
      return () => document.removeEventListener('keyup', onKeyup)
    }
  }, [keyboard])
}

export default useKeyboard
