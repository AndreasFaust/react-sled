import { useState, useEffect } from 'react'
import { useStateContext } from '../state'

const useZIndex = (index) => {
  const [{ viewCount }] = useStateContext()
  const [zIndex, setZIndex] = useState()

  useEffect(() => {
    const z = 1000 - index
    setZIndex(z)
  }, [viewCount])

  return zIndex
}

export default useZIndex
