import React, { createContext, useContext, useReducer } from 'react'
export const StateContext = createContext()

const initialState = {
  goto: 0,
  rewind: true,
  pauseOnMouseOver: true,
  stopOnInteraction: true,
  keyboard: true,
  dragging: true,
  dragDistance: '25ow',
  autoPlayInterval: 3000,
  width: '100%',
  proportion: '2:1',
  clamp: true,
  mass: 1,
  tension: 170,
  friction: 26
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'goto': return { ...state, goto: action.value }
    case 'proportion': return { ...state, proportion: action.value }
    case 'rewind': return { ...state, rewind: action.value }
    case 'pauseOnMouseOver': return { ...state, pauseOnMouseOver: action.value }
    case 'stopOnInteraction': return { ...state, stopOnInteraction: action.value }
    case 'keyboard': return { ...state, keyboard: action.value }
    case 'dragging': return { ...state, dragging: action.value }
    case 'dragDistance': return { ...state, dragDistance: action.value }
    case 'autoPlayInterval': return { ...state, autoPlayInterval: action.value }
    case 'width': return { ...state, width: action.value }
    case 'height': return { ...state, height: action.value }
    case 'clamp': return { ...state, clamp: action.value }
    case 'mass': return { ...state, mass: action.value }
    case 'tension': return { ...state, tension: action.value }
    case 'friction': return { ...state, friction: action.value }
    default: return state
  }
}

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
