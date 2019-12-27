// https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

import React, { createContext, useContext, useReducer } from 'react'
import { initialState } from './types-defaults'
import reducer from './reducer'

export const StateContext = createContext([])

interface IProps {
  children?: React.ReactNode
}

const StateProvider: React.FC<IProps> = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

export { StateProvider }

export const useStateContext = () => useContext(StateContext)

export { default as reducer } from './reducer'
export { initialState } from './types-defaults'