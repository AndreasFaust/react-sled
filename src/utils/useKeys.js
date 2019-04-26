import { useEffect } from 'react'

const useKeys = (keys, hasFocus, dispatch) => {
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
    if (keys) {
      document.addEventListener('keyup', onKeyup)
      return () => document.removeEventListener('keyup', onKeyup)
    }
  }, [])
}

export default useKeys
