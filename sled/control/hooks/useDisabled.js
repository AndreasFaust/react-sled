import { useState, useEffect } from 'react'
import { useStateContext } from '../../state'

const useArrow = (goto) => {
  const [{ rewind, currentIndex, viewCount }] = useStateContext()
  const [disabled, setDisabled] = useState()
  useEffect(() => {
    if (rewind) {
      setDisabled(false)
      return
    }
    if (goto === 'next' && currentIndex === viewCount - 1) {
      setDisabled(true)
    } else if (goto === 'prev' && currentIndex === 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [currentIndex, rewind])
  return disabled
}

const useDot = (goto) => {
  const [{ currentIndex }] = useStateContext()
  const [disabled, setDisabled] = useState()
  useEffect(() => {
    if (goto === currentIndex) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [currentIndex])
  return disabled
}

export default (goto) => {
  const arrow = useArrow(goto)
  const dot = useDot(goto)

  switch (typeof goto) {
    case 'number':
      return dot
    case 'string':
    default:
      return arrow
  }
}
