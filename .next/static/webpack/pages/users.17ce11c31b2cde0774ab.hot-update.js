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
___CSS_LOADER_EXPORT___.push([module.i, ".usersViewer_usersContainer__2b9a6 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  grid-gap: 0.5rem;\r\n  gap: 0.5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.usersViewer_user__2hOw0 {\r\n  list-style: none;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 20rem;\r\n\r\n  /* outline: 1px solid black; */\r\n\r\n  padding: 0.2rem 0.3rem;\r\n}\r\n\r\n.usersViewer_user__2hOw0:hover {\r\n  border-top: 1px solid black;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.usersViewer_user__2hOw0 p:not(.usersViewer_userName__2C5XU) {\r\n  font-size: 1.2rem;\r\n  justify-self: center;\r\n  position: relative;\r\n  bottom: 2.5px;\r\n}\r\n\r\n.usersViewer_user__2hOw0 p:first-child {\r\n  justify-self: end;\r\n}\r\n\r\n.usersViewer_user__2hOw0 p:last-child {\r\n  justify-self: start;\r\n}\r\n\r\n.usersViewer_userName__2C5XU {\r\n  display: grid;\r\n  place-items: center;\r\n\r\n  font-size: 1rem;\r\n  outline: 1px solid black;\r\n  cursor: pointer;\r\n  padding: 0.2rem 0.5rem;\r\n  width: 8rem;\r\n\r\n  color: black;\r\n  background-color: white;\r\n\r\n  transition: color 0.5s, background-color 0.5s, outline 0.5s, transform 0.2s;\r\n}\r\n\r\n.usersViewer_userName__2C5XU:hover {\r\n  transform: scale(1.1);\r\n  outline: 1px solid white;\r\n  color: white;\r\n  background-color: black;\r\n}\r\n\r\n.usersViewer_separator__2XndK {\r\n  width: 20rem;\r\n  height: 2px;\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/usersViewer.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAW;EAAX,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,kCAAkC;;EAElC,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;;EAEZ,8BAA8B;;EAE9B,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;;EAEnB,eAAe;EACf,wBAAwB;EACxB,eAAe;EACf,sBAAsB;EACtB,WAAW;;EAEX,YAAY;EACZ,uBAAuB;;EAEvB,2EAA2E;AAC7E;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":[".usersContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.user {\r\n  list-style: none;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 20rem;\r\n\r\n  /* outline: 1px solid black; */\r\n\r\n  padding: 0.2rem 0.3rem;\r\n}\r\n\r\n.user:hover {\r\n  border-top: 1px solid black;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.user p:not(.userName) {\r\n  font-size: 1.2rem;\r\n  justify-self: center;\r\n  position: relative;\r\n  bottom: 2.5px;\r\n}\r\n\r\n.user p:first-child {\r\n  justify-self: end;\r\n}\r\n\r\n.user p:last-child {\r\n  justify-self: start;\r\n}\r\n\r\n.userName {\r\n  display: grid;\r\n  place-items: center;\r\n\r\n  font-size: 1rem;\r\n  outline: 1px solid black;\r\n  cursor: pointer;\r\n  padding: 0.2rem 0.5rem;\r\n  width: 8rem;\r\n\r\n  color: black;\r\n  background-color: white;\r\n\r\n  transition: color 0.5s, background-color 0.5s, outline 0.5s, transform 0.2s;\r\n}\r\n\r\n.userName:hover {\r\n  transform: scale(1.1);\r\n  outline: 1px solid white;\r\n  color: white;\r\n  background-color: black;\r\n}\r\n\r\n.separator {\r\n  width: 20rem;\r\n  height: 2px;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3VzZXJzVmlld2VyLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHVDQUF1QyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsdUJBQXVCLGtCQUFrQixxQkFBcUIsS0FBSyxrQ0FBa0MsdUJBQXVCLG9CQUFvQix5Q0FBeUMsOEJBQThCLDRCQUE0QixtQkFBbUIsc0NBQXNDLG9DQUFvQyxLQUFLLHdDQUF3QyxrQ0FBa0MscUNBQXFDLEtBQUssc0VBQXNFLHdCQUF3QiwyQkFBMkIseUJBQXlCLG9CQUFvQixLQUFLLGdEQUFnRCx3QkFBd0IsS0FBSywrQ0FBK0MsMEJBQTBCLEtBQUssc0NBQXNDLG9CQUFvQiwwQkFBMEIsMEJBQTBCLCtCQUErQixzQkFBc0IsNkJBQTZCLGtCQUFrQix1QkFBdUIsOEJBQThCLHNGQUFzRixLQUFLLDRDQUE0Qyw0QkFBNEIsK0JBQStCLG1CQUFtQiw4QkFBOEIsS0FBSyx1Q0FBdUMsbUJBQW1CLGtCQUFrQixLQUFLLFdBQVcsOEZBQThGLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxZQUFZLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsMENBQTBDLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixrQkFBa0IscUJBQXFCLEtBQUssZUFBZSx1QkFBdUIsb0JBQW9CLHlDQUF5Qyw4QkFBOEIsNEJBQTRCLG1CQUFtQixzQ0FBc0Msb0NBQW9DLEtBQUsscUJBQXFCLGtDQUFrQyxxQ0FBcUMsS0FBSyxnQ0FBZ0Msd0JBQXdCLDJCQUEyQix5QkFBeUIsb0JBQW9CLEtBQUssNkJBQTZCLHdCQUF3QixLQUFLLDRCQUE0QiwwQkFBMEIsS0FBSyxtQkFBbUIsb0JBQW9CLDBCQUEwQiwwQkFBMEIsK0JBQStCLHNCQUFzQiw2QkFBNkIsa0JBQWtCLHVCQUF1Qiw4QkFBOEIsc0ZBQXNGLEtBQUsseUJBQXlCLDRCQUE0QiwrQkFBK0IsbUJBQW1CLDhCQUE4QixLQUFLLG9CQUFvQixtQkFBbUIsa0JBQWtCLEtBQUssdUJBQXVCO0FBQ3AvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXJzLjE3Y2UxMWMzMWIyY2RlMDc3NGFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudXNlcnNWaWV3ZXJfdXNlcnNDb250YWluZXJfXzJiOWE2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi51c2Vyc1ZpZXdlcl91c2VyX18yaE93MCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxyXFxuXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcblxcclxcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcblxcclxcbiAgcGFkZGluZzogMC4ycmVtIDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJzVmlld2VyX3VzZXJfXzJoT3cwOmhvdmVyIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJzVmlld2VyX3VzZXJfXzJoT3cwIHA6bm90KC51c2Vyc1ZpZXdlcl91c2VyTmFtZV9fMkM1WFUpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcnNWaWV3ZXJfdXNlcl9fMmhPdzAgcDpmaXJzdC1jaGlsZCB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJzVmlld2VyX3VzZXJfXzJoT3cwIHA6bGFzdC1jaGlsZCB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcnNWaWV3ZXJfdXNlck5hbWVfXzJDNVhVIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA4cmVtO1xcclxcblxcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIG91dGxpbmUgMC41cywgdHJhbnNmb3JtIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi51c2Vyc1ZpZXdlcl91c2VyTmFtZV9fMkM1WFU6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi51c2Vyc1ZpZXdlcl9zZXBhcmF0b3JfXzJYbmRLIHtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3VzZXJzVmlld2VyLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQVc7RUFBWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0NBQWtDOztFQUVsQyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7O0VBRVosOEJBQThCOztFQUU5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7O0VBRVgsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudXNlcnNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxyXFxuXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcblxcclxcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcblxcclxcbiAgcGFkZGluZzogMC4ycmVtIDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXI6aG92ZXIge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciBwOm5vdCgudXNlck5hbWUpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciBwOmxhc3QtY2hpbGQge1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJOYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA4cmVtO1xcclxcblxcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIG91dGxpbmUgMC41cywgdHJhbnNmb3JtIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi51c2VyTmFtZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNlcGFyYXRvciB7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidXNlcnNDb250YWluZXJcIjogXCJ1c2Vyc1ZpZXdlcl91c2Vyc0NvbnRhaW5lcl9fMmI5YTZcIixcblx0XCJ1c2VyXCI6IFwidXNlcnNWaWV3ZXJfdXNlcl9fMmhPdzBcIixcblx0XCJ1c2VyTmFtZVwiOiBcInVzZXJzVmlld2VyX3VzZXJOYW1lX18yQzVYVVwiLFxuXHRcInNlcGFyYXRvclwiOiBcInVzZXJzVmlld2VyX3NlcGFyYXRvcl9fMlhuZEtcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9