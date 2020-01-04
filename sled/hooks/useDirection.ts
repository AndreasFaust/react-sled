import React from 'react'
import { useStateContext } from '../state'
import { TDirection } from '../state/types-defaults'

export default (direction: TDirection) => {
  const [, dispatch] = useStateContext()

  React.useEffect(() => {
    if (direction) {
      dispatch({ type: 'SET_DIRECTION', direction })
    }
  }, [direction])
}
