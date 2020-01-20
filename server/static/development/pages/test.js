module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SledComponent.js":
/*!*************************************!*\
  !*** ./components/SledComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sled */ "./sled/index.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./components/state.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ "./components/images.js");
var _jsxFileName = "/Users/andreasfaust/components/react-sled/components/SledComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SledComponent = ({
  children
}) => {
  const [state] = Object(_state__WEBPACK_IMPORTED_MODULE_2__["useStateValue"])();
  return __jsx("div", {
    className: "sled-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_sled__WEBPACK_IMPORTED_MODULE_1__["Sled"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_sled__WEBPACK_IMPORTED_MODULE_1__["Views"], {
    onSledEnd: () => {
      console.log('THIS IS THE END');
    },
    width: state.width,
    height: state.height,
    proportion: state.proportion,
    direction: state.direction,
    select: state.select,
    autoPlayInterval: state.autoPlayInterval,
    rewind: state.rewind,
    pauseOnMouseOver: state.pauseOnMouseOver,
    stopOnInteraction: state.stopOnInteraction,
    keyboard: state.keyboard,
    dragging: state.dragging,
    dragDistance: state.dragDistance,
    showElements: state.showElements,
    slideBy: state.slideBy,
    config: {
      mass: state.mass,
      tension: state.tension,
      friction: state.friction,
      clamp: state.clamp
    },
    onAnimationStart: () => {
      console.log('START Animation!');
    },
    onAnimationEnd: () => {
      console.log('END Animation!');
    },
    style: {
      background: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, children), __jsx(_sled__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("div", {
    className: "controls sled-controls-direction",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_sled__WEBPACK_IMPORTED_MODULE_1__["Control"], {
    select: "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx(_sled__WEBPACK_IMPORTED_MODULE_1__["Control"], {
    select: "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), __jsx("div", {
    className: "controls sled-controls-index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, _images__WEBPACK_IMPORTED_MODULE_3__["default"].map((image, index) => __jsx(_sled__WEBPACK_IMPORTED_MODULE_1__["Control"], {
    key: image,
    select: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SledComponent);

/***/ }),

/***/ "./components/github-logo.js":
/*!***********************************!*\
  !*** ./components/github-logo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/andreasfaust/components/react-sled/components/github-logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  enableBackground: "new 0 0 50 50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  fill: "#181616",
  d: "M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})));

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _github_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-logo */ "./components/github-logo.js");
var _jsxFileName = "/Users/andreasfaust/components/react-sled/components/header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("header", {
  className: "header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("h1", {
  className: "bold",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("span", {
  role: "img",
  "aria-label": "sled-emoji",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "\uD83D\uDEF7"), ' ', "react-sled"), __jsx("a", {
  href: "https://github.com/AndreasFaust/react-sled",
  className: "github",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(_github_logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}))));

/***/ }),

/***/ "./components/images.js":
/*!******************************!*\
  !*** ./components/images.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const images = ['https://source.unsplash.com/ANCoz0JMhiQ/1600x900', 'https://source.unsplash.com/uR6dIgDnt38/1600x900', 'https://source.unsplash.com/E2_k8SsuS7s/1600x900', 'https://source.unsplash.com/mGy1Jjr2e6M/1600x900', 'https://source.unsplash.com/TMHL7wald8I/1600x900', 'https://source.unsplash.com/-QKpblZde5I/1600x900', 'https://source.unsplash.com/o8cMgOUB-Z0/1600x900', 'https://source.unsplash.com/lzOzsGmAg3s/1600x900', 'https://source.unsplash.com/_7IUgAL60nc/1600x900', 'https://source.unsplash.com/7jwHx5q7WeA/1600x900'];
/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./components/settings.js":
/*!********************************!*\
  !*** ./components/settings.js ***!
  \********************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toggle */ "react-toggle");
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toggle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/debounce */ "lodash/debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-slider */ "rc-slider");
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state */ "./components/state.js");
/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useWindowSize */ "./components/useWindowSize.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_16__);








var _jsxFileName = "/Users/andreasfaust/components/react-sled/components/settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










const customStyles = {
  container: () => ({
    width: 150,
    position: 'relative'
  }),
  placeholder: () => ({
    fontSize: '0.9rem'
  }),
  option: provided => _objectSpread({}, provided, {
    fontSize: '0.9rem'
  })
};

const useDebounce = defaultValue => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(defaultValue);
  const dSetValue = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(event => {
    event.persist();
    lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default()(() => setValue(event.target.value), 150)();
  });
  return [value, dSetValue];
};

const Wrapper = ({
  children
}) => {
  const {
    width
  } = Object(_useWindowSize__WEBPACK_IMPORTED_MODULE_15__["default"])();
  return width > 1024 ? __jsx("div", {
    className: "settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, children) : __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_13__["slide"], {
    className: "settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, children);
};

const Settings = () => {
  const [state, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_14__["useStateValue"])();
  const [proportion, setProportion] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(state.proportion);
  const [direction, setDirection] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(state.direction);
  const [width, setWidth] = useDebounce(state.width);
  const [height, setHeight] = useDebounce(state.height);
  const [autoPlayInterval, setAutoPlayInterval] = useDebounce(state.autoPlayInterval);
  const [select, setSelect] = useDebounce(state.select);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    dispatch({
      type: 'width',
      value: width
    });
    dispatch({
      type: 'height',
      value: height
    });
    dispatch({
      type: 'direction',
      value: direction
    });
    dispatch({
      type: 'autoPlayInterval',
      value: +autoPlayInterval
    });
    dispatch({
      type: 'proportion',
      value: proportion
    });
  }, [width, height, direction, autoPlayInterval, proportion]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(select, 10)) {
      dispatch({
        type: 'select',
        value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(select, 10)
      });
    }

    if (select === 'prev' || select === 'next') {
      dispatch({
        type: 'select',
        value: select
      });
    }
  }, [select]);
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("h2", {
    className: "settings__h2 bold",
    tabIndex: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Settings:"), __jsx("div", {
    className: "settings__column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "width"), __jsx("input", {
    type: "text",
    size: 7,
    className: "settings__input",
    defaultValue: state.width,
    onChange: event => setWidth.current(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "height"), __jsx("input", {
    type: "text",
    size: 7,
    className: "settings__input",
    defaultValue: state.height,
    placeholder: "auto",
    onChange: event => setHeight.current(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  })), __jsx("label", {
    className: `settings__label`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "proportion"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: "settings__select",
    placeholder: "2:1",
    onChange: option => setProportion(option.value),
    options: [{
      value: '1:1',
      label: '1:1'
    }, {
      value: '1:2',
      label: '1:2'
    }, {
      value: '2:1',
      label: '2:1'
    }, {
      value: '3:1',
      label: '3:1'
    }, {
      value: '3:2',
      label: '3:2'
    }],
    styles: customStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label settings__label--select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "direction"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: "settings__select",
    placeholder: "horizontal",
    onChange: option => setDirection(option.value),
    options: [{
      value: 'horizontal',
      label: 'horizontal'
    }, {
      value: 'vertical',
      label: 'vertical'
    }],
    styles: customStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, "select"), __jsx("input", {
    type: "text",
    size: 7,
    className: "settings__input",
    placeholder: state.select,
    onChange: event => setSelect.current(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, "showElements"), __jsx("input", {
    type: "number",
    size: 1,
    className: "settings__input",
    value: state.showElements,
    onChange: event => dispatch({
      type: 'showElements',
      value: event.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, "slideBy"), __jsx("input", {
    type: "number",
    size: 1,
    className: "settings__input",
    value: state.slideBy,
    onChange: event => dispatch({
      type: 'slideBy',
      value: event.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, "autoPlayInterval"), __jsx("input", {
    type: "number",
    size: 5,
    className: "settings__input",
    defaultValue: state.autoPlayInterval,
    onChange: event => setAutoPlayInterval.current(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, "dragDistance"), __jsx("input", {
    type: "text",
    size: 7,
    className: "settings__input",
    defaultValue: state.dragDistance,
    onChange: event => dispatch({
      type: 'dragDistance',
      value: event.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }))), __jsx("div", {
    className: "settings__column settings__column--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, "rewind"), __jsx(react_toggle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    defaultChecked: state.rewind,
    icons: false,
    onChange: () => dispatch({
      type: 'rewind',
      value: !state.rewind
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, "pauseOnMouseOver"), __jsx(react_toggle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    defaultChecked: state.pauseOnMouseOver,
    icons: false,
    onChange: () => dispatch({
      type: 'pauseOnMouseOver',
      value: !state.pauseOnMouseOver
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, "stopOnInteraction"), __jsx(react_toggle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    defaultChecked: state.stopOnInteraction,
    icons: false,
    onChange: () => dispatch({
      type: 'stopOnInteraction',
      value: !state.stopOnInteraction
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, "keyboard"), __jsx(react_toggle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    defaultChecked: state.keyboard,
    icons: false,
    onChange: () => dispatch({
      type: 'keyboard',
      value: !state.keyboard
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, "dragging"), __jsx(react_toggle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    defaultChecked: state.dragging,
    icons: false,
    onChange: () => dispatch({
      type: 'dragging',
      value: !state.dragging
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }))), __jsx("div", {
    className: "settings__column settings__column--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, __jsx("label", {
    className: "settings__label background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3 bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }, "config")), __jsx("label", {
    className: "settings__label settings__label--config",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  }, "mass: ", state.mass), __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_11___default.a, {
    min: 1,
    max: 500,
    defaultValue: 1,
    onChange: value => dispatch({
      type: 'mass',
      value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label settings__label--config",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }, "tension: ", state.tension), __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_11___default.a, {
    min: 1,
    max: 500,
    defaultValue: 210,
    onChange: value => dispatch({
      type: 'tension',
      value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label settings__label--config",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, "friction: ", state.friction), __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_11___default.a, {
    min: 1,
    max: 500,
    defaultValue: 20,
    onChange: value => dispatch({
      type: 'friction',
      value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  })), __jsx("label", {
    className: "settings__label settings__label--config",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: undefined
  }, __jsx("h3", {
    className: "settings__h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }, "clamp"), __jsx(react_toggle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    defaultChecked: state.clamp,
    icons: false,
    onChange: () => dispatch({
      type: 'clamp',
      value: !state.clamp
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./components/state.js":
/*!*****************************!*\
  !*** ./components/state.js ***!
  \*****************************/
/*! exports provided: StateContext, StateProvider, useStateValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return StateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateProvider", function() { return StateProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateValue", function() { return useStateValue; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/Users/andreasfaust/components/react-sled/components/state.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const StateContext = Object(react__WEBPACK_IMPORTED_MODULE_7__["createContext"])();
const initialState = {
  select: 3,
  rewind: true,
  direction: 'horizontal',
  showElements: 1,
  slideBy: 1,
  pauseOnMouseOver: true,
  stopOnInteraction: true,
  keyboard: true,
  dragging: true,
  dragDistance: 100,
  autoPlayInterval: 3000,
  width: '100%',
  proportion: '2:1',
  clamp: true,
  mass: 1,
  tension: 170,
  friction: 26
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'select':
      return _objectSpread({}, state, {
        select: action.value
      });

    case 'proportion':
      return _objectSpread({}, state, {
        proportion: action.value
      });

    case 'direction':
      return _objectSpread({}, state, {
        direction: action.value
      });

    case 'rewind':
      return _objectSpread({}, state, {
        rewind: action.value
      });

    case 'pauseOnMouseOver':
      return _objectSpread({}, state, {
        pauseOnMouseOver: action.value
      });

    case 'stopOnInteraction':
      return _objectSpread({}, state, {
        stopOnInteraction: action.value
      });

    case 'keyboard':
      return _objectSpread({}, state, {
        keyboard: action.value
      });

    case 'dragging':
      return _objectSpread({}, state, {
        dragging: action.value
      });

    case 'dragDistance':
      return _objectSpread({}, state, {
        dragDistance: action.value
      });

    case 'autoPlayInterval':
      return _objectSpread({}, state, {
        autoPlayInterval: action.value
      });

    case 'width':
      return _objectSpread({}, state, {
        width: action.value
      });

    case 'height':
      return _objectSpread({}, state, {
        height: action.value
      });

    case 'clamp':
      return _objectSpread({}, state, {
        clamp: action.value
      });

    case 'mass':
      return _objectSpread({}, state, {
        mass: action.value
      });

    case 'tension':
      return _objectSpread({}, state, {
        tension: action.value
      });

    case 'friction':
      return _objectSpread({}, state, {
        friction: action.value
      });

    case 'showElements':
      return _objectSpread({}, state, {
        showElements: action.value
      });

    case 'slideBy':
      return _objectSpread({}, state, {
        slideBy: action.value
      });

    default:
      return state;
  }
};

const StateProvider = ({
  children
}) => __jsx(StateContext.Provider, {
  value: Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(reducer, initialState),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, children);
const useStateValue = () => Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(StateContext);

/***/ }),

/***/ "./components/useWindowSize.js":
/*!*************************************!*\
  !*** ./components/useWindowSize.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setWindowSize(getSize());

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/rc-slider/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-slider/assets/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/header.css":
/*!******************************!*\
  !*** ./pages/css/header.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/index.css":
/*!*****************************!*\
  !*** ./pages/css/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/menue.css":
/*!*****************************!*\
  !*** ./pages/css/menue.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/reset.css":
/*!*****************************!*\
  !*** ./pages/css/reset.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/settings.css":
/*!********************************!*\
  !*** ./pages/css/settings.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/toggle.css":
/*!******************************!*\
  !*** ./pages/css/toggle.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/reset.css */ "./pages/css/reset.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_reset_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_toggle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/toggle.css */ "./pages/css/toggle.css");
/* harmony import */ var _css_toggle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_toggle_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/index.css */ "./pages/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/header.css */ "./pages/css/header.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_settings_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/settings.css */ "./pages/css/settings.css");
/* harmony import */ var _css_settings_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_settings_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_menue_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/menue.css */ "./pages/css/menue.css");
/* harmony import */ var _css_menue_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_menue_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/state */ "./components/state.js");
/* harmony import */ var _components_SledComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SledComponent */ "./components/SledComponent.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/settings */ "./components/settings.js");
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/images */ "./components/images.js");
var _jsxFileName = "/Users/andreasfaust/components/react-sled/pages/test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const App = () => {
  return __jsx(_components_state__WEBPACK_IMPORTED_MODULE_7__["StateProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_components_settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_components_SledComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, _components_images__WEBPACK_IMPORTED_MODULE_11__["default"].map((image, index) => __jsx("div", {
    key: image,
    className: "testContent",
    style: {
      background: `rgb(1${index}5, 1${index}0, 1${index}0)`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, index + 1)))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./sled/control/hooks/useClassName.ts":
/*!********************************************!*\
  !*** ./sled/control/hooks/useClassName.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./sled/state/index.tsx");
/* harmony import */ var _useDirectionDisabled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDirectionDisabled */ "./sled/control/hooks/useDirectionDisabled.ts");



function getClassName(type, select, className) {
  const [{
    currentIndex
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_0__["useStateContext"])();
  const directionDisabled = Object(_useDirectionDisabled__WEBPACK_IMPORTED_MODULE_1__["useDirectionDisabled"])(select);
  const baseClass = 'sled-control';
  const typeClass = `${baseClass}-${type}`;
  const typeClassSpecific = `${typeClass}-${select}`;
  const distinctClass = `${baseClass}-${className || type + '-default'}`;
  const disabledClasses = [`${baseClass}-disabled`, `${typeClass}-disabled`, `${distinctClass}-disabled`];
  const activeClasses = [`${baseClass}-active`, `${typeClass}-active`, `${distinctClass}-active`];
  const classes = [baseClass, typeClass, typeClassSpecific, distinctClass];

  if (select === currentIndex) {
    // isActive
    return [...classes, ...activeClasses].join(' ');
  }

  if (directionDisabled) {
    return [...classes, ...disabledClasses].join(' ');
  }

  return classes.join(' ');
}

/* harmony default export */ __webpack_exports__["default"] = ((select, className) => {
  switch (typeof select) {
    case 'number':
      return getClassName('index', select, className);

    case 'string':
    default:
      return getClassName('direction', select, className);
  }
});

/***/ }),

/***/ "./sled/control/hooks/useClick.ts":
/*!****************************************!*\
  !*** ./sled/control/hooks/useClick.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./sled/state/index.tsx");


const onClickFunction = select => {
  const [{
    stopOnInteraction
  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_0__["useStateContext"])();

  function onClick() {
    if (stopOnInteraction) {
      dispatch({
        type: 'SET_AUTOPLAY',
        autoPlayInterval: undefined
      });
    }

    if (typeof select === 'number') {
      dispatch({
        type: 'SELECT',
        index: select
      });
    } else {
      dispatch({
        type: select === 'next' ? 'NEXT' : 'PREV'
      });
    }
  }

  return onClick;
};

/* harmony default export */ __webpack_exports__["default"] = (onClickFunction);

/***/ }),

/***/ "./sled/control/hooks/useDirectionDisabled.ts":
/*!****************************************************!*\
  !*** ./sled/control/hooks/useDirectionDisabled.ts ***!
  \****************************************************/
/*! exports provided: useDirectionDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDirectionDisabled", function() { return useDirectionDisabled; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./sled/state/index.tsx");


const useDirectionDisabled = select => {
  const [{
    rewind,
    currentIndex,
    viewCount
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  const {
    0: disabled,
    1: setDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (typeof select === 'string') {
      if (rewind) {
        setDisabled(false);
        return;
      }

      if (select === 'next' && currentIndex === viewCount - 1) {
        setDisabled(true);
      } else if (select === 'prev' && currentIndex === 0) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [currentIndex, rewind]);
  return disabled;
};

/***/ }),

/***/ "./sled/control/hooks/useLabel.ts":
/*!****************************************!*\
  !*** ./sled/control/hooks/useLabel.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (select => {
  switch (typeof select) {
    case 'number':
      return `Slide to view with index ${select}.`;

    case 'string':
    default:
      return `Slide to ${select === 'next' ? 'next' : 'previous'} view.`;
  }
});

/***/ }),

/***/ "./sled/control/index.css":
/*!********************************!*\
  !*** ./sled/control/index.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sled/control/index.tsx":
/*!********************************!*\
  !*** ./sled/control/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");
/* harmony import */ var _hooks_useDirectionDisabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useDirectionDisabled */ "./sled/control/hooks/useDirectionDisabled.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./sled/control/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useClassName */ "./sled/control/hooks/useClassName.ts");
/* harmony import */ var _hooks_useLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useLabel */ "./sled/control/hooks/useLabel.ts");
/* harmony import */ var _hooks_useClick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useClick */ "./sled/control/hooks/useClick.ts");
/* harmony import */ var _hooks_useFocus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useFocus */ "./sled/hooks/useFocus.ts");

var _jsxFileName = "/Users/andreasfaust/components/react-sled/sled/control/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const SledControl = ({
  children,
  select,
  style,
  className
}) => {
  const controlRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(_hooks_useFocus__WEBPACK_IMPORTED_MODULE_8__["default"])(controlRef);
  const directionDisabled = Object(_hooks_useDirectionDisabled__WEBPACK_IMPORTED_MODULE_3__["useDirectionDisabled"])(select);
  const classNames = Object(_hooks_useClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(select, className);
  const label = Object(_hooks_useLabel__WEBPACK_IMPORTED_MODULE_6__["default"])(select);
  const onClick = Object(_hooks_useClick__WEBPACK_IMPORTED_MODULE_7__["default"])(select);
  const [{
    currentIndex
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_2__["useStateContext"])();
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classNames,
    style: style,
    ref: controlRef,
    role: "button",
    "aria-label": label,
    tabIndex: 0,
    onClick: onClick
  }, select === currentIndex || directionDisabled ? {
    'aria-disabled': true
  } : {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (SledControl);

/***/ }),

/***/ "./sled/hooks/useAutoPlay.ts":
/*!***********************************!*\
  !*** ./sled/hooks/useAutoPlay.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");



const useInterval = (callback, interval) => {
  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedCallback.current = callback;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function tick() {
      savedCallback.current();
    }

    if (typeof interval === 'number') {
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
};

/* harmony default export */ __webpack_exports__["default"] = (autoPlayIntervalNew => {
  const [{
    pause,
    autoPlayInterval
  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (typeof autoPlayIntervalNew === 'number') {
      dispatch({
        type: 'SET_AUTOPLAY',
        autoPlayInterval: autoPlayIntervalNew
      });
    } else {
      console.warn(`Sled-Error: "autoplay" must be of type "number", not "${typeof autoPlayIntervalNew}".`);
    }
  }, [autoPlayIntervalNew]);
  useInterval(() => {
    dispatch({
      type: 'NEXT'
    });
  }, !pause && autoPlayInterval);
});

/***/ }),

/***/ "./sled/hooks/useConfig.ts":
/*!*********************************!*\
  !*** ./sled/hooks/useConfig.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (config => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: 'SET_CONFIG',
      config
    });
  }, [config, dispatch]);
});

/***/ }),

/***/ "./sled/hooks/useContainerStyles.ts":
/*!******************************************!*\
  !*** ./sled/hooks/useContainerStyles.ts ***!
  \******************************************/
/*! exports provided: useSliderStyles, useViewStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSliderStyles", function() { return useSliderStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useViewStyles", function() { return useViewStyles; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



function useSliderStyles() {
  const [{
    sliderSize,
    direction,
    dragging
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_8__["useStateContext"])();
  const [styles, setStyles] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState({});
  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(() => {
    const defaultStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      willChange: 'transform',
      overflow: 'hidden',
      cursor: dragging ? 'grab' : 'auto'
    };

    if (direction === 'vertical') {
      setStyles(_objectSpread({}, defaultStyles, {
        width: '100%',
        height: sliderSize || 0
      }));
    } else {
      setStyles(_objectSpread({}, defaultStyles, {
        width: sliderSize || 0,
        height: '100%',
        display: 'flex'
      }));
    }
  }, [direction, dragging, sliderSize]);
  return styles;
}
function useViewStyles() {
  const [{
    dimensions: {
      width,
      height
    },
    viewCount,
    direction,
    showElements
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_8__["useStateContext"])();
  const [styles, setStyles] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState({});
  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(() => {
    const defaultStyles = {
      position: 'relative'
    };

    if (direction === 'vertical') {
      setStyles(_objectSpread({}, defaultStyles, {
        width: '100%',
        height: height / showElements
      }));
    } else {
      setStyles(_objectSpread({}, defaultStyles, {
        width: width / showElements,
        height: '100%'
      }));
    }
  }, [width, height, direction, viewCount, showElements]);
  return styles;
}

/***/ }),

/***/ "./sled/hooks/useCursor.ts":
/*!*********************************!*\
  !*** ./sled/hooks/useCursor.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [{
    dragging
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  const [cursor, setCursor] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('auto');
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setCursor(dragging ? 'grab' : 'auto');
  }, [dragging]);
  return cursor;
});

/***/ }),

/***/ "./sled/hooks/useDimensions.ts":
/*!*************************************!*\
  !*** ./sled/hooks/useDimensions.ts ***!
  \*************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/debounce */ "./sled/utils/debounce.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





function getProportion({
  width,
  height,
  offsetWidth,
  offsetHeight,
  proportion,
  dispatch
}) {
  if (!proportion) return;
  const [proportionWidth, proportionHeight] = proportion.split(':');
  let dimensions = {
    width: 0,
    height: 0
  };

  if (width) {
    const heightValue = offsetWidth * +proportionHeight / +proportionWidth;
    dimensions = {
      width: offsetWidth,
      height: heightValue
    };
  } else {
    const widthValue = offsetHeight * +proportionWidth / +proportionHeight;
    dimensions = {
      width: widthValue,
      height: offsetHeight
    };
  }

  dispatch({
    type: 'SET_DIMENSIONS',
    dimensions: dimensions
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ref => {
  const [{
    dimensionsDOM,
    proportion
  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_9__["useStateContext"])();
  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(() => {
    function onResize() {
      const {
        offsetWidth,
        offsetHeight
      } = ref.current;
      getProportion(_objectSpread({}, dimensionsDOM, {
        offsetWidth,
        offsetHeight,
        proportion,
        dispatch
      }));
    }

    onResize();
    const dOnResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_8__["debounce"])(onResize, 200);
    window.addEventListener('resize', dOnResize);
    return () => window.removeEventListener('resize', dOnResize);
  }, [dimensionsDOM, proportion]);
});

/***/ }),

/***/ "./sled/hooks/useDimensionsDOM.ts":
/*!****************************************!*\
  !*** ./sled/hooks/useDimensionsDOM.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = ((width, height) => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!width && !height) {
      dispatch({
        type: 'SET_DIMENSIONS_DOM',
        dimensionsDOM: {
          width: '100%',
          height: null
        }
      });
      dispatch({
        type: 'SET_PROPORTION',
        proportion: '2:1'
      });
      return;
    }

    dispatch({
      type: 'SET_DIMENSIONS_DOM',
      dimensionsDOM: {
        width,
        height
      }
    });
  }, [width, height]);
});

/***/ }),

/***/ "./sled/hooks/useDirection.ts":
/*!************************************!*\
  !*** ./sled/hooks/useDirection.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (direction => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (direction) {
      dispatch({
        type: 'SET_DIRECTION',
        direction
      });
    }
  }, [direction]);
});

/***/ }),

/***/ "./sled/hooks/useDragGesture.ts":
/*!**************************************!*\
  !*** ./sled/hooks/useDragGesture.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-use-gesture */ "react-use-gesture");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_gesture__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (set => {
  const [{
    dragging,
    dragDistance,
    dimensions: {
      width,
      height
    },
    currentIndex,
    direction,
    stopOnInteraction,
    showElements,
    slideBy
  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  const bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_0__["useDrag"])(({
    down,
    movement: [xDelta, yDelta],
    direction: [xDir, yDir],
    distance,
    cancel,
    canceled
  }) => {
    if (canceled) return;

    if (stopOnInteraction) {
      dispatch({
        type: 'SET_AUTOPLAY',
        autoPlayInterval: undefined
      });
    }

    if (down && distance > dragDistance) {
      const dirValue = direction === 'horizontal' ? xDir : yDir;
      dispatch({
        type: dirValue > 0 ? 'PREV' : 'NEXT',
        pause: true
      });
      cancel();
    }

    set(() => {
      const x = direction === 'horizontal' ? -currentIndex * (width / showElements * slideBy) + (down ? xDelta : 0) : -currentIndex * (height / showElements * slideBy) + (down ? yDelta : 0);
      return {
        x,
        immediate: false,
        cursor: down ? 'grabbing' : 'grab',
        onStart: undefined,
        onRest: undefined
      };
    });
    dispatch({
      type: 'SET_PAUSE',
      pause: true
    });
  });
  return dragging && bind;
});

/***/ }),

/***/ "./sled/hooks/useDragging.ts":
/*!***********************************!*\
  !*** ./sled/hooks/useDragging.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");




function getDistance(distance, width) {
  switch (typeof distance) {
    case 'number':
      return distance;

    case 'string':
      if (distance.indexOf('%') >= 0) {
        return width / 100 * +distance.replace('%', '');
      }

      const distanceNumber = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(distance, 10);

      if (distanceNumber) {
        return distanceNumber;
      }

      console.warn('Sled-Error: dragDistance must either be a String with unit % or a number.');
      return 40;

    default:
      return 40;
  }
}

/* harmony default export */ __webpack_exports__["default"] = ((dragging, dragDistance) => {
  const [{
    dimensions: {
      width
    }
  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_2__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const distance = getDistance(dragDistance, width);
    dispatch({
      type: 'SET_DRAG_DISTANCE',
      dragDistance: distance
    });
  }, [dispatch, dragDistance, width]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: 'SET_DRAGGING',
      dragging
    });
  }, [dispatch, dragging]);
});

/***/ }),

/***/ "./sled/hooks/useFocus.ts":
/*!********************************!*\
  !*** ./sled/hooks/useFocus.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");



const useFocus = ref => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onFocus() {
      dispatch({
        type: 'SET_FOCUS',
        focus: true
      });
    }

    function onBlur() {
      dispatch({
        type: 'SET_FOCUS',
        focus: false
      });
    }

    ref.current.addEventListener('focus', onFocus);
    ref.current.addEventListener('blur', onBlur);
    return () => {
      ref.current.removeEventListener('focus', onFocus);
      ref.current.removeEventListener('blur', onBlur);
    };
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (useFocus);

/***/ }),

/***/ "./sled/hooks/useKeyboard.ts":
/*!***********************************!*\
  !*** ./sled/hooks/useKeyboard.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");



const useKeyboard = keyboard => {
  const [{
    hasFocus,
    stopOnInteraction
  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  const hasFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    hasFocusRef.current = hasFocus;
  }, [hasFocus]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onKeyup(event) {
      if (!hasFocusRef.current) return;

      if (stopOnInteraction) {
        dispatch({
          type: 'SET_AUTOPLAY',
          autoPlayInterval: undefined
        });
      }

      switch (event.keyCode) {
        case 37:
          dispatch({
            type: 'PREV'
          });
          break;

        case 39:
          dispatch({
            type: 'NEXT'
          });
          break;
      }
    }

    if (keyboard) {
      document.addEventListener('keyup', onKeyup);
      return () => document.removeEventListener('keyup', onKeyup);
    }
  }, [keyboard, stopOnInteraction]);
};

/* harmony default export */ __webpack_exports__["default"] = (useKeyboard);

/***/ }),

/***/ "./sled/hooks/useMouseOver.ts":
/*!************************************!*\
  !*** ./sled/hooks/useMouseOver.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = ((pauseOnMouseOver, ref) => {
  const [{
    autoPlayInterval
  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: 'SET_PAUSE',
      pause: false
    });

    function onMouseEnter() {
      dispatch({
        type: 'SET_MOUSEOVER',
        pauseOnMouseOver: true
      });
      dispatch({
        type: 'SET_PAUSE',
        pause: true
      });
    }

    function onMouseLeave() {
      dispatch({
        type: 'SET_MOUSEOVER',
        pauseOnMouseOver: false
      });
      dispatch({
        type: 'SET_PAUSE',
        pause: false
      });
    }

    if (pauseOnMouseOver && autoPlayInterval) {
      ref.current.addEventListener('mouseenter', onMouseEnter);
      ref.current.addEventListener('mouseover', onMouseEnter);
      ref.current.addEventListener('mouseout', onMouseLeave);
      return () => {
        dispatch({
          type: 'SET_MOUSEOVER',
          pauseOnMouseOver: false
        });
        ref.current.removeEventListener('mouseenter', onMouseEnter);
        ref.current.removeEventListener('mouseover', onMouseEnter);
        ref.current.removeEventListener('mouseout', onMouseLeave);
      };
    }
  }, [pauseOnMouseOver, autoPlayInterval, dispatch, ref]);
});

/***/ }),

/***/ "./sled/hooks/usePause.ts":
/*!********************************!*\
  !*** ./sled/hooks/usePause.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (pause => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: 'SET_PAUSE',
      pause
    });
  }, [pause]);
});

/***/ }),

/***/ "./sled/hooks/useProportion.ts":
/*!*************************************!*\
  !*** ./sled/hooks/useProportion.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = ((width, height, proportion) => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!height && !proportion) {
      dispatch({
        type: 'SET_PROPORTION',
        proportion: '2:1'
      });
    } else {
      dispatch({
        type: 'SET_PROPORTION',
        proportion
      });
    }
  }, [width, height, proportion]);
});

/***/ }),

/***/ "./sled/hooks/useRewind.ts":
/*!*********************************!*\
  !*** ./sled/hooks/useRewind.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (rewind => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: 'SET_REWIND',
      rewind
    });
  }, [rewind]);
});

/***/ }),

/***/ "./sled/hooks/useSelect.ts":
/*!*********************************!*\
  !*** ./sled/hooks/useSelect.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");



const useSelect = select => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (typeof select === 'number') {
      dispatch({
        type: 'SELECT',
        index: select
      });
    } else {
      dispatch({
        type: select === 'next' ? 'NEXT' : 'PREV'
      });
    }
  }, [select]);
};

/* harmony default export */ __webpack_exports__["default"] = (useSelect);

/***/ }),

/***/ "./sled/hooks/useShowElements.ts":
/*!***************************************!*\
  !*** ./sled/hooks/useShowElements.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");



const useShowElements = showElements => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (showElements) {
      dispatch({
        type: 'SET_SHOWELEMENTS',
        showElements
      });
    }
  }, [showElements]);
};

/* harmony default export */ __webpack_exports__["default"] = (useShowElements);

/***/ }),

/***/ "./sled/hooks/useSlideBy.ts":
/*!**********************************!*\
  !*** ./sled/hooks/useSlideBy.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");



const useShowElements = slideBy => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (slideBy) {
      dispatch({
        type: 'SET_SLIDEBY',
        slideBy
      });
    }
  }, [slideBy]);
};

/* harmony default export */ __webpack_exports__["default"] = (useShowElements);

/***/ }),

/***/ "./sled/hooks/useSlideSteps.ts":
/*!*************************************!*\
  !*** ./sled/hooks/useSlideSteps.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");



const useSlideSteps = () => {
  const [{
    viewCount,
    slideBy
  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const slideSteps = Math.ceil(viewCount / slideBy);
    dispatch({
      type: 'SET_SLIDESTEPS',
      slideSteps
    });
  }, [viewCount, slideBy]);
};

/* harmony default export */ __webpack_exports__["default"] = (useSlideSteps);

/***/ }),

/***/ "./sled/hooks/useSliderSize.ts":
/*!*************************************!*\
  !*** ./sled/hooks/useSliderSize.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSliderStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


function useSliderStyles() {
  const [{
    dimensions: {
      width,
      height
    },
    viewCount,
    direction,
    showElements
  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (direction === 'vertical') {
      dispatch({
        type: 'SET_SLIDERSIZE',
        sliderSize: height / showElements * viewCount
      });
    } else {
      dispatch({
        type: 'SET_SLIDERSIZE',
        sliderSize: width / showElements * viewCount
      });
    }
  }, [direction, width, height, showElements, viewCount]);
}

/***/ }),

/***/ "./sled/hooks/useStopOnInteraction.ts":
/*!********************************************!*\
  !*** ./sled/hooks/useStopOnInteraction.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");



const useStopOnInteraction = stopOnInteraction => {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: 'SET_STOPONINTERACTION',
      stopOnInteraction
    });
  }, [stopOnInteraction]);
};

/* harmony default export */ __webpack_exports__["default"] = (useStopOnInteraction);

/***/ }),

/***/ "./sled/hooks/useViewCount.ts":
/*!************************************!*\
  !*** ./sled/hooks/useViewCount.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (function (children) {
  const [, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: 'SET_VIEWCOUNT',
      count: react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children).length
    });
  }, [children]);
});

/***/ }),

/***/ "./sled/hooks/useX.ts":
/*!****************************!*\
  !*** ./sled/hooks/useX.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  const [{
    direction,
    dimensions: {
      width,
      height
    },
    showElements,
    slideBy,
    currentIndex
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  const [x, setX] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (direction === 'horizontal') {
      setX(-currentIndex * (width / showElements * slideBy));
    } else {
      setX(-currentIndex * (height / showElements * slideBy));
    }
  }, [direction, width, height, showElements, slideBy, currentIndex]);
  return x;
});

/***/ }),

/***/ "./sled/index.css":
/*!************************!*\
  !*** ./sled/index.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sled/index.ts":
/*!***********************!*\
  !*** ./sled/index.ts ***!
  \***********************/
/*! exports provided: Sled, Views, Control, Progress, useSledStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sled */ "./sled/sled.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sled", function() { return _sled__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ "./sled/views.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return _views__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ "./sled/control/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return _control__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress */ "./sled/progress/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./sled/state/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSledStore", function() { return _state__WEBPACK_IMPORTED_MODULE_4__["useStateContext"]; });







/***/ }),

/***/ "./sled/progress/controls.tsx":
/*!************************************!*\
  !*** ./sled/progress/controls.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control */ "./sled/control/index.tsx");
var _jsxFileName = "/Users/andreasfaust/components/react-sled/sled/progress/controls.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SledProgressControls = ({
  className
}) => {
  const [{
    slideSteps
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  return __jsx("div", {
    className: `sled-progress-${className}-controls`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, [...Array(slideSteps ? slideSteps || 1 : 1)].map((view, index) => __jsx(_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    select: index,
    className: `sled-progress-${className}-control`,
    style: {
      flexGrow: 1,
      height: '100%',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      outline: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SledProgressControls);

/***/ }),

/***/ "./sled/progress/index.css":
/*!*********************************!*\
  !*** ./sled/progress/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sled/progress/index.tsx":
/*!*********************************!*\
  !*** ./sled/progress/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _separators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./separators */ "./sled/progress/separators.tsx");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track */ "./sled/progress/track.tsx");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ "./sled/progress/controls.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./sled/progress/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/andreasfaust/components/react-sled/sled/progress/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SledProgress = ({
  className,
  style
}) => {
  const [defaultClass, setDefaultClass] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(className || ' default');
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setDefaultClass(className || 'default');
  }, [className]);
  return __jsx("div", {
    className: `sled-progress-${defaultClass}`,
    style: style,
    role: "progressBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: `sled-progress-${defaultClass}-rail`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_track__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: defaultClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_separators__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: defaultClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(_controls__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: defaultClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SledProgress);

/***/ }),

/***/ "./sled/progress/separators.tsx":
/*!**************************************!*\
  !*** ./sled/progress/separators.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");
var _jsxFileName = "/Users/andreasfaust/components/react-sled/sled/progress/separators.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SledProgressSeparators = ({
  className
}) => {
  const [{
    slideSteps
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useStateContext"])();
  return slideSteps && __jsx("div", {
    className: `sled-progress-${className}-separators`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, [...Array(slideSteps - 1)].map((_, index) => __jsx("div", {
    key: index,
    className: `sled-progress-${className}-separator`,
    style: {
      position: 'relative',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SledProgressSeparators);

/***/ }),

/***/ "./sled/progress/track.tsx":
/*!*********************************!*\
  !*** ./sled/progress/track.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./sled/state/index.tsx");
var _jsxFileName = "/Users/andreasfaust/components/react-sled/sled/progress/track.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function getX(slideSteps, currentIndex, goPrevNext = 0) {
  return 100 - 100 / slideSteps * (currentIndex + goPrevNext);
}

const SledProgressTrack = ({
  className
}) => {
  const [{
    currentIndex,
    prevIndex,
    slideSteps,
    autoPlayInterval,
    pause,
    pauseOnMouseOver,
    config
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_2__["useStateContext"])();
  const [props, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])(() => ({
    from: {
      x: 100
    }
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (pauseOnMouseOver) {
      set({
        config,
        x: getX(slideSteps, currentIndex),
        reset: false
      });
    }
  }, [pauseOnMouseOver]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!slideSteps) return;
    const xCalc = getX(slideSteps, currentIndex, !autoPlayInterval && 1);

    if (currentIndex === 0) {
      set({
        config,
        from: {
          x: 100
        },
        x: xCalc,
        reset: slideSteps > 2 ? prevIndex !== 1 : true
      });
    } else {
      set({
        config,
        x: xCalc,
        reset: false
      });
    }
  }, [slideSteps, currentIndex, autoPlayInterval]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!autoPlayInterval) return;
    set({
      config: autoPlayInterval && !pause ? {
        duration: autoPlayInterval
      } : config,
      from: {
        x: getX(slideSteps, currentIndex)
      },
      x: getX(slideSteps, currentIndex, !pause && 1),
      reset: true
    });
  }, [pause, autoPlayInterval, slideSteps, currentIndex]);
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: `sled-progress-${className}-track`,
    style: {
      position: 'absolute',
      left: 0,
      width: '100%',
      pointerEvents: 'none',
      transform: props.x.to(x => `translateX(-${x}%)`)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SledProgressTrack);

/***/ }),

/***/ "./sled/sled.tsx":
/*!***********************!*\
  !*** ./sled/sled.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./sled/state/index.tsx");
var _jsxFileName = "/Users/andreasfaust/components/react-sled/sled/sled.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Sled = props => {
  const {
    children
  } = props;
  return __jsx(_state__WEBPACK_IMPORTED_MODULE_1__["StateProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Sled);

/***/ }),

/***/ "./sled/springs.tsx":
/*!**************************!*\
  !*** ./sled/springs.tsx ***!
  \**************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state */ "./sled/state/index.tsx");
/* harmony import */ var _hooks_useDragGesture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/useDragGesture */ "./sled/hooks/useDragGesture.ts");
/* harmony import */ var _hooks_useFocus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useFocus */ "./sled/hooks/useFocus.ts");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hooks/useCursor */ "./sled/hooks/useCursor.ts");
/* harmony import */ var _hooks_useX__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hooks/useX */ "./sled/hooks/useX.ts");
/* harmony import */ var _hooks_useContainerStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hooks/useContainerStyles */ "./sled/hooks/useContainerStyles.ts");








var _jsxFileName = "/Users/andreasfaust/components/react-sled/sled/springs.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










const SledSprings = ({
  onAnimationStart,
  onAnimationEnd,
  onSledEnd,
  children
}) => {
  const [{
    currentIndex,
    viewCount,
    direction,
    dimensions: {
      width,
      height
    },
    config
  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_10__["useStateContext"])();
  const cursor = Object(_hooks_useCursor__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const x = Object(_hooks_useX__WEBPACK_IMPORTED_MODULE_14__["default"])();
  const [props, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_9__["useSpring"])(() => ({
    x: 0,
    cursor,
    config,
    immediate: true
  }));
  const springRef = react__WEBPACK_IMPORTED_MODULE_8___default.a.useRef();
  Object(_hooks_useFocus__WEBPACK_IMPORTED_MODULE_12__["default"])(springRef);
  const [dimensionsUpdated, setDimensionsUpdated] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(false);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    setDimensionsUpdated(true);
  }, [width, height]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    if (!dimensionsUpdated) return;
    setDimensionsUpdated(false);
    set({
      x,
      immediate: true,
      onStart: null,
      onRest: null
    });
  }, [x, dimensionsUpdated]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    if (dimensionsUpdated) return;
    set({
      config,
      x,
      cursor,
      immediate: false,

      onStart() {
        dispatch({
          type: 'SET_PAUSE',
          pause: true
        });
        if (typeof onAnimationStart === 'function') onAnimationStart();
      },

      onRest() {
        dispatch({
          type: 'SET_PAUSE',
          pause: false
        });
        if (typeof onAnimationEnd === 'function') onAnimationEnd();

        if (currentIndex === viewCount - 1) {
          if (typeof onSledEnd === 'function') onSledEnd();
        }
      }

    });
  }, [x, currentIndex, dimensionsUpdated, viewCount, cursor]);
  const bind = Object(_hooks_useDragGesture__WEBPACK_IMPORTED_MODULE_11__["default"])(set);
  const sliderStyles = Object(_hooks_useContainerStyles__WEBPACK_IMPORTED_MODULE_15__["useSliderStyles"])();
  const viewStyles = Object(_hooks_useContainerStyles__WEBPACK_IMPORTED_MODULE_15__["useViewStyles"])();
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_9__["animated"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, bind ? bind() : {}, {
    className: "sled-slider",
    ref: springRef,
    style: _objectSpread({}, sliderStyles, {
      transform: direction === 'horizontal' ? props.x.to(x => `translate3d(${x}px,0,0)`) : props.x.to(x => `translate3d(0,${x}px,0)`),
      cursor: props.cursor
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.Children.map(children, child => __jsx("div", {
    className: "sled-element",
    style: viewStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, child)));
};

/* harmony default export */ __webpack_exports__["default"] = (SledSprings);

/***/ }),

/***/ "./sled/state/index.tsx":
/*!******************************!*\
  !*** ./sled/state/index.tsx ***!
  \******************************/
/*! exports provided: StateContext, StateProvider, useStateContext, ViewsProps, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return StateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateProvider", function() { return StateProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateContext", function() { return useStateContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types-defaults */ "./sled/state/types-defaults.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./sled/state/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewsProps", function() { return _types_defaults__WEBPACK_IMPORTED_MODULE_1__["ViewsProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _types_defaults__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

var _jsxFileName = "/Users/andreasfaust/components/react-sled/sled/state/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c



const StateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(_types_defaults__WEBPACK_IMPORTED_MODULE_1__["initialState"]);

const StateProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"], _types_defaults__WEBPACK_IMPORTED_MODULE_1__["initialState"]);
  return __jsx(StateContext.Provider, {
    value: [state, dispatch],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, children);
};


const useStateContext = () => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StateContext);
  return [state, dispatch];
};


/***/ }),

/***/ "./sled/state/reducer.ts":
/*!*******************************!*\
  !*** ./sled/state/reducer.ts ***!
  \*******************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
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
/* harmony import */ var _utils_clamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/clamp */ "./sled/utils/clamp.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



function getNext(currentIndex, slideSteps, rewind) {
  if (currentIndex === slideSteps - 1 && !rewind) {
    return Object(_utils_clamp__WEBPACK_IMPORTED_MODULE_7__["default"])(currentIndex, 0, slideSteps - 1);
  }

  return (currentIndex + 1) % slideSteps;
}

function getPrev(currentIndex, slideSteps, rewind) {
  if (currentIndex === 0 && !rewind) {
    return Object(_utils_clamp__WEBPACK_IMPORTED_MODULE_7__["default"])(currentIndex, 0, slideSteps - 1);
  }

  return (currentIndex - 1 + slideSteps) % slideSteps;
}

function reducer(state, action) {
  switch (action.type) {
    case 'NEXT':
      return _objectSpread({}, state, {
        currentIndex: getNext(state.currentIndex, state.slideSteps, state.rewind),
        prevIndex: state.currentIndex
      });

    case 'PREV':
      return _objectSpread({}, state, {
        currentIndex: getPrev(state.currentIndex, state.slideSteps, state.rewind),
        prevIndex: state.currentIndex
      });

    case 'SELECT':
      return _objectSpread({}, state, {
        currentIndex: Object(_utils_clamp__WEBPACK_IMPORTED_MODULE_7__["default"])(action.index, 0, state.slideSteps - 1),
        prevIndex: state.currentIndex
      });

    case 'SET_DIRECTION':
      return _objectSpread({}, state, {
        direction: action.direction
      });

    case 'SET_PAUSE':
      return _objectSpread({}, state, {
        pause: action.pause
      });

    case 'SET_MOUSEOVER':
      return _objectSpread({}, state, {
        pauseOnMouseOver: action.pauseOnMouseOver
      });

    case 'SET_VIEWCOUNT':
      return _objectSpread({}, state, {
        viewCount: action.count
      });

    case 'SET_FOCUS':
      return _objectSpread({}, state, {
        hasFocus: action.focus
      });

    case 'SET_DIMENSIONS':
      return _objectSpread({}, state, {
        dimensions: action.dimensions
      });

    case 'SET_DIMENSIONS_DOM':
      return _objectSpread({}, state, {
        dimensionsDOM: action.dimensionsDOM
      });

    case 'SET_PROPORTION':
      return _objectSpread({}, state, {
        proportion: action.proportion
      });

    case 'SET_DRAGGING':
      return _objectSpread({}, state, {
        dragging: action.dragging
      });

    case 'SET_DRAG_DISTANCE':
      return _objectSpread({}, state, {
        dragDistance: action.dragDistance
      });

    case 'SET_AUTOPLAY':
      return _objectSpread({}, state, {
        autoPlayInterval: action.autoPlayInterval
      });

    case 'SET_CONFIG':
      return _objectSpread({}, state, {
        config: action.config
      });

    case 'SET_REWIND':
      return _objectSpread({}, state, {
        rewind: action.rewind
      });

    case 'SET_STOPONINTERACTION':
      return _objectSpread({}, state, {
        stopOnInteraction: action.stopOnInteraction
      });

    case 'SET_SLIDEBY':
      return _objectSpread({}, state, {
        slideBy: action.slideBy
      });

    case 'SET_SLIDESTEPS':
      return _objectSpread({}, state, {
        slideSteps: action.slideSteps
      });

    case 'SET_SHOWELEMENTS':
      return _objectSpread({}, state, {
        showElements: action.showElements
      });

    case 'SET_SLIDERSIZE':
      return _objectSpread({}, state, {
        sliderSize: action.sliderSize
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./sled/state/types-defaults.ts":
/*!**************************************!*\
  !*** ./sled/state/types-defaults.ts ***!
  \**************************************/
/*! exports provided: ViewsProps, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsProps", function() { return ViewsProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

const stateFromProps = {
  width: null,
  proportion: null,
  select: null,
  keyboard: true,
  dragging: true,
  dragDistance: '25ow',
  autoPlayInterval: null,
  config: {
    mass: 1,
    tension: 210,
    friction: 20,
    clamp: true
  },
  pauseOnMouseOver: true,
  stopOnInteraction: false,
  rewind: false,
  pause: false,
  onSledEnd: null,
  onAnimationStart: null,
  onAnimationEnd: null
};
const ViewsProps = _objectSpread({}, stateFromProps);
const initialState = _objectSpread({
  currentIndex: 0,
  prevIndex: undefined,
  pause: false,
  viewCount: 0,
  hasFocus: false,
  direction: 'horizontal',
  showElements: 1,
  slideBy: 1,
  slideSteps: 1,
  sliderSize: 0,
  dimensions: {
    width: 0,
    height: 0
  },
  dimensionsDOM: {
    width: 0,
    height: 0
  }
}, stateFromProps);

/***/ }),

/***/ "./sled/utils/clamp.ts":
/*!*****************************!*\
  !*** ./sled/utils/clamp.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

  return number;
}

/* harmony default export */ __webpack_exports__["default"] = (clamp);

/***/ }),

/***/ "./sled/utils/debounce.ts":
/*!********************************!*\
  !*** ./sled/utils/debounce.ts ***!
  \********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// https://github.com/chodorowicz/ts-debounce/blob/master/src/index.ts
function debounce(func, waitMilliseconds = 50, options = {
  isImmediate: false
}) {
  let timeoutId;
  return function (...args) {
    const context = this;

    const doLater = function () {
      timeoutId = undefined;

      if (!options.isImmediate) {
        func.apply(context, args);
      }
    };

    const shouldCallNow = options.isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      func.apply(context, args);
    }
  };
}

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _springs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./springs */ "./sled/springs.tsx");
/* harmony import */ var _state_types_defaults__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/types-defaults */ "./sled/state/types-defaults.ts");
/* harmony import */ var _hooks_useDirection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useDirection */ "./sled/hooks/useDirection.ts");
/* harmony import */ var _hooks_useDimensionsDOM__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/useDimensionsDOM */ "./sled/hooks/useDimensionsDOM.ts");
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


























const SledViews = ({
  children,
  style,
  width,
  height,
  proportion,
  direction,
  select,
  slideBy,
  showElements,
  keyboard,
  dragging,
  dragDistance,
  autoPlayInterval,
  config,
  pauseOnMouseOver,
  stopOnInteraction,
  rewind,
  pause,
  onSledEnd,
  onAnimationStart,
  onAnimationEnd
}) => {
  const viewsRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();
  const [{
    dimensions,
    dimensionsDOM
  }] = Object(_state__WEBPACK_IMPORTED_MODULE_29__["useStateContext"])();
  Object(_hooks_useProportion__WEBPACK_IMPORTED_MODULE_13__["default"])(width, height, proportion);
  Object(_hooks_useDimensionsDOM__WEBPACK_IMPORTED_MODULE_11__["default"])(width, height);
  Object(_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_12__["default"])(viewsRef);
  Object(_hooks_useDirection__WEBPACK_IMPORTED_MODULE_10__["default"])(direction);
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
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("div", {
    className: "sled-sizer",
    style: dimensions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(_springs__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onAnimationStart: onAnimationStart,
    onAnimationEnd: onAnimationEnd,
    onSledEnd: onSledEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, children)));
};

SledViews.defaultProps = _state_types_defaults__WEBPACK_IMPORTED_MODULE_9__["ViewsProps"];
/* harmony default export */ __webpack_exports__["default"] = (SledViews);

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/test.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andreasfaust/components/react-sled/pages/test.js */"./pages/test.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ "rc-slider":
/*!****************************!*\
  !*** external "rc-slider" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-slider");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "react-toggle":
/*!*******************************!*\
  !*** external "react-toggle" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toggle");

/***/ }),

/***/ "react-use-gesture":
/*!************************************!*\
  !*** external "react-use-gesture" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use-gesture");

/***/ })

/******/ });
//# sourceMappingURL=test.js.map