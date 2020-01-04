import { useState, useEffect } from 'react'
import { useStateContext } from '../../state'
import { TSelect } from "../../state/types-defaults"

export const useDirectionDisabled = (select: TSelect) => {
  const [{ rewind, currentIndex, viewCount }] = useStateContext()
  const [disabled, setDisabled] = useState<boolean>(false)
  useEffect(() => {
    if (typeof select === 'string') {
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
    }
  }, [currentIndex, rewind])
  return disabled
}

