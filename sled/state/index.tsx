// https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

import React, { createContext, useContext, useReducer } from 'react'
import { initialState, IState } from './types-defaults'
import { reducer, ActionType } from './reducer'

export const StateContext = createContext<IState | any>(initialState)

interface IProps {
  children?: React.ReactNode
}

const StateProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

export { StateProvider }

export const useStateContext = (): [IState, React.Dispatch<ActionType>] => {
  const [state, dispatch] = useContext(StateContext)
  return [state, dispatch]
}

export * from './types-defaults'