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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
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

/***/ "(api)/./src/pages/api/auth/login.js":
/*!*************************************!*\
  !*** ./src/pages/api/auth/login.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loginHandler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_users_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../db/users.json */ \"(api)/./src/db/users.json\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants */ \"(api)/./src/constants/index.js\");\n\n\n\n\nfunction loginHandler(req, res) {\n    let { email , password  } = req.body;\n    const expToken = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30;\n    const verifyUsers = (email, password, users)=>{\n        return users.find((user)=>user.email === email && user.password === password);\n    };\n    const verifiedUser = verifyUsers(email, password, _db_users_json__WEBPACK_IMPORTED_MODULE_2__);\n    if (!!verifiedUser) {\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n            exp: expToken,\n            email,\n            username: verifiedUser.username\n        }, _constants__WEBPACK_IMPORTED_MODULE_3__.TOKEN_SECRET);\n        const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_1__.serialize)(_constants__WEBPACK_IMPORTED_MODULE_3__.TOKEN_NAME, token, {\n            httpOnly: true,\n            secure: \"development\" === \"production\",\n            sameSite: \"strict\",\n            maxAge: 1000 * 60 * 60 * 24 * 30,\n            path: \"/\"\n        });\n        res.setHeader(\"Set-Cookie\", serialized);\n        return res.json(\"Login successfully\");\n    }\n    return res.status(401).json({\n        error: \"Invalid email or password\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUNJO0FBQ1E7QUFDdUI7QUFFbkQsU0FBU00sYUFBYUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsSUFBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHSCxJQUFJSSxJQUFJO0lBRWxDLE1BQU1DLFdBQVdDLEtBQUtDLEtBQUssQ0FBQ0MsS0FBS0MsR0FBRyxLQUFLLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFFaEUsTUFBTUMsY0FBYyxDQUFDUixPQUFPQyxVQUFVUixRQUFVO1FBQzlDLE9BQU9BLE1BQU1nQixJQUFJLENBQ2YsQ0FBQ0MsT0FBU0EsS0FBS1YsS0FBSyxLQUFLQSxTQUFTVSxLQUFLVCxRQUFRLEtBQUtBO0lBRXhEO0lBRUEsTUFBTVUsZUFBZUgsWUFBWVIsT0FBT0MsVUFBVVIsMkNBQUtBO0lBRXZELElBQUksQ0FBQyxDQUFDa0IsY0FBYztRQUNsQixNQUFNQyxRQUFRckIsd0RBQVEsQ0FDcEI7WUFDRXVCLEtBQUtYO1lBQ0xIO1lBQ0FlLFVBQVVKLGFBQWFJLFFBQVE7UUFDakMsR0FDQXJCLG9EQUFZQTtRQUdkLE1BQU1zQixhQUFheEIsaURBQVNBLENBQUNHLGtEQUFVQSxFQUFFaUIsT0FBTztZQUM5Q0ssVUFBVSxJQUFJO1lBQ2RDLFFBQVFDLGFBQW9CLEtBQUs7WUFDakNHLFVBQVU7WUFDVkMsUUFBUSxPQUFPLEtBQUssS0FBSyxLQUFLO1lBQzlCQyxNQUFNO1FBQ1I7UUFFQXpCLElBQUkwQixTQUFTLENBQUMsY0FBY1Q7UUFDNUIsT0FBT2pCLElBQUkyQixJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELE9BQU8zQixJQUFJNEIsTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQztRQUMxQkUsT0FBTztJQUNUO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2UtY2FyZC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcz83ZGZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ2Nvb2tpZSc7XG5pbXBvcnQgdXNlcnMgZnJvbSAnLi4vLi4vLi4vZGIvdXNlcnMuanNvbic7XG5pbXBvcnQgeyBUT0tFTl9TRUNSRVQsIFRPS0VOX05BTUUsIFVTRVJfTkFNRSB9IGZyb20gJ0AvY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW5IYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGxldCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgZXhwVG9rZW4gPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSArIDYwICogNjAgKiAyNCAqIDMwO1xuXG4gIGNvbnN0IHZlcmlmeVVzZXJzID0gKGVtYWlsLCBwYXNzd29yZCwgdXNlcnMpID0+IHtcbiAgICByZXR1cm4gdXNlcnMuZmluZChcbiAgICAgICh1c2VyKSA9PiB1c2VyLmVtYWlsID09PSBlbWFpbCAmJiB1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgdmVyaWZpZWRVc2VyID0gdmVyaWZ5VXNlcnMoZW1haWwsIHBhc3N3b3JkLCB1c2Vycyk7XG5cbiAgaWYgKCEhdmVyaWZpZWRVc2VyKSB7XG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcbiAgICAgIHtcbiAgICAgICAgZXhwOiBleHBUb2tlbixcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHVzZXJuYW1lOiB2ZXJpZmllZFVzZXIudXNlcm5hbWUsXG4gICAgICB9LFxuICAgICAgVE9LRU5fU0VDUkVUXG4gICAgKTtcblxuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUoVE9LRU5fTkFNRSwgdG9rZW4sIHtcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgc2FtZVNpdGU6ICdzdHJpY3QnLFxuICAgICAgbWF4QWdlOiAxMDAwICogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgc2VyaWFsaXplZCk7XG4gICAgcmV0dXJuIHJlcy5qc29uKCdMb2dpbiBzdWNjZXNzZnVsbHknKTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7XG4gICAgZXJyb3I6ICdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJyxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiand0Iiwic2VyaWFsaXplIiwidXNlcnMiLCJUT0tFTl9TRUNSRVQiLCJUT0tFTl9OQU1FIiwiVVNFUl9OQU1FIiwibG9naW5IYW5kbGVyIiwicmVxIiwicmVzIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJleHBUb2tlbiIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ2ZXJpZnlVc2VycyIsImZpbmQiLCJ1c2VyIiwidmVyaWZpZWRVc2VyIiwidG9rZW4iLCJzaWduIiwiZXhwIiwidXNlcm5hbWUiLCJzZXJpYWxpemVkIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJzYW1lU2l0ZSIsIm1heEFnZSIsInBhdGgiLCJzZXRIZWFkZXIiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/login.js\n");

/***/ }),

/***/ "(api)/./src/db/users.json":
/*!***************************!*\
  !*** ./src/db/users.json ***!
  \***************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"email":"mail1@mail.com","password":"pw1mail","username":"Usuario - 1"},{"email":"mail2@mail.com","password":"pw2mail","username":"Usuario - 2"},{"email":"mail3@mail.com","password":"pw3mail","username":"Usuario - 3"},{"email":"mail4@mail.com","password":"pw4mail","username":"Usuario - 4"},{"email":"mail5@mail.com","password":"pw5mail","username":"Usuario - 5"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();