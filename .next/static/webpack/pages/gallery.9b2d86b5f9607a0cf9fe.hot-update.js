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
                return Object(_helpers_arrayUtilities__WEBPACK_IMPORTED_MODULE_6__["default"])(10, data);

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
          lineNumber: 30,
          columnNumber: 27
        }, _this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiZGF0YSIsInVzZVN0YXRlIiwicmVhZHkiLCJzZXRSZWFkeSIsImltZ1NvdXJjZXMiLCJzZXRJbWdTb3VyY2VzIiwidXNlRWZmZWN0Iiwic2V0SW1hZ2VzIiwiZ2V0UmFuZG9tSW1ncyIsImltYWdlcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImdhbGxlcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDLEtBQUQsQ0FEUjtBQUFBLE1BQ25CQyxLQURtQjtBQUFBLE1BQ1pDLFFBRFk7O0FBQUEsbUJBRVVGLHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRW5CRyxVQUZtQjtBQUFBLE1BRVBDLGFBRk87O0FBSTFCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxTQUFTO0FBQUEsMlBBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDT0MsdUVBQWEsQ0FBQyxFQUFELEVBQUtSLElBQUwsQ0FEcEI7O0FBQUE7QUFDUlMsc0JBRFE7QUFFZEosNkJBQWEsQ0FBQ0ksTUFBRCxDQUFiOztBQUZjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRGLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFJQUEsYUFBUztBQUNaLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQUQseURBQVMsQ0FBQyxZQUFNO0FBQ1pILFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0MsVUFBRCxDQUZNLENBQVQ7QUFJQSxzQkFDSSxxRUFBQyw2REFBRDtBQUFXLGlCQUFhLEVBQUMsU0FBekI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRU0saUVBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVELGlFQUFNLENBQUNFLE9BQXZCO0FBQUEsa0JBRVFWLEtBQUssZ0JBQ0gscUVBQUMsZ0VBQUQ7QUFBYyxnQkFBTSxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHLEdBRUg7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWNILENBOUJEOztHQUFNTCxPOztLQUFBQSxPOztBQWdDTkEsT0FBTyxDQUFDYyxlQUFSO0FBQUEsdVBBQTBCLGtCQUFNQyxHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0pDLHVEQUFLLENBQUMsNkNBQUQsQ0FERDs7QUFBQTtBQUNoQkMsZUFEZ0I7QUFBQTtBQUFBLG1CQUVIQSxHQUFHLENBQUNDLElBQUosRUFGRzs7QUFBQTtBQUVoQkEsZ0JBRmdCO0FBQUEsOENBR2Y7QUFBRWpCLGtCQUFJLEVBQUVpQjtBQUFSLGFBSGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVsQixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsZXJ5LjliMmQ4NmI1Zjk2MDdhMGNmOWZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xyXG5pbXBvcnQgSW1hZ2VzVmlld2VyIGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VzVmlld2VyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBnZXRSYW5kb21JbWdzIGZyb20gJy4uL2hlbHBlcnMvYXJyYXlVdGlsaXRpZXMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0dhbGxlcnkubW9kdWxlLmNzcydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcblxyXG5jb25zdCBHYWxsZXJ5ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2ltZ1NvdXJjZXMsIHNldEltZ1NvdXJjZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzZXRJbWFnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IGdldFJhbmRvbUltZ3MoMTAsIGRhdGEpXHJcbiAgICAgICAgICAgIHNldEltZ1NvdXJjZXMoaW1hZ2VzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJbWFnZXMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRSZWFkeSh0cnVlKVxyXG4gICAgfSwgW2ltZ1NvdXJjZXNdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjdXJyZW50T3B0aW9uPVwiR2FsbGVyeVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEltYWdlc1ZpZXdlciBpbWFnZXM9e2ltZ1NvdXJjZXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5HYWxsZXJ5LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bob3RvcycpXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIHsgZGF0YToganNvbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeSJdLCJzb3VyY2VSb290IjoiIn0=