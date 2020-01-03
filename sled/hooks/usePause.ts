import { useEffect } from 'react'
import { useStateContext } from '../state'

export default (pause: boolean) => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    dispatch({ type: 'SET_PAUSE', pause })
  }, [pause])
}
