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

var getRandomImgs = /*#__PURE__*/function () {
  var _ref = Object(D_NextJS_nowYes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(qty, images) {
    var rawArrayofImgs, only100Imgs, shuffledArray, onlyQtyImgs, onlySources;
    return D_NextJS_nowYes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rawArrayofImgs = images;
            only100Imgs = getOnly(100, rawArrayofImgs);
            shuffledArray = ShuffleArray(only100Imgs);
            onlyQtyImgs = getOnly(qty, shuffledArray);
            onlySources = onlyQtyImgs.reduce(function (acc, img) {
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

  return function getRandomImgs(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (getRandomImgs);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9hcnJheVV0aWxpdGllcy5qcyJdLCJuYW1lcyI6WyJTaHVmZmxlQXJyYXkiLCJhcnJheSIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRPbmx5IiwicXR5SXRlbXMiLCJmcm9tQXJyYXkiLCJuZXdBcnJheSIsImkiLCJwdXNoIiwiZ2V0UmFuZG9tSW1ncyIsInF0eSIsImltYWdlcyIsInJhd0FycmF5b2ZJbWdzIiwib25seTEwMEltZ3MiLCJzaHVmZmxlZEFycmF5Iiwib25seVF0eUltZ3MiLCJvbmx5U291cmNlcyIsInJlZHVjZSIsImFjYyIsImltZyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QixNQUFJQyxZQUFZLEdBQUdELEtBQUssQ0FBQ0UsTUFBekI7QUFBQSxNQUFpQ0MsY0FBakM7QUFBQSxNQUFpREMsV0FBakQ7O0FBRUEsU0FBTyxNQUFNSCxZQUFiLEVBQTJCO0FBQ3pCRyxlQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JOLFlBQTNCLENBQWQ7QUFDQUEsZ0JBQVksSUFBSSxDQUFoQjtBQUVBRSxrQkFBYyxHQUFHSCxLQUFLLENBQUNDLFlBQUQsQ0FBdEI7QUFDQUQsU0FBSyxDQUFDQyxZQUFELENBQUwsR0FBc0JELEtBQUssQ0FBQ0ksV0FBRCxDQUEzQjtBQUNBSixTQUFLLENBQUNJLFdBQUQsQ0FBTCxHQUFxQkQsY0FBckI7QUFDRDs7QUFFRCxTQUFPSCxLQUFQO0FBQ0QsQ0FiRDs7S0FBTUQsWTs7QUFlTixJQUFNUyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxRQUFELEVBQVdDLFNBQVgsRUFBeUI7QUFDdkMsTUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSCxRQUFmLEVBQXlCRyxDQUFDLEVBQTFCLEVBQTZCO0FBQzNCRCxZQUFRLENBQUNFLElBQVQsQ0FBY0gsU0FBUyxDQUFDRSxDQUFELENBQXZCO0FBQ0Q7O0FBQ0QsU0FBT0QsUUFBUDtBQUNELENBTkQ7O0FBUUEsSUFBTUcsYUFBYTtBQUFBLHNQQUFHLGlCQUFPQyxHQUFQLEVBQVlDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1pDLDBCQURZLEdBQ0tELE1BREw7QUFFWkUsdUJBRlksR0FFRVYsT0FBTyxDQUFDLEdBQUQsRUFBTVMsY0FBTixDQUZUO0FBR1pFLHlCQUhZLEdBR0lwQixZQUFZLENBQUNtQixXQUFELENBSGhCO0FBSVpFLHVCQUpZLEdBSUVaLE9BQU8sQ0FBQ08sR0FBRCxFQUFNSSxhQUFOLENBSlQ7QUFLWkUsdUJBTFksR0FLRUQsV0FBVyxDQUFDRSxNQUFaLENBQW1CLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLHdKQUFrQkQsR0FBbEIsSUFBdUJDLEdBQUcsQ0FBQ0MsR0FBM0I7QUFBQSxhQUFuQixFQUFvRCxFQUFwRCxDQUxGO0FBQUEsNkNBTVhKLFdBTlc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYlAsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQjs7QUFTZUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS42ZGMyNzBiMTYzMGFmMzY1NGNmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2h1ZmZsZUFycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xyXG5cclxuICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcbiAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XHJcbiAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuXHJcbiAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmNvbnN0IGdldE9ubHkgPSAocXR5SXRlbXMsIGZyb21BcnJheSkgPT4ge1xyXG4gIGNvbnN0IG5ld0FycmF5ID0gW11cclxuICBmb3IobGV0IGk9MDsgaTxxdHlJdGVtczsgaSsrKXtcclxuICAgIG5ld0FycmF5LnB1c2goZnJvbUFycmF5W2ldKVxyXG4gIH1cclxuICByZXR1cm4gbmV3QXJyYXlcclxufVxyXG5cclxuY29uc3QgZ2V0UmFuZG9tSW1ncyA9IGFzeW5jIChxdHksIGltYWdlcykgPT4ge1xyXG4gICAgY29uc3QgcmF3QXJyYXlvZkltZ3MgPSBpbWFnZXMgICBcclxuICAgIGNvbnN0IG9ubHkxMDBJbWdzID0gZ2V0T25seSgxMDAsIHJhd0FycmF5b2ZJbWdzKVxyXG4gICAgY29uc3Qgc2h1ZmZsZWRBcnJheSA9IFNodWZmbGVBcnJheShvbmx5MTAwSW1ncylcclxuICAgIGNvbnN0IG9ubHlRdHlJbWdzID0gZ2V0T25seShxdHksIHNodWZmbGVkQXJyYXkpXHJcbiAgICBjb25zdCBvbmx5U291cmNlcyA9IG9ubHlRdHlJbWdzLnJlZHVjZSgoYWNjLCBpbWcpID0+IFsuLi5hY2MsIGltZy51cmxdLCBbXSlcclxuICAgIHJldHVybiBvbmx5U291cmNlc1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRSYW5kb21JbWdzIl0sInNvdXJjZVJvb3QiOiIifQ==