webpackHotUpdate("about",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/YoutubeComp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/YoutubeComp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ \"./node_modules/core-js/modules/es6.array.find-index.js\");\n/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _home_andriy_dev_free_folk_renderer_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Modal.vue */ \"./src/components/Modal.vue\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar electron = window.electron;\nvar google = electron.google;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Youtube\",\n  components: {\n    Modal: _components_Modal_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  },\n  props: {},\n  data: function data() {\n    return {\n      videoList: [],\n      videoSearch: electron.init.videoSearch,\n      path: electron.init.path,\n      downloadAll: \"mp3\"\n    };\n  },\n  mounted: function mounted() {},\n  methods: {\n    searchVideo: function searchVideo() {\n      var _this = this;\n\n      if (this.videoSearch) {\n        var url = new URL(this.videoSearch);\n        var list = url.searchParams.get(\"list\");\n\n        if (list) {\n          window.electron.google.getPlaylist(list).then(function (items) {\n            items.forEach(function (item) {\n              var video = _this.getVideoByTitle(item.title);\n\n              if (!video) {\n                item.diskInfo = {};\n                item.dwnProgress = {\n                  progress: 0,\n                  downloading: false\n                };\n\n                _this.videoList.unshift(item);\n\n                _this.getVideoDiskInfo(item.title);\n              }\n            });\n          });\n        } else {\n          google.getBasicInfo({\n            videoUrl: this.videoSearch\n          }).then(function (response) {\n            var video = _this.getVideoByTitle(response.title);\n\n            if (!video) {\n              response.diskInfo = {};\n              response.dwnProgress = {\n                progress: 0,\n                downloading: false\n              };\n\n              _this.videoList.unshift(response);\n\n              _this.getVideoDiskInfo(response.title);\n            }\n          }).catch(console.error);\n        }\n      }\n    },\n    downloadAllItems: function () {\n      var _downloadAllItems = Object(_home_andriy_dev_free_folk_renderer_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var _this2 = this;\n\n        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, video;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!this.videoList) {\n                  _context.next = 35;\n                  break;\n                }\n\n                if (!(this.downloadAll === \"mp4\")) {\n                  _context.next = 7;\n                  break;\n                }\n\n                _context.next = 4;\n                return Promise.all(this.videoList.map(function (video) {\n                  if (!video.diskInfo.mp4) {\n                    return _this2.downloadVideo(video.title, true);\n                  }\n                }));\n\n              case 4:\n                this.$refs.modal.openModal({\n                  title: \"Success!\",\n                  text: \"All videos download complete\"\n                });\n                _context.next = 35;\n                break;\n\n              case 7:\n                _iteratorNormalCompletion = true;\n                _didIteratorError = false;\n                _iteratorError = undefined;\n                _context.prev = 10;\n                _iterator = this.videoList[Symbol.iterator]();\n\n              case 12:\n                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n                  _context.next = 20;\n                  break;\n                }\n\n                video = _step.value;\n\n                if (video.diskInfo.mp3) {\n                  _context.next = 17;\n                  break;\n                }\n\n                _context.next = 17;\n                return this.downloadMusic(video.title, true);\n\n              case 17:\n                _iteratorNormalCompletion = true;\n                _context.next = 12;\n                break;\n\n              case 20:\n                _context.next = 26;\n                break;\n\n              case 22:\n                _context.prev = 22;\n                _context.t0 = _context[\"catch\"](10);\n                _didIteratorError = true;\n                _iteratorError = _context.t0;\n\n              case 26:\n                _context.prev = 26;\n                _context.prev = 27;\n\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                  _iterator.return();\n                }\n\n              case 29:\n                _context.prev = 29;\n\n                if (!_didIteratorError) {\n                  _context.next = 32;\n                  break;\n                }\n\n                throw _iteratorError;\n\n              case 32:\n                return _context.finish(29);\n\n              case 33:\n                return _context.finish(26);\n\n              case 34:\n                this.$refs.modal.openModal({\n                  title: \"Success!\",\n                  text: \"All music download complete\"\n                });\n\n              case 35:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[10, 22, 26, 34], [27,, 29, 33]]);\n      }));\n\n      function downloadAllItems() {\n        return _downloadAllItems.apply(this, arguments);\n      }\n\n      return downloadAllItems;\n    }(),\n    removeVideo: function removeVideo(title) {\n      var index = this.videoList.findIndex(function (video) {\n        return video.title === title;\n      });\n\n      if (index > -1) {\n        this.videoList.splice(index, 1);\n      }\n    },\n    removeFromDisk: function removeFromDisk(title) {\n      var _this3 = this;\n\n      google.removeVideosContent({\n        savePath: this.path,\n        videoTitles: [title],\n        fileTypes: [\".mp3\", \".mp4\"]\n      }).then(function (response) {\n        _this3.getVideoDiskInfo(title);\n\n        alert(\"Done!\");\n      }).catch(function (error) {\n        return console.error;\n      });\n    },\n    removeAll: function removeAll(title) {\n      var _this4 = this;\n\n      google.removeVideosContent({\n        savePath: this.path,\n        videoTitles: [title],\n        fileTypes: [\".mp3\", \".mp4\"]\n      }).then(function (response) {\n        return _this4.removeVideo(title);\n      }).catch(function (error) {\n        return console.error;\n      });\n    },\n    getVideoByTitle: function getVideoByTitle(title) {\n      return this.videoList.find(function (video) {\n        return video.title === title;\n      });\n    },\n    downloadVideo: function downloadVideo(title, noFeedback) {\n      var _this5 = this;\n\n      return new Promise(function (resolve, reject) {\n        var video = _this5.getVideoByTitle(title);\n\n        if (video && video.video_url && _this5.path && !video.diskInfo.mp4) {\n          video.dwnProgress.downloading = true;\n          video.dwnProgress.progress = 0;\n          google.downloadVideo({\n            savePath: _this5.path,\n            videoTitle: video.title,\n            videoUrl: video.video_url,\n            downloadProgressCallback: function downloadProgressCallback(callbackArgs) {\n              var contentLength = callbackArgs.contentLength,\n                  progress = callbackArgs.progress;\n              video.dwnProgress.progress = progress;\n\n              _this5.$forceUpdate();\n            }\n          }).then(function (response) {\n            video.dwnProgress.progress = 0;\n            video.dwnProgress.downloading = false;\n\n            _this5.getVideoDiskInfo(title);\n\n            if (!noFeedback) {\n              _this5.$refs.modal.openModal({\n                title: \"Success!\",\n                text: \"Video (\".concat(title, \") download complete\")\n              });\n            }\n\n            resolve();\n          }).catch(function (error) {\n            console.error(error);\n            reject(error);\n          });\n        }\n      });\n    },\n    downloadMusic: function downloadMusic(title, noFeedback) {\n      var _this6 = this;\n\n      return new Promise(function (resolve, reject) {\n        var video = _this6.getVideoByTitle(title);\n\n        if (video && video.video_url && _this6.path && !video.diskInfo.mp3) {\n          video.dwnProgress.downloading = true;\n          video.dwnProgress.progress = 0;\n          google.downloadMusic({\n            savePath: _this6.path,\n            videoTitle: video.title,\n            videoUrl: video.video_url,\n            downloadProgressCallback: function downloadProgressCallback(callbackArgs) {\n              var contentLength = callbackArgs.contentLength,\n                  progress = callbackArgs.progress;\n              video.dwnProgress.progress = progress;\n\n              _this6.$forceUpdate();\n            }\n          }).then(function () {\n            video.dwnProgress.progress = 0;\n            video.dwnProgress.downloading = false;\n\n            _this6.getVideoDiskInfo(title);\n\n            if (!noFeedback) {\n              _this6.$refs.modal.openModal({\n                title: \"Success!\",\n                text: \"MP3 (\".concat(title, \") download complete\")\n              });\n            }\n\n            resolve();\n          }).catch(function (error) {\n            console.error(error);\n            reject(error);\n          });\n        }\n      });\n    },\n    savePath: function savePath() {\n      var paths = window.electron.dialog.showOpenDialog({\n        properties: [\"openDirectory\"]\n      });\n\n      if (paths && paths.length === 1) {\n        this.path = paths[0];\n      }\n    },\n    getVideoDiskInfo: function getVideoDiskInfo(title) {\n      var _this7 = this;\n\n      var video = this.getVideoByTitle(title);\n\n      if (!video) {\n        console.error(\"No video found for title: \".concat(title));\n        return;\n      }\n\n      google.getItemDiskInformation({\n        title: title,\n        filePath: this.path,\n        fileTypes: [\".mp3\", \".mp4\"]\n      }).then(function (info) {\n        video.diskInfo.mp3 = !!info[\".mp3\"];\n        video.diskInfo.mp4 = !!info[\".mp4\"];\n\n        _this7.$forceUpdate();\n      }).catch(console.error);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvWW91dHViZUNvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Zb3V0dWJlQ29tcC52dWU/MjkzZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJoZWxsb1wiPlxuXHRcdDxmb3JtIGFjdGlvbj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgY29sLWxnXCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwicGF0aFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNhdmUgUGF0aFwiXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiU2F2ZSBQYXRoXCJcblx0XHRcdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxuXHRcdFx0XHRcdFx0cmVhZG9ubHlcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB2LW9uOmNsaWNrPVwic2F2ZVBhdGhcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCI+U2V0IHBhdGg8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zIGNvbC1sZ1wiPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0di1tb2RlbD1cInZpZGVvU2VhcmNoXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVmlkZW8gVVJMXCJcblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJWaWRlbyBVUkxcIlxuXHRcdFx0XHRcdFx0YXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cblx0XHRcdFx0XHRcdDxidXR0b24gdi1vbjpjbGljaz1cInNlYXJjaFZpZGVvXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlNlYXJjaDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgY29sLWxnXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0di1vbjpjbGljaz1cImRvd25sb2FkQWxsSXRlbXNcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdD5Eb3dubG9hZCBhbGwgYXM8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8c2VsZWN0IG5hbWU9XCJkb3dubG9hZEFsbFwiIHYtbW9kZWw9XCJkb3dubG9hZEFsbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwibXAzXCI+bXAzPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwibXA0XCI+bXA0PC9vcHRpb24+XG5cdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTJcIiB2LWZvcj1cInZpZGVvIGluIHZpZGVvTGlzdFwiIDprZXk9XCJ2aWRlby50aXRsZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZCB2aWRlb1wiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJjYXJkLWltZy10b3BcIiA6c3JjPVwidmlkZW8udGh1bWJuYWlsX3VybFwiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJjYXJkLXRpdGxlIGN1dC10ZXh0XCI+e3t2aWRlby50aXRsZX19PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJjYXJkLXRleHQgY3V0LXRleHRcIj57e3ZpZGVvLmRlc2NyaXB0aW9ufX08L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1oYXNwb3B1cD1cInRydWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdDppZD1cIididG4nICsgdmlkZW8udGl0bGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG5cdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJnZXRWaWRlb0Rpc2tJbmZvKHZpZGVvLnRpdGxlKVwiXG5cdFx0XHRcdFx0XHRcdFx0PkFjdGlvbjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgOmFyaWEtbGFiZWxsZWRieT1cIididG4nICsgdmlkZW8udGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHYtb246Y2xpY2s9XCJkb3dubG9hZFZpZGVvKHZpZGVvLnRpdGxlKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiIXZpZGVvLmRpc2tJbmZvLm1wNFwiPkRvd25sb2FkIG1wNDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cInZpZGVvLmRpc2tJbmZvLm1wNFwiPm1wNCBkb3dubG9hZGVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiB2LW9uOmNsaWNrPVwiZG93bmxvYWRNdXNpYyh2aWRlby50aXRsZSlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cIiF2aWRlby5kaXNrSW5mby5tcDNcIj5Eb3dubG9hZCBtcDM8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJ2aWRlby5kaXNrSW5mby5tcDNcIj5tcDMgZG93bmxvYWRlZDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0di1vbjpjbGljaz1cInJlbW92ZVZpZGVvKHZpZGVvLnRpdGxlKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+RGVsZXRlIGZyb20gbGlzdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0di1vbjpjbGljaz1cInJlbW92ZUZyb21EaXNrKHZpZGVvLnRpdGxlKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+RGVsZXRlIGZyb20gZGlzazwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0di1iaW5kOmNsYXNzPVwieydkLW5vbmUnOiAhdmlkZW8uZGlza0luZm8ubXA0ICYmICF2aWRlby5kaXNrSW5mby5tcDN9XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0di1vbjpjbGljaz1cInJlbW92ZUFsbCh2aWRlby50aXRsZSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PkRlbGV0ZSBmcm9tIGxpc3QgYW5kIGRpc2s8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIHYtaWY9XCJ2aWRlby5kd25Qcm9ncmVzcy5kb3dubG9hZGluZ1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPVwicHJvZ3Jlc3NiYXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0di1iaW5kOmNsYXNzPVwieydwcm9ncmVzcy1iYXItYW5pbWF0ZWQnOiB2aWRlby5kd25Qcm9ncmVzcy5kb3dubG9hZGluZ31cIlxuXHRcdFx0XHRcdFx0XHRcdFx0di1iaW5kOnN0eWxlPVwie3dpZHRoOiBgJHt2aWRlby5kd25Qcm9ncmVzcy5wcm9ncmVzc30lYH1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS12YWx1ZW1pbj1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS12YWx1ZW1heD1cIjEwMFwiXG5cdFx0XHRcdFx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZGlzay1pbmZvXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0di1pZj1cIiF2aWRlby5kaXNrSW5mby5tcDMgJiYgIXZpZGVvLmRpc2tJbmZvLm1wNFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJiYWRnZSBiYWRnZS1zZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHQ+Tm90IGRvd25sb2FkZWQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJ2aWRlby5kaXNrSW5mby5tcDNcIiBjbGFzcz1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj5tcDM8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJ2aWRlby5kaXNrSW5mby5tcDRcIiBjbGFzcz1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj5tcDQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PE1vZGFsIHJlZj1cIm1vZGFsXCIvPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9Nb2RhbC52dWVcIjtcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuXG5jb25zdCBlbGVjdHJvbiA9IHdpbmRvdy5lbGVjdHJvbjtcbmNvbnN0IGdvb2dsZSA9IGVsZWN0cm9uLmdvb2dsZTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiBcIllvdXR1YmVcIixcblx0Y29tcG9uZW50czoge1xuXHRcdE1vZGFsXG5cdH0sXG5cdHByb3BzOiB7fSxcblx0ZGF0YTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZpZGVvTGlzdDogW10sXG5cdFx0XHR2aWRlb1NlYXJjaDogZWxlY3Ryb24uaW5pdC52aWRlb1NlYXJjaCxcblx0XHRcdHBhdGg6IGVsZWN0cm9uLmluaXQucGF0aCxcblx0XHRcdGRvd25sb2FkQWxsOiBcIm1wM1wiXG5cdFx0fTtcblx0fSxcblx0bW91bnRlZDogZnVuY3Rpb24oKSB7fSxcblx0bWV0aG9kczoge1xuXHRcdHNlYXJjaFZpZGVvOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICh0aGlzLnZpZGVvU2VhcmNoKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IG5ldyBVUkwodGhpcy52aWRlb1NlYXJjaCk7XG5cdFx0XHRcdGNvbnN0IGxpc3QgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpc3RcIik7XG5cdFx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdFx0d2luZG93LmVsZWN0cm9uLmdvb2dsZS5nZXRQbGF5bGlzdChsaXN0KS50aGVuKGl0ZW1zID0+IHtcblx0XHRcdFx0XHRcdGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZpZGVvID0gdGhpcy5nZXRWaWRlb0J5VGl0bGUoaXRlbS50aXRsZSk7XG5cdFx0XHRcdFx0XHRcdGlmICghdmlkZW8pIHtcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmRpc2tJbmZvID0ge307XG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5kd25Qcm9ncmVzcyA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdHByb2dyZXNzOiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZG93bmxvYWRpbmc6IGZhbHNlXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdC51bnNoaWZ0KGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0VmlkZW9EaXNrSW5mbyhpdGVtLnRpdGxlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Z29vZ2xlXG5cdFx0XHRcdFx0XHQuZ2V0QmFzaWNJbmZvKHsgdmlkZW9Vcmw6IHRoaXMudmlkZW9TZWFyY2ggfSlcblx0XHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdmlkZW8gPSB0aGlzLmdldFZpZGVvQnlUaXRsZShyZXNwb25zZS50aXRsZSk7XG5cdFx0XHRcdFx0XHRcdGlmICghdmlkZW8pIHtcblx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZS5kaXNrSW5mbyA9IHt9O1xuXHRcdFx0XHRcdFx0XHRcdHJlc3BvbnNlLmR3blByb2dyZXNzID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJvZ3Jlc3M6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRkb3dubG9hZGluZzogZmFsc2Vcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMudmlkZW9MaXN0LnVuc2hpZnQocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0VmlkZW9EaXNrSW5mbyhyZXNwb25zZS50aXRsZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGRvd25sb2FkQWxsSXRlbXM6IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHRoaXMudmlkZW9MaXN0KSB7XG5cdFx0XHRcdGlmICh0aGlzLmRvd25sb2FkQWxsID09PSBcIm1wNFwiKSB7XG5cdFx0XHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdC5tYXAodmlkZW8gPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoIXZpZGVvLmRpc2tJbmZvLm1wNCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRvd25sb2FkVmlkZW8odmlkZW8udGl0bGUsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy4kcmVmcy5tb2RhbC5vcGVuTW9kYWwoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IFwiU3VjY2VzcyFcIixcblx0XHRcdFx0XHRcdHRleHQ6IFwiQWxsIHZpZGVvcyBkb3dubG9hZCBjb21wbGV0ZVwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgdmlkZW8gb2YgdGhpcy52aWRlb0xpc3QpIHtcblx0XHRcdFx0XHRcdGlmICghdmlkZW8uZGlza0luZm8ubXAzKSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuZG93bmxvYWRNdXNpYyh2aWRlby50aXRsZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuJHJlZnMubW9kYWwub3Blbk1vZGFsKHtcblx0XHRcdFx0XHRcdHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXG5cdFx0XHRcdFx0XHR0ZXh0OiBcIkFsbCBtdXNpYyBkb3dubG9hZCBjb21wbGV0ZVwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHJlbW92ZVZpZGVvOiBmdW5jdGlvbih0aXRsZSkge1xuXHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnZpZGVvTGlzdC5maW5kSW5kZXgoXG5cdFx0XHRcdHZpZGVvID0+IHZpZGVvLnRpdGxlID09PSB0aXRsZVxuXHRcdFx0KTtcblx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdHRoaXMudmlkZW9MaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyZW1vdmVGcm9tRGlzazogZnVuY3Rpb24odGl0bGUpIHtcblx0XHRcdGdvb2dsZVxuXHRcdFx0XHQucmVtb3ZlVmlkZW9zQ29udGVudCh7XG5cdFx0XHRcdFx0c2F2ZVBhdGg6IHRoaXMucGF0aCxcblx0XHRcdFx0XHR2aWRlb1RpdGxlczogW3RpdGxlXSxcblx0XHRcdFx0XHRmaWxlVHlwZXM6IFtcIi5tcDNcIiwgXCIubXA0XCJdXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHR0aGlzLmdldFZpZGVvRGlza0luZm8odGl0bGUpO1xuXHRcdFx0XHRcdGFsZXJ0KFwiRG9uZSFcIik7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKTtcblx0XHR9LFxuXHRcdHJlbW92ZUFsbDogZnVuY3Rpb24odGl0bGUpIHtcblx0XHRcdGdvb2dsZVxuXHRcdFx0XHQucmVtb3ZlVmlkZW9zQ29udGVudCh7XG5cdFx0XHRcdFx0c2F2ZVBhdGg6IHRoaXMucGF0aCxcblx0XHRcdFx0XHR2aWRlb1RpdGxlczogW3RpdGxlXSxcblx0XHRcdFx0XHRmaWxlVHlwZXM6IFtcIi5tcDNcIiwgXCIubXA0XCJdXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHRoaXMucmVtb3ZlVmlkZW8odGl0bGUpKVxuXHRcdFx0XHQuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcik7XG5cdFx0fSxcblx0XHRnZXRWaWRlb0J5VGl0bGU6IGZ1bmN0aW9uKHRpdGxlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWRlb0xpc3QuZmluZCh2aWRlbyA9PiB2aWRlby50aXRsZSA9PT0gdGl0bGUpO1xuXHRcdH0sXG5cdFx0ZG93bmxvYWRWaWRlbzogZnVuY3Rpb24odGl0bGUsIG5vRmVlZGJhY2spIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gdGhpcy5nZXRWaWRlb0J5VGl0bGUodGl0bGUpO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmlkZW8gJiZcblx0XHRcdFx0XHR2aWRlby52aWRlb191cmwgJiZcblx0XHRcdFx0XHR0aGlzLnBhdGggJiZcblx0XHRcdFx0XHQhdmlkZW8uZGlza0luZm8ubXA0XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHZpZGVvLmR3blByb2dyZXNzLmRvd25sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHR2aWRlby5kd25Qcm9ncmVzcy5wcm9ncmVzcyA9IDA7XG5cdFx0XHRcdFx0Z29vZ2xlXG5cdFx0XHRcdFx0XHQuZG93bmxvYWRWaWRlbyh7XG5cdFx0XHRcdFx0XHRcdHNhdmVQYXRoOiB0aGlzLnBhdGgsXG5cdFx0XHRcdFx0XHRcdHZpZGVvVGl0bGU6IHZpZGVvLnRpdGxlLFxuXHRcdFx0XHRcdFx0XHR2aWRlb1VybDogdmlkZW8udmlkZW9fdXJsLFxuXHRcdFx0XHRcdFx0XHRkb3dubG9hZFByb2dyZXNzQ2FsbGJhY2s6IGNhbGxiYWNrQXJncyA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudExlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdHByb2dyZXNzXG5cdFx0XHRcdFx0XHRcdFx0fSA9IGNhbGxiYWNrQXJncztcblx0XHRcdFx0XHRcdFx0XHR2aWRlby5kd25Qcm9ncmVzcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJGZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHZpZGVvLmR3blByb2dyZXNzLnByb2dyZXNzID0gMDtcblx0XHRcdFx0XHRcdFx0dmlkZW8uZHduUHJvZ3Jlc3MuZG93bmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRWaWRlb0Rpc2tJbmZvKHRpdGxlKTtcblx0XHRcdFx0XHRcdFx0aWYgKCFub0ZlZWRiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kcmVmcy5tb2RhbC5vcGVuTW9kYWwoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiU3VjY2VzcyFcIixcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IGBWaWRlbyAoJHt0aXRsZX0pIGRvd25sb2FkIGNvbXBsZXRlYFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGRvd25sb2FkTXVzaWM6IGZ1bmN0aW9uKHRpdGxlLCBub0ZlZWRiYWNrKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB2aWRlbyA9IHRoaXMuZ2V0VmlkZW9CeVRpdGxlKHRpdGxlKTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZpZGVvICYmXG5cdFx0XHRcdFx0dmlkZW8udmlkZW9fdXJsICYmXG5cdFx0XHRcdFx0dGhpcy5wYXRoICYmXG5cdFx0XHRcdFx0IXZpZGVvLmRpc2tJbmZvLm1wM1xuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR2aWRlby5kd25Qcm9ncmVzcy5kb3dubG9hZGluZyA9IHRydWU7XG5cdFx0XHRcdFx0dmlkZW8uZHduUHJvZ3Jlc3MucHJvZ3Jlc3MgPSAwO1xuXHRcdFx0XHRcdGdvb2dsZVxuXHRcdFx0XHRcdFx0LmRvd25sb2FkTXVzaWMoe1xuXHRcdFx0XHRcdFx0XHRzYXZlUGF0aDogdGhpcy5wYXRoLFxuXHRcdFx0XHRcdFx0XHR2aWRlb1RpdGxlOiB2aWRlby50aXRsZSxcblx0XHRcdFx0XHRcdFx0dmlkZW9Vcmw6IHZpZGVvLnZpZGVvX3VybCxcblx0XHRcdFx0XHRcdFx0ZG93bmxvYWRQcm9ncmVzc0NhbGxiYWNrOiBjYWxsYmFja0FyZ3MgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnRMZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9ncmVzc1xuXHRcdFx0XHRcdFx0XHRcdH0gPSBjYWxsYmFja0FyZ3M7XG5cdFx0XHRcdFx0XHRcdFx0dmlkZW8uZHduUHJvZ3Jlc3MucHJvZ3Jlc3MgPSBwcm9ncmVzcztcblx0XHRcdFx0XHRcdFx0XHR0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR2aWRlby5kd25Qcm9ncmVzcy5wcm9ncmVzcyA9IDA7XG5cdFx0XHRcdFx0XHRcdHZpZGVvLmR3blByb2dyZXNzLmRvd25sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0VmlkZW9EaXNrSW5mbyh0aXRsZSk7XG5cdFx0XHRcdFx0XHRcdGlmICghbm9GZWVkYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJHJlZnMubW9kYWwub3Blbk1vZGFsKHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBgTVAzICgke3RpdGxlfSkgZG93bmxvYWQgY29tcGxldGVgXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0c2F2ZVBhdGg6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc3QgcGF0aHMgPSB3aW5kb3cuZWxlY3Ryb24uZGlhbG9nLnNob3dPcGVuRGlhbG9nKHtcblx0XHRcdFx0cHJvcGVydGllczogW1wib3BlbkRpcmVjdG9yeVwiXVxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocGF0aHMgJiYgcGF0aHMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdHRoaXMucGF0aCA9IHBhdGhzWzBdO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Z2V0VmlkZW9EaXNrSW5mbzogZnVuY3Rpb24odGl0bGUpIHtcblx0XHRcdGNvbnN0IHZpZGVvID0gdGhpcy5nZXRWaWRlb0J5VGl0bGUodGl0bGUpO1xuXHRcdFx0aWYgKCF2aWRlbykge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBObyB2aWRlbyBmb3VuZCBmb3IgdGl0bGU6ICR7dGl0bGV9YCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGdvb2dsZVxuXHRcdFx0XHQuZ2V0SXRlbURpc2tJbmZvcm1hdGlvbih7XG5cdFx0XHRcdFx0dGl0bGU6IHRpdGxlLFxuXHRcdFx0XHRcdGZpbGVQYXRoOiB0aGlzLnBhdGgsXG5cdFx0XHRcdFx0ZmlsZVR5cGVzOiBbXCIubXAzXCIsIFwiLm1wNFwiXVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbihpbmZvID0+IHtcblx0XHRcdFx0XHR2aWRlby5kaXNrSW5mby5tcDMgPSAhIWluZm9bXCIubXAzXCJdO1xuXHRcdFx0XHRcdHZpZGVvLmRpc2tJbmZvLm1wNCA9ICEhaW5mb1tcIi5tcDRcIl07XG5cdFx0XHRcdFx0dGhpcy4kZm9yY2VVcGRhdGUoKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cblxuPHN0eWxlIHNjb3BlZD5cbi52aWRlbyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jbG9zZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29sb3I6IHJlZDtcblx0cmlnaHQ6IDIwcHg7XG5cdHRvcDogMjBweDtcblx0ei1pbmRleDogMTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLmN1dC10ZXh0IHtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGhlaWdodDogMS4yZW07XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZGlzay1pbmZvID4gLmJhZGdlIHtcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XG59XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJIQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFVQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFvQkE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBMkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBWEE7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBdE5BO0FBZkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/YoutubeComp.vue?vue&type=script&lang=js&\n");

/***/ })

})