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
exports.id = "pages/api/auth/logout";
exports.ids = ["pages/api/auth/logout"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

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

/***/ "(api)/./src/pages/api/auth/logout.js":
/*!**************************************!*\
  !*** ./src/pages/api/auth/logout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logoutHandler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(api)/./src/constants/index.js\");\n\n\n\nfunction logoutHandler(req, res) {\n    const { MyToken  } = req.cookies;\n    if (!MyToken) {\n        return res.status(401).json({\n            error: \"No token\"\n        });\n    }\n    try {\n        (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(MyToken, _constants__WEBPACK_IMPORTED_MODULE_2__.TOKEN_SECRET);\n        const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_1__.serialize)(_constants__WEBPACK_IMPORTED_MODULE_2__.TOKEN_NAME, null, {\n            httpOnly: true,\n            secure: \"development\" !== \"production\",\n            sameSite: \"strict\",\n            maxAge: 0,\n            path: \"/\"\n        });\n        res.setHeader(\"Set-Cookie\", serialized);\n        res.status(200).json(\"Logout successfully\");\n    } catch (error) {\n        res.status(401).json({\n            error: \"invalid token\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUNIO0FBQ29CO0FBRXhDLFNBQVNJLGNBQWNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdGLElBQUlHLE9BQU87SUFFL0IsSUFBSSxDQUFDRCxTQUFTO1FBQ1osT0FBT0QsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQVc7SUFDbEQsQ0FBQztJQUVELElBQUk7UUFDRlgsb0RBQU1BLENBQUNPLFNBQVNMLG9EQUFZQTtRQUM1QixNQUFNVSxhQUFhWCxpREFBU0EsQ0FBQ0Usa0RBQVVBLEVBQUUsSUFBSSxFQUFFO1lBQzdDVSxVQUFVLElBQUk7WUFDZEMsUUFBUUMsa0JBQXlCO1lBQ2pDQyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsTUFBTTtRQUNSO1FBQ0FaLElBQUlhLFNBQVMsQ0FBQyxjQUFjUDtRQUM1Qk4sSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztJQUN2QixFQUFFLE9BQU9DLE9BQU87UUFDZEwsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWdCO0lBQ2hEO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2UtY2FyZC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9sb2dvdXQuanM/NWFkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJpZnkgfSBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnY29va2llJztcbmltcG9ydCB7IFRPS0VOX1NFQ1JFVCwgVE9LRU5fTkFNRSB9IGZyb20gJ0AvY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nb3V0SGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IE15VG9rZW4gfSA9IHJlcS5jb29raWVzO1xuXG4gIGlmICghTXlUb2tlbikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnTm8gdG9rZW4nIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICB2ZXJpZnkoTXlUb2tlbiwgVE9LRU5fU0VDUkVUKTtcbiAgICBjb25zdCBzZXJpYWxpemVkID0gc2VyaWFsaXplKFRPS0VOX05BTUUsIG51bGwsIHtcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgc2FtZVNpdGU6ICdzdHJpY3QnLFxuICAgICAgbWF4QWdlOiAwLFxuICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBzZXJpYWxpemVkKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbignTG9nb3V0IHN1Y2Nlc3NmdWxseScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdpbnZhbGlkIHRva2VuJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInZlcmlmeSIsInNlcmlhbGl6ZSIsIlRPS0VOX1NFQ1JFVCIsIlRPS0VOX05BTUUiLCJsb2dvdXRIYW5kbGVyIiwicmVxIiwicmVzIiwiTXlUb2tlbiIsImNvb2tpZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzZXJpYWxpemVkIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwic2FtZVNpdGUiLCJtYXhBZ2UiLCJwYXRoIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/logout.js"));
module.exports = __webpack_exports__;

})();