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
      var key = user.id;
      console.log(key);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.user,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "go to"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_usersViewer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.userName,
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/users/[id]', "/users/".concat(user.id));
          },
          children: user.username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "'s page"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 29
        }, _this)]
      }, key, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc1ZpZXdlci5qcyJdLCJuYW1lcyI6WyJVc2Vyc1ZpZXdlciIsInVzZXJzIiwic3R5bGVzIiwidXNlcnNDb250YWluZXIiLCJtYXAiLCJ1c2VyIiwia2V5IiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXNlck5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQy9CLHNCQUNJO0FBQUksYUFBUyxFQUFFQyxxRUFBTSxDQUFDQyxjQUF0QjtBQUFBLGNBRVFGLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFDLElBQUksRUFBSTtBQUNkLFVBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxFQUFqQjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLDBCQUNJO0FBQWMsaUJBQVMsRUFBRUoscUVBQU0sQ0FBQ0csSUFBaEM7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUcsbUJBQVMsRUFBRUgscUVBQU0sQ0FBQ1EsUUFBckI7QUFBK0IsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxrREFBTSxDQUFDQyxJQUFQLENBQVksYUFBWixtQkFBcUNQLElBQUksQ0FBQ0UsRUFBMUMsRUFBTjtBQUFBLFdBQXhDO0FBQUEsb0JBQWdHRixJQUFJLENBQUNRO0FBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBLFNBQVNQLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsS0FWRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlCSCxDQWxCRDs7S0FBTU4sVztBQW9CU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuMmQ5OWUyMjY4YmNkNjIwM2QzZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXNlcnNWaWV3ZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFVzZXJzVmlld2VyID0gKHsgdXNlcnMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5tYXAodXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gdXNlci5pZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0gY2xhc3NOYW1lPXtzdHlsZXMudXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5nbyB0bzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJOYW1lfSBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3VzZXJzL1tpZF0nLCBgL3VzZXJzLyR7dXNlci5pZH1gKX0+e3VzZXIudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+J3MgcGFnZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnNWaWV3ZXIiXSwic291cmNlUm9vdCI6IiJ9