webpackHotUpdate("static/development/pages/test-basic.js",{

/***/ "./node_modules/react-spring/web.js":
/*!******************************************!*\
  !*** ./node_modules/react-spring/web.js ***!
  \******************************************/
/*! exports provided: Globals, createInterpolator, interpolate, isAnimated, to, Controller, FrameLoop, Spring, Trail, Transition, config, update, useChain, useSpring, useSprings, useTrail, useTransition, a, animated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["Globals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterpolator", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["createInterpolator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["interpolate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAnimated", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["isAnimated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "to", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["to"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameLoop", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["FrameLoop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spring", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["Spring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trail", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["Trail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["Transition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["update"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["useChain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["useSpring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["useSprings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["useTrail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["useTransition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return _react_spring_web__WEBPACK_IMPORTED_MODULE_0__["animated"]; });




/***/ }),

/***/ "./sled/hooks/useDimensions.ts":
/*!*************************************!*\
  !*** ./sled/hooks/useDimensions.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/debounce */ "./sled/utils/debounce.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");





function getProportion(_ref) {
  var width = _ref.width,
      height = _ref.height,
      offsetWidth = _ref.offsetWidth,
      offsetHeight = _ref.offsetHeight,
      proportion = _ref.proportion,
      dispatch = _ref.dispatch;
  if (!proportion) return;

  var _proportion$split = proportion.split(':'),
      _proportion$split2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_proportion$split, 2),
      proportionWidth = _proportion$split2[0],
      proportionHeight = _proportion$split2[1];

  var dimensions = {
    width: 0,
    height: 0
  };

  if (width) {
    var heightValue = offsetWidth * +proportionHeight / +proportionWidth;
    dimensions = {
      width: width,
      height: heightValue
    };
  } else {
    var widthValue = offsetHeight * +proportionWidth / +proportionHeight;
    dimensions = {
      width: widthValue,
      height: height
    };
  }

  dispatch({
    type: 'SET_DIMENSIONS_DOM',
    dimensions: dimensions
  });
}

function getDimensions(width, height, proportion, ref, dispatch) {
  var _ref$current = ref.current,
      offsetWidth = _ref$current.offsetWidth,
      offsetHeight = _ref$current.offsetHeight;

  if (!width && !height) {
    var heightValue = offsetWidth / 2;
    console.warn('Sled-Error: You need to provide either a width or a height. Falling back to "width: 100%" and proportion "2:1".');
    dispatch({
      type: 'SET_DIMENSIONS_DOM',
      dimensionsDOM: {
        width: '100%',
        height: heightValue
      }
    });
    return;
  }

  if (width && height) {
    dispatch({
      type: 'SET_DIMENSIONS_DOM',
      dimensionsDOM: {
        width: width,
        height: height
      }
    });
    return;
  }

  getProportion({
    width: width,
    height: height,
    offsetWidth: offsetWidth,
    offsetHeight: offsetHeight,
    proportion: proportion,
    dispatch: dispatch
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function (width, height, ref) {
  var _useStateContext = Object(_state__WEBPACK_IMPORTED_MODULE_3__["useStateContext"])(),
      _useStateContext2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useStateContext, 2),
      _useStateContext2$ = _useStateContext2[0],
      dimensionsDOM = _useStateContext2$.dimensionsDOM,
      proportion = _useStateContext2$.proportion,
      dispatch = _useStateContext2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    getDimensions(width, height, proportion, ref, dispatch);

    function onResize() {
      getDimensions(width, height, proportion, ref, dispatch);
    }

    var dOnResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(onResize, 200);
    window.addEventListener('resize', dOnResize);
    return function () {
      return window.removeEventListener('resize', dOnResize);
    };
  }, [width, height, proportion, ref.current]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var _ref$current2 = ref.current,
        offsetWidth = _ref$current2.offsetWidth,
        offsetHeight = _ref$current2.offsetHeight;
    dispatch({
      type: 'SET_DIMENSIONS',
      dimensions: {
        width: offsetWidth,
        height: offsetHeight
      }
    });
  }, [dimensionsDOM.width, dimensionsDOM.height]);
});

/***/ })

})
//# sourceMappingURL=test-basic.js.27a9f06ff27bca752140.hot-update.js.map