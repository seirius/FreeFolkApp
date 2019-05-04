webpackHotUpdate("about",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/YoutubeComp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/YoutubeComp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ \"./node_modules/core-js/modules/es6.array.find-index.js\");\n/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ytdl_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ytdl-core */ \"./node_modules/ytdl-core/lib/index.js\");\n/* harmony import */ var ytdl_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ytdl_core__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Youtube',\n  props: {},\n  data: function data() {\n    return {\n      videoList: [],\n      videoSearch: \"https://www.youtube.com/watch?v=NfQSASESKoU\",\n      path: \"C:/temp\"\n    };\n  },\n  methods: {\n    searchVideo: function searchVideo() {\n      var _this = this;\n\n      if (this.videoSearch) {\n        ytdl_core__WEBPACK_IMPORTED_MODULE_2__[\"getBasicInfo\"](this.videoSearch, function (err, info) {\n          if (err) {\n            console.error(err);\n          } else {\n            _this.videoList.unshift(info);\n\n            console.log(info);\n          }\n        });\n      }\n    },\n    removeVideo: function removeVideo(title) {\n      var index = this.videoList.findIndex(function (video) {\n        return video.title === title;\n      });\n\n      if (index > -1) {\n        this.videoList.splice(index, 1);\n      }\n    },\n    getVideoByTitle: function getVideoByTitle(title) {\n      return this.videoList.find(function (video) {\n        return video.title === title;\n      });\n    },\n    downloadVideo: function downloadVideo(title) {\n      var video = this.getVideoByTitle(title);\n\n      if (video && video.video_url && this.path) {\n        var vid = ytdl_core__WEBPACK_IMPORTED_MODULE_2__(video.video_url);\n        vid.pipe(window.electron.fs.createWriteStream(window.electron.path.join(this.path, video.title + \".mp4\")));\n        vid.on(\"response\", function (res) {\n          console.log(res);\n        });\n        vid.on(\"error\", function (err) {\n          return console.error(err);\n        });\n      }\n    },\n    savePath: function savePath() {\n      var paths = window.electron.dialog.showOpenDialog({\n        properties: [\"openDirectory\"]\n      });\n\n      if (paths && paths.length === 1) {\n        this.path = paths[0];\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvWW91dHViZUNvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Zb3V0dWJlQ29tcC52dWU/MjkzZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgY29sLWxnXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInBhdGhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2F2ZSBQYXRoXCIgYXJpYS1sYWJlbD1cIlNhdmUgUGF0aFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiByZWFkb25seT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cInNhdmVQYXRoXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlNldCBwYXRoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zIGNvbC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJ2aWRlb1NlYXJjaFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJWaWRlbyBVUkxcIiBhcmlhLWxhYmVsPVwiVmlkZW8gVVJMXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwic2VhcmNoVmlkZW9cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdmlkZW8gY29sLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0yXCIgdi1mb3I9XCJ2aWRlbyBpbiB2aWRlb0xpc3RcIiA6a2V5PVwidmlkZW8udGl0bGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZVwiIHYtb246Y2xpY2s9XCJyZW1vdmVWaWRlbyh2aWRlby50aXRsZSlcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIDpzcmM9XCJ2aWRlby50aHVtYm5haWxfdXJsXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGl0bGUgY3V0LXRleHRcIj57e3ZpZGVvLnRpdGxlfX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgY3V0LXRleHRcIj57e3ZpZGVvLmRlc2NyaXB0aW9ufX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB2LW9uOmNsaWNrPVwiZG93bmxvYWRWaWRlbyh2aWRlby50aXRsZSlcIiB0eXBlPVwiYnV0dG9uXCI+RG93bmxvYWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAqIGFzIHl0ZGwgZnJvbSBcInl0ZGwtY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1lvdXR1YmUnLFxuICAgIHByb3BzOiB7fSxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aWRlb0xpc3Q6IFtdLFxuICAgICAgICAgICAgdmlkZW9TZWFyY2g6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1OZlFTQVNFU0tvVVwiLFxuICAgICAgICAgICAgcGF0aDogXCJDOi90ZW1wXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZWFyY2hWaWRlbzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlkZW9TZWFyY2gpIHtcbiAgICAgICAgICAgICAgICB5dGRsLmdldEJhc2ljSW5mbyh0aGlzLnZpZGVvU2VhcmNoLCAoZXJyLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9MaXN0LnVuc2hpZnQoaW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVWaWRlbzogZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudmlkZW9MaXN0LmZpbmRJbmRleCh2aWRlbyA9PiB2aWRlby50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRWaWRlb0J5VGl0bGU6IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9MaXN0LmZpbmQodmlkZW8gPT4gdmlkZW8udGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWRWaWRlbzogZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMuZ2V0VmlkZW9CeVRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgIGlmICh2aWRlbyAmJiB2aWRlby52aWRlb191cmwgJiYgdGhpcy5wYXRoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkID0geXRkbCh2aWRlby52aWRlb191cmwpXG4gICAgICAgICAgICAgICAgdmlkLnBpcGUod2luZG93LmVsZWN0cm9uLmZzXG4gICAgICAgICAgICAgICAgLmNyZWF0ZVdyaXRlU3RyZWFtKHdpbmRvdy5lbGVjdHJvbi5wYXRoXG4gICAgICAgICAgICAgICAgLmpvaW4odGhpcy5wYXRoLCB2aWRlby50aXRsZSArIFwiLm1wNFwiKSkpO1xuICAgICAgICAgICAgICAgIHZpZC5vbihcInJlc3BvbnNlXCIsIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmlkLm9uKFwiZXJyb3JcIiwgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVQYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBwYXRocyA9IHdpbmRvdy5lbGVjdHJvbi5kaWFsb2cuc2hvd09wZW5EaWFsb2coe1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcIm9wZW5EaXJlY3RvcnlcIl1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHBhdGhzICYmIHBhdGhzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aCA9IHBhdGhzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuXG48c3R5bGUgc2NvcGVkPlxuLnZpZGVvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogMjBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXQtdGV4dCB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgaGVpZ2h0OiAxLjJlbTsgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUExQ0E7QUFWQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/YoutubeComp.vue?vue&type=script&lang=js&\n");

/***/ })

})