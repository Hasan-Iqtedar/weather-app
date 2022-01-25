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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initialize(\"Islamabad\");\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\nlet domHandler = (() => {\n  let location = document.querySelector(\"#location\");\n  let searchBtn = document.querySelector(\"#search-icon\");\n\n  let city = document.querySelector(\"#city\");\n  let temperature = document.querySelector(\"#temperature\");\n  let details = document.querySelectorAll(\".details\");\n\n  let getLocation = () => {\n    return location.value;\n  };\n\n  let updateContent = (data) => {\n    city.textContent = data.name;\n    temperature.textContent = data.temperature + \" °F\";\n    details[0].textContent = data.feelsLike + \" °F\";\n    details[1].textContent = data.weather;\n    details[2].textContent = data.humidity;\n    details[3].textContent = data.windSpeed;\n  };\n\n  location.addEventListener(\"keyup\", (e) => {\n    if (e.keyCode == 13) {\n      searchBtn.click();\n    }\n  });\n\n  searchBtn.addEventListener(\"click\", () => {\n    let location = getLocation();\n    if (location) {\n      _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeather(location).then((data) => {\n        updateContent(data);\n      });\n    }\n  });\n\n  let initialize = (location) => {\n    _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeather(location).then((data) => updateContent(data));\n  }\n\n  return { initialize };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domHandler);\n\n\n//# sourceURL=webpack://weather-app/./src/ui.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet weather = (() => {\n  let apiKey = \"d9f7ecce0fe14652d86845b06833e3ff\";\n\n  let processData = (data) => {\n    let name = data.name;\n    let temperature = data.main.temp;\n    let feelsLike = data.main.feels_like;\n    let humidity = data.main.humidity;\n    let country = data.sys.country;\n    let weather = data.weather[0].description;\n    let windSpeed = data.wind.speed;\n\n    return {\n      name,\n      country,\n      weather,\n      temperature,\n      feelsLike,\n      humidity,\n      windSpeed,\n    };\n  };\n\n  let getWeather = (location) => {\n    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;\n    return fetch(url, {\n      mode: \"cors\",\n    })\n      .then((response) => response.json())\n      .then((data) => {\n        return processData(data);\n      })\n      .catch((err) => console.log(\"Error: \" + err));\n  };\n\n  return { getWeather };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;