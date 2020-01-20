
import React from 'react'
import { useStateContext, TDimension } from '../state'

export default (width: TDimension, height: TDimension) => {
  const [, dispatch] = useStateContext()

  React.useEffect(() => {
    if (!width && !height) {
      dispatch({
        type: 'SET_DIMENSIONS_DOM',
        dimensionsDOM: { width: '100%', height: null }
      })
      dispatch({ type: 'SET_PROPORTION', proportion: '2:1' })
      return
    }

    dispatch({
      type: 'SET_DIMENSIONS_DOM',
      dimensionsDOM: { width, height }
    })

  }, [width, height])

}
