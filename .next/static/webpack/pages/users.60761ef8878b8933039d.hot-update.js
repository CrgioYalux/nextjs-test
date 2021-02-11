webpackHotUpdate_N_E("pages/users",{

/***/ "./components/usersViewer.js":
/*!***********************************!*\
  !*** ./components/usersViewer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/usersViewer.module.css */ "./styles/usersViewer.module.css");
/* harmony import */ var _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "D:\\NextJS\\nowYes\\components\\usersViewer.js",
    _this = undefined;





var UsersViewer = function UsersViewer(_ref) {
  var users = _ref.users;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.usersContainer,
    children: users.map(function (user) {
      // const key = users.indexOf(user)
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.user,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "go to"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.userName,
            onClick: function onClick() {
              return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/users/[id]', "/users/".concat(user.id));
            },
            children: user.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "'s page"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 33
          }, _this)]
        }, user.id, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 29
        }, _this)
      }, void 0, false);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = UsersViewer;
/* harmony default export */ __webpack_exports__["default"] = (UsersViewer);

var _c;

$RefreshReg$(_c, "UsersViewer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc1ZpZXdlci5qcyJdLCJuYW1lcyI6WyJVc2Vyc1ZpZXdlciIsInVzZXJzIiwic3R5bGVzIiwidXNlcnNDb250YWluZXIiLCJtYXAiLCJ1c2VyIiwidXNlck5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQy9CLHNCQUNJO0FBQUksYUFBUyxFQUFFQyxxRUFBTSxDQUFDQyxjQUF0QjtBQUFBLGNBRVFGLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFDLElBQUksRUFBSTtBQUNkO0FBQ0EsMEJBQ0k7QUFBQSwrQkFDSTtBQUFrQixtQkFBUyxFQUFFSCxxRUFBTSxDQUFDRyxJQUFwQztBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBRyxxQkFBUyxFQUFFSCxxRUFBTSxDQUFDSSxRQUFyQjtBQUErQixtQkFBTyxFQUFFO0FBQUEscUJBQU1DLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLG1CQUFxQ0gsSUFBSSxDQUFDSSxFQUExQyxFQUFOO0FBQUEsYUFBeEM7QUFBQSxzQkFBZ0dKLElBQUksQ0FBQ0s7QUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUEsV0FBU0wsSUFBSSxDQUFDSSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix1QkFESjtBQVNILEtBWEQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0FuQkQ7O0tBQU1ULFc7QUFxQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJzLjYwNzYxZWY4ODc4Yjg5MzMwMzlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3VzZXJzVmlld2VyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBVc2Vyc1ZpZXdlciA9ICh7IHVzZXJzIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMubWFwKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGtleSA9IHVzZXJzLmluZGV4T2YodXNlcilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5nbyB0bzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyTmFtZX0gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy91c2Vycy9baWRdJywgYC91c2Vycy8ke3VzZXIuaWR9YCl9Pnt1c2VyLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ncyBwYWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzVmlld2VyIl0sInNvdXJjZVJvb3QiOiIifQ==