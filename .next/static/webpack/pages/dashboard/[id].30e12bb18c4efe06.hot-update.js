"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/[id]",{

/***/ "./src/pages/dashboard/[id]/index.jsx":
/*!********************************************!*\
  !*** ./src/pages/dashboard/[id]/index.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ID; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"./src/constants/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ID() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log(router);\n    const { query  } = router;\n    const { id , name  } = query;\n    const url = \"\".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.GET_POKEMON_DETAILS).concat(id);\n    const pokemon = {\n        url,\n        name\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                ...pokemon\n            }, void 0, false, {\n                fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/[id]/index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/[id]/index.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(ID, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ID;\nvar _c;\n$RefreshReg$(_c, \"ID\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL1tpZF0vaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUNjO0FBQ1Y7QUFFekIsU0FBU0csS0FBSzs7SUFDM0IsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCRyxRQUFRQyxHQUFHLENBQUNGO0lBRVosTUFBTSxFQUFFRyxNQUFLLEVBQUUsR0FBR0g7SUFDbEIsTUFBTSxFQUFFSSxHQUFFLEVBQUVDLEtBQUksRUFBRSxHQUFHRjtJQUVyQixNQUFNRyxNQUFNLEdBQXlCRixPQUF0QlAsMkRBQW1CQSxFQUFNLE9BQUhPO0lBQ3JDLE1BQU1HLFVBQVU7UUFDZEQ7UUFDQUQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNaLDZDQUFJQTtnQkFBRSxHQUFHVyxPQUFPOzs7Ozs7WUFBRzs7Ozs7OztBQUcxQixDQUFDO0dBbEJ1QlI7O1FBQ1BELGtEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvW2lkXS9pbmRleC5qc3g/MzY4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzJztcbmltcG9ydCB7IEdFVF9QT0tFTU9OX0RFVEFJTFMgfSBmcm9tICdAL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElEKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2cocm91dGVyKTtcblxuICBjb25zdCB7IHF1ZXJ5IH0gPSByb3V0ZXI7XG4gIGNvbnN0IHsgaWQsIG5hbWUgfSA9IHF1ZXJ5O1xuXG4gIGNvbnN0IHVybCA9IGAke0dFVF9QT0tFTU9OX0RFVEFJTFN9JHtpZH1gO1xuICBjb25zdCBwb2tlbW9uID0ge1xuICAgIHVybCxcbiAgICBuYW1lLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiA+XG4gICAgICA8Q2FyZCB7Li4ucG9rZW1vbn0vPjtcbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJHRVRfUE9LRU1PTl9ERVRBSUxTIiwidXNlUm91dGVyIiwiSUQiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJpZCIsIm5hbWUiLCJ1cmwiLCJwb2tlbW9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard/[id]/index.jsx\n"));

/***/ })

});