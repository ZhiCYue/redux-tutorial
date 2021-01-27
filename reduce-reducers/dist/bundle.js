/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/reduce-reducers/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/reduce-reducers/es/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var initialState = typeof args[0] !== 'function' && args.shift();\n  var reducers = args;\n\n  if (typeof initialState === 'undefined') {\n    throw new TypeError('The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.');\n  }\n\n  return function (prevState, value) {\n    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n      args[_key2 - 2] = arguments[_key2];\n    }\n\n    var prevStateIsUndefined = typeof prevState === 'undefined';\n    var valueIsUndefined = typeof value === 'undefined';\n\n    if (prevStateIsUndefined && valueIsUndefined && initialState) {\n      return initialState;\n    }\n\n    return reducers.reduce(function (newState, reducer, index) {\n      if (typeof reducer === 'undefined') {\n        throw new TypeError('An undefined reducer was passed in at index ' + index);\n      }\n\n      return reducer.apply(undefined, [newState, value].concat(args));\n    }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);\n  };\n});\n\n//# sourceURL=webpack://reduce-reducers-demo/./node_modules/reduce-reducers/es/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var reduce_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduce-reducers */ \"./node_modules/reduce-reducers/es/index.js\");\n\n\nconst initialState = { A: 0, B: 0 };\n\nconst addReducer = (state, payload) => ({ ...state, A: state.A + payload });\nconst multReducer = (state, payload) => ({ ...state, B: state.B * payload });\n\nconst reducer = (0,reduce_reducers__WEBPACK_IMPORTED_MODULE_0__.default)(initialState, addReducer, multReducer);\n\nconst state = { A: 1, B: 2 };\nconst payload = 3;\n\nconsole.log('before: ', state)\nconst res = reducer(state, payload); // { A: 4, B: 6 }\nconsole.log('after: ', res)\n\n\n//# sourceURL=webpack://reduce-reducers-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;