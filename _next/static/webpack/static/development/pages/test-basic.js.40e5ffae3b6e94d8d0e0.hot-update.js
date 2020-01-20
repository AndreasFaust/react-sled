webpackHotUpdate("static/development/pages/test-basic.js",{

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
  console.log(proportion);
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
    type: 'SET_DIMENSIONS',
    dimensions: dimensions
  });
}

function getDimensions(width, height, proportion, ref, dispatch) {
  var _ref$current = ref.current,
      offsetWidth = _ref$current.offsetWidth,
      offsetHeight = _ref$current.offsetHeight;

  if (!width && !height) {
    dispatch({
      type: 'SET_DIMENSIONS_DOM',
      dimensionsDOM: {
        width: '100%'
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
  }, [dimensionsDOM]);
});

/***/ })

})
//# sourceMappingURL=test-basic.js.40e5ffae3b6e94d8d0e0.hot-update.js.map