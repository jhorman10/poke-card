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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card/index.jsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Pagination */ \"./src/components/Pagination/index.jsx\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Spinner */ \"./src/components/Spinner/index.jsx\");\n/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/usePagination */ \"./src/hooks/usePagination.js\");\n/* harmony import */ var _hooks_usePokemons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/usePokemons */ \"./src/hooks/usePokemons.js\");\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout/Layout */ \"./src/components/Layout/Layout.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const { pokemons , getPokemons  } = (0,_hooks_usePokemons__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const { pageSize , currentPage , paginatePokes , handlePageChange  } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(pokemons);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getPokemons();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 \",\n                children: paginatePokes && paginatePokes !== [] ? paginatePokes.map((pokemon, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        href: \"/dashboard\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            name: pokemon.name,\n                            ...pokemon\n                        }, pokemon.url, false, {\n                            fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 15\n                        }, this)\n                    }, pokemon.name, false, {\n                        fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"h-screen\": true,\n                    flex: true,\n                    \"items-center\": true,\n                    \"justify-center\": true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}, void 0, false, {\n                        fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                items: pokemons.length,\n                pageSize: pageSize,\n                currentPage: currentPage,\n                onPageChange: handlePageChange\n            }, void 0, false, {\n                fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jhormanorozco/Documents/NextJS/poke-card/src/pages/dashboard/index.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"oOgA6sL5Jpz+rHGJ/FsGcleZ1FU=\", false, function() {\n    return [\n        _hooks_usePokemons__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _hooks_usePagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDRztBQUNZO0FBQ0Y7QUFDRztBQUNKO0FBQ007QUFDdkI7QUFFZCxTQUFTUSxZQUFZOztJQUNsQyxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsWUFBVyxFQUFFLEdBQUdMLDhEQUFXQTtJQUM3QyxNQUFNLEVBQUVNLFNBQVEsRUFBRUMsWUFBVyxFQUFFQyxjQUFhLEVBQUVDLGlCQUFnQixFQUFFLEdBQzlEVixnRUFBYUEsQ0FBQ0s7SUFFaEJULGdEQUFTQSxDQUFDLElBQU07UUFDZFU7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0osaUVBQU1BOzswQkFDTCw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ1pILGlCQUFpQkEsa0JBQWtCLEVBQUUsR0FDcENBLGNBQWNJLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxrQkFDMUIsOERBQUNaLGtEQUFJQTt3QkFBb0JhLE1BQU87a0NBQzlCLDRFQUFDbkIsd0RBQUlBOzRCQUFtQm9CLE1BQU1ILFFBQVFHLElBQUk7NEJBQUcsR0FBR0gsT0FBTzsyQkFBNUNBLFFBQVFJLEdBQUc7Ozs7O3VCQURiSixRQUFRRyxJQUFJOzs7OzhDQUt6Qiw4REFBQ047b0JBQUlRLFVBQVE7b0JBQUNDLElBQUk7b0JBQUNDLGNBQVk7b0JBQUNDLGdCQUFjOzhCQUM1Qyw0RUFBQ3ZCLHdEQUFPQTs7Ozs7Ozs7O3dCQUVYOzs7Ozs7MEJBRUgsOERBQUNELDhEQUFVQTtnQkFDVHlCLE9BQU9sQixTQUFTbUIsTUFBTTtnQkFDdEJqQixVQUFVQTtnQkFDVkMsYUFBYUE7Z0JBQ2JpQixjQUFjZjs7Ozs7Ozs7Ozs7O0FBSXRCLENBQUM7R0FoQ3VCTjs7UUFDWUgsMERBQVdBO1FBRTNDRCw0REFBYUE7OztLQUhPSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzeD83YWMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9QYWdpbmF0aW9uJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgdXNlUGFnaW5hdGlvbiBmcm9tICdAL2hvb2tzL3VzZVBhZ2luYXRpb24nO1xuaW1wb3J0IHVzZVBva2Vtb25zIGZyb20gJ0AvaG9va3MvdXNlUG9rZW1vbnMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICBjb25zdCB7IHBva2Vtb25zLCBnZXRQb2tlbW9ucyB9ID0gdXNlUG9rZW1vbnMoKTtcbiAgY29uc3QgeyBwYWdlU2l6ZSwgY3VycmVudFBhZ2UsIHBhZ2luYXRlUG9rZXMsIGhhbmRsZVBhZ2VDaGFuZ2UgfSA9XG4gICAgdXNlUGFnaW5hdGlvbihwb2tlbW9ucyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQb2tlbW9ucygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC02IHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGxnOmdyaWQtY29scy01IFwiPlxuICAgICAgICB7cGFnaW5hdGVQb2tlcyAmJiBwYWdpbmF0ZVBva2VzICE9PSBbXSA/IChcbiAgICAgICAgICBwYWdpbmF0ZVBva2VzLm1hcCgocG9rZW1vbiwgaSkgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtwb2tlbW9uLm5hbWV9IGhyZWY9e2AvZGFzaGJvYXJkYH0+XG4gICAgICAgICAgICAgIDxDYXJkIGtleT17cG9rZW1vbi51cmx9IG5hbWU9e3Bva2Vtb24ubmFtZX0gey4uLnBva2Vtb259IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyPlxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgaXRlbXM9e3Bva2Vtb25zLmxlbmd0aH1cbiAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxuICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiQ2FyZCIsIlBhZ2luYXRpb24iLCJTcGlubmVyIiwidXNlUGFnaW5hdGlvbiIsInVzZVBva2Vtb25zIiwiTGF5b3V0IiwiTGluayIsIkRhc2hib2FyZCIsInBva2Vtb25zIiwiZ2V0UG9rZW1vbnMiLCJwYWdlU2l6ZSIsImN1cnJlbnRQYWdlIiwicGFnaW5hdGVQb2tlcyIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb2tlbW9uIiwiaSIsImhyZWYiLCJuYW1lIiwidXJsIiwiaC1zY3JlZW4iLCJmbGV4IiwiaXRlbXMtY2VudGVyIiwianVzdGlmeS1jZW50ZXIiLCJpdGVtcyIsImxlbmd0aCIsIm9uUGFnZUNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.jsx\n"));

/***/ })

});