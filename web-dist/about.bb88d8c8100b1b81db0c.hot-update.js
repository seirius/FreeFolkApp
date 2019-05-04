webpackHotUpdate("about",{

/***/ "./src/components/youtube-util/youtube.js":
/*!************************************************!*\
  !*** ./src/components/youtube-util/youtube.js ***!
  \************************************************/
/*! exports provided: downloadVideo, downloadMusic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"downloadVideo\", function() { return downloadVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"downloadMusic\", function() { return downloadMusic; });\n/* harmony import */ var ytdl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ytdl-core */ \"./node_modules/ytdl-core/lib/index.js\");\n/* harmony import */ var ytdl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ytdl_core__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction downloadVideo(args) {\n  return new Promise(function (resolve, reject) {\n    var url = args.url,\n        path = args.path,\n        title = args.title;\n\n    if (!url || !path || !title) {\n      reject(\"No url, path or title defined.\");\n    }\n\n    var vid = ytdl_core__WEBPACK_IMPORTED_MODULE_0__(url);\n    vid.pipe(window.electron.fs.createWriteStream(window.electron.path.join(path, title + \".mp4\")));\n    vid.on(\"response\", resolve);\n    vid.on(\"error\", reject);\n  });\n}\nfunction downloadMusic(args) {\n  return new Promise(function (resolve, reject) {\n    var path = args.path,\n        title = args.title;\n    downloadVideo(args).then(function () {\n      var nPath = window.electron.path;\n      var fs = window.electron.fs;\n      var videoPath = nPath.join(path, \"\".concat(title, \".mp4\"));\n      var mp3Path = nPath.join(path, \"\".concat(title, \".mp3\"));\n      window.electron.ffmpeg(videoPath).format(\"mp3\").on(\"end\", function () {\n        fs.unlink(videoPath, function (err) {\n          if (err) {\n            reject(err);\n          } else {\n            resolve();\n          }\n        });\n      }).on(\"error\", reject).save(mp3Path);\n    }).catch(reject);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy95b3V0dWJlLXV0aWwveW91dHViZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3lvdXR1YmUtdXRpbC95b3V0dWJlLmpzPzg0MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgeXRkbCBmcm9tIFwieXRkbC1jb3JlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZFZpZGVvKGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB7dXJsLCBwYXRoLCB0aXRsZX0gPSBhcmdzO1xuICAgICAgICBpZiAoIXVybCB8fCAhcGF0aCB8fCAhdGl0bGUpIHtcbiAgICAgICAgICAgIHJlamVjdChcIk5vIHVybCwgcGF0aCBvciB0aXRsZSBkZWZpbmVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2aWQgPSB5dGRsKHVybClcbiAgICAgICAgdmlkLnBpcGUod2luZG93LmVsZWN0cm9uLmZzXG4gICAgICAgIC5jcmVhdGVXcml0ZVN0cmVhbSh3aW5kb3cuZWxlY3Ryb24ucGF0aFxuICAgICAgICAuam9pbihwYXRoLCB0aXRsZSArIFwiLm1wNFwiKSkpO1xuICAgICAgICB2aWQub24oXCJyZXNwb25zZVwiLCByZXNvbHZlKTtcbiAgICAgICAgdmlkLm9uKFwiZXJyb3JcIiwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkTXVzaWMoYXJncykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHtwYXRoLCB0aXRsZX0gPSBhcmdzO1xuICAgICAgICBkb3dubG9hZFZpZGVvKGFyZ3MpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5QYXRoID0gd2luZG93LmVsZWN0cm9uLnBhdGg7XG4gICAgICAgICAgICBjb25zdCBmcyA9IHdpbmRvdy5lbGVjdHJvbi5mcztcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvUGF0aCA9IG5QYXRoLmpvaW4ocGF0aCwgYCR7dGl0bGV9Lm1wNGApO1xuICAgICAgICAgICAgY29uc3QgbXAzUGF0aCA9IG5QYXRoLmpvaW4ocGF0aCwgYCR7dGl0bGV9Lm1wM2ApO1xuICAgICAgICAgICAgd2luZG93LmVsZWN0cm9uXG4gICAgICAgICAgICAuZmZtcGVnKHZpZGVvUGF0aClcbiAgICAgICAgICAgIC5mb3JtYXQoXCJtcDNcIilcbiAgICAgICAgICAgIC5vbihcImVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZnMudW5saW5rKHZpZGVvUGF0aCwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJlcnJvclwiLCByZWplY3QpXG4gICAgICAgICAgICAuc2F2ZShtcDNQYXRoKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/youtube-util/youtube.js\n");

/***/ })

})