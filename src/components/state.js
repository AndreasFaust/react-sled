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
  autoPlay: 3000,
  width: '100%',
  height: '50ow',
  clamp: true,
  mass: 1,
  tension: 170,
  friction: 26
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'goto': return { ...state, goto: action.value }
    case 'rewind': return { ...state, rewind: action.value }
    case 'pauseOnMouseOver': return { ...state, pauseOnMouseOver: action.value }
    case 'stopOnInteraction': return { ...state, stopOnInteraction: action.value }
    case 'keyboard': return { ...state, keyboard: action.value }
    case 'dragging': return { ...state, dragging: action.value }
    case 'dragDistance': return { ...state, dragDistance: action.value }
    case 'autoPlay': return { ...state, autoPlay: action.value }
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
