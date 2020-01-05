import React from 'react'
import { useStateContext } from '../state'

type TCursor = 'grab' | 'auto'

export default (): TCursor => {
  const [{ dragging }] = useStateContext()

  const [cursor, setCursor] = React.useState<TCursor>('auto')
  React.useEffect(() => {
    setCursor(dragging ? 'grab' : 'auto')
  }, [dragging])

  return cursor
}