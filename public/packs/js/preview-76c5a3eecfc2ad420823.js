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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/preview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/preview.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/preview.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.URL.match(/drinks/)) {
  document.addEventListener('DOMContentLoaded', function () {
    // input要素の値に変更があった場合、関数が発火すること
    // 値の変更があった要素から、画像の情報を取得すること
    // 取得した画像情報のURLを生成すること
    var ImageList = document.getElementById('image-list'); // 画像のプレビューを表示する場所の要素を取得

    document.getElementById('drink_tag_image').addEventListener('change', function (e) {
      // input要素に変化があったときにイベント発火
      // console.log(e);
      // 選択した画像は発火したイベントeの中のtargetの中の
      // filesのいう配列に格納されてる
      // 画像が表示されている場合のみ、すでに存在している画像を削除する
      var imageContent = document.getElementById('drink-img');

      if (imageContent) {
        imageContent.remove();
      }

      var file = e.target.files[0]; // 次は、取得できた画像情報をプレビューとして表示させるために
      // 、img要素に付与するsrc属性のURLを生成します。
      // 取得した画像情報のURLを生成するには、
      // createObjectURLメソッドを使います。

      var blob = window.URL.createObjectURL(file); // おさらいになりますが、
      // windowはブラウザの情報を持つオブジェクトです。
      // こちらも、先ほど確認した発火イベントeのようにハッシュ構造になっており
      // 、オブジェクトやメソッドが格納されています。
      // 今回はその中の、URLオブジェクトのcreateObjectURLメソッドを呼び出し、
      // 変数fileを引数として渡すことで、
      // 画像のURLを生成しています。
      // 画像を表示するためのdiv要素を生成

      var imageElement = document.createElement('div'); // 表示する画像を生成

      var blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);
      blobImage.setAttribute('id', 'drink-img'); // => <div><input></div>
      // 生成したHTMLの要素をブラウザに表示させる

      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);
    });
  });
} else if (document.URL.match(/users/) || document.URL.match(/edit/)) {
  document.addEventListener('DOMContentLoaded', function () {
    var ImageList = document.getElementById('image-list'); // 画像のプレビューを表示する場所の要素を取得

    document.getElementById('user_image').addEventListener('change', function (e) {
      var imageContent = document.getElementById('drink-img');

      if (imageContent) {
        imageContent.remove();
      }

      var file = e.target.files[0];
      var blob = window.URL.createObjectURL(file);
      var imageElement = document.createElement('div');
      var blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);
      blobImage.setAttribute('id', 'drink-img');
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);
    });
  });
}

/***/ })

/******/ });
//# sourceMappingURL=preview-76c5a3eecfc2ad420823.js.map