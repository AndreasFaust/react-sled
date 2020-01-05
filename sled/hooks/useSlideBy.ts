import { useEffect } from 'react'
import { useStateContext } from '../state'

const useShowSlides = (slideBy: number) => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    if (slideBy) {
      dispatch({ type: 'SET_SLIDEBY', slideBy })
    }
  }, [slideBy])
}

export default useShowSlides
