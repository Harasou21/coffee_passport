/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/footer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/footer.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/footer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /coffee_passport/app/javascript/packs/footer.js: Identifier 'Vue' has already been declared (4:7)\n\n  2 | import Router from './router/router'\n  3 | import footer from './components/footer.vue'\n> 4 | import Vue from 'vue'\n    |        ^\n  5 | import App from '../app.vue'\n  6 | \n  7 | \n    at Parser._raise (/coffee_passport/node_modules/@babel/parser/lib/index.js:790:17)\n    at Parser.raiseWithData (/coffee_passport/node_modules/@babel/parser/lib/index.js:783:17)\n    at Parser.raise (/coffee_passport/node_modules/@babel/parser/lib/index.js:777:17)\n    at ScopeHandler.checkRedeclarationInScope (/coffee_passport/node_modules/@babel/parser/lib/index.js:4915:12)\n    at ScopeHandler.declareName (/coffee_passport/node_modules/@babel/parser/lib/index.js:4881:12)\n    at Parser.checkLVal (/coffee_passport/node_modules/@babel/parser/lib/index.js:9550:22)\n    at Parser.parseImportSpecifierLocal (/coffee_passport/node_modules/@babel/parser/lib/index.js:13099:10)\n    at Parser.maybeParseDefaultImportSpecifier (/coffee_passport/node_modules/@babel/parser/lib/index.js:13201:12)\n    at Parser.parseImport (/coffee_passport/node_modules/@babel/parser/lib/index.js:13064:31)\n    at Parser.parseStatementContent (/coffee_passport/node_modules/@babel/parser/lib/index.js:11739:27)\n    at Parser.parseStatement (/coffee_passport/node_modules/@babel/parser/lib/index.js:11639:17)\n    at Parser.parseBlockOrModuleBlockBody (/coffee_passport/node_modules/@babel/parser/lib/index.js:12221:25)\n    at Parser.parseBlockBody (/coffee_passport/node_modules/@babel/parser/lib/index.js:12207:10)\n    at Parser.parseTopLevel (/coffee_passport/node_modules/@babel/parser/lib/index.js:11570:10)\n    at Parser.parse (/coffee_passport/node_modules/@babel/parser/lib/index.js:13381:10)\n    at parse (/coffee_passport/node_modules/@babel/parser/lib/index.js:13434:38)\n    at parser (/coffee_passport/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/coffee_passport/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/coffee_passport/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/coffee_passport/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/coffee_passport/node_modules/gensync/index.js:261:32)\n    at gen.next (/coffee_passport/node_modules/gensync/index.js:273:13)\n    at async.call.value (/coffee_passport/node_modules/gensync/index.js:223:11)\n    at errback.call (/coffee_passport/node_modules/gensync/index.js:189:28)\n    at runGenerator.errback (/coffee_passport/node_modules/@babel/core/lib/gensync-utils/async.js:72:7)\n    at val (/coffee_passport/node_modules/gensync/index.js:113:33)\n    at step (/coffee_passport/node_modules/gensync/index.js:287:14)\n    at gen.next (/coffee_passport/node_modules/gensync/index.js:273:13)\n    at async.call.value (/coffee_passport/node_modules/gensync/index.js:223:11)");

/***/ })

/******/ });
//# sourceMappingURL=footer-7396dc33e358800d4ced.js.map