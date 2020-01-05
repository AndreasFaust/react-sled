import { useEffect } from 'react'
import { useStateContext } from '../state'

const useShowSlides = (showSlides: number) => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    if (showSlides) {
      dispatch({ type: 'SET_SHOWSLIDES', showSlides })
    }
  }, [showSlides])
}

export default useShowSlides
