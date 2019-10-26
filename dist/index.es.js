import React, { createContext, useContext, useReducer, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated, useSprings, useSpring } from 'react-spring';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

function _extends() {
  _extends = Object.assign || function (target) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118;function x(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function y(a){return x(a)===m}exports.typeOf=x;exports.AsyncMode=l;
exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w)};exports.isAsyncMode=function(a){return y(a)||x(a)===l};exports.isConcurrentMode=y;exports.isContextConsumer=function(a){return x(a)===k};exports.isContextProvider=function(a){return x(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return x(a)===n};exports.isFragment=function(a){return x(a)===e};exports.isLazy=function(a){return x(a)===t};exports.isMemo=function(a){return x(a)===r};exports.isPortal=function(a){return x(a)===d};exports.isProfiler=function(a){return x(a)===g};exports.isStrictMode=function(a){return x(a)===f};exports.isSuspense=function(a){return x(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

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
    case 'NEXT':
      return _objectSpread2({}, state, {
        currentIndex: getNext(state.currentIndex, state.viewCount, state.rewind),
        prevIndex: state.currentIndex
      });

    case 'PREV':
      return _objectSpread2({}, state, {
        currentIndex: getPrev(state.currentIndex, state.viewCount, state.rewind),
        prevIndex: state.currentIndex
      });

    case 'GOTO':
      return _objectSpread2({}, state, {
        currentIndex: clamp(action.index, 0, state.viewCount - 1),
        prevIndex: state.currentIndex
      });

    case 'SET_PAUSE':
      return _objectSpread2({}, state, {
        pause: action.pause
      });

    case 'SET_RESTED_INDEX':
      return _objectSpread2({}, state, {
        restedIndex: state.currentIndex
      });

    case 'SET_MOUSEOVER':
      return _objectSpread2({}, state, {
        mouseOver: action.mouseOver
      });

    case 'SET_VIEWCOUNT':
      return _objectSpread2({}, state, {
        viewCount: action.count
      });

    case 'SET_FOCUS':
      return _objectSpread2({}, state, {
        hasFocus: action.focus
      });

    case 'SET_DIMENSIONS':
      return _objectSpread2({}, state, {
        width: action.width,
        height: action.height
      });

    case 'SET_DRAGGING':
      return _objectSpread2({}, state, {
        dragging: action.dragging
      });

    case 'SET_DRAG_DISTANCE':
      return _objectSpread2({}, state, {
        dragDistance: action.dragDistance
      });

    case 'SET_AUTOPLAY':
      return _objectSpread2({}, state, {
        autoPlayInterval: action.autoPlayInterval
      });

    case 'SET_CONFIG':
      return _objectSpread2({}, state, {
        config: action.config
      });

    case 'SET_REWIND':
      return _objectSpread2({}, state, {
        rewind: action.rewind
      });

    case 'SET_STOPONINTERACTION':
      return _objectSpread2({}, state, {
        stopOnInteraction: action.stopOnInteraction
      });

    default:
      return state;
  }
});

// https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
var StateContext = createContext();
var StateProvider = function StateProvider(_ref) {
  var reducer = _ref.reducer,
      initialState = _ref.initialState,
      children = _ref.children;
  return React.createElement(StateContext.Provider, {
    value: useReducer(reducer, initialState)
  }, children);
};
var useStateContext = function useStateContext() {
  return useContext(StateContext);
};

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var GestureFlag;

(function (GestureFlag) {
  GestureFlag["OnStart"] = "start";
  GestureFlag["OnChange"] = "change";
  GestureFlag["OnEnd"] = "end";
})(GestureFlag || (GestureFlag = {}));

// blank function
var noop = function noop() {}; // returns a function that chains all functions given as parameters

var chainFns = function chainFns() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.forEach(function (fn) {
      return fn.apply(void 0, args);
    });
  };
}; // vector add

var addV = function addV(v1, v2) {
  return v1.map(function (v, i) {
    return v + v2[i];
  });
}; // vector substract

var subV = function subV(v1, v2) {
  return v1.map(function (v, i) {
    return v - v2[i];
  });
};

var setListeners = function setListeners(add) {
  return function (el, listeners, options) {
    var action = add ? 'addEventListener' : 'removeEventListener';
    listeners.forEach(function (_ref) {
      var type = _ref[0],
          fn = _ref[1];
      return el[action](type, fn, options);
    });
  };
};

var addListeners =
/*#__PURE__*/
setListeners(true);
var removeListeners =
/*#__PURE__*/
setListeners(false);
/**
 * Gets modifier keys from event
 * @param event
 * @returns modifier keys
 */

function getModifierKeys(event) {
  var shiftKey = event.shiftKey,
      altKey = event.altKey,
      metaKey = event.metaKey,
      ctrlKey = event.ctrlKey;
  return {
    shiftKey: shiftKey,
    altKey: altKey,
    metaKey: metaKey,
    ctrlKey: ctrlKey
  };
}
/**
 * Gets scroll event data
 * @param event
 * @returns scroll event data
 */

function getScrollEventData(event) {
  // If the currentTarget is the window then we return the scrollX/Y position.
  // If not (ie the currentTarget is a DOM element), then we return scrollLeft/Top
  var _event$currentTarget = event.currentTarget,
      scrollX = _event$currentTarget.scrollX,
      scrollY = _event$currentTarget.scrollY,
      scrollLeft = _event$currentTarget.scrollLeft,
      scrollTop = _event$currentTarget.scrollTop;
  return _extends$1({
    xy: [scrollX || scrollLeft || 0, scrollY || scrollTop || 0]
  }, getModifierKeys(event));
}
/**
 * Gets wheel event data
 * @param event
 * @returns wheel event data
 */

function getWheelEventData(event) {
  var deltaX = event.deltaX,
      deltaY = event.deltaY; //TODO implement polyfill ?
  // https://developer.mozilla.org/en-US/docs/Web/Events/wheel#Polyfill

  return _extends$1({
    xy: [deltaX, deltaY]
  }, getModifierKeys(event));
}
/**
 * Gets pointer event data
 * @param event
 * @returns pointer event data
 */

function getPointerEventData(event) {
  var touches = event.touches,
      buttons = event.buttons,
      changedTouches = event.changedTouches;
  var touchEvents = touches && touches.length > 0 ? touches : changedTouches && changedTouches.length > 0 ? changedTouches : null;

  var _ref2 = touchEvents ? touchEvents[0] : event,
      clientX = _ref2.clientX,
      clientY = _ref2.clientY;

  var down = touchEvents && touchEvents.length > 0 || buttons > 0;
  return _extends$1({
    xy: [clientX, clientY],
    touches: touchEvents && touchEvents.length || 0,
    down: down,
    buttons: buttons
  }, getModifierKeys(event));
}
/**
 * Gets two touches event data
 * @param event
 * @returns two touches event data
 */

function getTwoTouchesEventData(event) {
  var touches = event.touches;
  var dx = touches[1].clientX - touches[0].clientX;
  var dy = touches[1].clientY - touches[0].clientY;
  var da = [Math.hypot(dx, dy), -(Math.atan2(dx, dy) * 180) / Math.PI];
  var origin = [(touches[1].clientX + touches[0].clientX) / 2, (touches[1].clientY + touches[0].clientY) / 2];
  return _extends$1({
    da: da,
    origin: origin,
    touches: 2,
    down: touches.length > 0
  }, getModifierKeys(event));
}
/**
 * Calculates velocity
 * @param delta the difference between current and previous vectors
 * @param delta_t the time offset
 * @param len the length of the delta vector
 * @returns velocity
 */

function calculateVelocity(delta, delta_t, len) {
  len = len || Math.hypot.apply(Math, delta);
  return delta_t ? len / delta_t : 0;
}
/**
 * Calculates velocities vector
 * @template T the expected vector type
 * @param delta the difference between current and previous vectors
 * @param delta_t the time offset
 * @returns velocities vector
 */

function calculateVelocities(delta, delta_t) {
  return delta_t ? delta.map(function (v) {
    return v / delta_t;
  }) : Array(delta.length).fill(0);
}
/**
 * Calculates distance
 * @param movement the difference between current and initial vectors
 * @returns distance
 */

function calculateDistance(movement) {
  return Math.hypot.apply(Math, movement);
}
/**
 * Calculates direction
 * @template T the expected vector type
 * @param delta
 * @param len
 * @returns direction
 */

function calculateDirection(delta, len) {
  len = len || Math.hypot.apply(Math, delta) || 1;
  return delta.map(function (v) {
    return v / len;
  });
}
/**
 * Calculates all kinematics
 * @template T the expected vector type
 * @param movement the difference between current and initial vectors
 * @param delta the difference between current and previous vectors
 * @param delta_t the time difference between current and previous timestamps
 * @returns all kinematics
 */

function calculateAllKinematics(movement, delta, delta_t) {
  var len = Math.hypot.apply(Math, delta);
  return {
    velocities: calculateVelocities(delta, delta_t),
    velocity: calculateVelocity(delta, delta_t, len),
    distance: calculateDistance(movement),
    direction: calculateDirection(delta, len)
  };
}
/**
 * Whether the browser supports GestureEvent (ie Safari)
 * @returns true if the browser supports gesture event
 */

function gestureEventSupported() {
  try {
    // TODO [TS] possibly find GestureEvent definitions?
    // @ts-ignore: Unreachable code error
    return 'constructor' in GestureEvent;
  } catch (e) {
    return false;
  }
}

/**
 * Some gestures might use the state key from another gesture (i.e. hover)
 * so mappedKeys is a commodity object to get the state key and handler key
 * for every gesture
 */

var mappedKeys = {
  drag: {
    stateKey: 'drag',
    handlerKey: 'onDrag'
  },
  pinch: {
    stateKey: 'pinch',
    handlerKey: 'onPinch'
  },
  move: {
    stateKey: 'move',
    handlerKey: 'onMove'
  },
  scroll: {
    stateKey: 'scroll',
    handlerKey: 'onScroll'
  },
  wheel: {
    stateKey: 'wheel',
    handlerKey: 'onWheel'
  },
  hover: {
    stateKey: 'move',
    handlerKey: 'onHover'
  }
}; // default config (will extend user config)

var defaultConfig = {
  domTarget: undefined,
  event: {
    passive: true,
    capture: false
  },
  window: typeof window !== 'undefined' ? window : undefined,
  dragDelay: false,
  passiveEvents: true,
  pointerEvents: false,
  enabled: true,
  drag: true,
  pinch: true,
  scroll: true,
  wheel: true,
  hover: true,
  move: true
}; // common initial state for all gestures

var initialCommon = {
  event: undefined,
  currentTarget: undefined,
  pointerId: undefined,
  delta: [0, 0],
  movement: [0, 0],
  offset: [0, 0],
  direction: [0, 0],
  initial: [0, 0],
  previous: [0, 0],
  first: false,
  last: false,
  active: false,
  time: undefined,
  cancel: noop,
  canceled: false,
  memo: undefined,
  args: undefined
}; // initial state for coordinates-based gestures

var initialCoordinates = {
  xy: [0, 0],
  vxvy: [0, 0],
  velocity: 0,
  distance: 0
}; // xy coordinates
// initial state for distance and angle-based gestures (pinch)

var initialDistanceAngle = {
  da: [0, 0],
  vdva: [0, 0],
  origin: undefined,
  turns: 0
}; // distance and angle
// initial state object (used by the gesture controller)

var initialState = {
  shared: {
    hovering: false,
    scrolling: false,
    wheeling: false,
    dragging: false,
    moving: false,
    pinching: false,
    touches: 0,
    buttons: 0,
    down: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ctrlKey: false
  },
  move:
  /*#__PURE__*/
  _extends$1({}, initialCommon, {}, initialCoordinates),
  drag:
  /*#__PURE__*/
  _extends$1({}, initialCommon, {}, initialCoordinates),
  scroll:
  /*#__PURE__*/
  _extends$1({}, initialCommon, {}, initialCoordinates),
  wheel:
  /*#__PURE__*/
  _extends$1({}, initialCommon, {}, initialCoordinates),
  pinch:
  /*#__PURE__*/
  _extends$1({}, initialCommon, {}, initialDistanceAngle)
}; // generic end state for all gestures

var genericEndState = {
  first: false,
  last: true,
  active: false
};

/**
 * Recognizer abstract class
 * @template GestureType whether the Recognizer should deal with coordinates or distance / angle
 */

var Recognizer =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of a gesture recognizer.
   * @param gestureKey drag, move, hover, pinch, etc.
   * @param controller the controller attached to the gesture
   * @param [args] the args that should be passed to the gesture handler
   */
  function Recognizer(gestureKey, controller, args) {
    var _this = this;

    if (args === void 0) {
      args = [];
    }

    this.gestureKey = gestureKey;
    this.controller = controller;
    this.args = args; // convenience method to set a timeout for a given gesture

    this.setTimeout = function (callback, ms) {
      var _window;

      if (ms === void 0) {
        ms = 140;
      }

      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      _this.controller.timeouts[_this.stateKey] = (_window = window).setTimeout.apply(_window, [callback, ms].concat(args));
    }; // convenience method to clear a timeout for a given gesture


    this.clearTimeout = function () {
      clearTimeout(_this.controller.timeouts[_this.stateKey]);
    }; // convenience method to add window listeners for a given gesture


    this.addWindowListeners = function (listeners) {
      _this.controller.addWindowListeners(_this.stateKey, listeners);
    }; // convenience method to remove window listeners for a given gesture


    this.removeWindowListeners = function () {
      _this.controller.removeWindowListeners(_this.stateKey);
    };
    /**
     * convenience method to update the controller state for a given gesture
     * @param sharedState shared partial state object
     * @param gestureState partial state object for the gesture handled by the recognizer
     * @param [gestureFlag] if set, will also fire the gesture handler set by the user
     */


    this.updateState = function (sharedState, gestureState) {
      _this.controller.updateState(sharedState, gestureState, _this.stateKey);
    };

    this.fireGestureHandler = function (gestureFlag) {
      _this.controller.fireGestureHandler(_this.gestureKey, gestureFlag);
    }; // generic onStart function


    this.onStart = function (event, payload) {
      var _this$getPayloadFromE = _this.getPayloadFromEvent(event),
          values = _this$getPayloadFromE.values,
          gesturePayload = _this$getPayloadFromE.gesturePayload,
          sharedPayload = _this$getPayloadFromE.sharedPayload;

      var startState = _this.getStartState(values, event);

      _this.updateState(_extends$1({}, _this.sharedStartState, {}, sharedPayload), _extends$1({}, startState, {}, gesturePayload, {}, payload));

      _this.fireGestureHandler(GestureFlag.OnStart);
    }; // generic onChange function


    this.onChange = function (event, payload) {
      var _this$getPayloadFromE2 = _this.getPayloadFromEvent(event),
          values = _this$getPayloadFromE2.values,
          gesturePayload = _this$getPayloadFromE2.gesturePayload,
          sharedPayload = _this$getPayloadFromE2.sharedPayload;

      var kinematics = _this.getKinematics(values, event);

      _this.updateState(_extends$1({}, sharedPayload), _extends$1({
        first: false
      }, kinematics, {}, gesturePayload, {}, payload));

      _this.fireGestureHandler(GestureFlag.OnChange);
    }; // generic onEnd function


    this.onEnd = function (event, payload) {
      if (!_this.state.active) return;

      _this.removeWindowListeners();

      _this.updateState(_this.sharedEndState, _extends$1({
        event: event
      }, genericEndState, {}, payload));

      _this.fireGestureHandler(GestureFlag.OnEnd);
    }; // generic cancel function


    this.onCancel = function (event) {
      _this.updateState(null, {
        canceled: true,
        cancel: noop
      });

      requestAnimationFrame(function () {
        return _this.onEnd(event);
      });
    }; // generic gesture handler for timeout-based gestures


    this.timeoutHandler = function (event) {
      if (!_this.enabled) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onEnd);

      if (!_this.state.active) _this.onStart(event);else _this.onChange(event);
    }; // mapping this.stateKey to the state key the gesture handles
    // (ie hover actually deals with the move gesture state)


    this.stateKey = mappedKeys[gestureKey].stateKey;
  } // is the gesture enabled


  _createClass(Recognizer, [{
    key: "enabled",
    get: function get() {
      return this.controller.config.enabled && this.controller.config[this.gestureKey];
    } // get the controller state for a given gesture

  }, {
    key: "state",
    get: function get() {
      return this.controller.state[this.stateKey];
    }
  }]);

  return Recognizer;
}();

/**
 * Abstract class for coordinates-based gesture recongizers
 */

var CoordinatesRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(CoordinatesRecognizer, _Recognizer);

  function CoordinatesRecognizer() {
    return _Recognizer.apply(this, arguments) || this;
  }

  var _proto = CoordinatesRecognizer.prototype;

  _proto.getKinematics = function getKinematics(values, event) {
    // we get the gesture specific state
    var _this$state = this.state,
        xy = _this$state.xy,
        initial = _this$state.initial,
        offset = _this$state.offset,
        _this$state$time = _this$state.time,
        time = _this$state$time === void 0 ? 0 : _this$state$time; // offset is the difference between the current and initial value vectors

    var movement = subV(values, initial); // delta is the difference between the current and previous value vectors

    var delta = subV(values, xy);
    var delta_t = event.timeStamp - time;

    var _calculateAllKinemati = calculateAllKinematics(movement, delta, delta_t),
        velocity = _calculateAllKinemati.velocity,
        velocities = _calculateAllKinemati.velocities,
        distance = _calculateAllKinemati.distance,
        direction = _calculateAllKinemati.direction;

    return {
      event: event,
      xy: values,
      movement: movement,
      offset: addV(offset, delta),
      delta: delta,
      velocity: velocity,
      vxvy: velocities,
      distance: distance,
      direction: direction,
      previous: xy,
      time: event.timeStamp
    };
  };

  _proto.getStartState = function getStartState(xy, event) {
    var initial = initialState[this.stateKey];
    return _extends$1({}, initial, {
      event: event,
      xy: xy,
      initial: xy,
      previous: xy,
      offset: this.state.offset,
      first: true,
      active: true,
      time: event.timeStamp,
      args: this.args
    });
  };

  return CoordinatesRecognizer;
}(Recognizer);

var DEFAULT_DRAG_DELAY = 180;

var DragRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(DragRecognizer, _CoordinatesRecognize);

  function DragRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'drag', controller, args) || this;
    _this.sharedStartState = {
      dragging: true,
      down: true
    };
    _this.sharedEndState = {
      dragging: false,
      down: false,
      buttons: 0,
      touches: 0
    };
    _this.delayedEvent = false;

    _this.onDragStart = function (event) {
      if (!_this.enabled) return; // making sure we're not dragging the element when more than one finger press the screen

      var _getPointerEventData = getPointerEventData(event),
          touches = _getPointerEventData.touches;

      if (touches > 1) return;
      var currentTarget = event.currentTarget,
          pointerId = event.pointerId;

      if (_this.controller.config.pointerEvents) {
        // if pointers events
        currentTarget && currentTarget.setPointerCapture(pointerId);
      } else {
        _this.removeWindowListeners();

        var dragListeners = [['mousemove', _this.onDragChange], ['touchmove', _this.onDragChange], ['mouseup', _this.onDragEnd], ['touchend', _this.onDragEnd], ['touchcancel', _this.onDragEnd]];

        _this.addWindowListeners(dragListeners);
      }

      if (_this.controller.config.dragDelay) {
        var dragDelay = typeof _this.controller.config.dragDelay === 'number' ? _this.controller.config.dragDelay : DEFAULT_DRAG_DELAY;
        if (typeof event.persist === 'function') event.persist();
        _this.delayedEvent = true;

        _this.setTimeout(function () {
          return _this.startDrag(event);
        }, dragDelay);
      } else {
        _this.startDrag(event);
      }
    };

    _this.startDrag = function (event) {
      var currentTarget = event.currentTarget,
          pointerId = event.pointerId;

      _this.onStart(event, {
        currentTarget: currentTarget,
        pointerId: pointerId,
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      });

      _this.delayedEvent = false;
    };

    _this.onDragChange = function (event) {
      var _this$state = _this.state,
          canceled = _this$state.canceled,
          active = _this$state.active;
      if (canceled) return;

      if (!active) {
        if (_this.delayedEvent) {
          _this.clearTimeout();

          _this.startDrag(event);
        }

        return;
      }

      var _getPointerEventData2 = getPointerEventData(event),
          buttons = _getPointerEventData2.buttons,
          touches = _getPointerEventData2.touches;

      if (buttons === 0 && touches === 0) {
        _this.onEnd(event);

        return;
      }

      _this.onChange(event, {
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      });
    };

    _this.onDragEnd = function (event) {
      _this.clearTimeout();

      _this.delayedEvent = false;
      if (!_this.state.active) return;
      var _this$state2 = _this.state,
          currentTarget = _this$state2.currentTarget,
          pointerId = _this$state2.pointerId;
      if (currentTarget && _this.controller.config.pointerEvents) currentTarget.releasePointerCapture(pointerId);

      _this.onEnd(event);
    };

    return _this;
  }

  var _proto = DragRecognizer.prototype;

  _proto.getPayloadFromEvent = function getPayloadFromEvent(event) {
    var _getPointerEventData3 = getPointerEventData(event),
        xy = _getPointerEventData3.xy,
        sharedPayload = _objectWithoutPropertiesLoose$1(_getPointerEventData3, ["xy"]);

    return {
      values: xy,
      sharedPayload: sharedPayload
    };
  };

  _proto.getEventBindings = function getEventBindings() {
    if (this.controller.config.pointerEvents) {
      return [['onPointerDown', this.onDragStart], ['onPointerMove', this.onDragChange], [['onPointerUp'], this.onDragEnd]];
    }

    return [[['onMouseDown', 'onTouchStart'], this.onDragStart]];
  };

  return DragRecognizer;
}(CoordinatesRecognizer);

var ScrollRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(ScrollRecognizer, _CoordinatesRecognize);

  function ScrollRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'scroll', controller, args) || this;
    _this.sharedStartState = {
      scrolling: true
    };
    _this.sharedEndState = {
      scrolling: false,
      velocity: 0,
      vxvy: [0, 0]
    };
    return _this;
  }

  var _proto = ScrollRecognizer.prototype;

  _proto.getPayloadFromEvent = function getPayloadFromEvent(event) {
    var _getScrollEventData = getScrollEventData(event),
        xy = _getScrollEventData.xy,
        sharedPayload = _objectWithoutPropertiesLoose$1(_getScrollEventData, ["xy"]);

    return {
      values: xy,
      sharedPayload: sharedPayload
    };
  };

  _proto.getEventBindings = function getEventBindings() {
    return [['onScroll', this.timeoutHandler]];
  };

  return ScrollRecognizer;
}(CoordinatesRecognizer);

var WheelRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(WheelRecognizer, _CoordinatesRecognize);

  function WheelRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'wheel', controller, args) || this;
    _this.sharedStartState = {
      wheeling: true
    };
    _this.sharedEndState = {
      wheeling: false,
      velocity: 0,
      vxvy: [0, 0]
    };

    _this.onWheel = function (event) {
      if (event.ctrlKey && _this.controller.actions.has('onPinch')) return;

      _this.timeoutHandler(event);
    };

    return _this;
  }

  var _proto = WheelRecognizer.prototype;

  _proto.getPayloadFromEvent = function getPayloadFromEvent(event) {
    var prevXY = this.state.xy;

    var _getWheelEventData = getWheelEventData(event),
        xy = _getWheelEventData.xy,
        sharedPayload = _objectWithoutPropertiesLoose$1(_getWheelEventData, ["xy"]);

    var values = addV(xy, prevXY);
    return {
      values: values,
      sharedPayload: sharedPayload
    };
  };

  _proto.getEventBindings = function getEventBindings() {
    return [['onWheel', this.onWheel]];
  };

  return WheelRecognizer;
}(CoordinatesRecognizer);

var MoveRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(MoveRecognizer, _CoordinatesRecognize);

  function MoveRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'move', controller, args) || this;
    _this.sharedStartState = {
      moving: true
    };
    _this.sharedEndState = {
      moving: false,
      velocity: 0,
      vxvy: [0, 0]
    };
    return _this;
  }

  var _proto = MoveRecognizer.prototype;

  _proto.getPayloadFromEvent = function getPayloadFromEvent(event) {
    var _getPointerEventData = getPointerEventData(event),
        xy = _getPointerEventData.xy,
        sharedPayload = _objectWithoutPropertiesLoose$1(_getPointerEventData, ["xy"]);

    return {
      values: xy,
      sharedPayload: sharedPayload
    };
  };

  _proto.getEventBindings = function getEventBindings() {
    if (this.controller.config.pointerEvents) {
      return [['onPointerMove', this.timeoutHandler]];
    }

    return [['onMouseMove', this.timeoutHandler]];
  };

  return MoveRecognizer;
}(CoordinatesRecognizer);

var HoverRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(HoverRecognizer, _CoordinatesRecognize);

  function HoverRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'hover', controller, args) || this;

    _this.onPointerEnter = function (event) {
      if (!_this.enabled) return;

      var _this$getPayloadFromE = _this.getPayloadFromEvent(event),
          values = _this$getPayloadFromE.values,
          sharedPayload = _this$getPayloadFromE.sharedPayload;

      _this.updateState(_extends$1({
        hovering: true
      }, sharedPayload), {
        xy: values,
        event: event,
        args: _this.args
      });

      _this.fireGestureHandler(GestureFlag.OnChange);
    };

    _this.onPointerLeave = function (event) {
      if (!_this.enabled) return;

      var _this$getPayloadFromE2 = _this.getPayloadFromEvent(event),
          values = _this$getPayloadFromE2.values,
          sharedPayload = _this$getPayloadFromE2.sharedPayload;

      var kinematics = _this.getKinematics(values, event);

      _this.updateState(_extends$1({
        hovering: false,
        moving: false
      }, sharedPayload), _extends$1({}, kinematics, {}, genericEndState, {
        velocity: 0,
        vxvy: [0, 0]
      })); // when the mouse leaves the element, we also fire the move handler
      // without waiting for move to end with debounce


      _this.controller.fireGestureHandler('move', GestureFlag.OnEnd);

      _this.controller.fireGestureHandler('hover', GestureFlag.OnChange);
    };

    return _this;
  }

  var _proto = HoverRecognizer.prototype;

  _proto.getPayloadFromEvent = function getPayloadFromEvent(event) {
    var _getPointerEventData = getPointerEventData(event),
        xy = _getPointerEventData.xy,
        sharedPayload = _objectWithoutPropertiesLoose$1(_getPointerEventData, ["xy"]);

    return {
      values: xy,
      sharedPayload: sharedPayload
    };
  };

  _proto.getEventBindings = function getEventBindings() {
    if (this.controller.config.pointerEvents) {
      return [['onPointerEnter', this.onPointerEnter], ['onPointerLeave', this.onEnd]];
    }

    return [['onMouseEnter', this.onPointerEnter], ['onMouseLeave', this.onPointerLeave]];
  };

  return HoverRecognizer;
}(CoordinatesRecognizer);

/**
 * Abstract class for distance/angle-based gesture recongizers
 */

var DistanceAngleRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(DistanceAngleRecognizer, _Recognizer);

  function DistanceAngleRecognizer(gestureKey, controller, args) {
    var _this;

    if (args === void 0) {
      args = [];
    }

    _this = _Recognizer.call(this, gestureKey, controller, args) || this;
    _this.getKinematics = _this.getKinematics.bind(_assertThisInitialized(_this));
    _this.getStartState = _this.getStartState.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DistanceAngleRecognizer.prototype;

  _proto.getKinematics = function getKinematics(_ref, event) {
    var d = _ref[0],
        a = _ref[1];
    var _this$state = this.state,
        da = _this$state.da,
        turns = _this$state.turns,
        initial = _this$state.initial,
        offset = _this$state.offset,
        _this$state$time = _this$state.time,
        time = _this$state$time === void 0 ? 0 : _this$state$time; // angle might not be defined when ctrl wheel is used for zoom only
    // in that case we set it to the previous angle value

    a = a !== void 0 ? a : da[1];
    var delta_d = d - da[0];
    var delta_a = a - da[1];
    /**
     * The angle value might jump from 179deg to -179deg when we actually want to
     * read 181deg to ensure continuity. To make that happen, we detect when the jump
     * is supsiciously high (ie > 270deg) and increase the `turns` value
     */

    var newTurns = Math.abs(delta_a) > 270 ? turns + Math.sign(delta_a) : turns; // we update the angle difference to its corrected value

    delta_a -= 360 * (newTurns - turns);
    var delta = [delta_d, delta_a];
    var movement_d = d - initial[0];
    var movement_a = a - 360 * newTurns - initial[1];
    var movement = [movement_d, movement_a];
    var delta_t = event.timeStamp - time;
    var vdva = calculateVelocities(delta, delta_t);
    var direction = calculateDirection(delta);
    return {
      event: event,
      da: [d, a],
      movement: movement,
      delta: delta,
      offset: addV(offset, delta),
      vdva: vdva,
      direction: direction,
      turns: newTurns,
      previous: da,
      time: event.timeStamp
    };
  };

  _proto.getStartState = function getStartState(da, event) {
    var initial = initialState[this.stateKey];
    return _extends$1({}, initial, {
      event: event,
      da: da,
      initial: da,
      previous: da,
      offset: this.state.offset,
      origin: this.state.origin,
      first: true,
      active: true,
      time: event.timeStamp,
      args: this.args
    });
  };

  return DistanceAngleRecognizer;
}(Recognizer);

var PinchRecognizer =
/*#__PURE__*/
function (_DistanceAngleRecogni) {
  _inheritsLoose(PinchRecognizer, _DistanceAngleRecogni);

  function PinchRecognizer(controller, args) {
    var _this;

    _this = _DistanceAngleRecogni.call(this, 'pinch', controller, args) || this;
    _this.sharedStartState = {
      pinching: true
    };
    _this.sharedEndState = {
      pinching: false,
      down: false,
      touches: 0
    };

    _this.onPinchStart = function (event) {
      if (!_this.enabled || event.touches.length !== 2) return;

      _this.onStart(event, {
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      });
    };

    _this.onPinchChange = function (event) {
      var _this$state = _this.state,
          canceled = _this$state.canceled,
          active = _this$state.active,
          time = _this$state.time;
      if (canceled || !active || event.touches.length !== 2 || event.timeStamp === time) return;

      _this.onChange(event, {
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      });
    };

    return _this;
  }

  var _proto = PinchRecognizer.prototype;

  _proto.getPayloadFromEvent = function getPayloadFromEvent(event) {
    var _getTwoTouchesEventDa = getTwoTouchesEventData(event),
        da = _getTwoTouchesEventDa.da,
        origin = _getTwoTouchesEventDa.origin,
        sharedPayload = _objectWithoutPropertiesLoose$1(_getTwoTouchesEventDa, ["da", "origin"]);

    return {
      values: da,
      gesturePayload: {
        origin: origin
      },
      sharedPayload: sharedPayload
    };
  };

  _proto.getEventBindings = function getEventBindings() {
    return [['onTouchStart', this.onPinchStart], ['onTouchMove', this.onPinchChange], [['onTouchEnd', 'onTouchCancel'], this.onEnd]];
  };

  return PinchRecognizer;
}(DistanceAngleRecognizer);

var PinchWheelRecognizer =
/*#__PURE__*/
function (_DistanceAngleRecogni) {
  _inheritsLoose(PinchWheelRecognizer, _DistanceAngleRecogni);

  function PinchWheelRecognizer(controller, args) {
    var _this;

    _this = _DistanceAngleRecogni.call(this, 'pinch', controller, args) || this;
    _this.sharedStartState = {
      pinching: true
    };
    _this.sharedEndState = {
      pinching: false
    };

    _this.onWheel = function (event) {
      if (!event.ctrlKey) return;
      if (!_this.controller.config.passiveEvents) event.preventDefault();else if (process.env.NODE_ENV === 'development') console.warn('To support zoom on trackpads, try using the `domTarget` option and `config.event.passive` set to `false`. This message will only appear in development mode.');

      _this.timeoutHandler(event);
    };

    return _this;
  }

  var _proto = PinchWheelRecognizer.prototype;

  _proto.getPayloadFromEvent = function getPayloadFromEvent(event) {
    var _getWheelEventData = getWheelEventData(event),
        _getWheelEventData$xy = _getWheelEventData.xy,
        delta_d = _getWheelEventData$xy[1],
        sharedPayload = _objectWithoutPropertiesLoose$1(_getWheelEventData, ["xy"]);

    var _this$state$da = this.state.da,
        prev_d = _this$state$da[0],
        prev_a = _this$state$da[1];
    var d = prev_d - delta_d;
    var a = prev_a !== void 0 ? prev_a : 0;
    var origin = [event.clientX, event.clientY];
    return {
      values: [d, a],
      gesturePayload: {
        origin: origin
      },
      sharedPayload: sharedPayload
    };
  };

  _proto.getEventBindings = function getEventBindings() {
    return [['onWheel', this.onWheel]];
  };

  return PinchWheelRecognizer;
}(DistanceAngleRecognizer);

var SCALE_FACTOR = 260;

var PinchWebKitGestureRecognizer =
/*#__PURE__*/
function (_DistanceAngleRecogni) {
  _inheritsLoose(PinchWebKitGestureRecognizer, _DistanceAngleRecogni);

  function PinchWebKitGestureRecognizer(controller, args) {
    var _this;

    _this = _DistanceAngleRecogni.call(this, 'pinch', controller, args) || this;
    _this.sharedStartState = {
      pinching: true,
      down: true,
      touches: 2
    };
    _this.sharedEndState = {
      pinching: false,
      down: false,
      touches: 0
    };

    _this.onPinchStart = function (event) {
      if (!_this.enabled) return;
      event.preventDefault();
      var origin = _this.origin ? _this.origin : [event.clientX, event.clientY];

      _this.onStart(event, {
        origin: origin,
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      });
    };

    _this.onPinchChange = function (event) {
      var _this$state = _this.state,
          canceled = _this$state.canceled,
          active = _this$state.active;
      if (canceled || !active) return;
      event.preventDefault();

      _this.onChange(event, {
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      });
    };

    _this.onGestureEnd = function (event) {
      _this.onEnd(event);

      event.preventDefault();
      _this.origin = undefined;
    };

    _this.updateTouchData = function (event) {
      if (!_this.enabled || event.touches.length !== 2) return;

      var _getTwoTouchesEventDa = getTwoTouchesEventData(event),
          origin = _getTwoTouchesEventDa.origin;

      _this.origin = origin;
    };

    return _this;
  }

  var _proto = PinchWebKitGestureRecognizer.prototype;

  _proto.getPayloadFromEvent = function getPayloadFromEvent(event) {
    return {
      values: [event.scale * SCALE_FACTOR, event.rotation]
    };
  };

  _proto.getEventBindings = function getEventBindings() {
    return [['onGestureStart', this.onPinchStart], ['onGestureChange', this.onPinchChange], [['onGestureEnd', 'onTouchCancel'], this.onGestureEnd], [['onTouchStart', 'onTouchMove'], this.updateTouchData]];
  };

  return PinchWebKitGestureRecognizer;
}(DistanceAngleRecognizer);

/**
 * Gesture controller will create gesture recognizers (which handle the gesture logic)
 * and keep track of the state for all gestures
 *
 * @template BinderType the type the bind function should return
 */

var GestureController = function GestureController(handlers, config) {
  var _this = this;

  this.handlers = handlers;
  this.config = config;
  this.state = initialState; // state for all gestures

  this.timeouts = {}; // keeping track of timeouts for debounced gestures (such as move, scroll, wheel)

  this.bindings = {}; // an object holding the handlers associated to the gestures

  this.domListeners = []; // when config.domTarget is set, we attach events directly to the dom

  this.windowListeners = {}; // keeps track of window listeners added by gestures (drag only at the moment)

  /**
   * Function run on component unmount
   * Cleans timeouts and removes dom listeners set by the bind function
   */

  this.clean = function () {
    _this.cleanOnBind();

    Object.values(_this.timeouts).forEach(clearTimeout);
    Object.keys(_this.windowListeners).forEach(function (stateKey) {
      return _this.removeWindowListeners(stateKey);
    });
  };
  /**
   * Function run every time the bind function is run (ie on every render)
   * Reset the binding object and remove dom listeners attached to config.domTarget
   */


  this.cleanOnBind = function () {
    _this.bindings = {};
    var domTarget = _this.config.domTarget;

    if (domTarget) {
      removeListeners(domTarget, _this.domListeners, _this.config.event);
      _this.domListeners = [];
    }
  };
  /**
   * Commodity function to let gesture recognizer update global state
   * @param sharedState shared partial state object
   * @param gestureState partial gesture specific state object
   * @param stateKey the state key ('drag', 'move'...)
   */


  this.updateState = function (sharedState, gestureState, stateKey) {
    var _extends2;

    _this.state = _extends$1({}, _this.state, (_extends2 = {
      shared: _extends$1({}, _this.state.shared, {}, sharedState)
    }, _extends2[stateKey] = _extends$1({}, _this.state[stateKey], {}, gestureState), _extends2));
  }; // fire the gesture handler defined by the user


  this.fireGestureHandler = function (gestureKey, gestureFlag) {
    // gets the state key and handler key from the gesture key
    // gestureKey: 'hover' -> stateKey: 'move', handlerKey: 'onHover'
    var _mappedKeys$gestureKe = mappedKeys[gestureKey],
        stateKey = _mappedKeys$gestureKe.stateKey,
        handlerKey = _mappedKeys$gestureKe.handlerKey;

    var state = _extends$1({}, _this.state.shared, {}, _this.state[stateKey]);

    if (state.event) state.event.gesture = gestureKey;

    if (gestureFlag === GestureFlag.OnStart) {
      var handlerStart = handlerKey + "Start";
      var _handler = _this.handlers[handlerStart];
      _handler && _handler(state);
    } // whenever a flag is set, we run the default on[Gesture] function
    // i.e. GestureFlag.OnStart would trigger both onDragStart and onDrag


    var handler = _this.handlers[handlerKey];

    if (handler) {
      var newMemo = handler(state);
      _this.state[stateKey].memo = newMemo !== void 0 ? newMemo : _this.state[stateKey].memo;
    }

    if (gestureFlag === GestureFlag.OnEnd) {
      var handlerEnd = handlerKey + "End";
      var _handler2 = _this.handlers[handlerEnd];
      _handler2 && _handler2(state);
    }
  };
  /**
   * Commodity function to let recognizers simply add listeners to config.window
   * @param stateKey
   * @param listeners
   */


  this.addWindowListeners = function (stateKey, listeners) {
    if (!_this.config.window) return; // we use this.windowListeners to keep track of the listeners we add

    _this.windowListeners[stateKey] = listeners;
    addListeners(_this.config.window, listeners, _this.config.event);
  }; // commodity function to let recognizers simply remove listeners from config.window


  this.removeWindowListeners = function (stateKey) {
    if (!_this.config.window) return;
    var listeners = _this.windowListeners[stateKey];

    if (listeners) {
      removeListeners(_this.config.window, listeners, _this.config.event);
      delete _this.windowListeners[stateKey];
    }
  };
  /**
   * Adds a recognizer to this.bindings
   * @param recognizer
   */


  this.addRecognizer = function (recognizer) {
    recognizer.getEventBindings().map(_this.addEventBindings);
  };
  /**
   * this.bindings is an object which keys match ReactEventHandlerKeys (onMouseMove, onTouchStart...).
   * Since a recognizer might want to bind a handler function to an event key already used by a previously
   * added recognizer, we need to make sure that each event key is an array of all the functions mapped for
   * that key.
   */


  this.addEventBindings = function (_ref) {
    var eventNames = _ref[0],
        fn = _ref[1];
    var eventNamesArray = !Array.isArray(eventNames) ? [eventNames] : eventNames;
    eventNamesArray.forEach(function (eventName) {
      _this.bindings[eventName] = _this.bindings[eventName] ? [].concat(_this.bindings[eventName], [fn]) : [fn];
    });
  };
  /**
   * When config.domTarget is set, this function will add dom listeners to it
   */


  this.addDomTargetListeners = function () {
    var domTarget = _this.config.domTarget; // we iterate on the entries of this.binding
    // for each event, we chain the array of functions mapped to it
    // and push it to this.domListeners

    Object.entries(_this.bindings).forEach(function (_ref2) {
      var event = _ref2[0],
          fns = _ref2[1];

      _this.domListeners.push([event.substr(2).toLowerCase(), chainFns.apply(void 0, fns)]);
    });
    addListeners(domTarget, _this.domListeners, _this.config.event);
  };
  /**
   * getBindings will return an object that will be bound by users
   * to the react component they want to interact with
   */


  this.getBindings = function () {
    var output = {};
    var captureString = _this.config.event.capture ? 'Capture' : '';
    Object.entries(_this.bindings).forEach(function (_ref3) {
      var event = _ref3[0],
          fns = _ref3[1];
      var fnsArray = Array.isArray(fns) ? fns : [fns];
      var key = event + captureString;
      output[key] = chainFns.apply(void 0, fnsArray);
    });
    return output;
  };

  this.bind = function () {
    var domTarget = _this.config.domTarget;

    var genuineHandlers = _extends$1({}, _this.handlers); // cleaning before adding


    _this.cleanOnBind();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (_this.actions.has('onDrag')) {
      _this.addRecognizer(new DragRecognizer(_this, args));

      delete genuineHandlers.onDrag;
      delete genuineHandlers.onDragStart;
      delete genuineHandlers.onDragEnd;
    }

    if (_this.actions.has('onScroll')) {
      _this.addRecognizer(new ScrollRecognizer(_this, args));

      delete genuineHandlers.onScroll;
      delete genuineHandlers.onScrollStart;
      delete genuineHandlers.onScrollEnd;
    }

    if (_this.actions.has('onWheel')) {
      _this.addRecognizer(new WheelRecognizer(_this, args));

      delete genuineHandlers.onWheel;
      delete genuineHandlers.onWheelStart;
      delete genuineHandlers.onWheelEnd;
    }

    if (_this.actions.has('onMove')) {
      _this.addRecognizer(new MoveRecognizer(_this, args));

      delete genuineHandlers.onMove;
      delete genuineHandlers.onMoveStart;
      delete genuineHandlers.onMoveEnd;
    }

    if (_this.actions.has('onHover')) {
      _this.addRecognizer(new HoverRecognizer(_this, args));

      delete genuineHandlers.onHover;
    }

    if (_this.actions.has('onPinch')) {
      // since react doesn't have handlers for gesture events we can only use them
      // domTarget is set (and when the browser supprots them).
      if (domTarget && gestureEventSupported()) {
        _this.addRecognizer(new PinchWebKitGestureRecognizer(_this, args));
      } else {
        _this.addRecognizer(new PinchRecognizer(_this, args));

        _this.addRecognizer(new PinchWheelRecognizer(_this, args));
      }

      delete genuineHandlers.onPinch;
      delete genuineHandlers.onPinchStart;
      delete genuineHandlers.onPinchEnd;
    } // we also add event bindings for genuine handlers


    Object.entries(genuineHandlers).map(function (_ref4) {
      var event = _ref4[0],
          fn = _ref4[1];

      // we're cheating when it comes to event type :(
      _this.addEventBindings([event, fn]);
    }); // if config.domTarget is set we add event listeners to it and return the clean function

    if (domTarget) {
      _this.addDomTargetListeners();

      return _this.clean;
    } // if not, we return an object that contains gesture handlers mapped to react handler event keys


    return _this.getBindings();
  }; // if handlers contains {onDragStart, onDrag, onDragEnd, onMoveStart, onMove}
  // actions will include 'onDrag' and 'onMove'


  this.actions = new Set(Object.keys(this.handlers).map(function (k) {
    return k.replace(/End|Start/, '');
  }));
};

function useGesture(handlers, config) {
  // the gesture controller will keep track of all gesture states
  var gestureController = React.useRef();

  if (!gestureController.current) {
    // we initialize the gesture controller once
    gestureController.current = new GestureController(handlers, getDerivedConfig(config));
  }

  React.useEffect(function () {
    // every time handlers or config change, we let the gesture controller compute
    // them so that the gesture handlers functions are aware of the changes
    gestureController.current.config = getDerivedConfig(config);
    gestureController.current.handlers = handlers;
  }, [handlers, config]); // when the user component unmounts, we run our gesture controller clean function

  React.useEffect(function () {
    return gestureController.current.clean;
  }, []); // we return the bind function of our controller, which returns an binding object or
  // a cleaning function depending on whether config.domTarget is set

  return gestureController.current.bind;
}
/* SHORTHAND HANDLERS */

var useDrag = function useDrag(handler, config) {
  return useGesture({
    onDrag: handler
  }, config);
};

function getDerivedConfig(config) {
  var derivedConfig = _extends$1({}, defaultConfig, {}, config);

  var domTarget = derivedConfig.domTarget;
  var realDomTarget = domTarget && 'current' in domTarget ? domTarget.current : domTarget;
  derivedConfig.domTarget = realDomTarget;
  var passive = derivedConfig.event.passive !== void 0 ? derivedConfig.event.passive : true; // TODO make test to check if passive is correctly passed to config
  // if there isn't a domtarget or if event.passive is true, then passiveEvents is true

  derivedConfig.passiveEvents = !derivedConfig.domTarget || passive;
  return derivedConfig;
}

var useDragGesture = (function (set) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      _useStateContext2$ = _useStateContext2[0],
      dragging = _useStateContext2$.dragging,
      dragDistance = _useStateContext2$.dragDistance,
      width = _useStateContext2$.width,
      currentIndex = _useStateContext2$.currentIndex,
      dispatch = _useStateContext2[1];

  var bind = useDrag(function (_ref) {
    var down = _ref.down,
        _ref$movement = _slicedToArray(_ref.movement, 1),
        xDelta = _ref$movement[0],
        _ref$direction = _slicedToArray(_ref.direction, 1),
        xDir = _ref$direction[0],
        distance = _ref.distance,
        cancel = _ref.cancel,
        canceled = _ref.canceled;

    if (canceled) return;

    if (down && distance > dragDistance) {
      dispatch({
        type: xDir > 0 ? 'PREV' : 'NEXT',
        pause: true
      });
      cancel();
    }

    set(function (i) {
      if (i < currentIndex - 1 || i > currentIndex + 1) return {
        display: 'none'
      }; // const sc = down ? 1 - distance / window.innerWidth / 2 : 1

      var x = (i - currentIndex) * width + (down ? xDelta : 0);
      return {
        x: x,
        immediate: false,
        display: 'block',
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

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = useRef(); // Store current value in ref

  useEffect(function () {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}

var useFocus = function useFocus(ref) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  useEffect(function () {
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
    return function () {
      ref.current.removeEventListener('focus', onFocus);
      ref.current.removeEventListener('blur', onBlur);
    };
  }, []);
};

var useZIndex = function useZIndex(index) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 1),
      viewCount = _useStateContext2[0].viewCount;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      zIndex = _useState2[0],
      setZIndex = _useState2[1];

  useEffect(function () {
    var z = 1000 - index;
    setZIndex(z);
  }, [viewCount]);
  return zIndex;
};

var SledSpring = function SledSpring(_ref) {
  var _ref$values = _ref.values,
      x = _ref$values.x,
      cursor = _ref$values.cursor,
      index = _ref.index,
      bind = _ref.bind,
      children = _ref.children;
  var springRef = useRef();
  useFocus(springRef);
  var zIndex = useZIndex(index);
  return React.createElement(animated.div, _extends({}, bind ? bind() : {}, {
    className: "sled-view",
    ref: springRef,
    style: {
      position: 'absolute',
      zIndex: zIndex,
      top: 0,
      // transform: interpolate([x, sc], (x, sc) => `translate3d(${x}px,0,0) scale3d(${sc}, ${sc}, 1)`),
      transform: x.interpolate(function (x) {
        return "translate3d(".concat(x, "px,0,0)");
      }),
      width: '100%',
      height: '100%',
      willChange: 'transform',
      overflow: 'hidden',
      cursor: cursor
    }
  }), children);
};

var SledSprings = function SledSprings(_ref) {
  var onAnimationStart = _ref.onAnimationStart,
      onAnimationEnd = _ref.onAnimationEnd,
      onSledEnd = _ref.onSledEnd,
      children = _ref.children;

  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      _useStateContext2$ = _useStateContext2[0],
      currentIndex = _useStateContext2$.currentIndex,
      prevIndex = _useStateContext2$.prevIndex,
      viewCount = _useStateContext2$.viewCount,
      width = _useStateContext2$.width,
      height = _useStateContext2$.height,
      dragging = _useStateContext2$.dragging,
      config = _useStateContext2$.config,
      dispatch = _useStateContext2[1];

  var _useSprings = useSprings(children.length, function (i) {
    return {
      x: (i - currentIndex) * width,
      sc: 1,
      config: config,
      cursor: 'auto'
    };
  }),
      _useSprings2 = _slicedToArray(_useSprings, 2),
      props = _useSprings2[0],
      set = _useSprings2[1];

  var prevWidth = usePrevious(width);
  var prevHeight = usePrevious(height);
  useEffect(function () {
    set(function () {
      return {
        cursor: dragging ? 'grab' : 'auto'
      };
    });
  }, [dragging, set]);
  useEffect(function () {
    set(function (i) {
      return {
        x: (i - currentIndex) * width,
        immediate: prevIndex === undefined,
        onStart: function onStart() {
          if (prevWidth !== width || prevHeight !== height) return; // prevent callbacks, if just the sled is resized

          if (i === currentIndex) {
            dispatch({
              type: 'SET_PAUSE',
              pause: true
            });

            if (!this.immediate) {
              if (typeof onAnimationStart === 'function') onAnimationStart();
            }
          }
        },
        onRest: function onRest() {
          if (prevWidth !== width || prevHeight !== height) return; // prevent callbacks, if just the sled is resized

          if (i === currentIndex) {
            dispatch({
              type: 'SET_PAUSE',
              pause: false
            }); // dispatch({ type: 'SET_RESTED_INDEX' })

            if (!this.immediate) {
              if (typeof onAnimationEnd === 'function') onAnimationEnd();
            }

            if (currentIndex === viewCount - 1) {
              if (typeof onSledEnd === 'function') onSledEnd();
            }
          }
        }
      };
    });
  }, [currentIndex, dispatch, height, onAnimationEnd, onAnimationStart, onSledEnd, prevHeight, prevIndex, prevWidth, set, viewCount, width]);
  useEffect(function () {
    set(function () {
      return {
        config: config
      };
    });
  }, [config, set]);
  var bind = useDragGesture(set);
  return props.map(function (prop, index) {
    return React.createElement(SledSpring, {
      key: index,
      values: prop,
      bind: bind,
      index: index
    }, children[index]);
  });
};

function getResponsive(padding) {
  return "\n  :after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 0;\n    padding-top: ".concat(padding, "%;\n  }\n");
}

function getHeight(customHeight) {
  if (typeof customHeight === 'string') {
    var isValidCSS = /^\d+(\.\d+)?(px|r?em|%|vw|vh|vmin|vmax)$/;

    if (isValidCSS.test(customHeight)) {
      return "height: ".concat(customHeight, ";");
    }

    var isOW = /^\d+(\.\d+)?ow$/;

    if (isOW.test(customHeight)) {
      return getResponsive(+customHeight.replace('ow', ''));
    }
  }

  return getResponsive(50);
}

var useCSSHeight = (function (customHeight) {
  var _useState = useState(getHeight(customHeight)),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  useEffect(function () {
    var cssHeight = getHeight(customHeight);
    setHeight(cssHeight);
  }, [customHeight]);
  return height;
});

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
var debounce = (function (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
});

function set(ref, dispatch) {
  var _ref$current = ref.current,
      offsetWidth = _ref$current.offsetWidth,
      offsetHeight = _ref$current.offsetHeight;
  dispatch({
    type: 'SET_DIMENSIONS',
    width: offsetWidth,
    height: offsetHeight
  });
}

var useDimensions = (function (ref, width, height, cssHeight) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  useEffect(function () {
    set(ref, dispatch);
  }, [width, height, cssHeight]);
  useEffect(function () {
    function onResize() {
      set(ref, dispatch);
    }

    var dOnResize = debounce(onResize, 150);
    window.addEventListener('resize', dOnResize);
    return function () {
      return window.removeEventListener('resize', dOnResize);
    };
  }, []);
});

var useKeyboard = function useKeyboard(keyboard) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      hasFocus = _useStateContext2[0].hasFocus,
      dispatch = _useStateContext2[1];

  var hasFocusRef = useRef();
  useEffect(function () {
    hasFocusRef.current = hasFocus;
  }, [hasFocus]);
  useEffect(function () {
    function onKeyup(event) {
      if (!hasFocusRef.current) return;

      switch (event.keyCode) {
        case 37:
          dispatch({
            type: 'PREV',
            pause: true
          });
          break;

        case 39:
          dispatch({
            type: 'NEXT',
            pause: true
          });
          break;
      }
    }

    if (keyboard) {
      document.addEventListener('keyup', onKeyup);
      return function () {
        return document.removeEventListener('keyup', onKeyup);
      };
    }
  }, [keyboard]);
};

function getDistanceRef(distance, width) {
  switch (_typeof(distance)) {
    case 'number':
      return distance;

    case 'string':
      if (distance.indexOf('ow') >= 0) {
        return width / 100 * +distance.replace('ow', '');
      }

      return 40;

    default:
      return 40;
  }
}

var useDragging = (function (dragging, dragDistance) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      width = _useStateContext2[0].width,
      dispatch = _useStateContext2[1];

  useEffect(function () {
    var distance = getDistanceRef(dragDistance, width);
    dispatch({
      type: 'SET_DRAG_DISTANCE',
      dragDistance: distance
    });
  }, [dispatch, dragDistance, width]);
  useEffect(function () {
    dispatch({
      type: 'SET_DRAGGING',
      dragging: dragging
    });
  }, [dispatch, dragging]);
});

var useMouseOver = (function (pauseOnMouseOver, ref) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      autoPlayInterval = _useStateContext2[0].autoPlayInterval,
      dispatch = _useStateContext2[1];

  useEffect(function () {
    dispatch({
      type: 'SET_PAUSE',
      pause: false
    });

    function onMouseEnter() {
      dispatch({
        type: 'SET_MOUSEOVER',
        mouseOver: true
      });
      dispatch({
        type: 'SET_PAUSE',
        pause: true
      });
    }

    function onMouseLeave() {
      dispatch({
        type: 'SET_MOUSEOVER',
        mouseOver: false
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
      return function () {
        dispatch({
          type: 'SET_MOUSEOVER',
          mouseover: false
        });
        ref.current.removeEventListener('mouseenter', onMouseEnter);
        ref.current.removeEventListener('mouseover', onMouseEnter);
        ref.current.removeEventListener('mouseout', onMouseLeave);
      };
    }
  }, [pauseOnMouseOver, autoPlayInterval]);
});

var useGoto = function useGoto(_goto) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  useEffect(function () {
    if (!_goto) return;
    var index = parseInt(_goto, 10);

    if (!isNaN(index)) {
      dispatch({
        type: 'GOTO',
        index: index
      });
    }
  }, [_goto]);
};

function useViewCount (children) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  useEffect(function () {
    dispatch({
      type: 'SET_VIEWCOUNT',
      count: React.Children.toArray(children).length
    });
  }, [children.length]);
}

var useInterval = function useInterval(callback, interval) {
  var savedCallback = useRef();
  useEffect(function () {
    savedCallback.current = callback;
  });
  useEffect(function () {
    function tick() {
      savedCallback.current();
    }

    if (typeof interval === 'number') {
      var id = setInterval(tick, interval);
      return function () {
        return clearInterval(id);
      };
    }
  }, [interval]);
};

var useAutoPlay = (function (autoPlay) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      _useStateContext2$ = _useStateContext2[0],
      pause = _useStateContext2$.pause,
      autoPlayInterval = _useStateContext2$.autoPlayInterval,
      dispatch = _useStateContext2[1];

  useEffect(function () {
    var newInterval = parseInt(autoPlay, 10);

    if (!isNaN(newInterval)) {
      dispatch({
        type: 'SET_AUTOPLAY',
        autoPlayInterval: newInterval
      });
    } else {
      dispatch({
        type: 'SET_AUTOPLAY',
        autoPlayInterval: undefined
      });
    }
  }, [autoPlay]);
  useInterval(function () {
    dispatch({
      type: 'NEXT'
    });
  }, !pause && autoPlayInterval);
});

var useConfig = (function (config) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  useEffect(function () {
    dispatch({
      type: 'SET_CONFIG',
      config: config
    });
  }, [config, dispatch]);
});

var useRewind = (function (rewind) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  useEffect(function () {
    dispatch({
      type: 'SET_REWIND',
      rewind: rewind
    });
  }, [rewind]);
});

var usePause = (function (pause) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  useEffect(function () {
    dispatch({
      type: 'SET_PAUSE',
      pause: pause
    });
  }, [pause]);
});

var useStopOnInteraction = function useStopOnInteraction(stopOnInteraction) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  useEffect(function () {
    dispatch({
      type: 'SET_STOPONINTERACTION',
      stopOnInteraction: stopOnInteraction
    });
  }, [stopOnInteraction]);
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n  width: ", ";\n  ", "\n  ", "\n  user-select: none;\n\n  :focus,\n  .sled-view:focus {\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDiv = styled.div(_templateObject(), function (props) {
  return props.cssWidth || '100%';
}, function (props) {
  return props.cssHeight;
}, function (props) {
  return props.styles;
});

var SledViews = function SledViews(_ref) {
  var width = _ref.width,
      height = _ref.height,
      dragging = _ref.dragging,
      dragDistance = _ref.dragDistance,
      keyboard = _ref.keyboard,
      _goto = _ref["goto"],
      children = _ref.children,
      style = _ref.style,
      autoPlay = _ref.autoPlay,
      pause = _ref.pause,
      pauseOnMouseOver = _ref.pauseOnMouseOver,
      stopOnInteraction = _ref.stopOnInteraction,
      config = _ref.config,
      rewind = _ref.rewind,
      onSledEnd = _ref.onSledEnd,
      onAnimationStart = _ref.onAnimationStart,
      onAnimationEnd = _ref.onAnimationEnd;
  var viewsRef = useRef();
  var cssHeight = useCSSHeight(height);
  useDimensions(viewsRef, width, height, cssHeight);
  useFocus(viewsRef);
  useViewCount(children);
  useRewind(rewind);
  usePause(pause);
  useStopOnInteraction(stopOnInteraction);
  useMouseOver(pauseOnMouseOver, viewsRef);
  useGoto(_goto);
  useKeyboard(keyboard);
  useDragging(dragging, dragDistance);
  useAutoPlay(autoPlay);
  useConfig(config);
  return React.createElement(StyledDiv, {
    className: "sled",
    ref: viewsRef,
    styles: style,
    cssWidth: width,
    cssHeight: cssHeight,
    tabIndex: 0
  }, React.createElement(SledSprings, {
    onAnimationStart: onAnimationStart,
    onAnimationEnd: onAnimationEnd,
    onSledEnd: onSledEnd
  }, children));
};

SledViews.propTypes = {
  children: propTypes.node,
  style: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
  "goto": propTypes.oneOfType([propTypes.number, propTypes.string]),
  keyboard: propTypes.bool,
  dragging: propTypes.bool,
  dragDistance: propTypes.oneOfType([propTypes.number, propTypes.string]),
  autoPlay: propTypes.oneOfType([propTypes.number, propTypes.string]),
  pauseOnMouseOver: propTypes.bool,
  rewind: propTypes.bool,
  config: propTypes.object,
  stopOnInteraction: propTypes.bool,
  pause: propTypes.bool,
  onSledEnd: propTypes.func,
  onAnimationStart: propTypes.func,
  onAnimationEnd: propTypes.func
};
SledViews.defaultProps = {
  children: null,
  style: '',
  width: '100%',
  height: '50ow',
  "goto": undefined,
  keyboard: true,
  dragging: true,
  dragDistance: '25ow',
  autoPlay: undefined,
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

var useArrow = function useArrow(_goto) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 1),
      _useStateContext2$ = _useStateContext2[0],
      rewind = _useStateContext2$.rewind,
      currentIndex = _useStateContext2$.currentIndex,
      viewCount = _useStateContext2$.viewCount;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      disabled = _useState2[0],
      setDisabled = _useState2[1];

  useEffect(function () {
    if (rewind) {
      setDisabled(false);
      return;
    }

    if (_goto === 'next' && currentIndex === viewCount - 1) {
      setDisabled(true);
    } else if (_goto === 'prev' && currentIndex === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [currentIndex, rewind]);
  return disabled;
};

var useDot = function useDot(_goto2) {
  var _useStateContext3 = useStateContext(),
      _useStateContext4 = _slicedToArray(_useStateContext3, 1),
      currentIndex = _useStateContext4[0].currentIndex;

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      disabled = _useState4[0],
      setDisabled = _useState4[1];

  useEffect(function () {
    if (_goto2 === currentIndex) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [currentIndex]);
  return disabled;
};

var useDisabled = (function (_goto3) {
  var arrow = useArrow(_goto3);
  var dot = useDot(_goto3);

  switch (_typeof(_goto3)) {
    case 'number':
      return dot;

    case 'string':
    default:
      return arrow;
  }
});

var dot = "\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  box-shadow: none;\n  border: none;\n  transition: opacity 0.5s, transform 0.5s;\n  opacity: 0.4;\n\n  :focus {\n    box-shadow: none;\n    outline: none;\n  }\n\n  :before {\n    content: '';\n    display: block;\n    flex-shrink: 0;\n    width: 10px;\n    height: 10px;\n    background: grey;\n    border-radius: 50%;\n  }\n\n  :hover, \n  :focus {\n    transform: scale(1.2);\n  }\n\n  :hover, \n  :focus, \n  :active {\n    opacity: 0.6;\n  }\n\n  :disabled {\n    opacity: 1;\n  }\n";

var arrow = "\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  box-shadow: none;\n  border: none;\n  transition: opacity 0.5s, transform 0.5s;\n  opacity: 0.5;\n\n  :focus {\n    box-shadow: none;\n    outline: none;\n  }\n\n  :before {\n    content: '';\n    display: block;\n    flex-shrink: 0;\n    width: 15px;\n    height: 15px;\n    border-top: 3px solid black;\n  }\n\n  :focus {\n    opacity: 1;\n  }\n\n  :hover, \n  :active {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n\n\n  :disabled {\n    opacity: 0.4;\n  }\n";

var arrowLeft = "\n  ".concat(arrow, "\n  transform-origin: right center;\n\n  :before {\n    border-left: 3px solid black;\n    transform: rotate(-45deg);\n  }\n");

var arrowRight = "\n  ".concat(arrow, "\n  transform-origin: left center;\n\n  :before {\n    border-right: 3px solid black;\n    transform: rotate(45deg);\n  }\n");

var presets = {
  dot: dot,
  arrowLeft: arrowLeft,
  arrowRight: arrowRight
};

var usePreset = (function (preset) {
  var _useState = useState(presets[preset] || ''),
      _useState2 = _slicedToArray(_useState, 2),
      styles = _useState2[0],
      setStyles = _useState2[1];

  useEffect(function () {
    if (!preset) return;

    if (!presets[preset]) {
      console.log("react-sled: Control preset \"".concat(presets[preset], "\" does not exist."));
    } else {
      setStyles(presets[preset]);
    }
  }, [preset]);
  return styles;
});

var useDefaultPreset = (function (_goto) {
  switch (_typeof(_goto)) {
    case 'number':
      return presets['dot'];

    case 'string':
    default:
      return _goto === 'next' ? presets['arrowRight'] : presets['arrowLeft'];
  }
});

var useClassName = (function (_goto, disabled) {
  switch (_typeof(_goto)) {
    case 'number':
      return "sled-control sled-control-dot";

    case 'string':
    default:
      return "sled-control sled-control-arrow sled-control-arrow-".concat(_goto);
  }
});

var useLabel = (function (_goto) {
  switch (_typeof(_goto)) {
    case 'number':
      return "Slide to view with index ".concat(_goto, ".");

    case 'string':
    default:
      return "Slide to ".concat(_goto === 'next' ? 'next' : 'previous', " view.");
  }
});

var useClick = (function (_goto) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      stopOnInteraction = _useStateContext2[0].stopOnInteraction,
      dispatch = _useStateContext2[1];

  function onClick() {
    if (stopOnInteraction) {
      dispatch({
        type: 'SET_AUTOPLAY',
        autoPlayInterval: undefined
      });
    }

    if (typeof _goto === 'number') {
      dispatch({
        type: 'GOTO',
        index: _goto
      });
    } else {
      dispatch({
        type: _goto === 'next' ? 'NEXT' : 'PREV'
      });
    }
  }

  return onClick;
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled.button(_templateObject$1(), function (props) {
  return props.disabled && 'pointer-events: none;';
}, function (props) {
  return props.styles;
});

var SledControl = function SledControl(_ref) {
  var children = _ref.children,
      _goto = _ref["goto"],
      style = _ref.style,
      preset = _ref.preset;
  var controlRef = useRef();
  useFocus(controlRef);
  var presetStyles = usePreset(preset);
  var defaultPreset = useDefaultPreset(_goto);
  var disabled = useDisabled(_goto);
  var className = useClassName(_goto);
  var label = useLabel(_goto);
  var onClick = useClick(_goto);
  return React.createElement(StyledButton, {
    className: className,
    disabled: disabled,
    ref: controlRef,
    styles: presetStyles + style || defaultPreset,
    ariaLabel: label,
    tabIndex: 0,
    onClick: onClick
  }, children);
};

SledControl.propTypes = {
  "goto": propTypes.oneOfType([propTypes.string, propTypes.number]),
  style: propTypes.string,
  preset: propTypes.string
};
SledControl.defaultProps = {
  "goto": 'next',
  style: '',
  preset: ''
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  zIndex: 200;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  pointer-events: none;\n\n  // Mimic \"justify-content: space-evenly;\"\n  :before,\n  :after {\n    content: '';\n    display: block;\n    height: 100%;\n  }\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSeprarator = styled.div(_templateObject$2(), function (props) {
  return props.styles;
});

var SledProgressSeparators = function SledProgressSeparators(_ref) {
  var style = _ref.style;

  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 1),
      viewCount = _useStateContext2[0].viewCount;

  return React.createElement(StyledSeprarator, {
    className: "sled-progress-separators"
  }, _toConsumableArray(Array(viewCount ? viewCount - 1 : 1)).map(function (view, index) {
    return React.createElement("div", {
      key: index,
      className: "sled-progress-separator",
      style: {
        position: 'relative',
        height: '100%'
      }
    });
  }));
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  pointer-events: none;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRail = styled.div(_templateObject$3());

var SledProgressRail = function SledProgressRail(_ref) {
  var style = _ref.style;
  return React.createElement(StyledRail, {
    className: "sled-progress-rail"
  });
};

function getX(viewCount, currentIndex) {
  var goPrevNext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return 100 - 100 / viewCount * (currentIndex + goPrevNext);
}

var SledProgressTrack = function SledProgressTrack() {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 1),
      _useStateContext2$ = _useStateContext2[0],
      currentIndex = _useStateContext2$.currentIndex,
      prevIndex = _useStateContext2$.prevIndex,
      viewCount = _useStateContext2$.viewCount,
      autoPlayInterval = _useStateContext2$.autoPlayInterval,
      pause = _useStateContext2$.pause,
      mouseOver = _useStateContext2$.mouseOver,
      config = _useStateContext2$.config;

  var _useSpring = useSpring(function () {
    return {
      from: {
        x: 100
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      props = _useSpring2[0],
      set = _useSpring2[1];

  useEffect(function () {
    if (mouseOver) {
      set({
        config: config,
        x: getX(viewCount, currentIndex),
        reset: false
      });
    }
  }, [mouseOver]);
  useEffect(function () {
    if (!viewCount) return;
    var xCalc = getX(viewCount, currentIndex, !autoPlayInterval && 1);

    if (currentIndex === 0) {
      set({
        config: config,
        from: {
          x: 100
        },
        x: xCalc,
        reset: viewCount > 2 ? prevIndex !== 1 : true
      });
    } else {
      set({
        config: config,
        x: xCalc,
        reset: false
      });
    }
  }, [viewCount, currentIndex, autoPlayInterval]);
  useEffect(function () {
    if (!autoPlayInterval) return;
    set({
      config: autoPlayInterval && !pause ? {
        duration: autoPlayInterval
      } : config,
      x: getX(viewCount, currentIndex, !pause && 1),
      reset: false
    });
  }, [pause, autoPlayInterval]);
  return React.createElement(animated.div, {
    className: "sled-progress-track",
    style: {
      position: 'absolute',
      left: 0,
      width: '100%',
      pointerEvents: 'none',
      transform: props.x.interpolate(function (x) {
        return "translateX(-".concat(x, "%)");
      })
    }
  });
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledControls = styled.div(_templateObject$4(), function (props) {
  return props.styles;
});

var SledProgressControls = function SledProgressControls(_ref) {
  var style = _ref.style;

  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 1),
      viewCount = _useStateContext2[0].viewCount;

  return React.createElement(StyledControls, {
    className: "sled-progress-controls"
  }, _toConsumableArray(Array(viewCount || 1)).map(function (view, index) {
    return React.createElement(SledControl, {
      key: index,
      "goto": index,
      style: "\n            flex-grow: 1;\n            height: 100%;\n            cursor: pointer; \n            background: none;\n            border: none;\n            outline: none;\n          "
    });
  }));
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  height: 20px;\n\n  .sled-progress-rail {\n    background: black;\n    height: 4px;\n  }\n  .sled-progress-track {\n    background: red;\n    height: 4px;\n  }\n  .sled-progress-separator {\n    width: 4px;\n    background: white;\n  }\n  .sled-control {\n    :focus {\n      background: hsla(0, 0%, 100%, 0.5)\n    }\n  }\n  ", "\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSledProgress = styled.div(_templateObject$5(), function (props) {
  return props.styles;
});

var SledProgress = function SledProgress(_ref) {
  var style = _ref.style;
  return React.createElement(StyledSledProgress, {
    className: "sled-progress",
    styles: style,
    role: "progressBar"
  }, React.createElement(SledProgressRail, null), React.createElement(SledProgressTrack, null), React.createElement(SledProgressSeparators, null), React.createElement(SledProgressControls, null));
};

SledProgress.propTypes = {
  style: propTypes.string
};
SledProgress.defaultProps = {
  style: ''
};

var Sled = function Sled(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return React.createElement(StateProvider, {
    reducer: reducer,
    initialState: _objectSpread2({
      currentIndex: 0,
      prevIndex: undefined,
      pause: false,
      viewCount: 0,
      hasFocus: false,
      width: 0,
      height: 0
    }, rest)
  }, children);
};

Sled.propTypes = {
  children: propTypes.node
};
Sled.defaultProps = {
  children: null
};

export { SledControl as Control, SledProgress as Progress, Sled, SledViews as Views, useStateContext as useSledStore };
//# sourceMappingURL=index.es.js.map
