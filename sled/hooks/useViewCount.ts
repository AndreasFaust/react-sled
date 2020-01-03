import React, { useEffect } from 'react'
import { useStateContext } from '../state'

export default function (children?: React.ReactNode) {
  const [, dispatch] = useStateContext()

  useEffect(() => {
    dispatch({ type: 'SET_VIEWCOUNT', count: React.Children.toArray(children).length })
  }, [children])
}
