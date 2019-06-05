import { useEffect } from 'react'
import { useStateContext } from '../state'

export default (onSledEnd) => {
  const [{ viewCount, restedIndex, currentIndex, autoPlayInterval }] = useStateContext()
  useEffect(() => {
    if (typeof onSledEnd !== 'function') return
    let timeoutId
    if (viewCount && restedIndex + 1 === viewCount) {
      if (autoPlayInterval) {
        timeoutId = window.setTimeout(() => {
          onSledEnd()
          // clear timeoutId, that timeout does not get called a second time on cleanup
          timeoutId = undefined
        }, autoPlayInterval)
      } else {
        onSledEnd()
      }
    }
    return () => {
      if (timeoutId) {
        // if timeout is running, but sled is moved to next!
        clearTimeout(timeoutId)
        if (currentIndex === 0) {
          onSledEnd()
        }
      }
    }
  }, [restedIndex, currentIndex])
}
