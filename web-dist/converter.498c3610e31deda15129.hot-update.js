webpackHotUpdate("converter",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TorrentComp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TorrentComp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Modal.vue */ \"./src/components/Modal.vue\");\n/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v1 */ \"./node_modules/uuid/v1.js\");\n/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_2__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar _window = window,\n    electron = _window.electron;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Torrent\",\n  components: {\n    Modal: _components_Modal_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  props: {},\n  data: function data() {\n    return {\n      torrents: [],\n      magnet: \"magnet:?xt=urn:btih:1FBDCE143D18131C87F900E4CB2344023F3F70B7&dn=%5BHorribleSubs%5D+Bungou+Stray+Dogs+-+36+%5B720p%5D+mkv&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337%2Fannounce\"\n    };\n  },\n  mounted: function mounted() {},\n  methods: {\n    addTorrent: function addTorrent() {\n      var torrent = {\n        name: \"Loading...\",\n        hash: uuid_v1__WEBPACK_IMPORTED_MODULE_2__(),\n        progress: 0,\n        speed: 0\n      };\n      electron.torrent.addTorrent({\n        magnetLink: this.magnet,\n        added: function added(args) {\n          torrent.name = args.name;\n          torrent.hash = args.hash;\n        },\n        download: function download(args) {\n          console.log(args.progress);\n          torrent.progress = args.progress;\n          torrent.speed = args.speed;\n        }\n      });\n      this.torrents.push(torrent);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvVG9ycmVudENvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Ub3JyZW50Q29tcC52dWU/M2Y2MyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJ0b3JyZW50XCI+XG5cdFx0PGZvcm0gYWN0aW9uPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgY29sLXhzLTEyXCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwibWFnbmV0XCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTWFnbmV0IFVSTFwiXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiTWFnbmV0IFVSTFwiXG5cdFx0XHRcdFx0XHRhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB2LW9uOmNsaWNrPVwiYWRkVG9ycmVudFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIj5BZGQgdG9ycmVudDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cImZyZWUtc3BlZWRcIj5TcGVlZDwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cImZyZWUtcHJvZ3Jlc3NcIj5Qcm9ncmVzczwvdGg+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0PHRyIHYtZm9yPVwidG9ycmVudCBpbiB0b3JyZW50c1wiIDprZXk9XCJ0b3JyZW50LmluZm9IYXNoXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZCBzY29wZT1cInJvd1wiPnt7dG9ycmVudC5uYW1lfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3t0b3JyZW50LnNwZWVkfX1zbXRoL3M8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb2dyZXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9sZT1cInByb2dyZXNzYmFyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0di1iaW5kOmNsYXNzPVwieydwcm9ncmVzcy1iYXItYW5pbWF0ZWQnOiB0b3JyZW50LnByb2dyZXNzICogMTAwfVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHYtYmluZDpzdHlsZT1cInt3aWR0aDogYCR7dG9ycmVudC5wcm9ncmVzcyAqIDEwMH0lYH1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXZhbHVlbWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9Nb2RhbC52dWVcIjtcbmltcG9ydCAqIGFzIHV1aWQgZnJvbSBcInV1aWQvdjFcIjtcblxuY29uc3QgeyBlbGVjdHJvbiB9ID0gd2luZG93O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6IFwiVG9ycmVudFwiLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0TW9kYWxcblx0fSxcblx0cHJvcHM6IHt9LFxuXHRkYXRhOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9ycmVudHM6IFtdLFxuXHRcdFx0bWFnbmV0OiBcIm1hZ25ldDo/eHQ9dXJuOmJ0aWg6MUZCRENFMTQzRDE4MTMxQzg3RjkwMEU0Q0IyMzQ0MDIzRjNGNzBCNyZkbj0lNUJIb3JyaWJsZVN1YnMlNUQrQnVuZ291K1N0cmF5K0RvZ3MrLSszNislNUI3MjBwJTVEK21rdiZ0cj11ZHAlM0ElMkYlMkZ0cmFja2VyLm9wZW50cmFja3Iub3JnJTNBMTMzNyUyRmFubm91bmNlJnRyPXVkcCUzQSUyRiUyRnRyYWNrZXIuaW50ZXJuZXR3YXJyaW9ycy5uZXQlM0ExMzM3JTJGYW5ub3VuY2UmdHI9dWRwJTNBJTJGJTJGdHJhY2tlci50aW55LXZwcy5jb20lM0E2OTY5JTJGYW5ub3VuY2UmdHI9dWRwJTNBJTJGJTJGZXhvZHVzLmRlc3luYy5jb20lM0E2OTY5JTJGYW5ub3VuY2UmdHI9dWRwJTNBJTJGJTJGYnQueHh4LXRyYWNrZXIuY29tJTNBMjcxMCUyRmFubm91bmNlJnRyPXVkcCUzQSUyRiUyRm9wZW4uZGVtb25paS5zaSUzQTEzMzclMkZhbm5vdW5jZSZ0cj11ZHAlM0ElMkYlMkZ0cmFja2VyLmNvcHBlcnN1cmZlci50ayUzQTY5NjklMkZhbm5vdW5jZSZ0cj11ZHAlM0ElMkYlMkZ0cmFja2VyLmxlZWNoZXJzLXBhcmFkaXNlLm9yZyUzQTY5NjklMkZhbm5vdW5jZSZ0cj11ZHAlM0ElMkYlMkY5LnJhcmJnLnRvJTNBMjcxMCUyRmFubm91bmNlJnRyPXVkcCUzQSUyRiUyRnRyYWNrZXIucGlyYXRlcGFydHkuZ3IlM0E2OTY5JTJGYW5ub3VuY2UmdHI9dWRwJTNBJTJGJTJGcDRwLmFyZW5hYmcuY2glM0ExMzM3JTJGYW5ub3VuY2VcIlxuXHRcdH07XG5cdH0sXG5cdG1vdW50ZWQ6IGZ1bmN0aW9uKCkge30sXG5cdG1ldGhvZHM6IHtcblx0XHRhZGRUb3JyZW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCB0b3JyZW50ID0ge1xuXHRcdFx0XHRuYW1lOiBcIkxvYWRpbmcuLi5cIixcblx0XHRcdFx0aGFzaDogdXVpZCgpLFxuXHRcdFx0XHRwcm9ncmVzczogMCxcblx0XHRcdFx0c3BlZWQ6IDBcblx0XHRcdH07XG5cdFx0XHRlbGVjdHJvbi50b3JyZW50LmFkZFRvcnJlbnQoe1xuXHRcdFx0XHRtYWduZXRMaW5rOiB0aGlzLm1hZ25ldCxcblx0XHRcdFx0YWRkZWQ6IGFyZ3MgPT4ge1xuXHRcdFx0XHRcdHRvcnJlbnQubmFtZSA9IGFyZ3MubmFtZTtcblx0XHRcdFx0XHR0b3JyZW50Lmhhc2ggPSBhcmdzLmhhc2g7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRvd25sb2FkOiBhcmdzID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhhcmdzLnByb2dyZXNzKTtcblx0XHRcdFx0XHR0b3JyZW50LnByb2dyZXNzID0gYXJncy5wcm9ncmVzcztcblx0XHRcdFx0XHR0b3JyZW50LnNwZWVkID0gYXJncy5zcGVlZDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnRvcnJlbnRzLnB1c2godG9ycmVudCk7XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuXG48c3R5bGUgc2NvcGVkPlxuLmZyZWUtcHJvZ3Jlc3Mge1xuXHR3aWR0aDogMTIwcHg7XG59XG5cbi5mcmVlLXNwZWVkIHtcblx0d2lkdGg6IDEyMHB4O1xufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFyQkE7QUFiQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TorrentComp.vue?vue&type=script&lang=js&\n");

/***/ })

})