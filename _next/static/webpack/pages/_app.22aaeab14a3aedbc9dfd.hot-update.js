webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _src_ui_Theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/ui/Theme */ "./src/ui/Theme.js");
/* harmony import */ var _src_ui_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/ui/Header */ "./src/ui/Header.js");
/* harmony import */ var _src_ui_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/ui/Footer */ "./src/ui/Footer.js");
/* harmony import */ var _src_ui_Fonts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/ui/Fonts */ "./src/ui/Fonts.js");
/* harmony import */ var _SignIn_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SignIn.css */ "./pages/SignIn.css");
/* harmony import */ var _SignIn_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_SignIn_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Projects\\Kalmar\\FE\\mui\\nextjs\\pages\\_app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].initialize("UA-235989942-1");
function MyApp(props) {
  _s();

  var Component = props.Component,
      pageProps = props.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    Object(_src_ui_Fonts__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Remove the server-side injected CSS.

    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Shahrooz Development"), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: _src_ui_Theme__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_src_ui_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: value,
    setValue: setValue,
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    setSelectedIndex: setSelectedIndex,
    setValue: setValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__["LazyLoadComponent"], {
    threshold: 400,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_src_ui_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    setSelectedIndex: setSelectedIndex,
    setValue: setValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }))));
}

_s(MyApp, "452hIkjxIOzd/ajoj1Cjyx1FeTE=");

_c = MyApp;
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

var _c;

$RefreshReg$(_c, "MyApp");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJSZWFjdEdBIiwiaW5pdGlhbGl6ZSIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiRm9udHMiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJUaGVtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLGdEQUFPLENBQUNDLFVBQVIsQ0FBbUIsZ0JBQW5CO0FBRWUsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0VBQUE7O0VBQ2pDLElBQU9DLFNBQVAsR0FBK0JELEtBQS9CLENBQU9DLFNBQVA7RUFBQSxJQUFrQkMsU0FBbEIsR0FBK0JGLEtBQS9CLENBQWtCRSxTQUFsQjs7RUFFQSxnQkFBMEJDLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztFQUFBLElBQU9DLEtBQVA7RUFBQSxJQUFjQyxRQUFkOztFQUNBLGlCQUEwQ0Ysc0RBQVEsQ0FBQyxDQUFELENBQWxEO0VBQUEsSUFBT0csYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBRUFDLDRDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtJQUNsQkMsNkRBQUssR0FEYSxDQUVsQjs7SUFDQSxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBbEI7O0lBQ0EsSUFBSUYsU0FBSixFQUFlO01BQ1hBLFNBQVMsQ0FBQ0csYUFBVixDQUF3QkMsV0FBeEIsQ0FBb0NKLFNBQXBDO0lBQ0g7RUFDSixDQVBELEVBT0csRUFQSDtFQVNBLE9BQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJLE1BQUMsZ0RBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsMEJBREosRUFFSTtJQUFNLElBQUksRUFBQyxVQUFYO0lBQXNCLE9BQU8sRUFBQyxzREFBOUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZKLENBREosRUFLSSxNQUFDLHNFQUFEO0lBQWUsS0FBSyxFQUFFSyxxREFBdEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJLE1BQUMsc0RBQUQ7SUFDSSxLQUFLLEVBQUVaLEtBRFg7SUFFSSxRQUFRLEVBQUVDLFFBRmQ7SUFHSSxhQUFhLEVBQUVDLGFBSG5CO0lBSUksZ0JBQWdCLEVBQUVDLGdCQUp0QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREosRUFPSSxNQUFDLFNBQUQseUZBQ1FMLFNBRFI7SUFFSSxnQkFBZ0IsRUFBRUssZ0JBRnRCO0lBR0ksUUFBUSxFQUFFRixRQUhkO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FQSixFQVlJLE1BQUMsa0ZBQUQ7SUFBbUIsU0FBUyxFQUFFLEdBQTlCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSSxNQUFDLHNEQUFEO0lBQ0ksZ0JBQWdCLEVBQUVFLGdCQUR0QjtJQUVJLFFBQVEsRUFBRUYsUUFGZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREosQ0FaSixDQUxKLENBREo7QUEyQkg7O0dBMUN1Qk4sSzs7S0FBQUEsSztBQTRDeEJBLEtBQUssQ0FBQ2tCLFNBQU4sR0FBa0I7RUFDZGhCLFNBQVMsRUFBRWlCLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDLFVBRG5CO0VBRWRsQixTQUFTLEVBQUVnQixpREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUZkLENBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjJhYWVhYjE0YTNhZWRiYzlkZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSBcInJlYWN0LWdhXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQge1RoZW1lUHJvdmlkZXJ9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRoZW1lIGZyb20gXCIuLi9zcmMvdWkvVGhlbWVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL3VpL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvdWkvRm9vdGVyXCI7XHJcbmltcG9ydCBGb250cyBmcm9tIFwiLi4vc3JjL3VpL0ZvbnRzXCI7XHJcbmltcG9ydCAnLi9TaWduSW4uY3NzJztcclxuXHJcbmltcG9ydCB7TGF6eUxvYWRDb21wb25lbnR9IGZyb20gXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCI7XHJcblxyXG5SZWFjdEdBLmluaXRpYWxpemUoXCJVQS0yMzU5ODk5NDItMVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XHJcbiAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHN9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgRm9udHMoKTtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cclxuICAgICAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XHJcbiAgICAgICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICAgICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+U2hhaHJvb3ogRGV2ZWxvcG1lbnQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e1RoZW1lfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWU9e3NldFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9e3NlbGVjdGVkSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJbmRleD17c2V0U2VsZWN0ZWRJbmRleH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnBhZ2VQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEluZGV4PXtzZXRTZWxlY3RlZEluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlPXtzZXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGF6eUxvYWRDb21wb25lbnQgdGhyZXNob2xkPXs0MDB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJbmRleD17c2V0U2VsZWN0ZWRJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWU9e3NldFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xhenlMb2FkQ29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==