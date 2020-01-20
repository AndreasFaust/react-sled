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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");




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
    type: 'SET_DIMENSIONS',
    dimensions: dimensions
  });
}

function getDimensions(width, height, proportion, ref, dispatch) {
  var _ref$current = ref.current,
      offsetWidth = _ref$current.offsetWidth,
      offsetHeight = _ref$current.offsetHeight;
}

/* harmony default export */ __webpack_exports__["default"] = (function (ref) {
  var _useStateContext = Object(_state__WEBPACK_IMPORTED_MODULE_2__["useStateContext"])(),
      _useStateContext2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useStateContext, 2),
      _useStateContext2$ = _useStateContext2[0],
      dimensionsDOM = _useStateContext2$.dimensionsDOM,
      proportion = _useStateContext2$.proportion,
      dispatch = _useStateContext2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var _ref$current2 = ref.current,
        offsetWidth = _ref$current2.offsetWidth,
        offsetHeight = _ref$current2.offsetHeight;
    getProportion({
      width: offsetWidth,
      height: height,
      offsetWidth: offsetWidth,
      offsetHeight: offsetHeight,
      proportion: proportion,
      dispatch: dispatch
    });
  }, [dimensionsDOM]);
});

/***/ })

})
//# sourceMappingURL=test-basic.js.7b43a7a8db673011ef5a.hot-update.js.map