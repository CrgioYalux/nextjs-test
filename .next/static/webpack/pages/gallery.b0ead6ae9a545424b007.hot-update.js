webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_imagesViewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/imagesViewer */ "./components/imagesViewer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_arrayUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/arrayUtilities */ "./helpers/arrayUtilities.js");
/* harmony import */ var _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Gallery.module.css */ "./styles/Gallery.module.css");
/* harmony import */ var _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "D:\\NextJS\\nowYes\\pages\\gallery.js",
    _this = undefined,
    _s = $RefreshSig$();








var Gallery = function Gallery(_ref) {
  _s();

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      ready = _useState[0],
      setReady = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      imgSources = _useState2[0],
      setImgSources = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var setImages = /*#__PURE__*/function () {
      var _ref2 = Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var images;
        return D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_helpers_arrayUtilities__WEBPACK_IMPORTED_MODULE_6__["default"])(data);

              case 2:
                images = _context.sent;
                setImgSources(images);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function setImages() {
        return _ref2.apply(this, arguments);
      };
    }();

    setImages();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setReady(true);
  }, [imgSources]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentOption: "Gallery",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.gallery,
        children: ready ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_imagesViewer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          images: imgSources
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 27
        }, _this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s(Gallery, "IEQWxVaBkfR7WzWNgAs0RK+BrNc=");

_c = Gallery;

Gallery.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(ctx) {
    var res, json;
    return D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default()('https://jsonplaceholder.typicode.com/photos');

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            json = _context2.sent;
            return _context2.abrupt("return", {
              data: json
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

var _c;

$RefreshReg$(_c, "Gallery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiZGF0YSIsInVzZVN0YXRlIiwicmVhZHkiLCJzZXRSZWFkeSIsImltZ1NvdXJjZXMiLCJzZXRJbWdTb3VyY2VzIiwidXNlRWZmZWN0Iiwic2V0SW1hZ2VzIiwiZ2V0MTBSYW5kb21JbWdzIiwiaW1hZ2VzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZ2FsbGVyeSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBRCxDQURSO0FBQUEsTUFDbkJDLEtBRG1CO0FBQUEsTUFDWkMsUUFEWTs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFbkJHLFVBRm1CO0FBQUEsTUFFUEMsYUFGTzs7QUFJMUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLFNBQVM7QUFBQSwyUEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNPQyx1RUFBZSxDQUFDUixJQUFELENBRHRCOztBQUFBO0FBQ1JTLHNCQURRO0FBRWRKLDZCQUFhLENBQUNJLE1BQUQsQ0FBYjs7QUFGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFURixTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBSUFBLGFBQVM7QUFDWixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUFELHlEQUFTLENBQUMsWUFBTTtBQUNaSCxZQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsR0FGUSxFQUVOLENBQUNDLFVBQUQsQ0FGTSxDQUFUO0FBS0Esc0JBQ0kscUVBQUMsNkRBQUQ7QUFBVyxpQkFBYSxFQUFDLFNBQXpCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVNLGlFQUFNLENBQUNDLFNBQXZCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFRCxpRUFBTSxDQUFDRSxPQUF2QjtBQUFBLGtCQUVRVixLQUFLLGdCQUNILHFFQUFDLGdFQUFEO0FBQWMsZ0JBQU0sRUFBRUU7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxHQUVIO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFjSCxDQS9CRDs7R0FBTUwsTzs7S0FBQUEsTzs7QUFpQ05BLE9BQU8sQ0FBQ2MsZUFBUjtBQUFBLHVQQUEwQixrQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNKQyx1REFBSyxDQUFDLDZDQUFELENBREQ7O0FBQUE7QUFDaEJDLGVBRGdCO0FBQUE7QUFBQSxtQkFFSEEsR0FBRyxDQUFDQyxJQUFKLEVBRkc7O0FBQUE7QUFFaEJBLGdCQUZnQjtBQUFBLDhDQUdmO0FBQUVqQixrQkFBSSxFQUFFaUI7QUFBUixhQUhlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lbEIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS5iMGVhZDZhZTlhNTQ1NDI0YjAwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcclxuaW1wb3J0IEltYWdlc1ZpZXdlciBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlc1ZpZXdlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZ2V0MTBSYW5kb21JbWdzIGZyb20gJy4uL2hlbHBlcnMvYXJyYXlVdGlsaXRpZXMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0dhbGxlcnkubW9kdWxlLmNzcydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcblxyXG5jb25zdCBHYWxsZXJ5ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2ltZ1NvdXJjZXMsIHNldEltZ1NvdXJjZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzZXRJbWFnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IGdldDEwUmFuZG9tSW1ncyhkYXRhKVxyXG4gICAgICAgICAgICBzZXRJbWdTb3VyY2VzKGltYWdlcylcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW1hZ2VzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVhZHkodHJ1ZSlcclxuICAgIH0sIFtpbWdTb3VyY2VzXSlcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjdXJyZW50T3B0aW9uPVwiR2FsbGVyeVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEltYWdlc1ZpZXdlciBpbWFnZXM9e2ltZ1NvdXJjZXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5HYWxsZXJ5LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bob3RvcycpXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIHsgZGF0YToganNvbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeSJdLCJzb3VyY2VSb290IjoiIn0=