import { useEffect } from 'react'
import { useStateContext } from '../state'

export default (rewind: boolean) => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    dispatch({ type: 'SET_REWIND', rewind })
  }, [rewind])
}
