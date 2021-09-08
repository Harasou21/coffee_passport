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
    var inputElement = document.getElementById("drink_tag_tag_name"); // tweets_tag_nameはform_withが自動で生成してくれるid
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
      var keyword = document.getElementById("drink_tag_tag_name").value; // テキストボックスの入力した値を取得

      var XHR = new XMLHttpRequest(); // XHLHttpRequest とはAjaxを可能にするためのオブジェクトでサーバーに
      // HTTPリクエストを非同期で行うことができます
      // インスタンスを生成して、変数に代入する

      XHR.open("GET", "search/?keyword=".concat(keyword), true); // openはリクエストの種類を指定する
      // 第一引数 HTTPメソッドの指定
      // 第二引数 パスの指定
      // 第三引数 非同期通信のON/OFF
      // GETリクエストで、
      // ?でパラメーターを渡せる
      // ?keywordはキーで、${keyword}が値
      // queryパラメーターとは、http://sample.jp/?name=tanakaのように、
      // 「？」以降に情報を綴るURLパラメーターです。
      // 「？」以降の構造は、?<変数名>=<値>となっています。
      // ?文字列とかの検索をかけたい時に使う
      // サーチアクションを動かしたい
      // drinksが省略されてる理由は
      // 指定したパスの一個上のディレクトリを基準に
      // 相対的にパスを指定できる
      // とりあえず、drinks#searchにリクエストを送って
      // 予測変換したい

      XHR.responseType = "json"; // コントローラーから返却されるデータの形式には
      // jsと相性がよく、データとして取り扱いやすい
      // json形式を指定してる

      XHR.send(); // tag.jsからサーバーサイドに送信したい
      // リクエストを定義できたので、
      // 送信する処理を記述しましょう

      XHR.onload = function () {
        var tagName = XHR.response.keyword; // サーバーサイドの処理が成功した時に
        // レスポンスとして返って来るデータを
        // 受け取って,変数に代入
        // データの受け取りには
        // responseプロパティを使用する

        var searchResult = document.getElementById("search-result"); // 1.タグを表示させる場所である,search-resultを取得

        tagName.forEach(function (tag) {
          // forEachを使う理由は、railsのsearchアクション
          // で、検索に引っかかったタグを、複数出していく
          // 場合もあるので
          var childElement = document.createElement("div"); // 2.タグを表示させるための要素を生成してる
          // 名前の通り,要素を作るメソッド

          childElement.setAttribute("class", "child");
          childElement.setAttribute("id", tag.id); // 作ったdivタグにclass,idを付与する
          // forEachで作られたローカル変数のtagをここで使ってる

          childElement.innerHTML = tag.tag_name; // innerHTML を使用すると、HTML要素の取得や
          // 書き換えを行うことができる
          // 3.サーバーサイドから返ってきたtagのtag_name
          // を

          searchResult.appendChild(childElement);
        });
      };
    });
  });
}

;

/***/ })

/******/ });
//# sourceMappingURL=tag-55d2a028f9dbc0d69cfc.js.map