import { useEffect, useRef } from 'react'
import { useStateContext } from '../state'

const useKeyboard = (keyboard: boolean) => {
  const [{ hasFocus }, dispatch] = useStateContext()
  const hasFocusRef = useRef<boolean>(false)

  useEffect(() => {
    hasFocusRef.current = hasFocus
  }, [hasFocus])

  useEffect(() => {
    function onKeyup(event: KeyboardEvent) {
      if (!hasFocusRef.current) return
      switch (event.keyCode) {
        case 37:
          dispatch({ type: 'PREV' })
          break
        case 39:
          dispatch({ type: 'NEXT' })
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
