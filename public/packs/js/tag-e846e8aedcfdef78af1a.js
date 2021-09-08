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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/tag.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/tag.js":
/*!*************************************!*\
  !*** ./app/javascript/packs/tag.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (location.pathname.match("drinks/new")) {
  // location.pathnameは
  // 現在ページのURLのパスを取得、変更
  // .matchは引数に渡された文字列のマッチング結果を返す
  // 現在drinks/new にいる時にイベント発火
  document.addEventListener("DOMContentLoaded", function () {
    // addEventListenerは様々なイベント処理を実行
    // することができるメソッド
    // documentはhtml要素全体
    // DOMContentLoaded"は
    // Webページ読み込みが完了した時に発動
    // イベント発火する範囲広くね、、、？
    var inputElement = document.getElementById("tweet_tag_tag_name"); // tweets_tag_nameはform_withが自動で生成してくれるid
    // form_withのモデルに渡したインスタンスのスネークケース
    // + 入力する時のカラム名
    // 今回で言うとform_withに渡してるモデルが@drinkで
    // @drinkはnewアクションで@drink = DrinkTagと定義
    // しているので、まずdrink_tagになり
    // 入力するカラム名がtag_nameなので
    // drink_tag_tag_nameになる

    inputElement.addEventListener("keyup", function () {
      // フォームに入力して、キーボードが離されたタイミング
      // で順次イベント発火していく
      var keyword = document.getElementById("tweet_tag_tag_name").value; // テキストボックスの入力した値を取得

      console.log(keyword);
    });
  });
}

;

/***/ })

/******/ });
//# sourceMappingURL=tag-e846e8aedcfdef78af1a.js.map