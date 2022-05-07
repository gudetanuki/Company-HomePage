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

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordionAnswer\": () => (/* binding */ accordionAnswer),\n/* harmony export */   \"accordionQuestion\": () => (/* binding */ accordionQuestion)\n/* harmony export */ });\n\n\nvar question = document.querySelectorAll('.question-list-q');\nvar answer = document.querySelectorAll('.question-list-a');\nvar accordionQuestion = question.forEach(function (ele, index) {\n  ele.addEventListener('click', function () {\n    answer[index].classList.add('open');\n  });\n});\nvar accordionAnswer = answer.forEach(function (ele, index) {\n  ele.addEventListener('click', function () {\n    answer[index].classList.remove('open');\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYWNjb3JkaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7O0FBQ2IsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixDQUFqQjtBQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBZjtBQUVBLElBQU1FLGlCQUFpQixHQUFHSixRQUFRLENBQUNLLE9BQVQsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3pERCxFQUFBQSxHQUFHLENBQUNFLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDbENMLElBQUFBLE1BQU0sQ0FBQ0ksS0FBRCxDQUFOLENBQWNFLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQTVCO0FBQ0QsR0FGRDtBQUdELENBSnlCLENBQTFCO0FBTUEsSUFBTUMsZUFBZSxHQUFHUixNQUFNLENBQUNFLE9BQVAsQ0FBZSxVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDckRELEVBQUFBLEdBQUcsQ0FBQ0UsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtBQUNsQ0wsSUFBQUEsTUFBTSxDQUFDSSxLQUFELENBQU4sQ0FBY0UsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsTUFBL0I7QUFDRCxHQUZEO0FBR0QsQ0FKdUIsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taXNzaW9uLy4vc3JjL2pzL2FjY29yZGlvbi5qcz8wMzRiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1ZXN0aW9uLWxpc3QtcScpO1xuY29uc3QgYW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1ZXN0aW9uLWxpc3QtYScpO1xuXG5jb25zdCBhY2NvcmRpb25RdWVzdGlvbiA9IHF1ZXN0aW9uLmZvckVhY2goKGVsZSwgaW5kZXgpID0+IHtcbiAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFuc3dlcltpbmRleF0uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBhY2NvcmRpb25BbnN3ZXIgPSBhbnN3ZXIuZm9yRWFjaCgoZWxlLCBpbmRleCkgPT4ge1xuICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYW5zd2VyW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gIH0pO1xufSk7XG5leHBvcnQge2FjY29yZGlvblF1ZXN0aW9uLCBhY2NvcmRpb25BbnN3ZXJ9XG4iXSwibmFtZXMiOlsicXVlc3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbnN3ZXIiLCJhY2NvcmRpb25RdWVzdGlvbiIsImZvckVhY2giLCJlbGUiLCJpbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJhY2NvcmRpb25BbnN3ZXIiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/accordion.js\n");

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
/******/ 	__webpack_modules__["./src/js/accordion.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;