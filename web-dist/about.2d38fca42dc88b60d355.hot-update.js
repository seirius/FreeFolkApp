webpackHotUpdate("about",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/YoutubeComp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/YoutubeComp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ \"./node_modules/core-js/modules/es6.array.find-index.js\");\n/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ytdl_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ytdl-core */ \"./node_modules/ytdl-core/lib/index.js\");\n/* harmony import */ var ytdl_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ytdl_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Modal.vue */ \"./src/components/Modal.vue\");\n/* harmony import */ var _components_youtube_util_youtube_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/youtube-util/youtube.js */ \"./src/components/youtube-util/youtube.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Youtube',\n  components: {\n    Modal: _components_Modal_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  props: {},\n  data: function data() {\n    return {\n      videoList: [],\n      videoSearch: \"https://www.youtube.com/watch?v=fCXW4DsjzH0\",\n      path: \"/home/andriy/Downloads\"\n    };\n  },\n  methods: {\n    searchVideo: function searchVideo() {\n      var _this = this;\n\n      if (this.videoSearch) {\n        ytdl_core__WEBPACK_IMPORTED_MODULE_2__[\"getBasicInfo\"](this.videoSearch, function (err, info) {\n          if (err) {\n            console.error(err);\n          } else {\n            _this.videoList.unshift(info);\n\n            console.log(info);\n          }\n        });\n      }\n    },\n    removeVideo: function removeVideo(title) {\n      var index = this.videoList.findIndex(function (video) {\n        return video.title === title;\n      });\n\n      if (index > -1) {\n        this.videoList.splice(index, 1);\n      }\n    },\n    getVideoByTitle: function getVideoByTitle(title) {\n      return this.videoList.find(function (video) {\n        return video.title === title;\n      });\n    },\n    downloadVideo: function downloadVideo(title) {\n      var _this2 = this;\n\n      var video = this.getVideoByTitle(title);\n\n      if (video && video.video_url && this.path) {\n        Object(_components_youtube_util_youtube_js__WEBPACK_IMPORTED_MODULE_4__[\"downloadMusic\"])({\n          path: this.path,\n          title: video.title,\n          url: video.video_url\n        }).then(function (response) {\n          _this2.$refs.modal.openModal({\n            title: \"Success!\",\n            text: \"Download complete\"\n          });\n        }).catch(function (error) {\n          return console.error(error);\n        }); // const vid = ytdl(video.video_url)\n        // vid.pipe(window.electron.fs\n        // .createWriteStream(window.electron.path\n        // .join(this.path, video.title + \".mp4\")));\n        // vid.on(\"response\", res => {\n        // this.$refs.modal.openModal({\n        //     title: \"Success!\",\n        //     text: \"Download complete\"\n        // });\n        // });\n        // vid.on(\"error\", err => console.error(err));\n      }\n    },\n    downloadMusic: function downloadMusic(title) {},\n    savePath: function savePath() {\n      var paths = window.electron.dialog.showOpenDialog({\n        properties: [\"openDirectory\"]\n      });\n\n      if (paths && paths.length === 1) {\n        this.path = paths[0];\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvWW91dHViZUNvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Zb3V0dWJlQ29tcC52dWU/MjkzZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwiaGVsbG9cIj5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgY29sLWxnXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInBhdGhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2F2ZSBQYXRoXCIgYXJpYS1sYWJlbD1cIlNhdmUgUGF0aFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiByZWFkb25seT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cInNhdmVQYXRoXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlNldCBwYXRoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zIGNvbC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJ2aWRlb1NlYXJjaFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJWaWRlbyBVUkxcIiBhcmlhLWxhYmVsPVwiVmlkZW8gVVJMXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwic2VhcmNoVmlkZW9cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdmlkZW8gY29sLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0yXCIgdi1mb3I9XCJ2aWRlbyBpbiB2aWRlb0xpc3RcIiA6a2V5PVwidmlkZW8udGl0bGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZVwiIHYtb246Y2xpY2s9XCJyZW1vdmVWaWRlbyh2aWRlby50aXRsZSlcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIDpzcmM9XCJ2aWRlby50aHVtYm5haWxfdXJsXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGl0bGUgY3V0LXRleHRcIj57e3ZpZGVvLnRpdGxlfX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgY3V0LXRleHRcIj57e3ZpZGVvLmRlc2NyaXB0aW9ufX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB2LW9uOmNsaWNrPVwiZG93bmxvYWRWaWRlbyh2aWRlby50aXRsZSlcIiB0eXBlPVwiYnV0dG9uXCI+RG93bmxvYWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8TW9kYWwgcmVmPVwibW9kYWxcIi8+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyB5dGRsIGZyb20gXCJ5dGRsLWNvcmVcIjtcbmltcG9ydCBNb2RhbCBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWwudnVlJztcbmltcG9ydCB7IGRvd25sb2FkVmlkZW8sIGRvd25sb2FkTXVzaWMgfSBmcm9tIFwiQC9jb21wb25lbnRzL3lvdXR1YmUtdXRpbC95b3V0dWJlLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdZb3V0dWJlJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE1vZGFsXG4gICAgfSxcbiAgICBwcm9wczoge30sXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlkZW9MaXN0OiBbXSxcbiAgICAgICAgICAgIHZpZGVvU2VhcmNoOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZkNYVzREc2p6SDBcIixcbiAgICAgICAgICAgIHBhdGg6IFwiL2hvbWUvYW5kcml5L0Rvd25sb2Fkc1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2VhcmNoVmlkZW86IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZGVvU2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgeXRkbC5nZXRCYXNpY0luZm8odGhpcy52aWRlb1NlYXJjaCwgKGVyciwgaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvTGlzdC51bnNoaWZ0KGluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlVmlkZW86IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnZpZGVvTGlzdC5maW5kSW5kZXgodmlkZW8gPT4gdmlkZW8udGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VmlkZW9CeVRpdGxlOiBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZGVvTGlzdC5maW5kKHZpZGVvID0+IHZpZGVvLnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkVmlkZW86IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLmdldFZpZGVvQnlUaXRsZSh0aXRsZSk7XG4gICAgICAgICAgICBpZiAodmlkZW8gJiYgdmlkZW8udmlkZW9fdXJsICYmIHRoaXMucGF0aCkge1xuICAgICAgICAgICAgICAgIGRvd25sb2FkTXVzaWMoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB2aWRlby50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB2aWRlby52aWRlb191cmxcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5tb2RhbC5vcGVuTW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRG93bmxvYWQgY29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdmlkID0geXRkbCh2aWRlby52aWRlb191cmwpXG4gICAgICAgICAgICAgICAgLy8gdmlkLnBpcGUod2luZG93LmVsZWN0cm9uLmZzXG4gICAgICAgICAgICAgICAgLy8gLmNyZWF0ZVdyaXRlU3RyZWFtKHdpbmRvdy5lbGVjdHJvbi5wYXRoXG4gICAgICAgICAgICAgICAgLy8gLmpvaW4odGhpcy5wYXRoLCB2aWRlby50aXRsZSArIFwiLm1wNFwiKSkpO1xuICAgICAgICAgICAgICAgIC8vIHZpZC5vbihcInJlc3BvbnNlXCIsIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJHJlZnMubW9kYWwub3Blbk1vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0OiBcIkRvd25sb2FkIGNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy8gdmlkLm9uKFwiZXJyb3JcIiwgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkTXVzaWM6IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVQYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBwYXRocyA9IHdpbmRvdy5lbGVjdHJvbi5kaWFsb2cuc2hvd09wZW5EaWFsb2coe1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcIm9wZW5EaXJlY3RvcnlcIl1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHBhdGhzICYmIHBhdGhzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aCA9IHBhdGhzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuXG48c3R5bGUgc2NvcGVkPlxuLnZpZGVvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogMjBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXQtdGV4dCB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgaGVpZ2h0OiAxLjJlbTsgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTFEQTtBQWJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/YoutubeComp.vue?vue&type=script&lang=js&\n");

/***/ })

})