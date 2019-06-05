'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));
var reactSpring = require('react-spring');
var reactWithGesture = require('react-with-gesture');

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
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
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};
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
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
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
      return _objectSpread({}, state, {
        currentIndex: getNext(state.currentIndex, state.viewCount, state.rewind),
        prevIndex: state.currentIndex // pause: action.pause || state.pause

      });

    case 'PREV':
      return _objectSpread({}, state, {
        currentIndex: getPrev(state.currentIndex, state.viewCount, state.rewind),
        prevIndex: state.currentIndex // pause: action.pause || state.pause

      });

    case 'GOTO':
      return _objectSpread({}, state, {
        currentIndex: clamp(action.index, 0, state.viewCount - 1),
        prevIndex: state.currentIndex // pause: action.pause || state.pause

      });

    case 'SET_PAUSE':
      return _objectSpread({}, state, {
        pause: action.pause
      });

    case 'SET_RESTED_INDEX':
      return _objectSpread({}, state, {
        restedIndex: state.currentIndex
      });

    case 'SET_MOUSEOVER':
      return _objectSpread({}, state, {
        mouseOver: action.mouseOver
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
        width: action.width,
        height: action.height
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

    default:
      return state;
  }
});

// https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
var StateContext = React.createContext();
var StateProvider = function StateProvider(_ref) {
  var reducer = _ref.reducer,
      initialState = _ref.initialState,
      children = _ref.children;
  return React__default.createElement(StateContext.Provider, {
    value: React.useReducer(reducer, initialState)
  }, children);
};
var useStateContext = function useStateContext() {
  return React.useContext(StateContext);
};

var useDragGesture = (function (set) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      _useStateContext2$ = _useStateContext2[0],
      dragging = _useStateContext2$.dragging,
      dragDistance = _useStateContext2$.dragDistance,
      width = _useStateContext2$.width,
      pauseOnInteraction = _useStateContext2$.pauseOnInteraction,
      currentIndex = _useStateContext2$.currentIndex,
      dispatch = _useStateContext2[1];

  var indexRef = React.useRef();
  var draggingRef = React.useRef();
  var widthRef = React.useRef();
  var distanceRef = React.useRef();
  React.useEffect(function () {
    indexRef.current = currentIndex;
    draggingRef.current = dragging;
    widthRef.current = width;
    distanceRef.current = dragDistance;
  }, [currentIndex, dragging, dragDistance, width]);
  var bind = reactWithGesture.useGesture(function (_ref) {
    var down = _ref.down,
        _ref$delta = _slicedToArray(_ref.delta, 1),
        xDelta = _ref$delta[0],
        _ref$direction = _slicedToArray(_ref.direction, 1),
        xDir = _ref$direction[0],
        distance = _ref.distance,
        cancel = _ref.cancel;

    if (!draggingRef.current) return;

    if (down && distance > distanceRef.current) {
      dispatch({
        type: xDir > 0 ? 'PREV' : 'NEXT',
        pause: true
      });
      cancel();
    }

    set(function (i) {
      var x = (i - indexRef.current) * widthRef.current + (down ? xDelta : 0); // const sc = down ? 1 - distance / widthRef.current / 2 : 1

      return {
        x: x,
        immediate: false,
        cursor: down ? 'grabbing' : 'grab'
      };
    });
    dispatch({
      type: 'SET_PAUSE',
      pause: true
    });
  });
  return bind;
});

var useFocus = function useFocus(ref) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  React.useEffect(function () {
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

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      zIndex = _useState2[0],
      setZIndex = _useState2[1];

  React.useEffect(function () {
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
  var springRef = React.useRef();
  useFocus(springRef);
  var zIndex = useZIndex(index);
  return React__default.createElement(reactSpring.animated.div, _extends({}, bind(), {
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
  var children = _ref.children;

  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      _useStateContext2$ = _useStateContext2[0],
      currentIndex = _useStateContext2$.currentIndex,
      prevIndex = _useStateContext2$.prevIndex,
      width = _useStateContext2$.width,
      height = _useStateContext2$.height,
      dragging = _useStateContext2$.dragging,
      config = _useStateContext2$.config,
      dispatch = _useStateContext2[1];

  React.useEffect(function () {
    setX(true);
  }, [width, height]);
  React.useEffect(function () {
    set(function () {
      return {
        cursor: dragging ? 'grab' : 'auto'
      };
    });
  }, [dragging]);
  React.useEffect(function () {
    setX(prevIndex === undefined);
  }, [currentIndex]);
  React.useEffect(function () {
    set(function (i) {
      return {
        config: config
      };
    });
  }, [config]);

  function setX(immediate) {
    set(function (i) {
      return {
        x: (i - currentIndex) * width,
        immediate: immediate
      };
    });
  }

  var _useSprings = reactSpring.useSprings(children.length, function (i) {
    return {
      x: i * width,
      sc: 1,
      immediate: true,
      config: config,
      cursor: 'auto',
      onStart: function onStart(a1, a2, a3) {
        if (i === children.length - 1) {
          dispatch({
            type: 'SET_PAUSE',
            pause: true
          });
        }
      },
      onRest: function onRest(a1, a2, a3) {
        if (i === children.length - 1) {
          dispatch({
            type: 'SET_PAUSE',
            pause: false
          });
          dispatch({
            type: 'SET_RESTED_INDEX'
          });
        }
      }
    };
  }),
      _useSprings2 = _slicedToArray(_useSprings, 2),
      props = _useSprings2[0],
      set = _useSprings2[1];

  var bind = useDragGesture(set);
  return props.map(function (prop, index) {
    return React__default.createElement(SledSpring, {
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
  var _useState = React.useState(getHeight(customHeight)),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  React.useEffect(function () {
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

  React.useEffect(function () {
    set(ref, dispatch);
  }, [width, height, cssHeight]);
  React.useEffect(function () {
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

  var hasFocusRef = React.useRef();
  React.useEffect(function () {
    hasFocusRef.current = hasFocus;
  }, [hasFocus]);
  React.useEffect(function () {
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

  React.useEffect(function () {
    var distance = getDistanceRef(dragDistance, width);
    dispatch({
      type: 'SET_DRAG_DISTANCE',
      dragDistance: distance
    });
  }, [dragDistance, width]);
  React.useEffect(function () {
    dispatch({
      type: 'SET_DRAGGING',
      dragging: dragging
    });
  }, [dragging]);
});

var useMouseOver = (function (pauseOnMouseOver, ref) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      autoPlayInterval = _useStateContext2[0].autoPlayInterval,
      dispatch = _useStateContext2[1];

  React.useEffect(function () {
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

  React.useEffect(function () {
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

  React.useEffect(function () {
    dispatch({
      type: 'SET_VIEWCOUNT',
      count: React__default.Children.toArray(children).length
    });
  }, [children.length]);
}

var useInterval = function useInterval(callback, interval) {
  var savedCallback = React.useRef();
  React.useEffect(function () {
    savedCallback.current = callback;
  });
  React.useEffect(function () {
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

  React.useEffect(function () {
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

  React.useEffect(function () {
    dispatch({
      type: 'SET_CONFIG',
      config: config
    });
  }, [config]);
});

var useRewind = (function (rewind) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 2),
      dispatch = _useStateContext2[1];

  React.useEffect(function () {
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

  React.useEffect(function () {
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

  React.useEffect(function () {
    dispatch({
      type: 'SET_STOPONINTERACTION',
      stopOnInteraction: stopOnInteraction
    });
  }, [stopOnInteraction]);
};

var useSledEnd = (function (onSledEnd) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 1),
      _useStateContext2$ = _useStateContext2[0],
      viewCount = _useStateContext2$.viewCount,
      restedIndex = _useStateContext2$.restedIndex,
      currentIndex = _useStateContext2$.currentIndex,
      autoPlayInterval = _useStateContext2$.autoPlayInterval;

  React.useEffect(function () {
    if (typeof onSledEnd !== 'function') return;
    var timeoutId;

    if (viewCount && restedIndex + 1 === viewCount) {
      if (autoPlayInterval) {
        timeoutId = window.setTimeout(function () {
          onSledEnd(); // clear timeoutId, that timeout does not get called a second time on cleanup

          timeoutId = undefined;
        }, autoPlayInterval);
      } else {
        onSledEnd();
      }
    }

    return function () {
      if (timeoutId) {
        // if timeout is running, but sled is moved to next!
        clearTimeout(timeoutId);

        if (currentIndex === 0) {
          onSledEnd();
        }
      }
    };
  }, [restedIndex, currentIndex]);
});

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
      onSledEnd = _ref.onSledEnd;
  var viewsRef = React.useRef();
  var cssHeight = useCSSHeight(height);
  useDimensions(viewsRef, width, height, cssHeight);
  useFocus(viewsRef);
  useViewCount(children);
  useRewind(rewind);
  usePause(pause);
  useSledEnd(onSledEnd);
  useStopOnInteraction(stopOnInteraction);
  useMouseOver(pauseOnMouseOver, viewsRef);
  useGoto(_goto);
  useKeyboard(keyboard);
  useDragging(dragging, dragDistance);
  useAutoPlay(autoPlay);
  useConfig(config);
  return React__default.createElement(StyledDiv, {
    className: "sled",
    ref: viewsRef,
    styles: style,
    cssWidth: width,
    cssHeight: cssHeight,
    tabIndex: 0
  }, React__default.createElement(SledSprings, null, children));
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
  onSledEnd: propTypes.func
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
  onSledEnd: null
};

var useArrow = function useArrow(_goto) {
  var _useStateContext = useStateContext(),
      _useStateContext2 = _slicedToArray(_useStateContext, 1),
      _useStateContext2$ = _useStateContext2[0],
      rewind = _useStateContext2$.rewind,
      currentIndex = _useStateContext2$.currentIndex,
      viewCount = _useStateContext2$.viewCount;

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      disabled = _useState2[0],
      setDisabled = _useState2[1];

  React.useEffect(function () {
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

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      disabled = _useState4[0],
      setDisabled = _useState4[1];

  React.useEffect(function () {
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
  var _useState = React.useState(presets[preset] || ''),
      _useState2 = _slicedToArray(_useState, 2),
      styles = _useState2[0],
      setStyles = _useState2[1];

  React.useEffect(function () {
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
  var controlRef = React.useRef();
  useFocus(controlRef);
  var presetStyles = usePreset(preset);
  var defaultPreset = useDefaultPreset(_goto);
  var disabled = useDisabled(_goto);
  var className = useClassName(_goto, disabled);
  var label = useLabel(_goto);
  var onClick = useClick(_goto);
  return React__default.createElement(StyledButton, {
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

  return React__default.createElement(StyledSeprarator, {
    className: "sled-progress-separators"
  }, _toConsumableArray(Array(viewCount ? viewCount - 1 : 1)).map(function (view, index) {
    return React__default.createElement("div", {
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
  return React__default.createElement(StyledRail, {
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

  var _useSpring = reactSpring.useSpring(function () {
    return {
      from: {
        x: 100
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      props = _useSpring2[0],
      set = _useSpring2[1];

  React.useEffect(function () {
    if (mouseOver) {
      set({
        config: config,
        x: getX(viewCount, currentIndex),
        reset: false
      });
    }
  }, [mouseOver]);
  React.useEffect(function () {
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
  React.useEffect(function () {
    if (!autoPlayInterval) return;
    set({
      config: autoPlayInterval && !pause ? {
        duration: autoPlayInterval
      } : config,
      x: getX(viewCount, currentIndex, !pause && 1),
      reset: false
    });
  }, [pause]);
  return React__default.createElement(reactSpring.animated.div, {
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

  return React__default.createElement(StyledControls, {
    className: "sled-progress-controls"
  }, _toConsumableArray(Array(viewCount || 1)).map(function (view, index) {
    return React__default.createElement(SledControl, {
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
  return React__default.createElement(StyledSledProgress, {
    className: "sled-progress",
    styles: style,
    role: "progressBar"
  }, React__default.createElement(SledProgressRail, null), React__default.createElement(SledProgressTrack, null), React__default.createElement(SledProgressSeparators, null), React__default.createElement(SledProgressControls, null));
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

  return React__default.createElement(StateProvider, {
    reducer: reducer,
    initialState: _objectSpread({
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

exports.Control = SledControl;
exports.Progress = SledProgress;
exports.Sled = Sled;
exports.Views = SledViews;
exports.useSledStore = useStateContext;
//# sourceMappingURL=index.js.map
