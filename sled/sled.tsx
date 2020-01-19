import React from 'react'

import { StateProvider } from './state'

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

export default Sled
