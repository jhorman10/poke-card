"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard/index.jsx":
/*!***************************************!*\
  !*** ./src/pages/dashboard/index.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card/index.jsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Pagination */ \"./src/components/Pagination/index.jsx\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Spinner */ \"./src/components/Spinner/index.jsx\");\n/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/usePagination */ \"./src/hooks/usePagination.js\");\n/* harmony import */ var _hooks_usePokemons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/usePokemons */ \"./src/hooks/usePokemons.js\");\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout/Layout */ \"./src/components/Layout/Layout.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const { pokemons , getPokemons  } = (0,_hooks_usePokemons__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const { pageSize , currentPage , paginatePokes , handlePageChange  } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(pokemons);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getPokemons();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 \",\n                children: paginatePokes && paginatePokes !== [] ? paginatePokes.map((pokemon, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            name: pokemon.name,\n                            ...pokemon\n                        }, pokemon.url, false, {\n                            fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"h-screen\": true,\n                    flex: true,\n                    \"items-center\": true,\n                    \"justify-center\": true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}, void 0, false, {\n                        fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                items: pokemons.length,\n                pageSize: pageSize,\n                currentPage: currentPage,\n                onPageChange: handlePageChange\n            }, void 0, false, {\n                fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"oOgA6sL5Jpz+rHGJ/FsGcleZ1FU=\", false, function() {\n    return [\n        _hooks_usePokemons__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _hooks_usePagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDRztBQUNZO0FBQ0Y7QUFDRztBQUNKO0FBQ007QUFDdkI7QUFFZCxTQUFTUSxZQUFZOztJQUNsQyxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsWUFBVyxFQUFFLEdBQUdMLDhEQUFXQTtJQUM3QyxNQUFNLEVBQUVNLFNBQVEsRUFBRUMsWUFBVyxFQUFFQyxjQUFhLEVBQUVDLGlCQUFnQixFQUFFLEdBQzlEVixnRUFBYUEsQ0FBQ0s7SUFFaEJULGdEQUFTQSxDQUFDLElBQU07UUFDZFU7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0osaUVBQU1BOzswQkFDTCw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ1pILGlCQUFpQkEsa0JBQWtCLEVBQUUsR0FDcENBLGNBQWNJLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxrQkFDMUIsOERBQUNaLGtEQUFJQTtrQ0FDTCw0RUFBQ04sd0RBQUlBOzRCQUFtQm1CLE1BQU1GLFFBQVFFLElBQUk7NEJBQUcsR0FBR0YsT0FBTzsyQkFBNUNBLFFBQVFHLEdBQUc7Ozs7Ozs7Ozs4Q0FJeEIsOERBQUNOO29CQUFJTyxVQUFRO29CQUFDQyxJQUFJO29CQUFDQyxjQUFZO29CQUFDQyxnQkFBYzs4QkFDNUMsNEVBQUN0Qix3REFBT0E7Ozs7Ozs7Ozt3QkFFWDs7Ozs7OzBCQUVILDhEQUFDRCw4REFBVUE7Z0JBQ1R3QixPQUFPakIsU0FBU2tCLE1BQU07Z0JBQ3RCaEIsVUFBVUE7Z0JBQ1ZDLGFBQWFBO2dCQUNiZ0IsY0FBY2Q7Ozs7Ozs7Ozs7OztBQUl0QixDQUFDO0dBaEN1Qk47O1FBQ1lILDBEQUFXQTtRQUUzQ0QsNERBQWFBOzs7S0FIT0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qc3g/N2FjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0IHVzZVBhZ2luYXRpb24gZnJvbSAnQC9ob29rcy91c2VQYWdpbmF0aW9uJztcbmltcG9ydCB1c2VQb2tlbW9ucyBmcm9tICdAL2hvb2tzL3VzZVBva2Vtb25zJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgY29uc3QgeyBwb2tlbW9ucywgZ2V0UG9rZW1vbnMgfSA9IHVzZVBva2Vtb25zKCk7XG4gIGNvbnN0IHsgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBwYWdpbmF0ZVBva2VzLCBoYW5kbGVQYWdlQ2hhbmdlIH0gPVxuICAgIHVzZVBhZ2luYXRpb24ocG9rZW1vbnMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UG9rZW1vbnMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBsZzpncmlkLWNvbHMtNSBcIj5cbiAgICAgICAge3BhZ2luYXRlUG9rZXMgJiYgcGFnaW5hdGVQb2tlcyAhPT0gW10gPyAoXG4gICAgICAgICAgcGFnaW5hdGVQb2tlcy5tYXAoKHBva2Vtb24sIGkpID0+IChcbiAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgPENhcmQga2V5PXtwb2tlbW9uLnVybH0gbmFtZT17cG9rZW1vbi5uYW1lfSB7Li4ucG9rZW1vbn0gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXI+XG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8UGFnaW5hdGlvblxuICAgICAgICBpdGVtcz17cG9rZW1vbnMubGVuZ3RofVxuICAgICAgICBwYWdlU2l6ZT17cGFnZVNpemV9XG4gICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJDYXJkIiwiUGFnaW5hdGlvbiIsIlNwaW5uZXIiLCJ1c2VQYWdpbmF0aW9uIiwidXNlUG9rZW1vbnMiLCJMYXlvdXQiLCJMaW5rIiwiRGFzaGJvYXJkIiwicG9rZW1vbnMiLCJnZXRQb2tlbW9ucyIsInBhZ2VTaXplIiwiY3VycmVudFBhZ2UiLCJwYWdpbmF0ZVBva2VzIiwiaGFuZGxlUGFnZUNoYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBva2Vtb24iLCJpIiwibmFtZSIsInVybCIsImgtc2NyZWVuIiwiZmxleCIsIml0ZW1zLWNlbnRlciIsImp1c3RpZnktY2VudGVyIiwiaXRlbXMiLCJsZW5ndGgiLCJvblBhZ2VDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.jsx\n"));

/***/ })

});