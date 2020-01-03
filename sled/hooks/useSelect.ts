import { useEffect } from 'react'
import { useStateContext } from '../state'

const useSelect = (select?: number | 'next' | 'prev') => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    // switch (typeof select) {
    //   case 'number':
    //     dispatch({ type: 'SELECT', index: select })
    //   case 'string':
    //     dispatch({ type: select === 'next' ? 'NEXT' : 'PREV' })
    //   default:
    // }
  }, [select])
}

export default useSelect
