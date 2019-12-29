import { useEffect } from 'react'
import { useStateContext } from '../state'
import { SpringConfig } from 'react-spring'

export default (config: SpringConfig) => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    dispatch({ type: 'SET_CONFIG', config })
  }, [config, dispatch])
}
