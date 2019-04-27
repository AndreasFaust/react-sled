import clamp from '../utils/clamp'

export default (state, action) => {
  switch (action.type) {
    case 'NEXT': return {
      ...state,
      currentIndex: (state.currentIndex + 1) % state.viewCount,
      prevIndex: state.currentIndex,
      pause: action.pause || state.pause
    }
    case 'PREV': return {
      ...state,
      currentIndex: (state.currentIndex - 1 + state.viewCount) % state.viewCount,
      prevIndex: state.currentIndex,
      pause: action.pause || state.pause
    }
    case 'GOTO': return {
      ...state,
      currentIndex: clamp(action.index, 0, state.viewCount - 1),
      prevIndex: state.currentIndex,
      pause: action.pause || state.pause
    }
    case 'SET_PAUSE': return {
      ...state,
      pause: action.pause
    }
    case 'SET_VIEWCOUNT': return {
      ...state,
      viewCount: action.count
    }
    case 'SET_FOCUS': return {
      ...state,
      hasFocus: action.focus
    }
    case 'SET_MOUSEOVER': return {
      ...state,
      mouseover: action.mouseover
    }
    case 'SET_DIMENSIONS': return {
      ...state,
      width: action.width,
      height: action.height
    }
    case 'SET_DRAGGING': return {
      ...state,
      dragging: action.dragging
    }
    case 'SET_DRAG_DISTANCE': return {
      ...state,
      dragDistance: action.dragDistance
    }
    case 'SET_CONFIG': return {
      ...state,
      config: action.config
    }
    default: return state
  }
}
