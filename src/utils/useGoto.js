import { useEffect } from 'react'
import { useStateContext } from './state'

const useGoto = (goto) => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    if (!goto) return
    dispatch({ type: 'GOTO', index: +goto, pause: true })
  }, [goto])
}

export default useGoto
