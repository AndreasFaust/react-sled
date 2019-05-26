import { useEffect } from 'react'
import { useStateContext } from '../state'

const useGoto = (goto) => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    if (!goto) return
    const index = parseInt(goto, 10)
    if (!isNaN(index)) {
      dispatch({ type: 'GOTO', index: index, pause: true })
    }
  }, [goto])
}

export default useGoto
