import { useEffect } from 'react'
import { useStateContext } from '../state'

export default (config) => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    dispatch({ type: 'SET_CONFIG', config })
  }, [config, dispatch])
}
