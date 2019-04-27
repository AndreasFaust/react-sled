import { useState, useEffect } from 'react'
import { useStateContext } from '../state'

const useZIndex = (index) => {
  const [{ viewCount }] = useStateContext()
  const [zIndex, setZIndex] = useState()

  useEffect(() => {
    console.log((viewCount - index) * 100)
    setZIndex((viewCount - index) * 100)
  }, [viewCount])

  return zIndex
}

export default useZIndex
