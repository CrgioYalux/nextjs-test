webpackHotUpdate_N_E("pages/gallery",{

/***/ "./helpers/arrayUtilities.js":
/*!***********************************!*\
  !*** ./helpers/arrayUtilities.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");




var ShuffleArray = function ShuffleArray(array) {
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

var getOnly = function getOnly(qtyItems, fromArray) {
  var newArray = [];

  for (var i = 0; i < qtyItems; i++) {
    newArray.push(fromArray[i]);
  }

  return newArray;
};

var get10RandomImgs = /*#__PURE__*/function () {
  var _ref = Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(images) {
    var rawArrayofImgs, only100Imgs, shuffledArray, only10Imgs, onlySources;
    return D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rawArrayofImgs = images;
            only100Imgs = getOnly(100, rawArrayofImgs);
            shuffledArray = ShuffleArray(only100Imgs);
            only10Imgs = getOnly(10, shuffledArray);
            onlySources = only10Imgs.reduce(function (acc, img) {
              return [].concat(Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(acc), [img.url]);
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
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (get10RandomImgs);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9hcnJheVV0aWxpdGllcy5qcyJdLCJuYW1lcyI6WyJTaHVmZmxlQXJyYXkiLCJhcnJheSIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRPbmx5IiwicXR5SXRlbXMiLCJmcm9tQXJyYXkiLCJuZXdBcnJheSIsImkiLCJwdXNoIiwiZ2V0MTBSYW5kb21JbWdzIiwiaW1hZ2VzIiwicmF3QXJyYXlvZkltZ3MiLCJvbmx5MTAwSW1ncyIsInNodWZmbGVkQXJyYXkiLCJvbmx5MTBJbWdzIiwib25seVNvdXJjZXMiLCJyZWR1Y2UiLCJhY2MiLCJpbWciLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUIsTUFBSUMsWUFBWSxHQUFHRCxLQUFLLENBQUNFLE1BQXpCO0FBQUEsTUFBaUNDLGNBQWpDO0FBQUEsTUFBaURDLFdBQWpEOztBQUVBLFNBQU8sTUFBTUgsWUFBYixFQUEyQjtBQUN6QkcsZUFBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTixZQUEzQixDQUFkO0FBQ0FBLGdCQUFZLElBQUksQ0FBaEI7QUFFQUUsa0JBQWMsR0FBR0gsS0FBSyxDQUFDQyxZQUFELENBQXRCO0FBQ0FELFNBQUssQ0FBQ0MsWUFBRCxDQUFMLEdBQXNCRCxLQUFLLENBQUNJLFdBQUQsQ0FBM0I7QUFDQUosU0FBSyxDQUFDSSxXQUFELENBQUwsR0FBcUJELGNBQXJCO0FBQ0Q7O0FBRUQsU0FBT0gsS0FBUDtBQUNELENBYkQ7O0tBQU1ELFk7O0FBZU4sSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsUUFBRCxFQUFXQyxTQUFYLEVBQXlCO0FBQ3ZDLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0gsUUFBZixFQUF5QkcsQ0FBQyxFQUExQixFQUE2QjtBQUMzQkQsWUFBUSxDQUFDRSxJQUFULENBQWNILFNBQVMsQ0FBQ0UsQ0FBRCxDQUF2QjtBQUNEOztBQUNELFNBQU9ELFFBQVA7QUFDRCxDQU5EOztBQVFBLElBQU1HLGVBQWU7QUFBQSxzUEFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEMsMEJBRGMsR0FDR0QsTUFESDtBQUVkRSx1QkFGYyxHQUVBVCxPQUFPLENBQUMsR0FBRCxFQUFNUSxjQUFOLENBRlA7QUFHZEUseUJBSGMsR0FHRW5CLFlBQVksQ0FBQ2tCLFdBQUQsQ0FIZDtBQUlkRSxzQkFKYyxHQUlEWCxPQUFPLENBQUMsRUFBRCxFQUFLVSxhQUFMLENBSk47QUFLZEUsdUJBTGMsR0FLQUQsVUFBVSxDQUFDRSxNQUFYLENBQWtCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLHdKQUFrQkQsR0FBbEIsSUFBdUJDLEdBQUcsQ0FBQ0MsR0FBM0I7QUFBQSxhQUFsQixFQUFtRCxFQUFuRCxDQUxBO0FBQUEsNkNBTWJKLFdBTmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZk4sZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUFTZUEsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS42ZmRjMjViYWY0M2I4MmJlZmFmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2h1ZmZsZUFycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xyXG5cclxuICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcbiAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XHJcbiAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuXHJcbiAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmNvbnN0IGdldE9ubHkgPSAocXR5SXRlbXMsIGZyb21BcnJheSkgPT4ge1xyXG4gIGNvbnN0IG5ld0FycmF5ID0gW11cclxuICBmb3IobGV0IGk9MDsgaTxxdHlJdGVtczsgaSsrKXtcclxuICAgIG5ld0FycmF5LnB1c2goZnJvbUFycmF5W2ldKVxyXG4gIH1cclxuICByZXR1cm4gbmV3QXJyYXlcclxufVxyXG5cclxuY29uc3QgZ2V0MTBSYW5kb21JbWdzID0gYXN5bmMgKGltYWdlcykgPT4ge1xyXG4gICAgY29uc3QgcmF3QXJyYXlvZkltZ3MgPSBpbWFnZXMgICBcclxuICAgIGNvbnN0IG9ubHkxMDBJbWdzID0gZ2V0T25seSgxMDAsIHJhd0FycmF5b2ZJbWdzKVxyXG4gICAgY29uc3Qgc2h1ZmZsZWRBcnJheSA9IFNodWZmbGVBcnJheShvbmx5MTAwSW1ncylcclxuICAgIGNvbnN0IG9ubHkxMEltZ3MgPSBnZXRPbmx5KDEwLCBzaHVmZmxlZEFycmF5KVxyXG4gICAgY29uc3Qgb25seVNvdXJjZXMgPSBvbmx5MTBJbWdzLnJlZHVjZSgoYWNjLCBpbWcpID0+IFsuLi5hY2MsIGltZy51cmxdLCBbXSlcclxuICAgIHJldHVybiBvbmx5U291cmNlc1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXQxMFJhbmRvbUltZ3MiXSwic291cmNlUm9vdCI6IiJ9