import clamp from '../utils/clamp'

function getNext (currentIndex, viewCount, rewind) {
  if (currentIndex === viewCount - 1 && !rewind) {
    return clamp(currentIndex, 0, viewCount - 1)
  }
  return (currentIndex + 1) % viewCount
}
function getPrev (currentIndex, viewCount, rewind) {
  if (currentIndex === 0 && !rewind) {
    return clamp(currentIndex, 0, viewCount - 1)
  }
  return (currentIndex - 1 + viewCount) % viewCount
}

export default (state, action) => {
  switch (action.type) {
    case 'NEXT': return {
      ...state,
      currentIndex: getNext(state.currentIndex, state.viewCount, state.rewind),
      prevIndex: state.currentIndex,
      pause: action.pause || state.pause
    }
    case 'PREV': return {
      ...state,
      currentIndex: getPrev(state.currentIndex, state.viewCount, state.rewind),
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
    case 'SET_REWIND': return {
      ...state,
      rewind: action.rewind
    }
    default: return state
  }
}
