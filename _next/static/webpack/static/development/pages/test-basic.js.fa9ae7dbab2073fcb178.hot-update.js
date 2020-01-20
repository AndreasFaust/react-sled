webpackHotUpdate("static/development/pages/test-basic.js",{

/***/ "./sled/views.tsx":
/*!************************!*\
  !*** ./sled/views.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _springs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./springs */ "./sled/springs.tsx");
/* harmony import */ var _state_types_defaults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state/types-defaults */ "./sled/state/types-defaults.ts");
/* harmony import */ var _hooks_useDirection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/useDirection */ "./sled/hooks/useDirection.ts");
/* harmony import */ var _hooks_useDimensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useDimensions */ "./sled/hooks/useDimensions.ts");
/* harmony import */ var _hooks_useProportion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hooks/useProportion */ "./sled/hooks/useProportion.ts");
/* harmony import */ var _hooks_useKeyboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hooks/useKeyboard */ "./sled/hooks/useKeyboard.ts");
/* harmony import */ var _hooks_useDragging__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hooks/useDragging */ "./sled/hooks/useDragging.ts");
/* harmony import */ var _hooks_useMouseOver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hooks/useMouseOver */ "./sled/hooks/useMouseOver.ts");
/* harmony import */ var _hooks_useSelect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hooks/useSelect */ "./sled/hooks/useSelect.ts");
/* harmony import */ var _hooks_useFocus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hooks/useFocus */ "./sled/hooks/useFocus.ts");
/* harmony import */ var _hooks_useViewCount__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hooks/useViewCount */ "./sled/hooks/useViewCount.ts");
/* harmony import */ var _hooks_useAutoPlay__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hooks/useAutoPlay */ "./sled/hooks/useAutoPlay.ts");
/* harmony import */ var _hooks_useConfig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hooks/useConfig */ "./sled/hooks/useConfig.ts");
/* harmony import */ var _hooks_useRewind__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hooks/useRewind */ "./sled/hooks/useRewind.ts");
/* harmony import */ var _hooks_usePause__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hooks/usePause */ "./sled/hooks/usePause.ts");
/* harmony import */ var _hooks_useStopOnInteraction__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./hooks/useStopOnInteraction */ "./sled/hooks/useStopOnInteraction.ts");
/* harmony import */ var _hooks_useShowElements__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./hooks/useShowElements */ "./sled/hooks/useShowElements.ts");
/* harmony import */ var _hooks_useSlideBy__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./hooks/useSlideBy */ "./sled/hooks/useSlideBy.ts");
/* harmony import */ var _hooks_useSlideSteps__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./hooks/useSlideSteps */ "./sled/hooks/useSlideSteps.ts");
/* harmony import */ var _hooks_useSliderSize__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./hooks/useSliderSize */ "./sled/hooks/useSliderSize.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./state */ "./sled/state/index.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./index.css */ "./sled/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_30__);








var _jsxFileName = "/Users/andreasfaust/components/react-sled/sled/views.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

























var SledViews = function SledViews(_ref) {
  var children = _ref.children,
      style = _ref.style,
      width = _ref.width,
      height = _ref.height,
      proportion = _ref.proportion,
      direction = _ref.direction,
      select = _ref.select,
      slideBy = _ref.slideBy,
      showElements = _ref.showElements,
      keyboard = _ref.keyboard,
      dragging = _ref.dragging,
      dragDistance = _ref.dragDistance,
      autoPlayInterval = _ref.autoPlayInterval,
      config = _ref.config,
      pauseOnMouseOver = _ref.pauseOnMouseOver,
      stopOnInteraction = _ref.stopOnInteraction,
      rewind = _ref.rewind,
      pause = _ref.pause,
      onSledEnd = _ref.onSledEnd,
      onAnimationStart = _ref.onAnimationStart,
      onAnimationEnd = _ref.onAnimationEnd;
  var viewsRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])();

  var _useStateContext = Object(_state__WEBPACK_IMPORTED_MODULE_29__["useStateContext"])(),
      _useStateContext2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useStateContext, 1),
      _useStateContext2$ = _useStateContext2[0],
      dimensions = _useStateContext2$.dimensions,
      dimensionsDOM = _useStateContext2$.dimensionsDOM;

  Object(_hooks_useProportion__WEBPACK_IMPORTED_MODULE_13__["default"])(width, height, proportion);
  Object(_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_12__["default"])(width, height, viewsRef);
  Object(_hooks_useDirection__WEBPACK_IMPORTED_MODULE_11__["default"])(direction);
  Object(_hooks_useFocus__WEBPACK_IMPORTED_MODULE_18__["default"])(viewsRef);
  Object(_hooks_useViewCount__WEBPACK_IMPORTED_MODULE_19__["default"])(children);
  Object(_hooks_useRewind__WEBPACK_IMPORTED_MODULE_22__["default"])(rewind);
  Object(_hooks_usePause__WEBPACK_IMPORTED_MODULE_23__["default"])(pause);
  Object(_hooks_useShowElements__WEBPACK_IMPORTED_MODULE_25__["default"])(showElements);
  Object(_hooks_useSlideBy__WEBPACK_IMPORTED_MODULE_26__["default"])(slideBy);
  Object(_hooks_useSliderSize__WEBPACK_IMPORTED_MODULE_28__["default"])();
  Object(_hooks_useSlideSteps__WEBPACK_IMPORTED_MODULE_27__["default"])();
  Object(_hooks_useStopOnInteraction__WEBPACK_IMPORTED_MODULE_24__["default"])(stopOnInteraction);
  Object(_hooks_useMouseOver__WEBPACK_IMPORTED_MODULE_16__["default"])(pauseOnMouseOver, viewsRef);
  Object(_hooks_useSelect__WEBPACK_IMPORTED_MODULE_17__["default"])(select);
  Object(_hooks_useKeyboard__WEBPACK_IMPORTED_MODULE_14__["default"])(keyboard);
  Object(_hooks_useDragging__WEBPACK_IMPORTED_MODULE_15__["default"])(dragging, dragDistance);
  Object(_hooks_useAutoPlay__WEBPACK_IMPORTED_MODULE_20__["default"])(autoPlayInterval);
  Object(_hooks_useConfig__WEBPACK_IMPORTED_MODULE_21__["default"])(config);
  return __jsx("div", {
    className: "sled",
    ref: viewsRef,
    style: _objectSpread({}, dimensionsDOM, {}, style),
    tabIndex: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "sled-sizer",
    style: dimensions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_springs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onAnimationStart: onAnimationStart,
    onAnimationEnd: onAnimationEnd,
    onSledEnd: onSledEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, children)));
};

SledViews.defaultProps = _state_types_defaults__WEBPACK_IMPORTED_MODULE_10__["ViewsProps"];
/* harmony default export */ __webpack_exports__["default"] = (SledViews);

/***/ })

})
//# sourceMappingURL=test-basic.js.fa9ae7dbab2073fcb178.hot-update.js.map