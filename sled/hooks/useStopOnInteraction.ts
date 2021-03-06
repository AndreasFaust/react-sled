import { useEffect } from 'react'
import { useStateContext } from '../state'

const useStopOnInteraction = (stopOnInteraction: boolean) => {
  const [, dispatch] = useStateContext()

  useEffect(() => {
    dispatch({ type: 'SET_STOPONINTERACTION', stopOnInteraction })
  }, [stopOnInteraction])
}

export default useStopOnInteraction
