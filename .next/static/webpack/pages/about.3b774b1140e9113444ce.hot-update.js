webpackHotUpdate_N_E("pages/about",{

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./components/navigation.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Container.module.css */ "./styles/Container.module.css");
/* harmony import */ var _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Container_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\NextJS\\nowYes\\components\\container.js",
    _this = undefined;






var Container = function Container(_ref) {
  var currentOption = _ref.currentOption,
      children = _ref.children;
  var options = ["Home", "About", "Gallery", "Contact", "Users"];
  var filteredOptions = options.filter(function (option) {
    return option !== currentOption;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Test - ", currentOption]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_3__["container"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
        options: filteredOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_3__["content"],
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_c = Container;
/* harmony default export */ __webpack_exports__["default"] = (Container);

var _c;

$RefreshReg$(_c, "Container");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiY3VycmVudE9wdGlvbiIsImNoaWxkcmVuIiwib3B0aW9ucyIsImZpbHRlcmVkT3B0aW9ucyIsImZpbHRlciIsIm9wdGlvbiIsImNvbnRhaW5lciIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFtQztBQUFBLE1BQS9CQyxhQUErQixRQUEvQkEsYUFBK0I7QUFBQSxNQUFoQkMsUUFBZ0IsUUFBaEJBLFFBQWdCO0FBQ2pELE1BQU1DLE9BQU8sR0FBRyxDQUFDLE1BQUQsRUFBUSxPQUFSLEVBQWdCLFNBQWhCLEVBQTBCLFNBQTFCLEVBQW9DLE9BQXBDLENBQWhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxVQUFBQyxNQUFNO0FBQUEsV0FBSUEsTUFBTSxLQUFLTCxhQUFmO0FBQUEsR0FBckIsQ0FBeEI7QUFDQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQSw4QkFBZUEsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFLLGVBQVMsRUFBRU0sc0VBQWhCO0FBQUEsOEJBQ0kscUVBQUMsbURBQUQ7QUFBWSxlQUFPLEVBQUVIO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssaUJBQVMsRUFBRUksb0VBQWhCO0FBQUEsa0JBQ0tOO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBS0kscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUEsa0JBREo7QUFlSCxDQWxCRDs7S0FBTUYsUztBQW9CU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuM2I3NzRiMTE0MGU5MTEzNDQ0Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vbmF2aWdhdGlvbidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcclxuaW1wb3J0IHsgY29udGVudCwgY29udGFpbmVyIH0gZnJvbSAnLi4vc3R5bGVzL0NvbnRhaW5lci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSAoIHsgY3VycmVudE9wdGlvbiwgY2hpbGRyZW4gfSApID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXCJIb21lXCIsXCJBYm91dFwiLFwiR2FsbGVyeVwiLFwiQ29udGFjdFwiLFwiVXNlcnNcIl1cclxuICAgIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IG9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24gIT09IGN1cnJlbnRPcHRpb24pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlRlc3QgLSB7Y3VycmVudE9wdGlvbn08L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIG9wdGlvbnM9e2ZpbHRlcmVkT3B0aW9uc30vPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==