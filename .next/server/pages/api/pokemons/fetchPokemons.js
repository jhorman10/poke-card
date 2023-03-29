"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/pokemons/fetchPokemons";
exports.ids = ["pages/api/pokemons/fetchPokemons"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"GET_100_POKEMONS\": () => (/* binding */ GET_100_POKEMONS),\n/* harmony export */   \"GET_POKEMON_DETAILS\": () => (/* binding */ GET_POKEMON_DETAILS),\n/* harmony export */   \"PAGINATION_SIZE\": () => (/* binding */ PAGINATION_SIZE),\n/* harmony export */   \"TOKEN_NAME\": () => (/* binding */ TOKEN_NAME),\n/* harmony export */   \"TOKEN_SECRET\": () => (/* binding */ TOKEN_SECRET),\n/* harmony export */   \"USER_NAME\": () => (/* binding */ USER_NAME)\n/* harmony export */ });\nconst TOKEN_SECRET = \"secret123$\";\nconst TOKEN_NAME = \"MyToken\";\nconst USER_NAME = \"Usuario\";\nconst BASE_URL = \"https://pokeapi.co/api/v2/\";\nconst GET_100_POKEMONS = \"pokemon?limit=100&offset=0\";\nconst GET_POKEMON_DETAILS = `${BASE_URL}pokemon/`;\nconst PAGINATION_SIZE = 10;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxlQUFlLGFBQWE7QUFDbEMsTUFBTUMsYUFBYSxVQUFVO0FBQzdCLE1BQU1DLFlBQVksVUFBVTtBQUU1QixNQUFNQyxXQUFXLDZCQUE2QjtBQUM5QyxNQUFNQyxtQkFBbUIsNkJBQTZCO0FBQ3RELE1BQU1DLHNCQUFzQixDQUFDLEVBQUVGLFNBQVMsUUFBUSxDQUFDLENBQUM7QUFDbEQsTUFBTUcsa0JBQWtCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlLWNhcmQvLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzPzE4YjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRPS0VOX1NFQ1JFVCA9ICdzZWNyZXQxMjMkJztcbmV4cG9ydCBjb25zdCBUT0tFTl9OQU1FID0gJ015VG9rZW4nO1xuZXhwb3J0IGNvbnN0IFVTRVJfTkFNRSA9ICdVc3VhcmlvJztcblxuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvJztcbmV4cG9ydCBjb25zdCBHRVRfMTAwX1BPS0VNT05TID0gJ3Bva2Vtb24/bGltaXQ9MTAwJm9mZnNldD0wJztcbmV4cG9ydCBjb25zdCBHRVRfUE9LRU1PTl9ERVRBSUxTID0gYCR7QkFTRV9VUkx9cG9rZW1vbi9gO1xuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fU0laRSA9IDEwO1xuIl0sIm5hbWVzIjpbIlRPS0VOX1NFQ1JFVCIsIlRPS0VOX05BTUUiLCJVU0VSX05BTUUiLCJCQVNFX1VSTCIsIkdFVF8xMDBfUE9LRU1PTlMiLCJHRVRfUE9LRU1PTl9ERVRBSUxTIiwiUEFHSU5BVElPTl9TSVpFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/constants/index.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/pokemons/fetchPokemons.js":
/*!*************************************************!*\
  !*** ./src/pages/api/pokemons/fetchPokemons.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchPokemons)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"(api)/./src/constants/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function fetchPokemons(req, res) {\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`${_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL}${_constants__WEBPACK_IMPORTED_MODULE_1__.GET_100_POKEMONS}`);\n    const { results  } = data;\n    return res.status(200).json({\n        results\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Bva2Vtb25zL2ZldGNoUG9rZW1vbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQytCO0FBRTFDLGVBQWVHLGNBQWNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3BELE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUcsTUFBTU4saURBQVMsQ0FBQyxDQUFDLEVBQUVDLGdEQUFRQSxDQUFDLEVBQUVDLHdEQUFnQkEsQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sRUFBRU0sUUFBTyxFQUFFLEdBQUdGO0lBQ3BCLE9BQU9ELElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUY7SUFBUTtBQUN4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZS1jYXJkLy4vc3JjL3BhZ2VzL2FwaS9wb2tlbW9ucy9mZXRjaFBva2Vtb25zLmpzP2Q3YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEJBU0VfVVJMLCBHRVRfMTAwX1BPS0VNT05TIH0gZnJvbSAnQC9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaFBva2Vtb25zKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0JBU0VfVVJMfSR7R0VUXzEwMF9QT0tFTU9OU31gKTtcbiAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHRzIH0pO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQkFTRV9VUkwiLCJHRVRfMTAwX1BPS0VNT05TIiwiZmV0Y2hQb2tlbW9ucyIsInJlcSIsInJlcyIsImRhdGEiLCJnZXQiLCJyZXN1bHRzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/pokemons/fetchPokemons.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/pokemons/fetchPokemons.js"));
module.exports = __webpack_exports__;

})();