import { useEffect } from 'react'

const useKeyboard = (keyboard, hasFocus, dispatch) => {
  useEffect(() => {
    function onKeyup (event) {
      if (!hasFocus) return
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
  }, [])
}

export default useKeyboard
