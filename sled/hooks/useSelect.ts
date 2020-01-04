import { useEffect } from 'react'
import { useStateContext } from '../state'

const useSelect = (select?: number | 'next' | 'prev') => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    if (typeof select === 'number') {
      dispatch({ type: 'SELECT', index: select })
    } else {
      dispatch({ type: select === 'next' ? 'NEXT' : 'PREV' })
    }
  }, [select])
}

export default useSelect
