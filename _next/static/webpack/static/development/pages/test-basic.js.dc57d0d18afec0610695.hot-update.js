webpackHotUpdate("static/development/pages/test-basic.js",{

/***/ "./sled/hooks/useProportion.ts":
/*!*************************************!*\
  !*** ./sled/hooks/useProportion.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");



/* harmony default export */ __webpack_exports__["default"] = (function (width, height, proportion) {
  var _useStateContext = Object(_state__WEBPACK_IMPORTED_MODULE_2__["useStateContext"])(),
      _useStateContext2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (!height && !proportion) {
      dispatch({
        type: 'SET_PROPORTION',
        proportion: '2:1'
      });
    } else {
      dispatch({
        type: 'SET_PROPORTION',
        proportion: proportion
      });
    }
  }, [width, height, proportion]);
});

/***/ })

})
//# sourceMappingURL=test-basic.js.dc57d0d18afec0610695.hot-update.js.map