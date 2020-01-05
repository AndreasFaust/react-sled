import { useEffect } from 'react'
import { useStateContext } from '../state'

const useSlideSteps = () => {
  const [{ viewCount, slideBy, showSlides }, dispatch] = useStateContext()
  useEffect(() => {
    const slideSteps = Math.ceil(viewCount / slideBy)
    dispatch({ type: 'SET_SLIDESTEPS', slideSteps })
  }, [viewCount, slideBy])
}

export default useSlideSteps
