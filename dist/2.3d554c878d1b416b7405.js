(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const requireContent = __webpack_require__(4);

requireContent.keys().forEach((filename) => {
  requireContent(filename);
});


/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./report.svg": 5,
	"./work.svg": 8
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ })
]]);