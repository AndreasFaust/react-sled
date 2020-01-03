import { useState, useEffect } from 'react'
import { useStateContext } from '../../state'
import { TSelect } from "../../state/types-defaults"

const useArrow = (select: TSelect) => {
  const [{ rewind, currentIndex, viewCount }] = useStateContext()
  const [disabled, setDisabled] = useState<boolean>(false)
  useEffect(() => {
    if (rewind) {
      setDisabled(false)
      return
    }
    if (select === 'next' && currentIndex === viewCount - 1) {
      setDisabled(true)
    } else if (select === 'prev' && currentIndex === 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [currentIndex, rewind])
  return disabled
}

const useDot = (select: TSelect) => {
  const [{ currentIndex }] = useStateContext()
  const [disabled, setDisabled] = useState<boolean>(false)
  useEffect(() => {
    if (select === currentIndex) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [currentIndex])
  return disabled
}

export default (select: TSelect) => {
  const arrow = useArrow(select)
  const dot = useDot(select)

  switch (typeof select) {
    case 'number':
      return dot
    case 'string':
    default:
      return arrow
  }
}
