import React, { createContext, useReducer } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * https://github.com/lodash/lodash/blob/master/clamp.js
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
*/

function clamp(number, lower, upper) {
  number = +number;
  lower = +lower;
  upper = +upper;
  lower = lower === lower ? lower : 0;
  upper = upper === upper ? upper : 0;
  if (number === number) {
    number = number <= upper ? number : upper;
    number = number >= lower ? number : lower;
  }
  return number
}

function getNext(currentIndex, viewCount, rewind) {
    if (currentIndex === viewCount - 1 && !rewind) {
        return clamp(currentIndex, 0, viewCount - 1);
    }
    return (currentIndex + 1) % viewCount;
}
function getPrev(currentIndex, viewCount, rewind) {
    if (currentIndex === 0 && !rewind) {
        return clamp(currentIndex, 0, viewCount - 1);
    }
    return (currentIndex - 1 + viewCount) % viewCount;
}
var reducer = (function (state, action) {
    switch (action.type) {
        case 'NEXT': return __assign(__assign({}, state), { currentIndex: getNext(state.currentIndex, state.viewCount, state.rewind), prevIndex: state.currentIndex });
        case 'PREV': return __assign(__assign({}, state), { currentIndex: getPrev(state.currentIndex, state.viewCount, state.rewind), prevIndex: state.currentIndex });
        case 'GOTO': return __assign(__assign({}, state), { currentIndex: clamp(action.index, 0, state.viewCount - 1), prevIndex: state.currentIndex });
        case 'SET_PAUSE': return __assign(__assign({}, state), { pause: action.pause });
        case 'SET_RESTED_INDEX': return __assign(__assign({}, state), { restedIndex: state.currentIndex });
        case 'SET_MOUSEOVER': return __assign(__assign({}, state), { mouseOver: action.mouseOver });
        case 'SET_VIEWCOUNT': return __assign(__assign({}, state), { viewCount: action.count });
        case 'SET_FOCUS': return __assign(__assign({}, state), { hasFocus: action.focus });
        case 'SET_DIMENSIONS': return __assign(__assign({}, state), { width: action.width, height: action.height });
        case 'SET_DRAGGING': return __assign(__assign({}, state), { dragging: action.dragging });
        case 'SET_DRAG_DISTANCE': return __assign(__assign({}, state), { dragDistance: action.dragDistance });
        case 'SET_AUTOPLAY': return __assign(__assign({}, state), { autoPlayInterval: action.autoPlayInterval });
        case 'SET_CONFIG': return __assign(__assign({}, state), { config: action.config });
        case 'SET_REWIND': return __assign(__assign({}, state), { rewind: action.rewind });
        case 'SET_STOPONINTERACTION': return __assign(__assign({}, state), { stopOnInteraction: action.stopOnInteraction });
        default: return state;
    }
});

var initialState = {
    currentIndex: 0,
    prevIndex: undefined,
    pause: false,
    viewCount: 0,
    hasFocus: false,
    width: 0,
    height: 0,
};

// https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
var StateContext = createContext({});
var StateProvider = function (_a) {
    var reducer = _a.reducer, initialState = _a.initialState, children = _a.children;
    var _b = useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var value = { state: state, dispatch: dispatch };
    return (React.createElement(StateContext.Provider, { value: value }, children));
};

var Sled = function (props) {
    var children = props.children;
    return (React.createElement(StateProvider, { reducer: reducer, initialState: initialState }, children));
};
// export { default as Views } from './views'
// export { default as Control } from './control'
// export { default as Progress } from './progress'
// export { useStateContext as useSledStore }

export { Sled };
//# sourceMappingURL=index.es.js.map
