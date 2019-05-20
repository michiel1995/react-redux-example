module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/components/Field.module.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/client/components/Field.module.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "._1ufGO2gaDabHweThfmfZ2- {\n  margin-bottom: 1rem; }\n  ._1ufGO2gaDabHweThfmfZ2- label {\n    color: #c3c3c3;\n    font-weight: normal; }\n  ._1ufGO2gaDabHweThfmfZ2- input {\n    display: block;\n    padding: 1rem;\n    border: none;\n    width: 100%;\n    background-color: #f8f8f8; }\n    ._1ufGO2gaDabHweThfmfZ2- input::-webkit-input-placeholder {\n      color: lightgray; }\n    ._1ufGO2gaDabHweThfmfZ2- input:-moz-placeholder {\n      color: lightgray; }\n    ._1ufGO2gaDabHweThfmfZ2- input::-moz-placeholder {\n      color: lightgray; }\n    ._1ufGO2gaDabHweThfmfZ2- input:-ms-input-placeholder {\n      color: lightgray; }\n  ._1ufGO2gaDabHweThfmfZ2-::-webkit-input-placeholder {\n    color: lightgray; }\n  ._1ufGO2gaDabHweThfmfZ2-:-moz-placeholder {\n    color: lightgray; }\n  ._1ufGO2gaDabHweThfmfZ2-::-moz-placeholder {\n    color: lightgray; }\n  ._1ufGO2gaDabHweThfmfZ2-:-ms-input-placeholder {\n    color: lightgray; }\n", ""]);

// Exports
exports.locals = {
	"formField": "_1ufGO2gaDabHweThfmfZ2-"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/components/Layout.module.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/client/components/Layout.module.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "._3F7VWS2eypzc8eFpsIMuhU {\n  min-height: 100vh; }\n\n._3w43rJx5VNvfAlWLE2qoZB {\n  display: -webkit-box;\n  display: flex;\n  min-height: 100vh; }\n  ._3w43rJx5VNvfAlWLE2qoZB > div {\n    width: 50%; }\n\n._3BQWtBqO9FeVKzvx7nLP8i {\n  padding: 7rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n", ""]);

// Exports
exports.locals = {
	"layout": "_3F7VWS2eypzc8eFpsIMuhU",
	"layoutSplit": "_3w43rJx5VNvfAlWLE2qoZB",
	"layoutContent": "_3BQWtBqO9FeVKzvx7nLP8i"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/components/LogoBlock.module.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/client/components/LogoBlock.module.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "._369ktK21gIdBB0HfiWQoYZ {\n  background-color: #202020;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  color: white;\n  overflow: hidden; }\n\n._1mNzSl7-tt805-RBLE91We {\n  position: absolute;\n  bottom: -25%;\n  width: 100%; }\n\n.Vyd5JSA6HUbPrFNQMkNKW {\n  text-align: center; }\n\n._2o5080xbxUnem7mHQ8Wq3t {\n  margin-bottom: 1rem; }\n", ""]);

// Exports
exports.locals = {
	"logoBlock": "_369ktK21gIdBB0HfiWQoYZ",
	"wineBottle": "_1mNzSl7-tt805-RBLE91We",
	"subtitle": "Vyd5JSA6HUbPrFNQMkNKW",
	"logo": "_2o5080xbxUnem7mHQ8Wq3t"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/scss/main.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/client/scss/main.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Light.eot */ "./src/client/assets/font-multi/Muli-Light.eot"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Light.woff */ "./src/client/assets/font-multi/Muli-Light.woff"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Light.ttf */ "./src/client/assets/font-multi/Muli-Light.ttf"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Light.svg */ "./src/client/assets/font-multi/Muli-Light.svg"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Regular.eot */ "./src/client/assets/font-multi/Muli-Regular.eot"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Regular.woff */ "./src/client/assets/font-multi/Muli-Regular.woff"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Regular.ttf */ "./src/client/assets/font-multi/Muli-Regular.ttf"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Regular.svg */ "./src/client/assets/font-multi/Muli-Regular.svg") + "#Muli-Regular");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Black.eot */ "./src/client/assets/font-multi/Muli-Black.eot"));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Black.woff */ "./src/client/assets/font-multi/Muli-Black.woff"));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Black.ttf */ "./src/client/assets/font-multi/Muli-Black.ttf"));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(/*! ../assets/font-multi/Muli-Black.svg */ "./src/client/assets/font-multi/Muli-Black.svg") + "#Muli-Black");

// Module
exports.push([module.i, "*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle,\naside,\ndialog,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex='-1']:focus {\n  outline: none !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\na {\n  color: theme-color(\"primary\");\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n\na:hover {\n  color: #0056b3;\n  text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n\na:not([href]):not([tabindex]):hover,\na:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none; }\n\na:not([href]):not([tabindex]):focus {\n  outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\na,\narea,\nbutton,\n[role='button'],\ninput:not([type='range']),\nlabel,\nselect,\nsummary,\ntextarea {\n  touch-action: manipulation; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type='radio'],\ninput[type='checkbox'] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type='date'],\ninput[type='time'],\ninput[type='datetime-local'],\ninput[type='month'] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto; }\n\n[type='search'] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type='search']::-webkit-search-cancel-button,\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\n* {\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility; }\n\nbody,\nhtml {\n  font-family: \"Muli\";\n  font-size: 1rem; }\n\nh1 {\n  font-size: 3.125rem;\n  font-weight: 900; }\n\nh6 {\n  font-size: 1.3rem;\n  font-weight: normal;\n  color: #c3c3c3; }\n\n.XM6LedsFsiLT9gJQJkIB5 {\n  margin-bottom: 1rem; }\n\n.np1-InJEEH0r5oEAR4XBv {\n  margin-bottom: 2rem; }\n\n.tt0VuM2BlN79ddxZ-KodP {\n  margin-bottom: 3rem; }\n\n.y22ODRbfvHhE0NVDUFHir {\n  margin-bottom: 4rem; }\n\n._3o8B_8SwlTqaHlzEvdvjJg {\n  margin-bottom: 5rem; }\n\n._2RAtAXcbDJpqiexr8EbnGv {\n  margin-bottom: 6rem; }\n\n.Vmu8sbW2jmpfBXDR_BR0q {\n  margin-bottom: 7rem; }\n\n._2m8oVMhuxX1ke23cZhhhfI {\n  margin-bottom: 8rem; }\n\n@font-face {\n  font-family: 'Muli';\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"svg\");\n  font-weight: 300;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Muli';\n  src: url(" + ___CSS_LOADER_URL___4___ + ");\n  src: url(" + ___CSS_LOADER_URL___4___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Muli';\n  src: url(" + ___CSS_LOADER_URL___8___ + ");\n  src: url(" + ___CSS_LOADER_URL___8___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  font-weight: 900;\n  font-style: normal; }\n\n._138S66vaULPlArQGAE1B-A {\n  border: none;\n  border-radius: 3px;\n  padding: 0.9rem 1rem;\n  box-shadow: -2px 1px 19px -1px #b8b8b8; }\n  ._138S66vaULPlArQGAE1B-A.D6su8OWrRUMILXcqcrX1O {\n    display: block;\n    width: 100%; }\n  ._138S66vaULPlArQGAE1B-A._1DK_rcIh-X8rMOuc2yeKWO {\n    background-color: #ce5857;\n    color: white; }\n", ""]);

// Exports
exports.locals = {
	"mb-1": "XM6LedsFsiLT9gJQJkIB5",
	"mb-2": "np1-InJEEH0r5oEAR4XBv",
	"mb-3": "tt0VuM2BlN79ddxZ-KodP",
	"mb-4": "y22ODRbfvHhE0NVDUFHir",
	"mb-5": "_3o8B_8SwlTqaHlzEvdvjJg",
	"mb-6": "_2RAtAXcbDJpqiexr8EbnGv",
	"mb-7": "Vmu8sbW2jmpfBXDR_BR0q",
	"mb-8": "_2m8oVMhuxX1ke23cZhhhfI",
	"btn": "_138S66vaULPlArQGAE1B-A",
	"btn-block": "D6su8OWrRUMILXcqcrX1O",
	"btn-primary": "_1DK_rcIh-X8rMOuc2yeKWO"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/client/routes.js");





function App() {
  return Object(react_router_config__WEBPACK_IMPORTED_MODULE_0__["renderRoutes"])(_routes__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a)(App));

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Black.eot":
/*!*****************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Black.eot ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Black.eot";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Black.svg":
/*!*****************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Black.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Black.svg";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Black.ttf":
/*!*****************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Black.ttf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Black.ttf";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Black.woff":
/*!******************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Black.woff ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Black.woff";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Light.eot":
/*!*****************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Light.eot ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Light.eot";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Light.svg":
/*!*****************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Light.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Light.svg";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Light.ttf":
/*!*****************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Light.ttf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Light.ttf";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Light.woff":
/*!******************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Light.woff ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Light.woff";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Regular.eot":
/*!*******************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Regular.eot ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Regular.eot";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Regular.svg":
/*!*******************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Regular.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Regular.svg";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Regular.ttf":
/*!*******************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Regular.ttf ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Regular.ttf";

/***/ }),

/***/ "./src/client/assets/font-multi/Muli-Regular.woff":
/*!********************************************************!*\
  !*** ./src/client/assets/font-multi/Muli-Regular.woff ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/Muli-Regular.woff";

/***/ }),

/***/ "./src/client/assets/w-4-p-vf-2-small.svg":
/*!************************************************!*\
  !*** ./src/client/assets/w-4-p-vf-2-small.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "180",
  height: "32",
  fill: "none"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#logo-clip-small)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#1D1D1B",
  d: "M29.962 28.6h-5.78L18.686 5.565l-5.78 23.037H7.095L0 1.567h4.822l5.284 23.485L15.78 1.95h6.017l5.542 23.212 5.568-23.595h4.545L29.962 28.6zM70.36 13.208c.052.52.085 1.06.098 1.606.014.546 0 1.241 0 2.08V28.6h-4.386V15.912c0-.468 0-.968-.079-1.488a4.781 4.781 0 0 0-1.169-2.88c-.665-.763-1.755-1.144-3.27-1.144a5.047 5.047 0 0 0-2.133.468 4.404 4.404 0 0 0-1.75 1.528 8.514 8.514 0 0 0-1.176 2.743 16.74 16.74 0 0 0-.436 4.12V28.6h-4.386V7.8h4.386v3.445l1.407-2.392a7.704 7.704 0 0 1 2.51-1.3 10.905 10.905 0 0 1 2.827-.331c2.285 0 4.056.539 5.284 1.605a6.466 6.466 0 0 1 2.272 4.381zm23.666 4.472v.741c-.003.329-.03.657-.08.982H78.755c.043 1.067.243 2.122.595 3.133a6.095 6.095 0 0 0 1.235 2.04 4.15 4.15 0 0 0 1.691 1.119 6.177 6.177 0 0 0 2.034.331 5.16 5.16 0 0 0 3.303-1.079 4.666 4.666 0 0 0 1.691-3.074h4.419a9.012 9.012 0 0 1-1.248 3.21 8.014 8.014 0 0 1-2.147 2.276 9.273 9.273 0 0 1-2.854 1.352 11.78 11.78 0 0 1-3.302.455 11.19 11.19 0 0 1-3.924-.65 8.516 8.516 0 0 1-3.15-2.015 9.444 9.444 0 0 1-2.094-3.413 13.977 13.977 0 0 1-.753-4.803 12.948 12.948 0 0 1 .753-4.511 9.891 9.891 0 0 1 2.133-3.465 9.69 9.69 0 0 1 3.303-2.236 10.618 10.618 0 0 1 4.181-.806 9.604 9.604 0 0 1 4.062.806 8.43 8.43 0 0 1 2.953 2.21 9.754 9.754 0 0 1 1.81 3.315c.405 1.323.601 2.7.58 4.082zm-9.604-7.28a5.138 5.138 0 0 0-2.04.357 5.073 5.073 0 0 0-1.725 1.132c-1 .996-1.616 2.5-1.85 4.51h10.714a7.931 7.931 0 0 0-1.513-4.452 4.354 4.354 0 0 0-1.606-1.192 4.423 4.423 0 0 0-1.98-.355z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#DE4E52",
  d: "M114.661 21.99v6.61h-4.353v-6.61H96.813v-2.236l13.303-18.2h4.545v16.984h3.468v3.452h-3.468zm-4.353-15.171c-.297.52-.608 1.046-.938 1.566-.33.52-.713 1.06-1.136 1.606l-6.255 8.547h8.329V6.818z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#1D1D1B",
  d: "M135.936 1.723a8.6 8.6 0 0 1 5.238 2.411c1.321 1.344 1.993 3.218 2.015 5.623a8.35 8.35 0 0 1-.581 3.25 7.437 7.437 0 0 1-1.553 2.411 7.694 7.694 0 0 1-2.292 1.606 9.634 9.634 0 0 1-2.827.806c-.66.078-1.235.123-1.79.136-.555.013-1.209 0-1.981 0h-4.624v10.635h-4.353V1.567h10.985c.588 0 1.123.078 1.763.156zm-.839 12.577a4.486 4.486 0 0 0 2.451-1.3 4.5 4.5 0 0 0 1.017-3.25 4.454 4.454 0 0 0-1.017-3.21 4.497 4.497 0 0 0-2.451-1.34 15.014 15.014 0 0 0-1.255-.117 27.57 27.57 0 0 0-1.532-.039h-4.743v9.419h4.743c.561 0 1.07 0 1.532-.04.463-.038.905-.064 1.255-.123zm20.787-7.013c.501-.01 1 .07 1.473.234v3.373c-2.021-.13-3.615.34-4.782 1.41-1.167 1.071-1.75 2.902-1.75 5.493V28.6h-4.386V7.8h4.386v3.523l1.79-2.86a6.144 6.144 0 0 1 1.592-.864 5.006 5.006 0 0 1 1.677-.312zm13.402-.039a11.73 11.73 0 0 1 4.677.864 9.477 9.477 0 0 1 3.349 2.334 9.618 9.618 0 0 1 1.981 3.464c.455 1.381.678 2.826.661 4.277a13.131 13.131 0 0 1-.661 4.27 9.887 9.887 0 0 1-1.981 3.491 9.364 9.364 0 0 1-3.349 2.353 13.102 13.102 0 0 1-9.36 0 9.355 9.355 0 0 1-3.349-2.353 9.887 9.887 0 0 1-1.981-3.49 13.078 13.078 0 0 1-.661-4.27 13.172 13.172 0 0 1 .661-4.278 9.589 9.589 0 0 1 1.981-3.464 9.477 9.477 0 0 1 3.349-2.334 11.724 11.724 0 0 1 4.683-.864zm0 18.778a5.287 5.287 0 0 0 2.489-.517 5.191 5.191 0 0 0 1.943-1.615c1.064-1.43 1.592-3.328 1.592-5.707s-.528-4.277-1.592-5.687a5.734 5.734 0 0 0-1.997-1.557 5.83 5.83 0 0 0-4.969 0 5.743 5.743 0 0 0-1.997 1.557c-1.061 1.408-1.592 3.304-1.592 5.687 0 2.38.529 4.277 1.592 5.707a5.266 5.266 0 0 0 1.996 1.616 5.357 5.357 0 0 0 2.535.49v.026zm-123.254-9.73c1.605-.696 1.526-1.346 1.526-1.807v-2.6c0-.884.205-2.477-.918-3.374a3.34 3.34 0 0 1-.801-1.039 3.292 3.292 0 0 1-.335-1.262V1.397h.112a.073.073 0 0 0 .059-.031.071.071 0 0 0 .007-.066V.65a.07.07 0 0 0-.021-.05.073.073 0 0 0-.052-.022h-.112v-.48a.098.098 0 0 0-.029-.07.1.1 0 0 0-.07-.028H43.02a.074.074 0 0 0-.06.016.072.072 0 0 0-.026.055v.533h-.112a.073.073 0 0 0-.051.021.07.07 0 0 0-.022.051V1.3a.07.07 0 0 0 .022.05.069.069 0 0 0 .05.021h.113v5.155c-.2.86-.689 1.63-1.387 2.184-.707.709-.66 2.158-.66 3.25s4.346 2.36 4.386 2.6c.04.24-2.484 1.3-2.808 1.41-.323.111-1.625.605-1.625 1.697s1.407 1.716 1.407 1.716 2.986 1.222 3 1.417c.012.195-2.445 1.092-2.736 1.235-.29.143-1.684.78-1.684 1.833.037.342.166.669.372.946.206.277.484.496.804.634 0 0 2.84 1.3 2.84 1.475 0 .176-1.981.988-2.22 1.105-.369.135-.69.373-.925.684a1.977 1.977 0 0 0-.395 1.071c0 1.547 3.012 2.178 3.012 2.178.607.123.62-.292.456-.487a5.497 5.497 0 0 0-1.156-.65c-.562-.319-1.104-.69-1.104-.807 0-.234 1.652-.747 2.84-1.19 1.19-.441 1.877-1.059 1.877-1.728 0-.67-.113-1.112-1.13-1.67-1.017-.56-3.038-1.392-3.038-1.548 0-.156.95-.448 1.981-.936 1.196-.546 2.517-.968 2.517-2.08 0-1.397-1.665-1.852-2.497-2.197a8.107 8.107 0 0 1-1.942-.942c-.006-.13 1.308-.702 2.913-1.43z"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "logo-clip-small"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#fff",
  d: "M0 0h180v32H0z"
})))));

/***/ }),

/***/ "./src/client/assets/w-4-p-vf.svg":
/*!****************************************!*\
  !*** ./src/client/assets/w-4-p-vf.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "333",
  height: "60",
  fill: "none"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#logo-clip)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FEFEFE",
  d: "M55.283 53.626H44.62L34.48 10.433 23.815 53.626H13.09L0 2.938h8.897l9.75 44.034 10.47-43.315h11.102l10.226 43.522L60.719 2.937h8.385l-13.82 50.69zm74.54-28.86c.098.975.159 1.987.183 3.01.025 1.024 0 2.328 0 3.9v21.95h-8.092v-23.79c0-.877 0-1.816-.147-2.79a9.04 9.04 0 0 0-2.157-5.4c-1.227-1.43-3.238-2.145-6.033-2.145a9.187 9.187 0 0 0-3.936.877 8.166 8.166 0 0 0-3.23 2.864 16.123 16.123 0 0 0-2.17 5.144 31.88 31.88 0 0 0-.804 7.727v17.513h-8.093v-39h8.093v6.46l2.596-4.486a14.14 14.14 0 0 1 4.631-2.437 19.822 19.822 0 0 1 5.217-.622c4.217 0 7.483 1.012 9.75 3.01a12.187 12.187 0 0 1 4.192 8.215zm43.669 8.384v1.39a13.187 13.187 0 0 1-.147 1.84h-28.031a20.57 20.57 0 0 0 1.097 5.875 11.456 11.456 0 0 0 2.279 3.827 7.65 7.65 0 0 0 3.12 2.096c1.207.42 2.476.63 3.754.622a9.423 9.423 0 0 0 6.094-2.023 8.792 8.792 0 0 0 3.12-5.765h8.153a17.064 17.064 0 0 1-2.303 6.02 14.94 14.94 0 0 1-3.961 4.266 17 17 0 0 1-5.265 2.535c-1.98.577-4.033.864-6.094.854a20.36 20.36 0 0 1-7.24-1.22 15.68 15.68 0 0 1-5.813-3.777 17.744 17.744 0 0 1-3.864-6.399 26.58 26.58 0 0 1-1.389-9.007 24.624 24.624 0 0 1 1.389-8.458 18.61 18.61 0 0 1 3.937-6.496 17.858 17.858 0 0 1 6.094-4.193 19.316 19.316 0 0 1 7.714-1.51c2.58-.057 5.14.46 7.496 1.51a15.573 15.573 0 0 1 5.448 4.144 18.377 18.377 0 0 1 3.339 6.216 25.236 25.236 0 0 1 1.073 7.654zM155.771 19.5a9.346 9.346 0 0 0-6.947 2.792c-1.845 1.868-2.982 4.688-3.413 8.458h19.769a15.025 15.025 0 0 0-2.791-8.349 8.05 8.05 0 0 0-6.618-2.9z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#DE4E52",
  d: "M211.566 41.231v12.395h-8.032V41.231h-24.899V37.04l24.546-34.126h8.385V34.76h6.399v6.471h-6.399zm-8.032-28.446a73.7 73.7 0 0 1-1.73 2.937 40.148 40.148 0 0 1-2.096 3.01L188.166 34.76h15.368V12.785z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FEFEFE",
  d: "M250.823 3.23a15.76 15.76 0 0 1 9.665 4.522c2.437 2.518 3.676 6.032 3.717 10.542a15.844 15.844 0 0 1-1.073 6.094 13.967 13.967 0 0 1-2.864 4.521 14.206 14.206 0 0 1-4.229 3.01 17.565 17.565 0 0 1-5.216 1.512 34.275 34.275 0 0 1-3.303.256c-1.024.024-2.231 0-3.657 0h-8.531v19.94H227.3V2.936h20.269c1.084 0 2.071.147 3.254.293zm-1.548 23.583a8.235 8.235 0 0 0 4.521-2.437 8.528 8.528 0 0 0 1.877-6.094 8.44 8.44 0 0 0-1.877-6.02 8.259 8.259 0 0 0-4.521-2.512 27.383 27.383 0 0 0-2.316-.219 50.058 50.058 0 0 0-2.827-.073h-8.751v17.66h8.751c1.036 0 1.974 0 2.827-.073s1.67-.122 2.316-.232zm38.355-13.151a7.749 7.749 0 0 1 2.717.44v6.325c-3.729-.244-6.67.637-8.823 2.644-2.154 2.007-3.23 5.44-3.23 10.299v20.256h-8.093v-39h8.093v6.605l3.303-5.363a11.3 11.3 0 0 1 2.937-1.62 9.11 9.11 0 0 1 3.096-.585zm24.728-.072a21.33 21.33 0 0 1 8.629 1.62 17.47 17.47 0 0 1 6.179 4.375 18.09 18.09 0 0 1 3.657 6.496 25.06 25.06 0 0 1 1.218 8.02 24.928 24.928 0 0 1-1.218 8.007 18.63 18.63 0 0 1-3.657 6.545 17.265 17.265 0 0 1-6.179 4.412 23.814 23.814 0 0 1-17.27 0 17.274 17.274 0 0 1-6.179-4.412 18.611 18.611 0 0 1-3.656-6.545 24.93 24.93 0 0 1-1.219-8.007 25.06 25.06 0 0 1 1.219-8.02c.754-2.395 2-4.608 3.656-6.495a17.48 17.48 0 0 1 6.179-4.376 21.355 21.355 0 0 1 8.641-1.62zm0 35.21a9.615 9.615 0 0 0 8.178-3.998c1.963-2.681 2.938-6.24 2.938-10.701 0-4.46-.975-8.02-2.938-10.664a10.617 10.617 0 0 0-16.538 0c-1.959 2.64-2.938 6.195-2.938 10.664 0 4.46.975 8.02 2.938 10.7a9.75 9.75 0 0 0 8.36 3.95v.048zM84.936 30.555c2.962-1.304 2.815-2.523 2.815-3.388v-4.875c0-1.658.378-4.644-1.694-6.326a6.252 6.252 0 0 1-2.096-4.314V2.62h.207a.134.134 0 0 0 .122-.183V1.219a.134.134 0 0 0-.134-.134h-.207V.183A.183.183 0 0 0 83.766 0h-4.388a.134.134 0 0 0-.158.134v1h-.207a.134.134 0 0 0-.134.134v1.17a.134.134 0 0 0 .134.134h.207v9.665a7.386 7.386 0 0 1-2.56 4.095c-1.303 1.328-1.218 4.046-1.218 6.094 0 2.047 8.02 4.424 8.093 4.875.073.45-4.583 2.437-5.18 2.644-.598.208-2.999 1.134-2.999 3.181 0 2.048 2.597 3.218 2.597 3.218s5.508 2.291 5.533 2.657c.024.366-4.51 2.047-5.046 2.316-.536.268-3.108 1.462-3.108 3.437a3.655 3.655 0 0 0 2.17 2.961s5.24 2.438 5.24 2.767c0 .329-3.656 1.852-4.095 2.072a3.741 3.741 0 0 0-2.437 3.29c0 2.901 5.557 4.083 5.557 4.083 1.121.232 1.146-.548.841-.914-.659-.491-1.375-.9-2.133-1.219-1.036-.597-2.035-1.292-2.035-1.511 0-.439 3.047-1.401 5.24-2.23 2.194-.83 3.462-1.987 3.462-3.242 0-1.256-.207-2.084-2.084-3.133-1.877-1.048-5.606-2.608-5.606-2.9 0-.293 1.755-.841 3.656-1.755 2.206-1.024 4.643-1.816 4.643-3.9 0-2.62-3.07-3.474-4.607-4.12a14.852 14.852 0 0 1-3.583-1.767c-.012-.244 2.413-1.316 5.375-2.681z"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "logo-clip"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#fff",
  d: "M0 0h332.127v60H0z"
})))));

/***/ }),

/***/ "./src/client/assets/wine-bottle.svg":
/*!*******************************************!*\
  !*** ./src/client/assets/wine-bottle.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 880 879"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#wine-bottle-clip)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#2D2D2D",
  d: "M580.014 360.931l121.408-98.133-13.066-16.166-7.738-9.572-13.06-16.158-121.408 98.134c-22.005 17.786-81.793-1.544-113.154 23.805l-266.178 215.15c-8.001 6.466-17.062 22.542-7.475 34.403l32.283 39.94 7.737 9.572 32.277 39.933c9.594 11.869 27.219 6.385 35.218-.081 8-6.465 234.825-189.807 266.178-215.149 31.361-25.35 24.959-87.88 46.978-105.678zm-62.207-4.036c-5.798.307-12.802 1.073-20.722 2.157-7.965 1.056-16.675 2.996-25.955 5.31-4.414 1.591-9.017 3.284-13.464 5.184-3.865 3.063-7.666 4.146-12.055 8.561-8.667 7.53-17.773 15.464-27.203 23.67-18.923 16.347-39.573 33.232-60.169 50.149-41.506 33.476-83.996 65.77-116.647 88.989-16.23 11.728-30.297 20.817-39.898 27.502-9.717 6.537-15.447 10.07-15.447 10.07s4.651-4.869 13.079-13c8.549-7.983 20.384-19.833 35.256-33.245 29.549-27.056 70.034-61.832 111.469-95.395 20.848-16.608 41.687-33.256 61.649-48.318 10-7.497 19.668-14.738 28.849-21.634 4.016-3.502 10.889-6.507 16.077-9.247 5.593-1.702 11.032-2.974 16.173-4.151 5.161-.545 10.082-1.095 14.774-1.594 4.645-.007 9.037-.006 13.182-.038 8.242.245 15.354.634 21.183 1.282 11.654 1.172 18.156 2.714 18.156 2.714s-6.733.14-18.287 1.034z"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "wine-bottle-clip"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#fff",
  d: "M0 0h621.68v628.459H0z",
  transform: "rotate(51.052 244.503 512.016) scale(1.0005)"
})))));

/***/ }),

/***/ "./src/client/components/Field.js":
/*!****************************************!*\
  !*** ./src/client/components/Field.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Field_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field.module.scss */ "./src/client/components/Field.module.scss");
/* harmony import */ var _Field_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Field_module_scss__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Field = ({
  input,
  label,
  type,
  placeholder,
  meta: {
    touched,
    error,
    warning
  }
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _Field_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formField
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  htmlFor: input.name
}, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
  id: input.name,
  placeholder: placeholder,
  type: type
})), touched && (error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, error) || warning && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, warning)));

Field.defaultProps = {
  meta: {},
  input: {}
};
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Field_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a, Field));

/***/ }),

/***/ "./src/client/components/Field.module.scss":
/*!*************************************************!*\
  !*** ./src/client/components/Field.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./Field.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/components/Field.module.scss");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/client/components/Form.js":
/*!***************************************!*\
  !*** ./src/client/components/Form.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field */ "./src/client/components/Field.js");




const Form = ({
  onSubmit,
  globalConfig,
  fields,
  template,
  isLoading
}) => {
  console.log(isLoading);

  const renderField = key => {
    const config = fields[key];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      label: config.label,
      name: key,
      component: "input",
      component: _Field__WEBPACK_IMPORTED_MODULE_2__["default"],
      type: config.type || 'text',
      placeholder: config.placeholder
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-2"
  }, template({
    renderField
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-block btn-primary"
  }, globalConfig.submitText || 'Submit'));
};

Form.defaultProps = {
  globalConfig: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/client/components/Layout.js":
/*!*****************************************!*\
  !*** ./src/client/components/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.scss */ "./src/client/components/Layout.module.scss");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);




const Layout = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout
}, children);

const LayoutSplit = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layoutSplit
}, children);

const LayoutContent = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layoutContent
}, children);

const LayoutWithStyles = isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a)(Layout);
LayoutWithStyles.Split = isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a)(LayoutSplit);
LayoutWithStyles.Content = isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a)(LayoutContent);
/* harmony default export */ __webpack_exports__["default"] = (LayoutWithStyles);

/***/ }),

/***/ "./src/client/components/Layout.module.scss":
/*!**************************************************!*\
  !*** ./src/client/components/Layout.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./Layout.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/components/Layout.module.scss");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/client/components/LogoBlock.js":
/*!********************************************!*\
  !*** ./src/client/components/LogoBlock.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LogoBlock_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogoBlock.module.scss */ "./src/client/components/LogoBlock.module.scss");
/* harmony import */ var _LogoBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LogoBlock_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_wine_bottle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/wine-bottle.svg */ "./src/client/assets/wine-bottle.svg");
/* harmony import */ var _assets_w_4_p_vf_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/w-4-p-vf.svg */ "./src/client/assets/w-4-p-vf.svg");






const LogoBlock = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _LogoBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoBlock
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_w_4_p_vf_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: _LogoBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logo
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
  className: _LogoBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle
}, "Caviste & Horeca")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_wine_bottle_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  className: _LogoBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wineBottle
}));

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_LogoBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a)(LogoBlock));

/***/ }),

/***/ "./src/client/components/LogoBlock.module.scss":
/*!*****************************************************!*\
  !*** ./src/client/components/LogoBlock.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./LogoBlock.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/components/LogoBlock.module.scss");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/client/config/forms/register.js":
/*!*********************************************!*\
  !*** ./src/client/config/forms/register.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Form */ "./src/client/components/Form.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  global: {
    submitText: 'Create Account'
  },
  fields: {
    password: {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter password'
    },
    email: {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter email'
    },
    passwordRepeat: {
      type: 'password',
      label: 'Password repeat',
      placeholder: 'Enter password'
    }
  },
  template: ({
    renderField
  }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderField('password'), renderField('email'), renderField('passwordRepeat'))
});

/***/ }),

/***/ "./src/client/containers/RegisterForm.js":
/*!***********************************************!*\
  !*** ./src/client/containers/RegisterForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_forms_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/forms/register */ "./src/client/config/forms/register.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/client/store/index.js");
/* harmony import */ var _util_createReduxForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/createReduxForm */ "./src/client/containers/util/createReduxForm.js");





const RegisterReduxForm = Object(_util_createReduxForm__WEBPACK_IMPORTED_MODULE_4__["default"])(_store__WEBPACK_IMPORTED_MODULE_3__["default"].constants.auth.registerFormKey, _config_forms_register__WEBPACK_IMPORTED_MODULE_2__["default"]);

const mapStateToProps = state => ({
  isLoading: _store__WEBPACK_IMPORTED_MODULE_3__["default"].selectors.auth.isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_store__WEBPACK_IMPORTED_MODULE_3__["default"].actions.auth.uiActions.register, dispatch)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(RegisterReduxForm));

/***/ }),

/***/ "./src/client/containers/util/createReduxForm.js":
/*!*******************************************************!*\
  !*** ./src/client/containers/util/createReduxForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Form */ "./src/client/components/Form.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/* harmony default export */ __webpack_exports__["default"] = ((uniqueKey, formConfig, reduxFormConfig) => {
  const FormContainer = ({
    handleRegisterSubmit,
    onSubmit,
    ...props
  }) => {
    const handleSubmit = e => {
      e.preventDefault();
      onSubmit();
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
      onSubmit: handleSubmit,
      globalConfig: formConfig.global || {},
      template: formConfig.template || {},
      fields: formConfig.fields || {}
    }));
  };

  return Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({ ...reduxFormConfig,
    form: uniqueKey
  })(FormContainer);
});

/***/ }),

/***/ "./src/client/pages/home.js":
/*!**********************************!*\
  !*** ./src/client/pages/home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
  to: "/register"
});

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/client/pages/register.js":
/*!**************************************!*\
  !*** ./src/client/pages/register.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/client/components/Layout.js");
/* harmony import */ var _components_LogoBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LogoBlock */ "./src/client/components/LogoBlock.js");
/* harmony import */ var _containers_RegisterForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/RegisterForm */ "./src/client/containers/RegisterForm.js");
/* harmony import */ var _assets_w_4_p_vf_2_small_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/w-4-p-vf-2-small.svg */ "./src/client/assets/w-4-p-vf-2-small.svg");







const Register = ({
  isRegistered
}) => {
  if (isRegistered) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/shop"
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"].Split, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LogoBlock__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_w_4_p_vf_2_small_svg__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "mb-3"
  }, "Create account to continue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_RegisterForm__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./src/client/pages/shop.js":
/*!**********************************!*\
  !*** ./src/client/pages/shop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Shop = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Welcome to the shop");

/* harmony default export */ __webpack_exports__["default"] = (Shop);

/***/ }),

/***/ "./src/client/routes.js":
/*!******************************!*\
  !*** ./src/client/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/client/pages/home.js");
/* harmony import */ var _pages_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/register */ "./src/client/pages/register.js");
/* harmony import */ var _pages_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/shop */ "./src/client/pages/shop.js");



const routes = [{
  path: '/',
  exact: true,
  component: _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/register',
  component: _pages_register__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/shop',
  component: _pages_shop__WEBPACK_IMPORTED_MODULE_2__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/client/scss/main.scss":
/*!***********************************!*\
  !*** ./src/client/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/scss/main.scss");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/client/store/actions.js":
/*!*************************************!*\
  !*** ./src/client/store/actions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/client/store/auth/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  auth: _auth__WEBPACK_IMPORTED_MODULE_0__["default"].actions
});

/***/ }),

/***/ "./src/client/store/auth/actions.js":
/*!******************************************!*\
  !*** ./src/client/store/auth/actions.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/client/store/helpers/index.js");

const uiActionTypes = {
  REGISTER: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createUiActionType"])('AUTH/REGISTER')
};
const uiActions = {
  register: () => Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createUiAction"])(uiActionTypes.REGISTER)
};
const apiActionTypes = {
  REGISTER: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createApiActionTypes"])('AUTH/REGISTER')
};
const apiActions = {
  register: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createApiActions"])(apiActionTypes.REGISTER)
};
/* harmony default export */ __webpack_exports__["default"] = ({
  uiActionTypes,
  uiActions,
  apiActionTypes,
  apiActions
});

/***/ }),

/***/ "./src/client/store/auth/api.js":
/*!**************************************!*\
  !*** ./src/client/store/auth/api.js ***!
  \**************************************/
/*! exports provided: register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
const register = params => fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify(params)
}).then(response => {
  if (!response.ok) {
    return Promise.reject(response);
  }

  return response.json();
}).then(json => ({
  response: json
})).catch(e => ({
  error: e
}));


/* harmony default export */ __webpack_exports__["default"] = (register);

/***/ }),

/***/ "./src/client/store/auth/constants.js":
/*!********************************************!*\
  !*** ./src/client/store/auth/constants.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const registerFormKey = 'auth.register';
/* harmony default export */ __webpack_exports__["default"] = ({
  registerFormKey
});

/***/ }),

/***/ "./src/client/store/auth/index.js":
/*!****************************************!*\
  !*** ./src/client/store/auth/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/client/store/auth/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/client/store/auth/constants.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/client/store/auth/api.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/client/store/auth/reducers.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./src/client/store/auth/selectors.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sagas */ "./src/client/store/auth/sagas.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  actions: _actions__WEBPACK_IMPORTED_MODULE_0__["default"],
  constants: _constants__WEBPACK_IMPORTED_MODULE_1__["default"],
  api: _api__WEBPACK_IMPORTED_MODULE_2__["default"],
  reducers: _reducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__["default"],
  sagas: _sagas__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/client/store/auth/reducers.js":
/*!*******************************************!*\
  !*** ./src/client/store/auth/reducers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/client/store/auth/actions.js");


const initialIsLoadingState = false;

const isLoading = (state = initialIsLoadingState, action = {}) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].uiActionTypes.REGISTER:
      return true;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].apiActionTypes.REGISTER.SUCCESS:
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].apiActionTypes.REGISTER.FAILURE:
      return false;

    default:
      return state;
  }
};

const initialIsRegisteredState = false;

const isRegistered = (state = initialIsRegisteredState, action = {}) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].apiActionTypes.REGISTER.SUCCESS:
      return true;

    default:
      return state;
  }
};

const auth = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  isLoading,
  isRegistered
});
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./src/client/store/auth/sagas.js":
/*!****************************************!*\
  !*** ./src/client/store/auth/sagas.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/client/store/auth/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/client/store/helpers/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/client/store/auth/api.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/client/store/auth/constants.js");







const register = function* () {
  const registerValues = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["getFormValues"])(_constants__WEBPACK_IMPORTED_MODULE_5__["default"].registerFormKey));
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["apiSagaWrapper"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].apiActions.register, _api__WEBPACK_IMPORTED_MODULE_4__["register"], registerValues));
};

const registerSaga = function* () {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].uiActionTypes.REGISTER, register);
};

/* harmony default export */ __webpack_exports__["default"] = ([registerSaga]);

/***/ }),

/***/ "./src/client/store/auth/selectors.js":
/*!********************************************!*\
  !*** ./src/client/store/auth/selectors.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

const isLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(state => state.auth.isLoading, loading => loading);
const isRegistered = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(state => state.auth.isRegistered, reg => reg);
/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered,
  isLoading
});

/***/ }),

/***/ "./src/client/store/configureStore.js":
/*!********************************************!*\
  !*** ./src/client/store/configureStore.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sagas */ "./src/client/store/sagas.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./src/client/store/rootReducer.js");




/* eslint-disable no-underscore-dangle */

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const middleware = [sagaMiddleware];

  if (typeof window === 'undefined') {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
  const createStoreWithMiddleware = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware))(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"]);
  const store = createStoreWithMiddleware(_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return store;
};
/* eslint-enable */


/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./src/client/store/constants.js":
/*!***************************************!*\
  !*** ./src/client/store/constants.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/client/store/auth/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  auth: _auth__WEBPACK_IMPORTED_MODULE_0__["default"].constants
});

/***/ }),

/***/ "./src/client/store/helpers/index.js":
/*!*******************************************!*\
  !*** ./src/client/store/helpers/index.js ***!
  \*******************************************/
/*! exports provided: createUiActionType, createUiAction, createApiActionTypes, createApiActions, apiSagaWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/actions */ "./src/client/store/helpers/utils/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUiActionType", function() { return _utils_actions__WEBPACK_IMPORTED_MODULE_0__["createUiActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUiAction", function() { return _utils_actions__WEBPACK_IMPORTED_MODULE_0__["createUiAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApiActionTypes", function() { return _utils_actions__WEBPACK_IMPORTED_MODULE_0__["createApiActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApiActions", function() { return _utils_actions__WEBPACK_IMPORTED_MODULE_0__["createApiActions"]; });

/* harmony import */ var _utils_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/sagas */ "./src/client/store/helpers/utils/sagas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apiSagaWrapper", function() { return _utils_sagas__WEBPACK_IMPORTED_MODULE_1__["apiSagaWrapper"]; });




/***/ }),

/***/ "./src/client/store/helpers/utils/actions.js":
/*!***************************************************!*\
  !*** ./src/client/store/helpers/utils/actions.js ***!
  \***************************************************/
/*! exports provided: createUiActionType, createUiAction, createApiActionTypes, createApiActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUiActionType", function() { return createUiActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUiAction", function() { return createUiAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApiActionTypes", function() { return createApiActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApiActions", function() { return createApiActions; });
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createAction(type, payload = {}) {
  return {
    type,
    payload
  };
}

const createUiActionType = type => {
  const uiActionType = `UI/${type}`;
  return uiActionType;
};
const createUiAction = (type, payload) => createAction(type, payload);
const createApiActionTypes = type => {
  const apiActionType = `API/${type}`;
  return {
    REQUEST: `${apiActionType}_${REQUEST}`,
    SUCCESS: `${apiActionType}_${SUCCESS}`,
    FAILURE: `${apiActionType}_${FAILURE}`
  };
};
const createApiActions = actionTypes => {
  const apiActions = {
    request: request => createAction(actionTypes.REQUEST, {
      request
    }),
    success: (request, response) => createAction(actionTypes.SUCCESS, {
      request,
      response
    }),
    failure: (request, error) => createAction(actionTypes.FAILURE, {
      request,
      error
    })
  };
  return apiActions;
};

/***/ }),

/***/ "./src/client/store/helpers/utils/sagas.js":
/*!*************************************************!*\
  !*** ./src/client/store/helpers/utils/sagas.js ***!
  \*************************************************/
/*! exports provided: apiSagaWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiSagaWrapper", function() { return apiSagaWrapper; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);


const apiSagaWrapper = (apiAction, apiFn, args) => function* () {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(apiAction.request(args));
  const {
    response,
    error
  } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(apiFn, args);

  if (response) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(apiAction.success(args, response));
  } else {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(apiAction.failure(args, error));
  }

  return response;
};


/* harmony default export */ __webpack_exports__["default"] = (apiSagaWrapper);

/***/ }),

/***/ "./src/client/store/index.js":
/*!***********************************!*\
  !*** ./src/client/store/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/client/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/client/store/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/client/store/constants.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  actions: _actions__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_1__["default"],
  constants: _constants__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/client/store/rootReducer.js":
/*!*****************************************!*\
  !*** ./src/client/store/rootReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/client/store/auth/index.js");



const reducers = {
  auth: _auth__WEBPACK_IMPORTED_MODULE_2__["default"].reducers,
  form: redux_form__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers);
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/client/store/sagas.js":
/*!***********************************!*\
  !*** ./src/client/store/sagas.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/client/store/auth/index.js");


const sagas = [..._auth__WEBPACK_IMPORTED_MODULE_1__["default"].sagas];

const rootSaga = function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])(sagas.map(f => Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(f)));
};

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./src/client/store/selectors.js":
/*!***************************************!*\
  !*** ./src/client/store/selectors.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/client/store/auth/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  auth: _auth__WEBPACK_IMPORTED_MODULE_0__["default"].selectors
});

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ "isomorphic-style-loader/StyleContext");
/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom/StaticRouter */ "react-router-dom/StaticRouter");
/* harmony import */ var react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/App */ "./src/client/App.js");
/* harmony import */ var _client_store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/store/configureStore */ "./src/client/store/configureStore.js");








/*eslint-disable*/

const router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router();
/* eslint-enable */

const store = Object(_client_store_configureStore__WEBPACK_IMPORTED_MODULE_7__["default"])();
router.get('*', (req, res) => {
  const context = {};
  const css = new Set(); // CSS for all rendered React components

  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

  const content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2___default.a.Provider, {
    value: {
      insertCss
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_4___default.a, {
    location: req.url,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_6__["default"], null)))));

  if (context.action === 'REPLACE') {
    return res.redirect(302, context.url);
  }

  const html = `<!doctype html>
    <html>
      <head>
        <style>${[...css].join('')}</style>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>`;
  res.status(200).send(html);
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/index */ "./src/routes/index.js");







const http = __webpack_require__(/*! http */ "http");

const app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // view engine setup
// app.set('views', path.join(__dirname, '..', 'views'));

app.locals.pretty = true; // uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()('dev'));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({
  extended: false
}));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname)));
app.use('/', _routes_index__WEBPACK_IMPORTED_MODULE_5__["default"]); // catch 404 and forward to error handler

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
const port = Object({"NODE_ENV":undefined}).PORT || '3000';
const server = http.createServer(app);
server.listen(port);

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi babel-polyfill ./src/server.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"babel-polyfill");
module.exports = __webpack_require__(/*! /Users/michiel/Documents/michiel/web/react-redux-example/src/server.js */"./src/server.js");


/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/StyleContext");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/withStyles");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/StaticRouter");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });