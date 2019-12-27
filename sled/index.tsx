import React from 'react'

import { StateProvider, useStateContext } from './state'

interface IProps {
  children?: React.ReactNode
}

const Sled: React.FC<IProps> = (props) => {
  const { children } = props
  return (
    <StateProvider>
      {children}
    </StateProvider>
  )
}


export { Sled }
export { default as Views } from './views'
export { default as Control } from './control'
export { default as Progress } from './progress'
export { useStateContext as useSledStore }
