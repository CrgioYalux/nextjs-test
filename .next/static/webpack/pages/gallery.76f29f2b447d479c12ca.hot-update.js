webpackHotUpdate_N_E("pages/gallery",{

/***/ "./helpers/arrayUtilities.js":
/*!***********************************!*\
  !*** ./helpers/arrayUtilities.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var ShuffleArray = function ShuffleArray(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

_c = ShuffleArray;
module["export"] = {
  ShuffleArray: ShuffleArray
};

var _c;

$RefreshReg$(_c, "ShuffleArray");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

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
/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_imagesViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/imagesViewer */ "./components/imagesViewer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_arrayUtilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/arrayUtilities */ "./helpers/arrayUtilities.js");
/* harmony import */ var _helpers_arrayUtilities__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_arrayUtilities__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Gallery.module.css */ "./styles/Gallery.module.css");
/* harmony import */ var _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "D:\\NextJS\\nowYes\\pages\\gallery.js",
    _this = undefined,
    _s = $RefreshSig$();








var Gallery = function Gallery(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      ready = _useState[0],
      setReady = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      imgSources = _useState2[0],
      setImgSources = _useState2[1];

  var getOnly = function getOnly(qtyItems, fromArray) {
    var newArray = [];

    for (var i = 0; i < qtyItems; i++) {
      newArray.push(fromArray[i]);
    }

    return newArray;
  };

  var get10RandomImgs = /*#__PURE__*/function () {
    var _ref2 = Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(images) {
      var rawArrayofImgs, only100Imgs, shuffledArray, only10Imgs, onlySources;
      return D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              rawArrayofImgs = images;
              only100Imgs = getOnly(100, rawArrayofImgs);
              shuffledArray = _helpers_arrayUtilities__WEBPACK_IMPORTED_MODULE_7___default()(only100Imgs);
              only10Imgs = getOnly(10, shuffledArray);
              onlySources = only10Imgs.reduce(function (acc, img) {
                return [].concat(Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(acc), [img.url]);
              }, []);
              return _context.abrupt("return", onlySources);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function get10RandomImgs(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var setImages = /*#__PURE__*/function () {
      var _ref3 = Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var images;
        return D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return get10RandomImgs();

              case 2:
                images = _context2.sent;
                setImgSources(images);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function setImages() {
        return _ref3.apply(this, arguments);
      };
    }();

    setImages();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    setReady(true);
  }, [imgSources]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentOption: "Gallery",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.gallery,
        children: ready ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_imagesViewer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          images: imgSources
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 27
        }, _this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, _this);
};

_s(Gallery, "IEQWxVaBkfR7WzWNgAs0RK+BrNc=");

_c = Gallery;

Gallery.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(ctx) {
    var res, json;
    return D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()('https://jsonplaceholder.typicode.com/photos');

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            json = _context3.sent;
            return _context3.abrupt("return", {
              images: json
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x2) {
    return _ref4.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9hcnJheVV0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJTaHVmZmxlQXJyYXkiLCJhcnJheSIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtb2R1bGUiLCJHYWxsZXJ5IiwiaW1hZ2VzIiwidXNlU3RhdGUiLCJyZWFkeSIsInNldFJlYWR5IiwiaW1nU291cmNlcyIsInNldEltZ1NvdXJjZXMiLCJnZXRPbmx5IiwicXR5SXRlbXMiLCJmcm9tQXJyYXkiLCJuZXdBcnJheSIsImkiLCJwdXNoIiwiZ2V0MTBSYW5kb21JbWdzIiwicmF3QXJyYXlvZkltZ3MiLCJvbmx5MTAwSW1ncyIsInNodWZmbGVkQXJyYXkiLCJvbmx5MTBJbWdzIiwib25seVNvdXJjZXMiLCJyZWR1Y2UiLCJhY2MiLCJpbWciLCJ1cmwiLCJ1c2VFZmZlY3QiLCJzZXRJbWFnZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJnYWxsZXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxrREFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCLE1BQUlDLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxNQUF6QjtBQUFBLE1BQWlDQyxjQUFqQztBQUFBLE1BQWlEQyxXQUFqRDs7QUFFQSxTQUFPLE1BQU1ILFlBQWIsRUFBMkI7QUFDekJHLGVBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQk4sWUFBM0IsQ0FBZDtBQUNBQSxnQkFBWSxJQUFJLENBQWhCO0FBRUFFLGtCQUFjLEdBQUdILEtBQUssQ0FBQ0MsWUFBRCxDQUF0QjtBQUNBRCxTQUFL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O0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFjSCxDQS9DRDs7R0FBTUwsTzs7S0FBQUEsTzs7QUFpRE5BLE9BQU8sQ0FBQzRCLGVBQVI7QUFBQSx1UEFBMEIsa0JBQU1DLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSkMsdURBQUssQ0FBQyw2Q0FBRCxDQUREOztBQUFBO0FBQ2hCQyxlQURnQjtBQUFBO0FBQUEsbUJBRUhBLEdBQUcsQ0FBQ0MsSUFBSixFQUZHOztBQUFBO0FBRWhCQSxnQkFGZ0I7QUFBQSw4Q0FHZjtBQUFFL0Isb0JBQU0sRUFBRStCO0FBQVYsYUFIZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZWhDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbGxlcnkuNzZmMjlmMmI0NDdkNDc5YzEyY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNodWZmbGVBcnJheSA9IChhcnJheSkgPT4ge1xyXG4gIHZhciBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcclxuXHJcbiAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xyXG4gICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgY3VycmVudEluZGV4IC09IDE7XHJcblxyXG4gICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcclxuICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0ge1xyXG4gIFNodWZmbGVBcnJheSxcclxuICBcclxufSIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXHJcbmltcG9ydCBJbWFnZXNWaWV3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZXNWaWV3ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNodWZmbGVBcnJheSBmcm9tICcuLi9oZWxwZXJzL2FycmF5VXRpbGl0aWVzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9HYWxsZXJ5Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5cclxuY29uc3QgR2FsbGVyeSA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2ltZ1NvdXJjZXMsIHNldEltZ1NvdXJjZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0T25seSA9IChxdHlJdGVtcywgZnJvbUFycmF5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXVxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHF0eUl0ZW1zOyBpKyspe1xyXG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKGZyb21BcnJheVtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0MTBSYW5kb21JbWdzID0gYXN5bmMgKGltYWdlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhd0FycmF5b2ZJbWdzID0gaW1hZ2VzICAgXHJcbiAgICAgICAgY29uc3Qgb25seTEwMEltZ3MgPSBnZXRPbmx5KDEwMCwgcmF3QXJyYXlvZkltZ3MpXHJcbiAgICAgICAgY29uc3Qgc2h1ZmZsZWRBcnJheSA9IFNodWZmbGVBcnJheShvbmx5MTAwSW1ncylcclxuICAgICAgICBjb25zdCBvbmx5MTBJbWdzID0gZ2V0T25seSgxMCwgc2h1ZmZsZWRBcnJheSlcclxuICAgICAgICBjb25zdCBvbmx5U291cmNlcyA9IG9ubHkxMEltZ3MucmVkdWNlKChhY2MsIGltZykgPT4gWy4uLmFjYywgaW1nLnVybF0sIFtdKVxyXG4gICAgICAgIHJldHVybiBvbmx5U291cmNlc1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2V0SW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBnZXQxMFJhbmRvbUltZ3MoKVxyXG4gICAgICAgICAgICBzZXRJbWdTb3VyY2VzKGltYWdlcylcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW1hZ2VzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVhZHkodHJ1ZSlcclxuICAgIH0sIFtpbWdTb3VyY2VzXSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGN1cnJlbnRPcHRpb249XCJHYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkeSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8SW1hZ2VzVmlld2VyIGltYWdlcz17aW1nU291cmNlc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbkdhbGxlcnkuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcGhvdG9zJylcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4geyBpbWFnZXM6IGpzb259XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnkiXSwic291cmNlUm9vdCI6IiJ9