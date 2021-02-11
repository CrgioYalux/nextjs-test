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
    var _ref2 = Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
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
          lineNumber: 48,
          columnNumber: 27
        }, _this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiaW1hZ2VzIiwidXNlU3RhdGUiLCJyZWFkeSIsInNldFJlYWR5IiwiaW1nU291cmNlcyIsInNldEltZ1NvdXJjZXMiLCJnZXRPbmx5IiwicXR5SXRlbXMiLCJmcm9tQXJyYXkiLCJuZXdBcnJheSIsImkiLCJwdXNoIiwiZ2V0MTBSYW5kb21JbWdzIiwicmF3QXJyYXlvZkltZ3MiLCJvbmx5MTAwSW1ncyIsInNodWZmbGVkQXJyYXkiLCJTaHVmZmxlQXJyYXkiLCJvbmx5MTBJbWdzIiwib25seVNvdXJjZXMiLCJyZWR1Y2UiLCJhY2MiLCJpbWciLCJ1cmwiLCJ1c2VFZmZlY3QiLCJzZXRJbWFnZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJnYWxsZXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsS0FBRCxDQUROO0FBQUEsTUFDckJDLEtBRHFCO0FBQUEsTUFDZEMsUUFEYzs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFckJHLFVBRnFCO0FBQUEsTUFFVEMsYUFGUzs7QUFJNUIsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsUUFBRCxFQUFXQyxTQUFYLEVBQXlCO0FBQ3JDLFFBQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0gsUUFBZixFQUF5QkcsQ0FBQyxFQUExQixFQUE2QjtBQUN6QkQsY0FBUSxDQUFDRSxJQUFULENBQWNILFNBQVMsQ0FBQ0UsQ0FBRCxDQUF2QjtBQUNIOztBQUNELFdBQU9ELFFBQVA7QUFDSCxHQU5EOztBQVFBLE1BQU1HLGVBQWU7QUFBQSx5UEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEMsNEJBRGMsR0FDR2IsTUFESDtBQUVkYyx5QkFGYyxHQUVBUixPQUFPLENBQUMsR0FBRCxFQUFNTyxjQUFOLENBRlA7QUFHZEUsMkJBSGMsR0FHRUMsOERBQVksQ0FBQ0YsV0FBRCxDQUhkO0FBSWRHLHdCQUpjLEdBSURYLE9BQU8sQ0FBQyxFQUFELEVBQUtTLGFBQUwsQ0FKTjtBQUtkRyx5QkFMYyxHQUtBRCxVQUFVLENBQUNFLE1BQVgsQ0FBa0IsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsMEpBQWtCRCxHQUFsQixJQUF1QkMsR0FBRyxDQUFDQyxHQUEzQjtBQUFBLGVBQWxCLEVBQW1ELEVBQW5ELENBTEE7QUFBQSwrQ0FNYkosV0FOYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFmTixlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQVNBVyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxTQUFTO0FBQUEsMlBBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDT1osZUFBZSxFQUR0Qjs7QUFBQTtBQUNSWixzQkFEUTtBQUVkSyw2QkFBYSxDQUFDTCxNQUFELENBQWI7O0FBRmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVHdCLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFJQUEsYUFBUztBQUNaLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQUQseURBQVMsQ0FBQyxZQUFNO0FBQ1pwQixZQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsR0FGUSxFQUVOLENBQUNDLFVBQUQsQ0FGTSxDQUFUO0FBS0Esc0JBQ0kscUVBQUMsNkRBQUQ7QUFBVyxpQkFBYSxFQUFDLFNBQXpCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVxQixpRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUQsaUVBQU0sQ0FBQ0UsT0FBdkI7QUFBQSxrQkFFUXpCLEtBQUssZ0JBQ0gscUVBQUMsZ0VBQUQ7QUFBYyxnQkFBTSxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHLEdBRUg7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWNILENBaEREOztHQUFNTCxPOztLQUFBQSxPOztBQWtETkEsT0FBTyxDQUFDNkIsZUFBUjtBQUFBLHVQQUEwQixrQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNKQyx1REFBSyxDQUFDLDZDQUFELENBREQ7O0FBQUE7QUFDaEJDLGVBRGdCO0FBQUE7QUFBQSxtQkFFSEEsR0FBRyxDQUFDQyxJQUFKLEVBRkc7O0FBQUE7QUFFaEJBLGdCQUZnQjtBQUFBLDhDQUdmO0FBQUVoQyxvQkFBTSxFQUFFZ0M7QUFBVixhQUhlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lakMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS40MGIxZjFmYTI3MzdlY2UyYTAxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcclxuaW1wb3J0IEltYWdlc1ZpZXdlciBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlc1ZpZXdlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2h1ZmZsZUFycmF5IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlVdGlsaXRpZXMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0dhbGxlcnkubW9kdWxlLmNzcydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcblxyXG5jb25zdCBHYWxsZXJ5ID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICAgIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaW1nU291cmNlcywgc2V0SW1nU291cmNlc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBnZXRPbmx5ID0gKHF0eUl0ZW1zLCBmcm9tQXJyYXkpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IFtdXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8cXR5SXRlbXM7IGkrKyl7XHJcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goZnJvbUFycmF5W2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3QXJyYXlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXQxMFJhbmRvbUltZ3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmF3QXJyYXlvZkltZ3MgPSBpbWFnZXMgICBcclxuICAgICAgICBjb25zdCBvbmx5MTAwSW1ncyA9IGdldE9ubHkoMTAwLCByYXdBcnJheW9mSW1ncylcclxuICAgICAgICBjb25zdCBzaHVmZmxlZEFycmF5ID0gU2h1ZmZsZUFycmF5KG9ubHkxMDBJbWdzKVxyXG4gICAgICAgIGNvbnN0IG9ubHkxMEltZ3MgPSBnZXRPbmx5KDEwLCBzaHVmZmxlZEFycmF5KVxyXG4gICAgICAgIGNvbnN0IG9ubHlTb3VyY2VzID0gb25seTEwSW1ncy5yZWR1Y2UoKGFjYywgaW1nKSA9PiBbLi4uYWNjLCBpbWcudXJsXSwgW10pXHJcbiAgICAgICAgcmV0dXJuIG9ubHlTb3VyY2VzXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzZXRJbWFnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IGdldDEwUmFuZG9tSW1ncygpXHJcbiAgICAgICAgICAgIHNldEltZ1NvdXJjZXMoaW1hZ2VzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJbWFnZXMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRSZWFkeSh0cnVlKVxyXG4gICAgfSwgW2ltZ1NvdXJjZXNdKVxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGN1cnJlbnRPcHRpb249XCJHYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkeSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8SW1hZ2VzVmlld2VyIGltYWdlcz17aW1nU291cmNlc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbkdhbGxlcnkuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcGhvdG9zJylcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4geyBpbWFnZXM6IGpzb259XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnkiXSwic291cmNlUm9vdCI6IiJ9