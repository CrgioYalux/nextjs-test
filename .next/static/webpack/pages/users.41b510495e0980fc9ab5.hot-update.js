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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/usersViewer.module.css */ "./styles/usersViewer.module.css");
/* harmony import */ var _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\NextJS\\nowYes\\components\\usersViewer.js",
    _this = undefined;




var UsersViewer = function UsersViewer(_ref) {
  var users = _ref.users;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.usersContainer,
    children: users.map(function (user) {
      var key = user.id; // console.log(key)

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.user,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "go to"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userName,
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/users/[id]', "/users/".concat(user.id));
          },
          children: user.username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "'s page"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 29
        }, _this)]
      }, key, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc1ZpZXdlci5qcyJdLCJuYW1lcyI6WyJVc2Vyc1ZpZXdlciIsInVzZXJzIiwic3R5bGVzIiwidXNlcnNDb250YWluZXIiLCJtYXAiLCJ1c2VyIiwia2V5IiwiaWQiLCJ1c2VyTmFtZSIsIlJvdXRlciIsInB1c2giLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMvQixzQkFDSTtBQUFJLGFBQVMsRUFBRUMscUVBQU0sQ0FBQ0MsY0FBdEI7QUFBQSxjQUVRRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDZCxVQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQ0UsRUFBakIsQ0FEYyxDQUVkOztBQUNBLDBCQUNJO0FBQWMsaUJBQVMsRUFBRUwscUVBQU0sQ0FBQ0csSUFBaEM7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUcsbUJBQVMsRUFBRUgscUVBQU0sQ0FBQ00sUUFBckI7QUFBK0IsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxrREFBTSxDQUFDQyxJQUFQLENBQVksYUFBWixtQkFBcUNMLElBQUksQ0FBQ0UsRUFBMUMsRUFBTjtBQUFBLFdBQXhDO0FBQUEsb0JBQWdHRixJQUFJLENBQUNNO0FBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBLFNBQVNMLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsS0FWRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlCSCxDQWxCRDs7S0FBTU4sVztBQW9CU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuNDFiNTEwNDk1ZTA5ODBmYzlhYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3VzZXJzVmlld2VyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBVc2Vyc1ZpZXdlciA9ICh7IHVzZXJzIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMubWFwKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHVzZXIuaWRcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Z28gdG88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyTmFtZX0gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy91c2Vycy9baWRdJywgYC91c2Vycy8ke3VzZXIuaWR9YCl9Pnt1c2VyLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPidzIHBhZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzVmlld2VyIl0sInNvdXJjZVJvb3QiOiIifQ==