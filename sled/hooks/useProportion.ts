
import React from 'react'
import { useStateContext, TDimension } from '../state'

export default (width: TDimension, height: TDimension, proportion?: string): void => {
  const [, dispatch] = useStateContext()
  React.useEffect(() => {
    if (!height && !proportion) {
      dispatch({ type: 'SET_PROPORTION', proportion: '2:1' })
    } else {
      dispatch({ type: 'SET_PROPORTION', proportion })
    }
  }, [width, height, proportion])
}
