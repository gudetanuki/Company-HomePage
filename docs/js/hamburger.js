/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleHamburgerMenu\": () => (/* binding */ toggleHamburgerMenu)\n/* harmony export */ });\n// 'use strict';\nvar open = document.getElementById('open');\nvar overlay = document.querySelector('.overlay');\nvar close = document.getElementById('close');\n\nvar toggleHamburgerMenu = function toggleHamburgerMenu() {\n  open.addEventListener('click', function () {\n    overlay.classList.add('show');\n    open.classList.add('hide');\n  });\n  close.addEventListener('click', function () {\n    overlay.classList.remove('show');\n    open.classList.remove('hide');\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGFtYnVyZ2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDQSxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLElBQU1DLEtBQUssR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWQ7O0FBRUEsSUFBTUksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFXO0FBQ3JDTixFQUFBQSxJQUFJLENBQUNPLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDbkNKLElBQUFBLE9BQU8sQ0FBQ0ssU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsTUFBdEI7QUFDQVQsSUFBQUEsSUFBSSxDQUFDUSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7QUFDRCxHQUhEO0FBS0FKLEVBQUFBLEtBQUssQ0FBQ0UsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtBQUNwQ0osSUFBQUEsT0FBTyxDQUFDSyxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixNQUF6QjtBQUNBVixJQUFBQSxJQUFJLENBQUNRLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixNQUF0QjtBQUNELEdBSEQ7QUFJRCxDQVZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlzc2lvbi8uL3NyYy9qcy9oYW1idXJnZXIuanM/Njk5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAndXNlIHN0cmljdCc7XG5jb25zdCBvcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4nKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UnKTtcblxuY29uc3QgdG9nZ2xlSGFtYnVyZ2VyTWVudSA9IGZ1bmN0aW9uKCkge1xuICBvcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIG9wZW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9KTtcbiAgXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIG9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7dG9nZ2xlSGFtYnVyZ2VyTWVudX07XG4iXSwibmFtZXMiOlsib3BlbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvdmVybGF5IiwicXVlcnlTZWxlY3RvciIsImNsb3NlIiwidG9nZ2xlSGFtYnVyZ2VyTWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/hamburger.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/hamburger.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;