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
/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_imagesViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/imagesViewer */ "./components/imagesViewer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_shuffleArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/shuffleArray */ "./helpers/shuffleArray.js");
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
    var _ref2 = Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var rawArrayofImgs, only100Imgs, shuffledArray, only10Imgs, onlySources;
      return D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              rawArrayofImgs = images;
              only100Imgs = getOnly(100, rawArrayofImgs);
              shuffledArray = Object(_helpers_shuffleArray__WEBPACK_IMPORTED_MODULE_7__["default"])(only100Imgs);
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

    return function get10RandomImgs() {
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

  var renderLoader = function renderLoader() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Loading, please wait"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 32
    }, _this);
  };

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
          lineNumber: 50,
          columnNumber: 27
        }, _this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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

  return function (_x) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiaW1hZ2VzIiwidXNlU3RhdGUiLCJyZWFkeSIsInNldFJlYWR5IiwiaW1nU291cmNlcyIsInNldEltZ1NvdXJjZXMiLCJnZXRPbmx5IiwicXR5SXRlbXMiLCJmcm9tQXJyYXkiLCJuZXdBcnJheSIsImkiLCJwdXNoIiwiZ2V0MTBSYW5kb21JbWdzIiwicmF3QXJyYXlvZkltZ3MiLCJvbmx5MTAwSW1ncyIsInNodWZmbGVkQXJyYXkiLCJTaHVmZmxlQXJyYXkiLCJvbmx5MTBJbWdzIiwib25seVNvdXJjZXMiLCJyZWR1Y2UiLCJhY2MiLCJpbWciLCJ1cmwiLCJ1c2VFZmZlY3QiLCJzZXRJbWFnZXMiLCJyZW5kZXJMb2FkZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJnYWxsZXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxLQUFELENBRE47QUFBQSxNQUNyQkMsS0FEcUI7QUFBQSxNQUNkQyxRQURjOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVyQkcsVUFGcUI7QUFBQSxNQUVUQyxhQUZTOztBQUk1QixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxRQUFELEVBQVdDLFNBQVgsRUFBeUI7QUFDckMsUUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSCxRQUFmLEVBQXlCRyxDQUFDLEVBQTFCLEVBQTZCO0FBQ3pCRCxjQUFRLENBQUNFLElBQVQsQ0FBY0gsU0FBUyxDQUFDRSxDQUFELENBQXZCO0FBQ0g7O0FBQ0QsV0FBT0QsUUFBUDtBQUNILEdBTkQ7O0FBUUEsTUFBTUcsZUFBZTtBQUFBLHlQQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQyw0QkFEYyxHQUNHYixNQURIO0FBRWRjLHlCQUZjLEdBRUFSLE9BQU8sQ0FBQyxHQUFELEVBQU1PLGNBQU4sQ0FGUDtBQUdkRSwyQkFIYyxHQUdFQyxxRUFBWSxDQUFDRixXQUFELENBSGQ7QUFJZEcsd0JBSmMsR0FJRFgsT0FBTyxDQUFDLEVBQUQsRUFBS1MsYUFBTCxDQUpOO0FBS2RHLHlCQUxjLEdBS0FELFVBQVUsQ0FBQ0UsTUFBWCxDQUFrQixVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSwwSkFBa0JELEdBQWxCLElBQXVCQyxHQUFHLENBQUNDLEdBQTNCO0FBQUEsZUFBbEIsRUFBbUQsRUFBbkQsQ0FMQTtBQUFBLCtDQU1iSixXQU5hOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWZOLGVBQWU7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBU0FXLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLFNBQVM7QUFBQSwyUEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNPWixlQUFlLEVBRHRCOztBQUFBO0FBQ1JaLHNCQURRO0FBRWRLLDZCQUFhLENBQUNMLE1BQUQsQ0FBYjs7QUFGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUd0IsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQUlBQSxhQUFTO0FBQ1osR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBRCx5REFBUyxDQUFDLFlBQU07QUFDWnBCLFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0MsVUFBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTXFCLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsd0JBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTjtBQUFBLEdBQXJCOztBQUdBLHNCQUNJLHFFQUFDLDZEQUFEO0FBQVcsaUJBQWEsRUFBQyxTQUF6QjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFQyxpRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUQsaUVBQU0sQ0FBQ0UsT0FBdkI7QUFBQSxrQkFFUTFCLEtBQUssZ0JBQ0gscUVBQUMsZ0VBQUQ7QUFBYyxnQkFBTSxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHLEdBRUg7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWNILENBbEREOztHQUFNTCxPOztLQUFBQSxPOztBQW9ETkEsT0FBTyxDQUFDOEIsZUFBUjtBQUFBLHVQQUEwQixrQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNKQyx1REFBSyxDQUFDLDZDQUFELENBREQ7O0FBQUE7QUFDaEJDLGVBRGdCO0FBQUE7QUFBQSxtQkFFSEEsR0FBRyxDQUFDQyxJQUFKLEVBRkc7O0FBQUE7QUFFaEJBLGdCQUZnQjtBQUFBLDhDQUdmO0FBQUVqQyxvQkFBTSxFQUFFaUM7QUFBVixhQUhlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lbEMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS4wMmFjYmIwOTkwYTI0YmQ1ZTQ5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcclxuaW1wb3J0IEltYWdlc1ZpZXdlciBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlc1ZpZXdlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2h1ZmZsZUFycmF5IGZyb20gJy4uL2hlbHBlcnMvc2h1ZmZsZUFycmF5J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9HYWxsZXJ5Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5cclxuY29uc3QgR2FsbGVyeSA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2ltZ1NvdXJjZXMsIHNldEltZ1NvdXJjZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0T25seSA9IChxdHlJdGVtcywgZnJvbUFycmF5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXVxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHF0eUl0ZW1zOyBpKyspe1xyXG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKGZyb21BcnJheVtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0MTBSYW5kb21JbWdzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhd0FycmF5b2ZJbWdzID0gaW1hZ2VzICAgXHJcbiAgICAgICAgY29uc3Qgb25seTEwMEltZ3MgPSBnZXRPbmx5KDEwMCwgcmF3QXJyYXlvZkltZ3MpXHJcbiAgICAgICAgY29uc3Qgc2h1ZmZsZWRBcnJheSA9IFNodWZmbGVBcnJheShvbmx5MTAwSW1ncylcclxuICAgICAgICBjb25zdCBvbmx5MTBJbWdzID0gZ2V0T25seSgxMCwgc2h1ZmZsZWRBcnJheSlcclxuICAgICAgICBjb25zdCBvbmx5U291cmNlcyA9IG9ubHkxMEltZ3MucmVkdWNlKChhY2MsIGltZykgPT4gWy4uLmFjYywgaW1nLnVybF0sIFtdKVxyXG4gICAgICAgIHJldHVybiBvbmx5U291cmNlc1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2V0SW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBnZXQxMFJhbmRvbUltZ3MoKVxyXG4gICAgICAgICAgICBzZXRJbWdTb3VyY2VzKGltYWdlcylcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW1hZ2VzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVhZHkodHJ1ZSlcclxuICAgIH0sIFtpbWdTb3VyY2VzXSlcclxuXHJcbiAgICBjb25zdCByZW5kZXJMb2FkZXIgPSAoKSA9PiA8cD5Mb2FkaW5nLCBwbGVhc2Ugd2FpdDwvcD5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjdXJyZW50T3B0aW9uPVwiR2FsbGVyeVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEltYWdlc1ZpZXdlciBpbWFnZXM9e2ltZ1NvdXJjZXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5HYWxsZXJ5LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bob3RvcycpXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIHsgaW1hZ2VzOiBqc29ufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==