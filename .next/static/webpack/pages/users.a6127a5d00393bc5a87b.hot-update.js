webpackHotUpdate_N_E("pages/users",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/usersViewer.module.css":
/*!***************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/usersViewer.module.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".usersViewer_usersContainer__2b9a6 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  grid-gap: 0.5rem;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.usersViewer_user__2hOw0 {\r\n  list-style: none;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 20rem;\r\n\r\n  /* outline: 1px solid black; */\r\n\r\n  padding: 0.2rem 0.3rem;\r\n}\r\n\r\n.usersViewer_user__2hOw0:hover {\r\n  border-top: 1px solid black;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.usersViewer_user__2hOw0 p:not(.usersViewer_userName__2C5XU) {\r\n  font-size: 1.1rem;\r\n  justify-self: center;\r\n  position: relative;\r\n  bottom: 2.5px;\r\n}\r\n\r\n.usersViewer_user__2hOw0 p:first-child {\r\n  justify-self: end;\r\n}\r\n\r\n.usersViewer_user__2hOw0 p:last-child {\r\n  justify-self: start;\r\n}\r\n\r\n.usersViewer_userName__2C5XU {\r\n  display: grid;\r\n  place-items: center;\r\n\r\n  font-size: 1rem;\r\n  outline: 1px solid black;\r\n  cursor: pointer;\r\n  padding: 0.2rem 0.5rem;\r\n\r\n  color: black;\r\n  background-color: white;\r\n\r\n  transition: color 0.5s, background-color 0.5s, outline 0.5s, transform 0.2s;\r\n}\r\n\r\n.usersViewer_userName__2C5XU:hover {\r\n  transform: scale(1.1);\r\n  outline: 1px solid white;\r\n  color: white;\r\n  background-color: black;\r\n}\r\n\r\n.usersViewer_separator__2XndK {\r\n  width: 20rem;\r\n  height: 2px;\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/usersViewer.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAW;EAAX,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,kCAAkC;;EAElC,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;;EAEZ,8BAA8B;;EAE9B,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;;EAEnB,eAAe;EACf,wBAAwB;EACxB,eAAe;EACf,sBAAsB;;EAEtB,YAAY;EACZ,uBAAuB;;EAEvB,2EAA2E;AAC7E;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":[".usersContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.user {\r\n  list-style: none;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 20rem;\r\n\r\n  /* outline: 1px solid black; */\r\n\r\n  padding: 0.2rem 0.3rem;\r\n}\r\n\r\n.user:hover {\r\n  border-top: 1px solid black;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.user p:not(.userName) {\r\n  font-size: 1.1rem;\r\n  justify-self: center;\r\n  position: relative;\r\n  bottom: 2.5px;\r\n}\r\n\r\n.user p:first-child {\r\n  justify-self: end;\r\n}\r\n\r\n.user p:last-child {\r\n  justify-self: start;\r\n}\r\n\r\n.userName {\r\n  display: grid;\r\n  place-items: center;\r\n\r\n  font-size: 1rem;\r\n  outline: 1px solid black;\r\n  cursor: pointer;\r\n  padding: 0.2rem 0.5rem;\r\n\r\n  color: black;\r\n  background-color: white;\r\n\r\n  transition: color 0.5s, background-color 0.5s, outline 0.5s, transform 0.2s;\r\n}\r\n\r\n.userName:hover {\r\n  transform: scale(1.1);\r\n  outline: 1px solid white;\r\n  color: white;\r\n  background-color: black;\r\n}\r\n\r\n.separator {\r\n  width: 20rem;\r\n  height: 2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"usersContainer": "usersViewer_usersContainer__2b9a6",
	"user": "usersViewer_user__2hOw0",
	"userName": "usersViewer_userName__2C5XU",
	"separator": "usersViewer_separator__2XndK"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3VzZXJzVmlld2VyLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHVDQUF1QyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsdUJBQXVCLGtCQUFrQixLQUFLLGtDQUFrQyx1QkFBdUIsb0JBQW9CLHlDQUF5Qyw4QkFBOEIsNEJBQTRCLG1CQUFtQixzQ0FBc0Msb0NBQW9DLEtBQUssd0NBQXdDLGtDQUFrQyxxQ0FBcUMsS0FBSyxzRUFBc0Usd0JBQXdCLDJCQUEyQix5QkFBeUIsb0JBQW9CLEtBQUssZ0RBQWdELHdCQUF3QixLQUFLLCtDQUErQywwQkFBMEIsS0FBSyxzQ0FBc0Msb0JBQW9CLDBCQUEwQiwwQkFBMEIsK0JBQStCLHNCQUFzQiw2QkFBNkIsdUJBQXVCLDhCQUE4QixzRkFBc0YsS0FBSyw0Q0FBNEMsNEJBQTRCLCtCQUErQixtQkFBbUIsOEJBQThCLEtBQUssdUNBQXVDLG1CQUFtQixrQkFBa0IsS0FBSyxXQUFXLDhGQUE4RixVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksV0FBVyxhQUFhLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsMENBQTBDLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixrQkFBa0IsS0FBSyxlQUFlLHVCQUF1QixvQkFBb0IseUNBQXlDLDhCQUE4Qiw0QkFBNEIsbUJBQW1CLHNDQUFzQyxvQ0FBb0MsS0FBSyxxQkFBcUIsa0NBQWtDLHFDQUFxQyxLQUFLLGdDQUFnQyx3QkFBd0IsMkJBQTJCLHlCQUF5QixvQkFBb0IsS0FBSyw2QkFBNkIsd0JBQXdCLEtBQUssNEJBQTRCLDBCQUEwQixLQUFLLG1CQUFtQixvQkFBb0IsMEJBQTBCLDBCQUEwQiwrQkFBK0Isc0JBQXNCLDZCQUE2Qix1QkFBdUIsOEJBQThCLHNGQUFzRixLQUFLLHlCQUF5Qiw0QkFBNEIsK0JBQStCLG1CQUFtQiw4QkFBOEIsS0FBSyxvQkFBb0IsbUJBQW1CLGtCQUFrQixLQUFLLHVCQUF1QjtBQUNqNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2Vycy5hNjEyN2E1ZDAwMzkzYmM1YTg3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnVzZXJzVmlld2VyX3VzZXJzQ29udGFpbmVyX18yYjlhNiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJzVmlld2VyX3VzZXJfXzJoT3cwIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG5cXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuXFxyXFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuXFxyXFxuICBwYWRkaW5nOiAwLjJyZW0gMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcnNWaWV3ZXJfdXNlcl9fMmhPdzA6aG92ZXIge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcnNWaWV3ZXJfdXNlcl9fMmhPdzAgcDpub3QoLnVzZXJzVmlld2VyX3VzZXJOYW1lX18yQzVYVSkge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMi41cHg7XFxyXFxufVxcclxcblxcclxcbi51c2Vyc1ZpZXdlcl91c2VyX18yaE93MCBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcnNWaWV3ZXJfdXNlcl9fMmhPdzAgcDpsYXN0LWNoaWxkIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi51c2Vyc1ZpZXdlcl91c2VyTmFtZV9fMkM1WFUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcclxcblxcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIG91dGxpbmUgMC41cywgdHJhbnNmb3JtIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi51c2Vyc1ZpZXdlcl91c2VyTmFtZV9fMkM1WFU6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi51c2Vyc1ZpZXdlcl9zZXBhcmF0b3JfXzJYbmRLIHtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3VzZXJzVmlld2VyLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQVc7RUFBWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtDQUFrQzs7RUFFbEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZOztFQUVaLDhCQUE4Qjs7RUFFOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHNCQUFzQjs7RUFFdEIsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudXNlcnNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXIge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcclxcblxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG5cXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi51c2VyOmhvdmVyIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXIgcDpub3QoLnVzZXJOYW1lKSB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXIgcDpmaXJzdC1jaGlsZCB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXIgcDpsYXN0LWNoaWxkIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi51c2VyTmFtZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxyXFxuXFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cywgb3V0bGluZSAwLjVzLCB0cmFuc2Zvcm0gMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJOYW1lOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VwYXJhdG9yIHtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ1c2Vyc0NvbnRhaW5lclwiOiBcInVzZXJzVmlld2VyX3VzZXJzQ29udGFpbmVyX18yYjlhNlwiLFxuXHRcInVzZXJcIjogXCJ1c2Vyc1ZpZXdlcl91c2VyX18yaE93MFwiLFxuXHRcInVzZXJOYW1lXCI6IFwidXNlcnNWaWV3ZXJfdXNlck5hbWVfXzJDNVhVXCIsXG5cdFwic2VwYXJhdG9yXCI6IFwidXNlcnNWaWV3ZXJfc2VwYXJhdG9yX18yWG5kS1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=