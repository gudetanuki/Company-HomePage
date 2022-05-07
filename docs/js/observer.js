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

/***/ "./src/js/observer.js":
/*!****************************!*\
  !*** ./src/js/observer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateObserver\": () => (/* binding */ updateObserver)\n/* harmony export */ });\n// 'use strict';\nvar targets = document.querySelectorAll('.fadein');\n\nfunction callback(entries, obs) {\n  entries.forEach(function (entry) {\n    if (!entry.isIntersecting) return;\n    entry.target.classList.add('appear');\n    obs.unobserve(entry.target);\n  });\n}\n\nvar options = {\n  threshold: 0.3,\n  rootMargin: '0px 0px -100px'\n};\n\nvar updateObserver = function updateObserver() {\n  var observer = new IntersectionObserver(callback, options);\n  targets.forEach(function (target) {\n    observer.observe(target);\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvb2JzZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLENBQWhCOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM5QkQsRUFBQUEsT0FBTyxDQUFDRSxPQUFSLENBQWdCLFVBQUFDLEtBQUssRUFBSTtBQUN2QixRQUFJLENBQUNBLEtBQUssQ0FBQ0MsY0FBWCxFQUEyQjtBQUMzQkQsSUFBQUEsS0FBSyxDQUFDRSxNQUFOLENBQWFDLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0FOLElBQUFBLEdBQUcsQ0FBQ08sU0FBSixDQUFjTCxLQUFLLENBQUNFLE1BQXBCO0FBQ0QsR0FKRDtBQUtEOztBQUVELElBQU1JLE9BQU8sR0FBRztBQUNkQyxFQUFBQSxTQUFTLEVBQUUsR0FERztBQUVkQyxFQUFBQSxVQUFVLEVBQUU7QUFGRSxDQUFoQjs7QUFLQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQVc7QUFDaEMsTUFBTUMsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCZixRQUF6QixFQUFtQ1UsT0FBbkMsQ0FBakI7QUFDQWIsRUFBQUEsT0FBTyxDQUFDTSxPQUFSLENBQWdCLFVBQUFHLE1BQU0sRUFBSTtBQUN4QlEsSUFBQUEsUUFBUSxDQUFDRSxPQUFULENBQWlCVixNQUFqQjtBQUNELEdBRkQ7QUFJRCxDQU5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlzc2lvbi8uL3NyYy9qcy9vYnNlcnZlci5qcz9jZDg3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vICd1c2Ugc3RyaWN0JztcblxuY29uc3QgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWRlaW4nKTtcblxuZnVuY3Rpb24gY2FsbGJhY2soZW50cmllcywgb2JzKSB7XG4gIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykgcmV0dXJuO1xuICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgICBvYnMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gIH0pO1xufVxuXG5jb25zdCBvcHRpb25zID0ge1xuICB0aHJlc2hvbGQ6IDAuMyxcbiAgcm9vdE1hcmdpbjogJzBweCAwcHggLTEwMHB4Jyxcbn07XG5cbmNvbnN0IHVwZGF0ZU9ic2VydmVyID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuICB9KTtcblxufTtcblxuXG5cbmV4cG9ydCB7dXBkYXRlT2JzZXJ2ZXJ9O1xuIl0sIm5hbWVzIjpbInRhcmdldHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYWxsYmFjayIsImVudHJpZXMiLCJvYnMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsIm9wdGlvbnMiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwidXBkYXRlT2JzZXJ2ZXIiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/observer.js\n");

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
/******/ 	__webpack_modules__["./src/js/observer.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;