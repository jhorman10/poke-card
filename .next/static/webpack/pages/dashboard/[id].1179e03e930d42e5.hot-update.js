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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ID; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"./src/constants/index.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ID() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { query  } = router;\n    const { id  } = query;\n    const url = \"\".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.GET_POKEMON_DETAILS).concat(id);\n    const { pokeDetails , getPokemonDetails  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.usePokemonDetails)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        getPokemonDetails();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        ...pokeDetails\n    }, void 0, false, {\n        fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/[id]/index.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(ID, \"FOgqtbfn/ba4cjQd9tgv1GSHZZk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.usePokemonDetails\n    ];\n});\n_c = ID;\nvar _c;\n$RefreshReg$(_c, \"ID\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL1tpZF0vaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNjO0FBQ047QUFDTDtBQUNMO0FBRW5CLFNBQVNLLEtBQUs7O0lBQzNCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUVJLE1BQUssRUFBRSxHQUFHRDtJQUNsQixNQUFNLEVBQUVFLEdBQUUsRUFBRSxHQUFHRDtJQUVmLE1BQU1FLE1BQU0sR0FBeUJELE9BQXRCUCwyREFBbUJBLEVBQU0sT0FBSE87SUFFckMsTUFBTSxFQUFDRSxZQUFXLEVBQUVDLGtCQUFpQixFQUFDLEdBQUdULHlEQUFpQkE7SUFFMURFLGdEQUFTQSxDQUFDLElBQU07UUFDZE87SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1gsNkNBQUlBO1FBQUUsR0FBR1UsV0FBVzs7Ozs7O0FBRXpCLENBQUM7R0FoQnVCTDs7UUFDUEYsa0RBQVNBO1FBTWlCRCxxREFBaUJBOzs7S0FQcENHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvW2lkXS9pbmRleC5qc3g/MzY4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzJztcbmltcG9ydCB7IEdFVF9QT0tFTU9OX0RFVEFJTFMgfSBmcm9tICdAL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VQb2tlbW9uRGV0YWlscyB9IGZyb20gJ0AvaG9va3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElEKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyXG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5XG5cbiAgY29uc3QgdXJsID0gYCR7R0VUX1BPS0VNT05fREVUQUlMU30ke2lkfWA7XG5cbiAgY29uc3Qge3Bva2VEZXRhaWxzLCBnZXRQb2tlbW9uRGV0YWlsc30gPSB1c2VQb2tlbW9uRGV0YWlscygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UG9rZW1vbkRldGFpbHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgey4uLnBva2VEZXRhaWxzfSAvPlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsIkdFVF9QT0tFTU9OX0RFVEFJTFMiLCJ1c2VQb2tlbW9uRGV0YWlscyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIklEIiwicm91dGVyIiwicXVlcnkiLCJpZCIsInVybCIsInBva2VEZXRhaWxzIiwiZ2V0UG9rZW1vbkRldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/[id]/index.jsx\n"));

/***/ })

});