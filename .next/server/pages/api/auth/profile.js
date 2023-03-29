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
exports.id = "pages/api/auth/profile";
exports.ids = ["pages/api/auth/profile"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"GET_100_POKEMONS\": () => (/* binding */ GET_100_POKEMONS),\n/* harmony export */   \"GET_POKEMON_DETAILS\": () => (/* binding */ GET_POKEMON_DETAILS),\n/* harmony export */   \"PAGINATION_SIZE\": () => (/* binding */ PAGINATION_SIZE),\n/* harmony export */   \"TOKEN_NAME\": () => (/* binding */ TOKEN_NAME),\n/* harmony export */   \"TOKEN_SECRET\": () => (/* binding */ TOKEN_SECRET),\n/* harmony export */   \"USER_NAME\": () => (/* binding */ USER_NAME)\n/* harmony export */ });\nconst TOKEN_SECRET = \"secret123$\";\nconst TOKEN_NAME = \"MyToken\";\nconst USER_NAME = \"Usuario\";\nconst BASE_URL = \"https://pokeapi.co/api/v2/\";\nconst GET_100_POKEMONS = \"pokemon?limit=100&offset=0\";\nconst GET_POKEMON_DETAILS = `${BASE_URL}pokemon/`;\nconst PAGINATION_SIZE = 10;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxlQUFlLGFBQWE7QUFDbEMsTUFBTUMsYUFBYSxVQUFVO0FBQzdCLE1BQU1DLFlBQVksVUFBVTtBQUU1QixNQUFNQyxXQUFXLDZCQUE2QjtBQUM5QyxNQUFNQyxtQkFBbUIsNkJBQTZCO0FBQ3RELE1BQU1DLHNCQUFzQixDQUFDLEVBQUVGLFNBQVMsUUFBUSxDQUFDLENBQUM7QUFDbEQsTUFBTUcsa0JBQWtCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlLWNhcmQvLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzPzE4YjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRPS0VOX1NFQ1JFVCA9ICdzZWNyZXQxMjMkJztcbmV4cG9ydCBjb25zdCBUT0tFTl9OQU1FID0gJ015VG9rZW4nO1xuZXhwb3J0IGNvbnN0IFVTRVJfTkFNRSA9ICdVc3VhcmlvJztcblxuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvJztcbmV4cG9ydCBjb25zdCBHRVRfMTAwX1BPS0VNT05TID0gJ3Bva2Vtb24/bGltaXQ9MTAwJm9mZnNldD0wJztcbmV4cG9ydCBjb25zdCBHRVRfUE9LRU1PTl9ERVRBSUxTID0gYCR7QkFTRV9VUkx9cG9rZW1vbi9gO1xuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fU0laRSA9IDEwO1xuIl0sIm5hbWVzIjpbIlRPS0VOX1NFQ1JFVCIsIlRPS0VOX05BTUUiLCJVU0VSX05BTUUiLCJCQVNFX1VSTCIsIkdFVF8xMDBfUE9LRU1PTlMiLCJHRVRfUE9LRU1PTl9ERVRBSUxTIiwiUEFHSU5BVElPTl9TSVpFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/constants/index.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/profile.js":
/*!***************************************!*\
  !*** ./src/pages/api/auth/profile.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ profileHandler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ \"(api)/./src/constants/index.js\");\n\n\nfunction profileHandler(req, res) {\n    const { MyToken  } = req.cookies;\n    if (!MyToken) {\n        return res.status(401).json({\n            error: \"No token\"\n        });\n    }\n    try {\n        const user = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(MyToken, _constants__WEBPACK_IMPORTED_MODULE_1__.TOKEN_SECRET);\n        return res.json({\n            email: user.email,\n            username: user.username\n        });\n    } catch (error) {\n        return res.status(401).json({\n            error: \"invalid token\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBQ1k7QUFFbkMsU0FBU0UsZUFBZUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR0YsSUFBSUcsT0FBTztJQUUvQixJQUFJLENBQUNELFNBQVM7UUFDWixPQUFPRCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBVztJQUNsRCxDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1DLE9BQU9WLG9EQUFNQSxDQUFDSyxTQUFTSixvREFBWUE7UUFDekMsT0FBT0csSUFBSUksSUFBSSxDQUFDO1lBQUVHLE9BQU9ELEtBQUtDLEtBQUs7WUFBRUMsVUFBVUYsS0FBS0UsUUFBUTtRQUFDO0lBQy9ELEVBQUUsT0FBT0gsT0FBTztRQUNkLE9BQU9MLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFnQjtJQUN2RDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlLWNhcmQvLi9zcmMvcGFnZXMvYXBpL2F1dGgvcHJvZmlsZS5qcz85ZjJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZlcmlmeSB9IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBUT0tFTl9TRUNSRVQgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9maWxlSGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IE15VG9rZW4gfSA9IHJlcS5jb29raWVzO1xuXG4gIGlmICghTXlUb2tlbikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnTm8gdG9rZW4nIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gdmVyaWZ5KE15VG9rZW4sIFRPS0VOX1NFQ1JFVCk7XG4gICAgcmV0dXJuIHJlcy5qc29uKHsgZW1haWw6IHVzZXIuZW1haWwsIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnaW52YWxpZCB0b2tlbicgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnkiLCJUT0tFTl9TRUNSRVQiLCJwcm9maWxlSGFuZGxlciIsInJlcSIsInJlcyIsIk15VG9rZW4iLCJjb29raWVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidXNlciIsImVtYWlsIiwidXNlcm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/profile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/profile.js"));
module.exports = __webpack_exports__;

})();