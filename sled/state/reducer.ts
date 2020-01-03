import clamp from '../utils/clamp'
import { IState } from './types-defaults'
import { SpringConfig } from 'react-spring'

function getNext(currentIndex: number, viewCount: number, rewind: boolean) {
  if (currentIndex === viewCount - 1 && !rewind) {
    return clamp(currentIndex, 0, viewCount - 1)
  }
  return (currentIndex + 1) % viewCount
}
function getPrev(currentIndex: number, viewCount: number, rewind: boolean) {
  if (currentIndex === 0 && !rewind) {
    return clamp(currentIndex, 0, viewCount - 1)
  }
  return (currentIndex - 1 + viewCount) % viewCount
}

export type ActionType =
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'SELECT', index: number }
  | { type: 'SET_PAUSE', pause: boolean }
  | { type: 'SET_MOUSEOVER', pauseOnMouseOver: boolean }
  | { type: 'SET_VIEWCOUNT', count: number }
  | { type: 'SET_FOCUS', focus: boolean }
  | { type: 'SET_DIMENSIONS', dimensions: { width: number, height: number } }
  | { type: 'SET_DRAGGING', dragging: boolean }
  | { type: 'SET_DRAG_DISTANCE', dragDistance: string | number }
  | { type: 'SET_AUTOPLAY', autoPlayInterval?: number }
  | { type: 'SET_CONFIG', config: SpringConfig }
  | { type: 'SET_REWIND', rewind: boolean }
  | { type: 'SET_STOPONINTERACTION', stopOnInteraction: boolean }


export function reducer(state: IState, action: ActionType): IState {
  switch (action.type) {
    case 'NEXT': return {
      ...state,
      currentIndex: getNext(state.currentIndex, state.viewCount, state.rewind),
      prevIndex: state.currentIndex
    }
    case 'PREV': return {
      ...state,
      currentIndex: getPrev(state.currentIndex, state.viewCount, state.rewind),
      prevIndex: state.currentIndex
    }
    case 'SELECT': return {
      ...state,
      // currentIndex: action.index !== state.currentIndex
      //   ? clamp(action.index, 0, state.viewCount - 1)
      //   : state.currentIndex,
      // prevIndex: action.index !== state.currentIndex
      //   ? state.currentIndex
      //   : state.prevIndex
    }
    case 'SET_PAUSE': return {
      ...state,
      pause: action.pause
    }
    case 'SET_MOUSEOVER': return {
      ...state,
      pauseOnMouseOver: action.pauseOnMouseOver
    }
    case 'SET_VIEWCOUNT': return {
      ...state,
      viewCount: action.count
    }
    case 'SET_FOCUS': return {
      ...state,
      hasFocus: action.focus
    }
    case 'SET_DIMENSIONS': return {
      ...state,
      dimensions: action.dimensions
    }
    case 'SET_DRAGGING': return {
      ...state,
      dragging: action.dragging
    }
    case 'SET_DRAG_DISTANCE': return {
      ...state,
      dragDistance: action.dragDistance
    }
    case 'SET_AUTOPLAY': return {
      ...state,
      autoPlayInterval: action.autoPlayInterval
    }
    case 'SET_CONFIG': return {
      ...state,
      config: action.config
    }
    case 'SET_REWIND': return {
      ...state,
      rewind: action.rewind
    }
    case 'SET_STOPONINTERACTION': return {
      ...state,
      stopOnInteraction: action.stopOnInteraction
    }
    default: return state
  }
}

