webpackHotUpdate_N_E("pages/gallery",{

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
        children: currentOption
      }, void 0, false, {
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
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_3__["content"],
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWluZXIuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiY3VycmVudE9wdGlvbiIsImNoaWxkcmVuIiwib3B0aW9ucyIsImZpbHRlcmVkT3B0aW9ucyIsImZpbHRlciIsIm9wdGlvbiIsImNvbnRhaW5lciIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFtQztBQUFBLE1BQS9CQyxhQUErQixRQUEvQkEsYUFBK0I7QUFBQSxNQUFoQkMsUUFBZ0IsUUFBaEJBLFFBQWdCO0FBQ2pELE1BQU1DLE9BQU8sR0FBRyxDQUFDLE1BQUQsRUFBUSxPQUFSLEVBQWdCLFNBQWhCLEVBQTBCLFNBQTFCLEVBQW9DLE9BQXBDLENBQWhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxVQUFBQyxNQUFNO0FBQUEsV0FBSUEsTUFBTSxLQUFLTCxhQUFmO0FBQUEsR0FBckIsQ0FBeEI7QUFDQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQSxrQkFBUUE7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBSyxlQUFTLEVBQUVNLHNFQUFoQjtBQUFBLDhCQUNJLHFFQUFDLG1EQUFEO0FBQVksZUFBTyxFQUFFSDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLGlCQUFTLEVBQUVJLG9FQUFoQjtBQUFBLGtCQUNLTjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUtJLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBLGtCQURKO0FBZ0JILENBbkJEOztLQUFNRixTO0FBcUJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsZXJ5Ljc4ZWU1NTdhMzExMzlmNjg4ZjQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24nXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInXHJcbmltcG9ydCB7IGNvbnRlbnQsIGNvbnRhaW5lciB9IGZyb20gJy4uL3N0eWxlcy9Db250YWluZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gKCB7IGN1cnJlbnRPcHRpb24sIGNoaWxkcmVuIH0gKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gW1wiSG9tZVwiLFwiQWJvdXRcIixcIkdhbGxlcnlcIixcIkNvbnRhY3RcIixcIlVzZXJzXCJdXHJcbiAgICBjb25zdCBmaWx0ZXJlZE9wdGlvbnMgPSBvcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uICE9PSBjdXJyZW50T3B0aW9uKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57Y3VycmVudE9wdGlvbn08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaW5rIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPiAqL31cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbiBvcHRpb25zPXtmaWx0ZXJlZE9wdGlvbnN9Lz4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=