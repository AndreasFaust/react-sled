import { useEffect } from 'react'
import { useStateContext } from '../state'

const useShowElements = (showElements: number) => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    if (showElements) {
      dispatch({ type: 'SET_SHOWELEMENTS', showElements })
    }
  }, [showElements])
}

export default useShowElements
