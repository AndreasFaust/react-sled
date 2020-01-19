import clamp from '../utils/clamp'
import { IState, TDirection } from './types-defaults'
import { SpringConfig } from 'react-spring'

function getNext(currentIndex: number, slideSteps: number, rewind: boolean) {
  if (currentIndex === slideSteps - 1 && !rewind) {
    return clamp(currentIndex, 0, slideSteps - 1)
  }
  return (currentIndex + 1) % slideSteps
}
function getPrev(currentIndex: number, slideSteps: number, rewind: boolean) {
  if (currentIndex === 0 && !rewind) {
    return clamp(currentIndex, 0, slideSteps - 1)
  }
  return (currentIndex - 1 + slideSteps) % slideSteps
}

export type ActionType =
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'SELECT', index: number }
  | { type: 'SET_PAUSE', pause: boolean }
  | { type: 'SET_DIRECTION', direction: TDirection }
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
  | { type: 'SET_SHOWELEMENTS', showElements: number }
  | { type: 'SET_SLIDEBY', slideBy: number }
  | { type: 'SET_SLIDESTEPS', slideSteps: number }
  | { type: 'SET_SLIDERSIZE', sliderSize: number }


export function reducer(state: IState, action: ActionType): IState {
  switch (action.type) {
    case 'NEXT': return {
      ...state,
      currentIndex: getNext(state.currentIndex, state.slideSteps, state.rewind),
      prevIndex: state.currentIndex
    }
    case 'PREV': return {
      ...state,
      currentIndex: getPrev(state.currentIndex, state.slideSteps, state.rewind),
      prevIndex: state.currentIndex
    }
    case 'SELECT': return {
      ...state,
      currentIndex: clamp(action.index, 0, state.slideSteps - 1),
      prevIndex: state.currentIndex
    }
    case 'SET_DIRECTION': return {
      ...state,
      direction: action.direction
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
    case 'SET_SLIDEBY': return {
      ...state,
      slideBy: action.slideBy
    }
    case 'SET_SLIDESTEPS': return {
      ...state,
      slideSteps: action.slideSteps
    }
    case 'SET_SHOWELEMENTS': return {
      ...state,
      showElements: action.showElements
    }
    case 'SET_SLIDERSIZE': return {
      ...state,
      sliderSize: action.sliderSize
    }
    default: return state
  }
}

