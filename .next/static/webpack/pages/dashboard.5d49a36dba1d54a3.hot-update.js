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

/***/ "./src/hooks/usePokemonDetails.js":
/*!****************************************!*\
  !*** ./src/hooks/usePokemonDetails.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usePokemonDetails; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction usePokemonDetails(url) {\n    _s();\n    const [pokeDetails, setPokeDetails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        moves: [],\n        img: \"\",\n        weight: 0,\n        id: 0\n    });\n    const getPokemonDetails = async ()=>{\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(url);\n        const id = url.split(\"/\")[6];\n        const pokeDetails = {\n            moves: [\n                data.moves[0].move.name,\n                data.moves[1].move.name\n            ],\n            weight: data.weight,\n            img: data.sprites.other.home.front_default,\n            id\n        };\n        setPokeDetails(pokeDetails);\n    };\n    const { img , moves , weight  } = pokeDetails;\n    return {\n        pokeDetails,\n        getPokemonDetails\n    };\n}\n_s(usePokemonDetails, \"plOy2oK3zXvY/HqGugQTmagkubs=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUG9rZW1vbkRldGFpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDTztBQUVsQixTQUFTRSxrQkFBa0JDLEdBQUcsRUFBRTs7SUFDN0MsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO1FBQzdDSyxPQUFPLEVBQUU7UUFDVEMsS0FBSztRQUNMQyxRQUFRO1FBQ1JDLElBQUk7SUFDTjtJQUNBLE1BQU1DLG9CQUFvQixVQUFZO1FBQ3BDLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUcsTUFBTVgsaURBQVMsQ0FBQ0c7UUFDakMsTUFBTU0sS0FBS04sSUFBSVUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVCLE1BQU1ULGNBQWM7WUFDbEJFLE9BQU87Z0JBQUNLLEtBQUtMLEtBQUssQ0FBQyxFQUFFLENBQUNRLElBQUksQ0FBQ0MsSUFBSTtnQkFBRUosS0FBS0wsS0FBSyxDQUFDLEVBQUUsQ0FBQ1EsSUFBSSxDQUFDQyxJQUFJO2FBQUM7WUFDekRQLFFBQVFHLEtBQUtILE1BQU07WUFDbkJELEtBQUtJLEtBQUtLLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7WUFDMUNWO1FBQ0Y7UUFDQUosZUFBZUQ7SUFDakI7SUFFQSxNQUFNLEVBQUVHLElBQUcsRUFBRUQsTUFBSyxFQUFFRSxPQUFNLEVBQUUsR0FBR0o7SUFFL0IsT0FBTztRQUFFQTtRQUFhTTtJQUFrQjtBQUMxQyxDQUFDO0dBdEJ1QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVBva2Vtb25EZXRhaWxzLmpzPzRhNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQb2tlbW9uRGV0YWlscyh1cmwpIHtcbiAgY29uc3QgW3Bva2VEZXRhaWxzLCBzZXRQb2tlRGV0YWlsc10gPSB1c2VTdGF0ZSh7XG4gICAgbW92ZXM6IFtdLFxuICAgIGltZzogJycsXG4gICAgd2VpZ2h0OiAwLFxuICAgIGlkOiAwLFxuICB9KTtcbiAgY29uc3QgZ2V0UG9rZW1vbkRldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICBjb25zdCBpZCA9IHVybC5zcGxpdCgnLycpWzZdO1xuICAgIGNvbnN0IHBva2VEZXRhaWxzID0ge1xuICAgICAgbW92ZXM6IFtkYXRhLm1vdmVzWzBdLm1vdmUubmFtZSwgZGF0YS5tb3Zlc1sxXS5tb3ZlLm5hbWVdLFxuICAgICAgd2VpZ2h0OiBkYXRhLndlaWdodCxcbiAgICAgIGltZzogZGF0YS5zcHJpdGVzLm90aGVyLmhvbWUuZnJvbnRfZGVmYXVsdCxcbiAgICAgIGlkLFxuICAgIH07XG4gICAgc2V0UG9rZURldGFpbHMocG9rZURldGFpbHMpO1xuICB9O1xuXG4gIGNvbnN0IHsgaW1nLCBtb3Zlcywgd2VpZ2h0IH0gPSBwb2tlRGV0YWlscztcblxuICByZXR1cm4geyBwb2tlRGV0YWlscywgZ2V0UG9rZW1vbkRldGFpbHMgfTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlUG9rZW1vbkRldGFpbHMiLCJ1cmwiLCJwb2tlRGV0YWlscyIsInNldFBva2VEZXRhaWxzIiwibW92ZXMiLCJpbWciLCJ3ZWlnaHQiLCJpZCIsImdldFBva2Vtb25EZXRhaWxzIiwiZGF0YSIsImdldCIsInNwbGl0IiwibW92ZSIsIm5hbWUiLCJzcHJpdGVzIiwib3RoZXIiLCJob21lIiwiZnJvbnRfZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/usePokemonDetails.js\n"));

/***/ })

});