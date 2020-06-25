!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/index.js")}({"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n(function () {\n  var bodyElement = document.body;\n  var fontContainerElement = document.getElementsByClassName('control__font')[0];\n  var fontSmallElement = document.getElementById('font-small');\n  var fontLargeElement = document.getElementById('font-large');\n  var themeContainerElement = document.getElementsByClassName('control__theme')[0];\n  var themeLightElement = document.getElementById('theme-light');\n  var themeDarkElement = document.getElementById('theme-dark');\n  var FONT = 'font';\n  var SMALL = 'small';\n  var LARGE = 'large';\n  var FONT_SMALL = FONT + '--' + SMALL;\n  var FONT_LARGE = FONT + '--' + LARGE;\n  var THEME = 'theme';\n  var LIGHT = 'light';\n  var DARK = 'dark';\n  var THEME_LIGHT = THEME + '--' + LIGHT;\n  var THEME_DARK = THEME + '--' + DARK;\n  init();\n\n  function init() {\n    resizeFont();\n    changeTheme();\n  } // 글꼴 제어\n\n\n  function resizeToSmall() {\n    bodyElement.classList.remove(FONT_LARGE);\n    bodyElement.classList.add(FONT_SMALL);\n    window.localStorage.setItem(FONT, SMALL);\n    fontLargeElement.removeAttribute('checked');\n    fontSmallElement.setAttribute('checked', 'checked');\n  }\n\n  function resizeToLarge() {\n    bodyElement.classList.remove(FONT_SMALL);\n    bodyElement.classList.add(FONT_LARGE);\n    window.localStorage.setItem(FONT, LARGE);\n    fontSmallElement.removeAttribute('checked');\n    fontLargeElement.setAttribute('checked', 'checked');\n  }\n\n  function resizeFont() {\n    window.localStorage.getItem(FONT) !== LARGE ? resizeToSmall() : resizeToLarge();\n    fontContainerElement.addEventListener('change', function () {\n      fontSmallElement.checked ? resizeToSmall() : resizeToLarge();\n    });\n  } // 테마 제어\n\n\n  function changeToLight() {\n    bodyElement.classList.remove(THEME_DARK);\n    bodyElement.classList.add(THEME_LIGHT);\n    window.localStorage.setItem(THEME, LIGHT);\n    themeDarkElement.removeAttribute('checked');\n    themeLightElement.setAttribute('checked', 'checked');\n  }\n\n  function changeToDark() {\n    bodyElement.classList.remove(THEME_LIGHT);\n    bodyElement.classList.add(THEME_DARK);\n    window.localStorage.setItem(THEME, DARK);\n    themeLightElement.removeAttribute('checked');\n    themeDarkElement.setAttribute('checked', 'checked');\n  }\n\n  function changeTheme() {\n    var selectedTheme = window.localStorage.getItem(THEME);\n\n    if (selectedTheme) {\n      selectedTheme === LIGHT ? changeToLight() : changeToDark();\n    } else {\n      window.matchMedia('(prefers-color-scheme: light)').matches ? changeToLight() : changeToDark();\n    }\n\n    themeContainerElement.addEventListener('change', function () {\n      themeLightElement.checked ? changeToLight() : changeToDark();\n    });\n  }\n})();\n\n//# sourceURL=webpack:///./src/index.js?")},"./src/index.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?")}});