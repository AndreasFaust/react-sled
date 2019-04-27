import { useState, useEffect } from 'react'
import { useStateContext } from '../state'

const useDisabled = (type) => {
  const [{ rewind, currentIndex, viewCount }] = useStateContext()
  const [disabled, setDisabled] = useState()
  useEffect(() => {
    if (rewind) {
      setDisabled(false)
      return
    }
    if (type === 'next' && currentIndex === viewCount - 1) {
      setDisabled(true)
    } else if (type === 'prev' && currentIndex === 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [currentIndex, rewind])
  return disabled
}

export default useDisabled
