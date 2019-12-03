module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(622);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 622:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(968);
const github = __webpack_require__(706);

const requiredLabels = core.getInput('requiredLabels');
console.log('required labels are: ' + requiredLabels)

const labels = github.context.payload.pull_request.labels
const labelNames = labels.map(label => label.name)
console.log('labels on this pull request are: ' + labelNames)

if (!(requiredLabels.some(requiredLabel => labelNames.includes(requiredLabel)))) {
    core.setFailed('Your pull request should contain one of the required labels: ' + requiredLabels);
}


/***/ }),

/***/ 706:
/***/ (function() {

eval("require")("@actions/github");


/***/ }),

/***/ 968:
/***/ (function() {

eval("require")("@actions/core");


/***/ })

/******/ });