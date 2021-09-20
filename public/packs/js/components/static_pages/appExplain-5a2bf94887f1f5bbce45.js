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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/components/static_pages/appExplain.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/components/static_pages/appExplain.vue":
/*!*********************************************************************!*\
  !*** ./app/javascript/packs/components/static_pages/appExplain.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appExplain_vue_vue_type_template_id_d471f2f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appExplain.vue?vue&type=template&id=d471f2f8& */ "./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=template&id=d471f2f8&");
/* harmony import */ var _appExplain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appExplain.vue?vue&type=script&lang=js& */ "./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _appExplain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _appExplain_vue_vue_type_template_id_d471f2f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _appExplain_vue_vue_type_template_id_d471f2f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/packs/components/static_pages/appExplain.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appExplain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--8-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./appExplain.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appExplain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=template&id=d471f2f8&":
/*!****************************************************************************************************!*\
  !*** ./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=template&id=d471f2f8& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appExplain_vue_vue_type_template_id_d471f2f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./appExplain.vue?vue&type=template&id=d471f2f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=template&id=d471f2f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appExplain_vue_vue_type_template_id_d471f2f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appExplain_vue_vue_type_template_id_d471f2f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--8-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-carousel */ "./node_modules/vue-carousel/dist/vue-carousel.min.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_carousel__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Carousel: vue_carousel__WEBPACK_IMPORTED_MODULE_0__["Carousel"],
    Slide: vue_carousel__WEBPACK_IMPORTED_MODULE_0__["Slide"]
  }
});

/***/ }),

/***/ "./node_modules/vue-carousel/dist/vue-carousel.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-carousel/dist/vue-carousel.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * vue-carousel v0.18.0-alpha
 * (c) 2019 todd.beauchamp@ssense.com
 * https://github.com/ssense/vue-carousel#readme
 */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var i = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) {
        n.d(r, i, function (e) {
          return t[e];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 53);
  }([function (t, e, n) {
    var r = n(30)("wks"),
        i = n(15),
        o = n(3).Symbol,
        a = "function" == typeof o;
    (t.exports = function (t) {
      return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t));
    }).store = r;
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e, n) {
    var r = n(3),
        i = n(11),
        o = n(6),
        a = n(10),
        s = n(29),
        u = function u(t, e, n) {
      var c,
          l,
          f,
          d,
          h = t & u.F,
          p = t & u.G,
          g = t & u.S,
          v = t & u.P,
          y = t & u.B,
          m = p ? r : g ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
          b = p ? i : i[e] || (i[e] = {}),
          x = b.prototype || (b.prototype = {});

      for (c in p && (n = e), n) {
        f = ((l = !h && m && void 0 !== m[c]) ? m : n)[c], d = y && l ? s(f, r) : v && "function" == typeof f ? s(Function.call, f) : f, m && a(m, c, f, t & u.U), b[c] != f && o(b, c, d), v && x[c] != f && (x[c] = f);
      }
    };

    r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
  }, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
  }, function (t, e, n) {
    var r = n(7),
        i = n(40),
        o = n(20),
        a = Object.defineProperty;
    e.f = n(5) ? Object.defineProperty : function (t, e, n) {
      if (r(t), e = o(e, !0), r(n), i) try {
        return a(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (t[e] = n.value), t;
    };
  }, function (t, e, n) {
    t.exports = !n(1)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var r = n(4),
        i = n(14);
    t.exports = n(5) ? function (t, e, n) {
      return r.f(t, e, i(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  }, function (t, e, n) {
    var r = n(8);

    t.exports = function (t) {
      if (!r(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == _typeof(t) ? null !== t : "function" == typeof t;
    };
  }, function (t, e) {
    var n = {}.hasOwnProperty;

    t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e, n) {
    var r = n(3),
        i = n(6),
        o = n(9),
        a = n(15)("src"),
        s = Function.toString,
        u = ("" + s).split("toString");
    n(11).inspectSource = function (t) {
      return s.call(t);
    }, (t.exports = function (t, e, n, s) {
      var c = "function" == typeof n;
      c && (o(n, "name") || i(n, "name", e)), t[e] !== n && (c && (o(n, a) || i(n, a, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[a] || s.call(this);
    });
  }, function (t, e) {
    var n = t.exports = {
      version: "2.5.7"
    };
    "number" == typeof __e && (__e = n);
  }, function (t, e, n) {
    var r = n(47),
        i = n(17);

    t.exports = function (t) {
      return r(i(t));
    };
  }, function (t, e, n) {
    var r = n(48),
        i = n(33);

    t.exports = Object.keys || function (t) {
      return r(t, i);
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  }, function (t, e) {
    var n = 0,
        r = Math.random();

    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
    };
  }, function (t, e, n) {
    var r = n(17);

    t.exports = function (t) {
      return Object(r(t));
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  }, function (t, e) {
    t.exports = {};
  }, function (t, e) {
    var n = {}.toString;

    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e, n) {
    var r = n(8);

    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, i;
      if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
      if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
      if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e) {
    t.exports = !1;
  }, function (t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function (t, e) {
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var n = function (t, e) {
            var n = t[1] || "",
                r = t[3];
            if (!r) return n;

            if (e && "function" == typeof btoa) {
              var i = function (t) {
                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */";
              }(r),
                  o = r.sources.map(function (t) {
                return "/*# sourceURL=" + r.sourceRoot + t + " */";
              });

              return [n].concat(o).concat([i]).join("\n");
            }

            return [n].join("\n");
          }(e, t);

          return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
        }).join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);

        for (var r = {}, i = 0; i < this.length; i++) {
          var o = this[i][0];
          "number" == typeof o && (r[o] = !0);
        }

        for (i = 0; i < t.length; i++) {
          var a = t[i];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      for (var n = [], r = {}, i = 0; i < e.length; i++) {
        var o = e[i],
            a = o[0],
            s = {
          id: t + ":" + i,
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = {
          id: a,
          parts: [s]
        });
      }

      return n;
    }

    n.r(e), n.d(e, "default", function () {
      return p;
    });
    var i = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !i) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

    var o = {},
        a = i && (document.head || document.getElementsByTagName("head")[0]),
        s = null,
        u = 0,
        c = !1,
        l = function l() {},
        f = null,
        d = "data-vue-ssr-id",
        h = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function p(t, e, n, i) {
      c = n, f = i || {};
      var a = r(t, e);
      return g(a), function (e) {
        for (var n = [], i = 0; i < a.length; i++) {
          var s = a[i];
          (u = o[s.id]).refs--, n.push(u);
        }

        for (e ? g(a = r(t, e)) : a = [], i = 0; i < n.length; i++) {
          var u;

          if (0 === (u = n[i]).refs) {
            for (var c = 0; c < u.parts.length; c++) {
              u.parts[c]();
            }

            delete o[u.id];
          }
        }
      };
    }

    function g(t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e],
            r = o[n.id];

        if (r) {
          r.refs++;

          for (var i = 0; i < r.parts.length; i++) {
            r.parts[i](n.parts[i]);
          }

          for (; i < n.parts.length; i++) {
            r.parts.push(y(n.parts[i]));
          }

          r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
        } else {
          var a = [];

          for (i = 0; i < n.parts.length; i++) {
            a.push(y(n.parts[i]));
          }

          o[n.id] = {
            id: n.id,
            refs: 1,
            parts: a
          };
        }
      }
    }

    function v() {
      var t = document.createElement("style");
      return t.type = "text/css", a.appendChild(t), t;
    }

    function y(t) {
      var e,
          n,
          r = document.querySelector("style[" + d + '~="' + t.id + '"]');

      if (r) {
        if (c) return l;
        r.parentNode.removeChild(r);
      }

      if (h) {
        var i = u++;
        r = s || (s = v()), e = b.bind(null, r, i, !1), n = b.bind(null, r, i, !0);
      } else r = v(), e = function (t, e) {
        var n = e.css,
            r = e.media,
            i = e.sourceMap;
        if (r && t.setAttribute("media", r), f.ssrId && t.setAttribute(d, e.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(n));
        }
      }.bind(null, r), n = function n() {
        r.parentNode.removeChild(r);
      };

      return e(t), function (r) {
        if (r) {
          if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
          e(t = r);
        } else n();
      };
    }

    var m = function () {
      var t = [];
      return function (e, n) {
        return t[e] = n, t.filter(Boolean).join("\n");
      };
    }();

    function b(t, e, n, r) {
      var i = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = m(e, i);else {
        var o = document.createTextNode(i),
            a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o);
      }
    }
  }, function (t, e, n) {
    var r = n(95);
    "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals), (0, n(24).default)("1c9d4ce3", r, !1, {});
  }, function (t, e, n) {
    var r = n(98);
    "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals), (0, n(24).default)("6a175419", r, !1, {});
  }, function (t, e, n) {
    var r = n(100);
    "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals), (0, n(24).default)("07c48036", r, !1, {});
  }, function (t, e, n) {
    var r = n(102);
    "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals), (0, n(24).default)("6eff00d0", r, !1, {});
  }, function (t, e, n) {
    var r = n(39);

    t.exports = function (t, e, n) {
      if (r(t), void 0 === e) return t;

      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n);
          };

        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };

        case 3:
          return function (n, r, i) {
            return t.call(e, n, r, i);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e, n) {
    var r = n(11),
        i = n(3),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: r.version,
      mode: n(21) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
  }, function (t, e, n) {
    var r = n(7),
        i = n(67),
        o = n(33),
        a = n(32)("IE_PROTO"),
        s = function s() {},
        _u = function u() {
      var t,
          e = n(41)("iframe"),
          r = o.length;

      for (e.style.display = "none", n(69).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _u = t.F; r--;) {
        delete _u.prototype[o[r]];
      }

      return _u();
    };

    t.exports = Object.create || function (t, e) {
      var n;
      return null !== t ? (s.prototype = r(t), n = new s(), s.prototype = null, n[a] = t) : n = _u(), void 0 === e ? n : i(n, e);
    };
  }, function (t, e, n) {
    var r = n(30)("keys"),
        i = n(15);

    t.exports = function (t) {
      return r[t] || (r[t] = i(t));
    };
  }, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, e, n) {
    var r = n(4).f,
        i = n(9),
        o = n(0)("toStringTag");

    t.exports = function (t, e, n) {
      t && !i(t = n ? t : t.prototype, o) && r(t, o, {
        configurable: !0,
        value: e
      });
    };
  }, function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function (t, e, n) {
    var r = n(48),
        i = n(33).concat("length", "prototype");

    e.f = Object.getOwnPropertyNames || function (t) {
      return r(t, i);
    };
  }, function (t, e, n) {
    var r = n(22),
        i = n(14),
        o = n(12),
        a = n(20),
        s = n(9),
        u = n(40),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(5) ? c : function (t, e) {
      if (t = o(t), e = a(e, !0), u) try {
        return c(t, e);
      } catch (t) {}
      if (s(t, e)) return i(!r.f.call(t, e), t[e]);
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(3),
        i = n(9),
        o = n(19),
        a = n(85),
        s = n(20),
        u = n(1),
        c = n(36).f,
        l = n(37).f,
        f = n(4).f,
        d = n(87).trim,
        _h = r.Number,
        p = _h,
        g = _h.prototype,
        v = "Number" == o(n(31)(g)),
        y = ("trim" in String.prototype),
        m = function m(t) {
      var e = s(t, !1);

      if ("string" == typeof e && e.length > 2) {
        var n,
            r,
            i,
            o = (e = y ? e.trim() : d(e, 3)).charCodeAt(0);

        if (43 === o || 45 === o) {
          if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === o) {
          switch (e.charCodeAt(1)) {
            case 66:
            case 98:
              r = 2, i = 49;
              break;

            case 79:
            case 111:
              r = 8, i = 55;
              break;

            default:
              return +e;
          }

          for (var a, u = e.slice(2), c = 0, l = u.length; c < l; c++) {
            if ((a = u.charCodeAt(c)) < 48 || a > i) return NaN;
          }

          return parseInt(u, r);
        }
      }

      return +e;
    };

    if (!_h(" 0o1") || !_h("0b1") || _h("+0x1")) {
      _h = function h(t) {
        var e = arguments.length < 1 ? 0 : t,
            n = this;
        return n instanceof _h && (v ? u(function () {
          g.valueOf.call(n);
        }) : "Number" != o(n)) ? a(new p(m(e)), n, _h) : m(e);
      };

      for (var b, x = n(5) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), P = 0; x.length > P; P++) {
        i(p, b = x[P]) && !i(_h, b) && f(_h, b, l(p, b));
      }

      _h.prototype = g, g.constructor = _h, n(10)(r, "Number", _h);
    }
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  }, function (t, e, n) {
    t.exports = !n(5) && !n(1)(function () {
      return 7 != Object.defineProperty(n(41)("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var r = n(8),
        i = n(3).document,
        o = r(i) && r(i.createElement);

    t.exports = function (t) {
      return o ? i.createElement(t) : {};
    };
  }, function (t, e, n) {
    var r = n(43),
        i = Math.min;

    t.exports = function (t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  }, function (t, e) {
    var n = Math.ceil,
        r = Math.floor;

    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(7);

    t.exports = function () {
      var t = r(this),
          e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(46),
        i = n(64),
        o = n(18),
        a = n(12);
    t.exports = n(65)(Array, "Array", function (t, e) {
      this._t = a(t), this._i = 0, this._k = e;
    }, function () {
      var t = this._t,
          e = this._k,
          n = this._i++;
      return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
  }, function (t, e, n) {
    var r = n(0)("unscopables"),
        i = Array.prototype;
    void 0 == i[r] && n(6)(i, r, {}), t.exports = function (t) {
      i[r][t] = !0;
    };
  }, function (t, e, n) {
    var r = n(19);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == r(t) ? t.split("") : Object(t);
    };
  }, function (t, e, n) {
    var r = n(9),
        i = n(12),
        o = n(49)(!1),
        a = n(32)("IE_PROTO");

    t.exports = function (t, e) {
      var n,
          s = i(t),
          u = 0,
          c = [];

      for (n in s) {
        n != a && r(s, n) && c.push(n);
      }

      for (; e.length > u;) {
        r(s, n = e[u++]) && (~o(c, n) || c.push(n));
      }

      return c;
    };
  }, function (t, e, n) {
    var r = n(12),
        i = n(42),
        o = n(68);

    t.exports = function (t) {
      return function (e, n, a) {
        var s,
            u = r(e),
            c = i(u.length),
            l = o(a, c);

        if (t && n != n) {
          for (; c > l;) {
            if ((s = u[l++]) != s) return !0;
          }
        } else for (; c > l; l++) {
          if ((t || l in u) && u[l] === n) return t || l || 0;
        }

        return !t && -1;
      };
    };
  }, function (t, e, n) {
    var r = n(3),
        i = n(11),
        o = n(21),
        a = n(51),
        s = n(4).f;

    t.exports = function (t) {
      var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      "_" == t.charAt(0) || t in e || s(e, t, {
        value: a.f(t)
      });
    };
  }, function (t, e, n) {
    e.f = n(0);
  }, function (t, e, n) {
    var r = n(2);
    r(r.S + r.F, "Object", {
      assign: n(96)
    });
  }, function (t, e, n) {
    t.exports = n(103);
  }, function (t, e, n) {
    "use strict";

    var r = n(29),
        i = n(2),
        o = n(16),
        a = n(55),
        s = n(56),
        u = n(42),
        c = n(57),
        l = n(58);
    i(i.S + i.F * !n(60)(function (t) {
      Array.from(t);
    }), "Array", {
      from: function from(t) {
        var e,
            n,
            i,
            f,
            d = o(t),
            h = "function" == typeof this ? this : Array,
            p = arguments.length,
            g = p > 1 ? arguments[1] : void 0,
            v = void 0 !== g,
            y = 0,
            m = l(d);
        if (v && (g = r(g, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || h == Array && s(m)) for (n = new h(e = u(d.length)); e > y; y++) {
          c(n, y, v ? g(d[y], y) : d[y]);
        } else for (f = m.call(d), n = new h(); !(i = f.next()).done; y++) {
          c(n, y, v ? a(f, g, [i.value, y], !0) : i.value);
        }
        return n.length = y, n;
      }
    });
  }, function (t, e, n) {
    var r = n(7);

    t.exports = function (t, e, n, i) {
      try {
        return i ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        var o = t.return;
        throw void 0 !== o && r(o.call(t)), e;
      }
    };
  }, function (t, e, n) {
    var r = n(18),
        i = n(0)("iterator"),
        o = Array.prototype;

    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || o[i] === t);
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(4),
        i = n(14);

    t.exports = function (t, e, n) {
      e in t ? r.f(t, e, i(0, n)) : t[e] = n;
    };
  }, function (t, e, n) {
    var r = n(59),
        i = n(0)("iterator"),
        o = n(18);

    t.exports = n(11).getIteratorMethod = function (t) {
      if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)];
    };
  }, function (t, e, n) {
    var r = n(19),
        i = n(0)("toStringTag"),
        o = "Arguments" == r(function () {
      return arguments;
    }());

    t.exports = function (t) {
      var e, n, a;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a;
    };
  }, function (t, e, n) {
    var r = n(0)("iterator"),
        i = !1;

    try {
      var o = [7][r]();
      o.return = function () {
        i = !0;
      }, Array.from(o, function () {
        throw 2;
      });
    } catch (t) {}

    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var n = !1;

      try {
        var o = [7],
            a = o[r]();
        a.next = function () {
          return {
            done: n = !0
          };
        }, o[r] = function () {
          return a;
        }, t(o);
      } catch (t) {}

      return n;
    };
  }, function (t, e, n) {
    "use strict";

    n(62);

    var r = n(7),
        i = n(44),
        o = n(5),
        a = /./.toString,
        s = function s(t) {
      n(10)(RegExp.prototype, "toString", t, !0);
    };

    n(1)(function () {
      return "/a/b" != a.call({
        source: "a",
        flags: "b"
      });
    }) ? s(function () {
      var t = r(this);
      return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0);
    }) : "toString" != a.name && s(function () {
      return a.call(this);
    });
  }, function (t, e, n) {
    n(5) && "g" != /./g.flags && n(4).f(RegExp.prototype, "flags", {
      configurable: !0,
      get: n(44)
    });
  }, function (t, e, n) {
    for (var r = n(45), i = n(13), o = n(10), a = n(3), s = n(6), u = n(18), c = n(0), l = c("iterator"), f = c("toStringTag"), d = u.Array, h = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, p = i(h), g = 0; g < p.length; g++) {
      var v,
          y = p[g],
          m = h[y],
          b = a[y],
          x = b && b.prototype;
      if (x && (x[l] || s(x, l, d), x[f] || s(x, f, y), u[y] = d, m)) for (v in r) {
        x[v] || o(x, v, r[v], !0);
      }
    }
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        value: e,
        done: !!t
      };
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(21),
        i = n(2),
        o = n(10),
        a = n(6),
        s = n(18),
        u = n(66),
        c = n(34),
        l = n(70),
        f = n(0)("iterator"),
        d = !([].keys && "next" in [].keys()),
        h = function h() {
      return this;
    };

    t.exports = function (t, e, n, p, g, v, y) {
      u(n, e, p);

      var m,
          b,
          x,
          P = function P(t) {
        if (!d && t in O) return O[t];

        switch (t) {
          case "keys":
          case "values":
            return function () {
              return new n(this, t);
            };
        }

        return function () {
          return new n(this, t);
        };
      },
          S = e + " Iterator",
          C = "values" == g,
          w = !1,
          O = t.prototype,
          T = O[f] || O["@@iterator"] || g && O[g],
          _ = T || P(g),
          E = g ? C ? P("entries") : _ : void 0,
          j = "Array" == e && O.entries || T;

      if (j && (x = l(j.call(new t()))) !== Object.prototype && x.next && (c(x, S, !0), r || "function" == typeof x[f] || a(x, f, h)), C && T && "values" !== T.name && (w = !0, _ = function _() {
        return T.call(this);
      }), r && !y || !d && !w && O[f] || a(O, f, _), s[e] = _, s[S] = h, g) if (m = {
        values: C ? _ : P("values"),
        keys: v ? _ : P("keys"),
        entries: E
      }, y) for (b in m) {
        b in O || o(O, b, m[b]);
      } else i(i.P + i.F * (d || w), e, m);
      return m;
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(31),
        i = n(14),
        o = n(34),
        a = {};
    n(6)(a, n(0)("iterator"), function () {
      return this;
    }), t.exports = function (t, e, n) {
      t.prototype = r(a, {
        next: i(1, n)
      }), o(t, e + " Iterator");
    };
  }, function (t, e, n) {
    var r = n(4),
        i = n(7),
        o = n(13);
    t.exports = n(5) ? Object.defineProperties : function (t, e) {
      i(t);

      for (var n, a = o(e), s = a.length, u = 0; s > u;) {
        r.f(t, n = a[u++], e[n]);
      }

      return t;
    };
  }, function (t, e, n) {
    var r = n(43),
        i = Math.max,
        o = Math.min;

    t.exports = function (t, e) {
      return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
    };
  }, function (t, e, n) {
    var r = n(3).document;
    t.exports = r && r.documentElement;
  }, function (t, e, n) {
    var r = n(9),
        i = n(16),
        o = n(32)("IE_PROTO"),
        a = Object.prototype;

    t.exports = Object.getPrototypeOf || function (t) {
      return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
    };
  }, function (t, e, n) {
    var r = n(16),
        i = n(13);
    n(72)("keys", function () {
      return function (t) {
        return i(r(t));
      };
    });
  }, function (t, e, n) {
    var r = n(2),
        i = n(11),
        o = n(1);

    t.exports = function (t, e) {
      var n = (i.Object || {})[t] || Object[t],
          a = {};
      a[t] = e(n), r(r.S + r.F * o(function () {
        n(1);
      }), "Object", a);
    };
  }, function (t, e, n) {
    n(50)("asyncIterator");
  }, function (t, e, n) {
    "use strict";

    var r = n(3),
        i = n(9),
        o = n(5),
        a = n(2),
        s = n(10),
        u = n(75).KEY,
        c = n(1),
        l = n(30),
        f = n(34),
        d = n(15),
        h = n(0),
        p = n(51),
        g = n(50),
        v = n(76),
        y = n(77),
        m = n(7),
        b = n(8),
        x = n(12),
        P = n(20),
        S = n(14),
        C = n(31),
        w = n(78),
        O = n(37),
        T = n(4),
        _ = n(13),
        E = O.f,
        j = T.f,
        A = w.f,
        _M = r.Symbol,
        N = r.JSON,
        k = N && N.stringify,
        L = h("_hidden"),
        V = h("toPrimitive"),
        $ = {}.propertyIsEnumerable,
        I = l("symbol-registry"),
        D = l("symbols"),
        W = l("op-symbols"),
        F = Object.prototype,
        R = "function" == typeof _M,
        B = r.QObject,
        H = !B || !B.prototype || !B.prototype.findChild,
        z = o && c(function () {
      return 7 != C(j({}, "a", {
        get: function get() {
          return j(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (t, e, n) {
      var r = E(F, e);
      r && delete F[e], j(t, e, n), r && t !== F && j(F, e, r);
    } : j,
        U = function U(t) {
      var e = D[t] = C(_M.prototype);
      return e._k = t, e;
    },
        X = R && "symbol" == _typeof(_M.iterator) ? function (t) {
      return "symbol" == _typeof(t);
    } : function (t) {
      return t instanceof _M;
    },
        G = function G(t, e, n) {
      return t === F && G(W, e, n), m(t), e = P(e, !0), m(n), i(D, e) ? (n.enumerable ? (i(t, L) && t[L][e] && (t[L][e] = !1), n = C(n, {
        enumerable: S(0, !1)
      })) : (i(t, L) || j(t, L, S(1, {})), t[L][e] = !0), z(t, e, n)) : j(t, e, n);
    },
        Y = function Y(t, e) {
      m(t);

      for (var n, r = v(e = x(e)), i = 0, o = r.length; o > i;) {
        G(t, n = r[i++], e[n]);
      }

      return t;
    },
        q = function q(t) {
      var e = $.call(this, t = P(t, !0));
      return !(this === F && i(D, t) && !i(W, t)) && (!(e || !i(this, t) || !i(D, t) || i(this, L) && this[L][t]) || e);
    },
        J = function J(t, e) {
      if (t = x(t), e = P(e, !0), t !== F || !i(D, e) || i(W, e)) {
        var n = E(t, e);
        return !n || !i(D, e) || i(t, L) && t[L][e] || (n.enumerable = !0), n;
      }
    },
        K = function K(t) {
      for (var e, n = A(x(t)), r = [], o = 0; n.length > o;) {
        i(D, e = n[o++]) || e == L || e == u || r.push(e);
      }

      return r;
    },
        Q = function Q(t) {
      for (var e, n = t === F, r = A(n ? W : x(t)), o = [], a = 0; r.length > a;) {
        !i(D, e = r[a++]) || n && !i(F, e) || o.push(D[e]);
      }

      return o;
    };

    R || (s((_M = function M() {
      if (this instanceof _M) throw TypeError("Symbol is not a constructor!");

      var t = d(arguments.length > 0 ? arguments[0] : void 0),
          e = function e(n) {
        this === F && e.call(W, n), i(this, L) && i(this[L], t) && (this[L][t] = !1), z(this, t, S(1, n));
      };

      return o && H && z(F, t, {
        configurable: !0,
        set: e
      }), U(t);
    }).prototype, "toString", function () {
      return this._k;
    }), O.f = J, T.f = G, n(36).f = w.f = K, n(22).f = q, n(35).f = Q, o && !n(21) && s(F, "propertyIsEnumerable", q, !0), p.f = function (t) {
      return U(h(t));
    }), a(a.G + a.W + a.F * !R, {
      Symbol: _M
    });

    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) {
      h(Z[tt++]);
    }

    for (var et = _(h.store), nt = 0; et.length > nt;) {
      g(et[nt++]);
    }

    a(a.S + a.F * !R, "Symbol", {
      for: function _for(t) {
        return i(I, t += "") ? I[t] : I[t] = _M(t);
      },
      keyFor: function keyFor(t) {
        if (!X(t)) throw TypeError(t + " is not a symbol!");

        for (var e in I) {
          if (I[e] === t) return e;
        }
      },
      useSetter: function useSetter() {
        H = !0;
      },
      useSimple: function useSimple() {
        H = !1;
      }
    }), a(a.S + a.F * !R, "Object", {
      create: function create(t, e) {
        return void 0 === e ? C(t) : Y(C(t), e);
      },
      defineProperty: G,
      defineProperties: Y,
      getOwnPropertyDescriptor: J,
      getOwnPropertyNames: K,
      getOwnPropertySymbols: Q
    }), N && a(a.S + a.F * (!R || c(function () {
      var t = _M();

      return "[null]" != k([t]) || "{}" != k({
        a: t
      }) || "{}" != k(Object(t));
    })), "JSON", {
      stringify: function stringify(t) {
        for (var e, n, r = [t], i = 1; arguments.length > i;) {
          r.push(arguments[i++]);
        }

        if (n = e = r[1], (b(e) || void 0 !== t) && !X(t)) return y(e) || (e = function e(t, _e) {
          if ("function" == typeof n && (_e = n.call(this, t, _e)), !X(_e)) return _e;
        }), r[1] = e, k.apply(N, r);
      }
    }), _M.prototype[V] || n(6)(_M.prototype, V, _M.prototype.valueOf), f(_M, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0);
  }, function (t, e, n) {
    var r = n(15)("meta"),
        i = n(8),
        o = n(9),
        a = n(4).f,
        s = 0,
        u = Object.isExtensible || function () {
      return !0;
    },
        c = !n(1)(function () {
      return u(Object.preventExtensions({}));
    }),
        l = function l(t) {
      a(t, r, {
        value: {
          i: "O" + ++s,
          w: {}
        }
      });
    },
        f = t.exports = {
      KEY: r,
      NEED: !1,
      fastKey: function fastKey(t, e) {
        if (!i(t)) return "symbol" == _typeof(t) ? t : ("string" == typeof t ? "S" : "P") + t;

        if (!o(t, r)) {
          if (!u(t)) return "F";
          if (!e) return "E";
          l(t);
        }

        return t[r].i;
      },
      getWeak: function getWeak(t, e) {
        if (!o(t, r)) {
          if (!u(t)) return !0;
          if (!e) return !1;
          l(t);
        }

        return t[r].w;
      },
      onFreeze: function onFreeze(t) {
        return c && f.NEED && u(t) && !o(t, r) && l(t), t;
      }
    };
  }, function (t, e, n) {
    var r = n(13),
        i = n(35),
        o = n(22);

    t.exports = function (t) {
      var e = r(t),
          n = i.f;
      if (n) for (var a, s = n(t), u = o.f, c = 0; s.length > c;) {
        u.call(t, a = s[c++]) && e.push(a);
      }
      return e;
    };
  }, function (t, e, n) {
    var r = n(19);

    t.exports = Array.isArray || function (t) {
      return "Array" == r(t);
    };
  }, function (t, e, n) {
    var r = n(12),
        i = n(36).f,
        o = {}.toString,
        a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    t.exports.f = function (t) {
      return a && "[object Window]" == o.call(t) ? function (t) {
        try {
          return i(t);
        } catch (t) {
          return a.slice();
        }
      }(t) : i(r(t));
    };
  }, function (t, e, n) {
    var r = n(2);
    r(r.S, "Math", {
      sign: n(80)
    });
  }, function (t, e) {
    t.exports = Math.sign || function (t) {
      return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
    };
  }, function (t, e, n) {
    n(82)("match", 1, function (t, e, n) {
      return [function (n) {
        "use strict";

        var r = t(this),
            i = void 0 == n ? void 0 : n[e];
        return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r));
      }, n];
    });
  }, function (t, e, n) {
    "use strict";

    var r = n(6),
        i = n(10),
        o = n(1),
        a = n(17),
        s = n(0);

    t.exports = function (t, e, n) {
      var u = s(t),
          c = n(a, u, ""[t]),
          l = c[0],
          f = c[1];
      o(function () {
        var e = {};
        return e[u] = function () {
          return 7;
        }, 7 != ""[t](e);
      }) && (i(String.prototype, t, l), r(RegExp.prototype, u, 2 == e ? function (t, e) {
        return f.call(t, this, e);
      } : function (t) {
        return f.call(t, this);
      }));
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(2),
        i = n(39),
        o = n(16),
        a = n(1),
        s = [].sort,
        u = [1, 2, 3];
    r(r.P + r.F * (a(function () {
      u.sort(void 0);
    }) || !a(function () {
      u.sort(null);
    }) || !n(84)(s)), "Array", {
      sort: function sort(t) {
        return void 0 === t ? s.call(o(this)) : s.call(o(this), i(t));
      }
    });
  }, function (t, e, n) {
    "use strict";

    var r = n(1);

    t.exports = function (t, e) {
      return !!t && r(function () {
        e ? t.call(null, function () {}, 1) : t.call(null);
      });
    };
  }, function (t, e, n) {
    var r = n(8),
        i = n(86).set;

    t.exports = function (t, e, n) {
      var o,
          a = e.constructor;
      return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(t, o), t;
    };
  }, function (t, e, n) {
    var r = n(8),
        i = n(7),
        o = function o(t, e) {
      if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
    };

    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
        try {
          (r = n(29)(Function.call, n(37).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array);
        } catch (t) {
          e = !0;
        }

        return function (t, n) {
          return o(t, n), e ? t.__proto__ = n : r(t, n), t;
        };
      }({}, !1) : void 0),
      check: o
    };
  }, function (t, e, n) {
    var r = n(2),
        i = n(17),
        o = n(1),
        a = n(88),
        s = "[" + a + "]",
        u = RegExp("^" + s + s + "*"),
        c = RegExp(s + s + "*$"),
        l = function l(t, e, n) {
      var i = {},
          s = o(function () {
        return !!a[t]() || "​" != "​"[t]();
      }),
          u = i[t] = s ? e(f) : a[t];
      n && (i[n] = u), r(r.P + r.F * s, "String", i);
    },
        f = l.trim = function (t, e) {
      return t = String(i(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(c, "")), t;
    };

    t.exports = l;
  }, function (t, e) {
    t.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  }, function (t, e, n) {
    "use strict";

    var r = n(2),
        i = n(49)(!0);
    r(r.P, "Array", {
      includes: function includes(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), n(46)("includes");
  }, function (t, e, n) {
    "use strict";

    var r = n(2),
        i = n(91);
    r(r.P + r.F * n(93)("includes"), "String", {
      includes: function includes(t) {
        return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (t, e, n) {
    var r = n(92),
        i = n(17);

    t.exports = function (t, e, n) {
      if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
      return String(i(t));
    };
  }, function (t, e, n) {
    var r = n(8),
        i = n(19),
        o = n(0)("match");

    t.exports = function (t) {
      var e;
      return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
    };
  }, function (t, e, n) {
    var r = n(0)("match");

    t.exports = function (t) {
      var e = /./;

      try {
        "/./"[t](e);
      } catch (n) {
        try {
          return e[r] = !1, !"/./"[t](e);
        } catch (t) {}
      }

      return !0;
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(25);
    n.n(r).a;
  }, function (t, e, n) {
    (t.exports = n(23)(!1)).push([t.i, '\n.VueCarousel-navigation-button[data-v-453ad8cd] {\n  position: absolute;\n  top: 50%;\n  box-sizing: border-box;\n  color: #000;\n  text-decoration: none;\n  appearance: none;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n}\n.VueCarousel-navigation-button[data-v-453ad8cd]:focus {\n  outline: 1px solid lightblue;\n}\n.VueCarousel-navigation-next[data-v-453ad8cd] {\n  right: 0;\n  transform: translateY(-50%) translateX(100%);\n  font-family: "system";\n}\n.VueCarousel-navigation-prev[data-v-453ad8cd] {\n  left: 0;\n  transform: translateY(-50%) translateX(-100%);\n  font-family: "system";\n}\n.VueCarousel-navigation--disabled[data-v-453ad8cd] {\n  opacity: 0.5;\n  cursor: default;\n}\n\n/* Define the "system" font family */\n@font-face {\n  font-family: system;\n  font-style: normal;\n  font-weight: 300;\n  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"),\n    local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Symbol"),\n    local("Roboto-Light"), local("DroidSans"), local("Tahoma");\n}\n', ""]);
  }, function (t, e, n) {
    "use strict";

    var r = n(13),
        i = n(35),
        o = n(22),
        a = n(16),
        s = n(47),
        u = Object.assign;
    t.exports = !u || n(1)(function () {
      var t = {},
          e = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
      return t[n] = 7, r.split("").forEach(function (t) {
        e[t] = t;
      }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r;
    }) ? function (t, e) {
      for (var n = a(t), u = arguments.length, c = 1, l = i.f, f = o.f; u > c;) {
        for (var d, h = s(arguments[c++]), p = l ? r(h).concat(l(h)) : r(h), g = p.length, v = 0; g > v;) {
          f.call(h, d = p[v++]) && (n[d] = h[d]);
        }
      }

      return n;
    } : u;
  }, function (t, e, n) {
    "use strict";

    var r = n(26);
    n.n(r).a;
  }, function (t, e, n) {
    (t.exports = n(23)(!1)).push([t.i, "\n.VueCarousel-pagination[data-v-438fd353] {\n  width: 100%;\n  text-align: center;\n}\n.VueCarousel-pagination--top-overlay[data-v-438fd353] {\n  position: absolute;\n  top: 0;\n}\n.VueCarousel-pagination--bottom-overlay[data-v-438fd353] {\n  position: absolute;\n  bottom: 0;\n}\n.VueCarousel-dot-container[data-v-438fd353] {\n  display: inline-block;\n  margin: 0 auto;\n  padding: 0;\n}\n.VueCarousel-dot[data-v-438fd353] {\n  display: inline-block;\n  cursor: pointer;\n  appearance: none;\n  border: none;\n  background-clip: content-box;\n  box-sizing: content-box;\n  padding: 0;\n  border-radius: 100%;\n  outline: none;\n}\n.VueCarousel-dot[data-v-438fd353]:focus {\n  outline: 1px solid lightblue;\n}\n", ""]);
  }, function (t, e, n) {
    "use strict";

    var r = n(27);
    n.n(r).a;
  }, function (t, e, n) {
    (t.exports = n(23)(!1)).push([t.i, "\n.VueCarousel-slide {\n  flex-basis: inherit;\n  flex-grow: 0;\n  flex-shrink: 0;\n  user-select: none;\n  backface-visibility: hidden;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  outline: none;\n}\n.VueCarousel-slide-adjustableHeight {\n  display: table;\n  flex-basis: auto;\n  width: 100%;\n}\n", ""]);
  }, function (t, e, n) {
    "use strict";

    var r = n(28);
    n.n(r).a;
  }, function (t, e, n) {
    (t.exports = n(23)(!1)).push([t.i, "\n.VueCarousel {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.VueCarousel--reverse {\n  flex-direction: column-reverse;\n}\n.VueCarousel-wrapper {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.VueCarousel-inner {\n  display: flex;\n  flex-direction: row;\n  backface-visibility: hidden;\n}\n.VueCarousel-inner--center {\n  justify-content: center;\n}\n", ""]);
  }, function (t, e, n) {
    "use strict";

    n.r(e);

    var r = function r() {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;
      return n("div", {
        staticClass: "VueCarousel",
        class: {
          "VueCarousel--reverse": "top" === t.paginationPosition
        }
      }, [n("div", {
        ref: "VueCarousel-wrapper",
        staticClass: "VueCarousel-wrapper"
      }, [n("div", {
        ref: "VueCarousel-inner",
        class: ["VueCarousel-inner", {
          "VueCarousel-inner--center": t.isCenterModeEnabled
        }],
        style: {
          transform: "translate(" + t.currentOffset + "px, 0)",
          transition: t.dragging ? "none" : t.transitionStyle,
          "ms-flex-preferred-size": t.slideWidth + "px",
          "webkit-flex-basis": t.slideWidth + "px",
          "flex-basis": t.slideWidth + "px",
          visibility: t.slideWidth ? "visible" : "hidden",
          height: "" + t.currentHeight,
          "padding-left": t.padding + "px",
          "padding-right": t.padding + "px"
        }
      }, [t._t("default")], 2)]), t._v(" "), t.navigationEnabled ? t._t("navigation", [t.isNavigationRequired ? n("navigation", {
        attrs: {
          clickTargetSize: t.navigationClickTargetSize,
          nextLabel: t.navigationNextLabel,
          prevLabel: t.navigationPrevLabel
        },
        on: {
          navigationclick: t.handleNavigation
        }
      }) : t._e()]) : t._e(), t._v(" "), t.paginationEnabled ? t._t("pagination", [n("pagination", {
        on: {
          paginationclick: function paginationclick(e) {
            t.goToPage(e, "pagination");
          }
        }
      })]) : t._e()], 2);
    };

    r._withStripped = !0, n(54), n(61), n(63), n(45), n(71), n(73), n(74), n(79), n(81), n(83), n(38), n(89), n(90);

    var i = {
      props: {
        autoplay: {
          type: Boolean,
          default: !1
        },
        autoplayTimeout: {
          type: Number,
          default: 2e3
        },
        autoplayHoverPause: {
          type: Boolean,
          default: !0
        },
        autoplayDirection: {
          type: String,
          default: "forward"
        }
      },
      data: function data() {
        return {
          autoplayInterval: null
        };
      },
      destroyed: function destroyed() {
        this.$isServer || (this.$el.removeEventListener("mouseenter", this.pauseAutoplay), this.$el.removeEventListener("mouseleave", this.startAutoplay));
      },
      methods: {
        pauseAutoplay: function pauseAutoplay() {
          this.autoplayInterval && (this.autoplayInterval = clearInterval(this.autoplayInterval));
        },
        startAutoplay: function startAutoplay() {
          this.autoplay && (this.autoplayInterval = setInterval(this.autoplayAdvancePage, this.autoplayTimeout));
        },
        restartAutoplay: function restartAutoplay() {
          this.pauseAutoplay(), this.startAutoplay();
        },
        autoplayAdvancePage: function autoplayAdvancePage() {
          this.advancePage(this.autoplayDirection);
        }
      },
      mounted: function mounted() {
        !this.$isServer && this.autoplayHoverPause && (this.$el.addEventListener("mouseenter", this.pauseAutoplay), this.$el.addEventListener("mouseleave", this.startAutoplay)), this.startAutoplay();
      }
    },
        o = function o() {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;
      return n("div", {
        staticClass: "VueCarousel-navigation"
      }, [n("button", {
        staticClass: "VueCarousel-navigation-button VueCarousel-navigation-prev",
        class: {
          "VueCarousel-navigation--disabled": !t.canAdvanceBackward
        },
        style: "padding: " + t.clickTargetSize + "px; margin-right: -" + t.clickTargetSize + "px;",
        attrs: {
          type: "button",
          "aria-label": "Previous page",
          tabindex: t.canAdvanceBackward ? 0 : -1
        },
        domProps: {
          innerHTML: t._s(t.prevLabel)
        },
        on: {
          click: function click(e) {
            e.preventDefault(), t.triggerPageAdvance("backward");
          }
        }
      }), t._v(" "), n("button", {
        staticClass: "VueCarousel-navigation-button VueCarousel-navigation-next",
        class: {
          "VueCarousel-navigation--disabled": !t.canAdvanceForward
        },
        style: "padding: " + t.clickTargetSize + "px; margin-left: -" + t.clickTargetSize + "px;",
        attrs: {
          type: "button",
          "aria-label": "Next page",
          tabindex: t.canAdvanceForward ? 0 : -1
        },
        domProps: {
          innerHTML: t._s(t.nextLabel)
        },
        on: {
          click: function click(e) {
            e.preventDefault(), t.triggerPageAdvance("forward");
          }
        }
      })]);
    };

    o._withStripped = !0;
    var a = {
      name: "navigation",
      inject: ["carousel"],
      props: {
        clickTargetSize: {
          type: Number,
          default: 8
        },
        nextLabel: {
          type: String,
          default: "&#9654"
        },
        prevLabel: {
          type: String,
          default: "&#9664"
        }
      },
      computed: {
        canAdvanceForward: function canAdvanceForward() {
          return this.carousel.canAdvanceForward || !1;
        },
        canAdvanceBackward: function canAdvanceBackward() {
          return this.carousel.canAdvanceBackward || !1;
        }
      },
      methods: {
        triggerPageAdvance: function triggerPageAdvance(t) {
          this.$emit("navigationclick", t);
        }
      }
    };

    function s(t, e, n, r, i, o, a, s) {
      var u,
          c = "function" == typeof t ? t.options : t;
      if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = "data-v-" + o), a ? (u = function u(t) {
        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a);
      }, c._ssrRegister = u) : i && (u = s ? function () {
        i.call(this, this.$root.$options.shadowRoot);
      } : i), u) if (c.functional) {
        c._injectStyles = u;
        var l = c.render;

        c.render = function (t, e) {
          return u.call(e), l(t, e);
        };
      } else {
        var f = c.beforeCreate;
        c.beforeCreate = f ? [].concat(f, u) : [u];
      }
      return {
        exports: t,
        options: c
      };
    }

    n(94);
    var u = s(a, o, [], !1, null, "453ad8cd", null);
    u.options.__file = "src/Navigation.vue";

    var c = u.exports,
        l = function l() {
      var t,
          e = this,
          n = e.$createElement,
          r = e._self._c || n;
      return r("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.carousel.pageCount > 1,
          expression: "carousel.pageCount > 1"
        }],
        staticClass: "VueCarousel-pagination",
        class: (t = {}, t["VueCarousel-pagination--" + e.paginationPositionModifierName] = e.paginationPositionModifierName, t)
      }, [r("div", {
        staticClass: "VueCarousel-dot-container",
        style: e.dotContainerStyle,
        attrs: {
          role: "tablist"
        }
      }, e._l(e.paginationCount, function (t, n) {
        return r("button", {
          key: t + "_" + n,
          staticClass: "VueCarousel-dot",
          class: {
            "VueCarousel-dot--active": e.isCurrentDot(n)
          },
          style: e.dotStyle(n),
          attrs: {
            "aria-hidden": "false",
            role: "tab",
            title: e.getDotTitle(n),
            value: e.getDotTitle(n),
            "aria-label": e.getDotTitle(n),
            "aria-selected": e.isCurrentDot(n) ? "true" : "false"
          },
          on: {
            click: function click(t) {
              e.goToPage(n);
            }
          }
        });
      }))]);
    };

    l._withStripped = !0, n(52);
    var f = {
      name: "pagination",
      inject: ["carousel"],
      computed: {
        paginationPositionModifierName: function paginationPositionModifierName() {
          var t = this.carousel.paginationPosition;
          if (!(t.indexOf("overlay") < 0)) return t;
        },
        paginationPropertyBasedOnPosition: function paginationPropertyBasedOnPosition() {
          return this.carousel.paginationPosition.indexOf("top") >= 0 ? "bottom" : "top";
        },
        paginationCount: function paginationCount() {
          return this.carousel && this.carousel.scrollPerPage ? this.carousel.pageCount : this.carousel.slideCount || 0;
        },
        dotContainerStyle: function dotContainerStyle() {
          var t = this.carousel;
          if (-1 === t.maxPaginationDotCount) return {
            "margin-top": "".concat(2 * t.paginationPadding, "px")
          };
          var e = 2 * t.paginationPadding,
              n = t.maxPaginationDotCount * (t.paginationSize + e);
          return {
            "margin-top": "".concat(2 * t.paginationPadding, "px"),
            overflow: "hidden",
            width: "".concat(n, "px"),
            margin: "0 auto",
            "white-space": "nowrap"
          };
        }
      },
      methods: {
        goToPage: function goToPage(t) {
          this.$emit("paginationclick", t);
        },
        isCurrentDot: function isCurrentDot(t) {
          return t === this.carousel.currentPage;
        },
        getDotTitle: function getDotTitle(t) {
          return this.carousel.$children[t].title ? this.carousel.$children[t].title : "Item ".concat(t);
        },
        dotStyle: function dotStyle(t) {
          var e = this.carousel,
              n = {};
          if (n["margin-".concat(this.paginationPropertyBasedOnPosition)] = "".concat(2 * e.paginationPadding, "px"), Object.assign(n, {
            padding: "".concat(e.paginationPadding, "px"),
            width: "".concat(e.paginationSize, "px"),
            height: "".concat(e.paginationSize, "px"),
            "background-color": "".concat(this.isCurrentDot(t) ? e.paginationActiveColor : e.paginationColor)
          }), -1 === e.maxPaginationDotCount) return n;
          var r = e.paginationSize + 2 * e.paginationPadding,
              i = e.pageCount - e.maxPaginationDotCount,
              o = 0 - r * (e.currentPage > i ? i : e.currentPage <= e.maxPaginationDotCount / 2 ? 0 : e.currentPage - Math.ceil(e.maxPaginationDotCount / 2) + 1);
          return Object.assign(n, {
            "-webkit-transform": "translate3d(".concat(o, "px,0,0)"),
            transform: "translate3d(".concat(o, "px,0,0)"),
            "-webkit-transition": "-webkit-transform ".concat(e.speed / 1e3, "s"),
            transition: "transform ".concat(e.speed / 1e3, "s")
          });
        }
      }
    },
        d = (n(97), s(f, l, [], !1, null, "438fd353", null));
    d.options.__file = "src/Pagination.vue";

    var h = d.exports,
        p = function p() {
      var t = this.$createElement;
      return (this._self._c || t)("div", {
        staticClass: "VueCarousel-slide",
        class: {
          "VueCarousel-slide-active": this.isActive,
          "VueCarousel-slide-center": this.isCenter,
          "VueCarousel-slide-adjustableHeight": this.isAdjustableHeight
        },
        attrs: {
          tabindex: "-1",
          "aria-hidden": !this.isActive,
          role: "tabpanel"
        }
      }, [this._t("default")], 2);
    };

    p._withStripped = !0;
    var g = {
      name: "slide",
      props: ["title"],
      data: function data() {
        return {
          width: null
        };
      },
      inject: ["carousel"],
      mounted: function mounted() {
        this.$isServer || this.$el.addEventListener("dragstart", function (t) {
          return t.preventDefault();
        }), this.$el.addEventListener(this.carousel.isTouch ? "touchend" : "mouseup", this.onTouchEnd);
      },
      computed: {
        activeSlides: function activeSlides() {
          for (var t = this.carousel, e = t.currentPage, n = t.breakpointSlidesPerPage, r = [], i = t.$children.filter(function (t) {
            return t.$el && t.$el.className.indexOf("VueCarousel-slide") >= 0;
          }).map(function (t) {
            return t._uid;
          }), o = 0; o < n;) {
            var a = i[e * n + o];
            r.push(a), o++;
          }

          return r;
        },
        isActive: function isActive() {
          return this.activeSlides.indexOf(this._uid) >= 0;
        },
        isCenter: function isCenter() {
          var t = this.carousel.breakpointSlidesPerPage;
          return !(t % 2 == 0 || !this.isActive) && this.activeSlides.indexOf(this._uid) === Math.floor(t / 2);
        },
        isAdjustableHeight: function isAdjustableHeight() {
          return this.carousel.adjustableHeight;
        }
      },
      methods: {
        onTouchEnd: function onTouchEnd(t) {
          var e = this.carousel.isTouch && t.changedTouches && t.changedTouches.length > 0 ? t.changedTouches[0].clientX : t.clientX,
              n = this.carousel.dragStartX - e;
          (0 === this.carousel.minSwipeDistance || Math.abs(n) < this.carousel.minSwipeDistance) && (this.$emit("slideclick", Object.assign({}, t.currentTarget.dataset)), this.$emit("slide-click", Object.assign({}, t.currentTarget.dataset)));
        }
      }
    },
        v = (n(99), s(g, p, [], !1, null, null, null));
    v.options.__file = "src/Slide.vue";
    var y = v.exports;

    function m(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function b(t) {
      return (b = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    var x = {
      onwebkittransitionend: "webkitTransitionEnd",
      onmoztransitionend: "transitionend",
      onotransitionend: "oTransitionEnd otransitionend",
      ontransitionend: "transitionend"
    },
        P = function P() {
      for (var t in x) {
        if (t in window) return x[t];
      }
    },
        S = {
      name: "carousel",
      beforeUpdate: function beforeUpdate() {
        this.computeCarouselWidth();
      },
      components: {
        Navigation: c,
        Pagination: h,
        Slide: y
      },
      data: function data() {
        return {
          browserWidth: null,
          carouselWidth: 0,
          currentPage: 0,
          dragging: !1,
          dragMomentum: 0,
          dragOffset: 0,
          dragStartY: 0,
          dragStartX: 0,
          isTouch: "undefined" != typeof window && "ontouchstart" in window,
          offset: 0,
          refreshRate: 16,
          slideCount: 0,
          transitionstart: "transitionstart",
          transitionend: "transitionend",
          currentHeight: "auto"
        };
      },
      mixins: [i],
      provide: function provide() {
        return {
          carousel: this
        };
      },
      props: {
        adjustableHeight: {
          type: Boolean,
          default: !1
        },
        adjustableHeightEasing: {
          type: String
        },
        centerMode: {
          type: Boolean,
          default: !1
        },
        easing: {
          type: String,
          validator: function validator(t) {
            return -1 !== ["ease", "linear", "ease-in", "ease-out", "ease-in-out"].indexOf(t) || t.includes("cubic-bezier");
          },
          default: "ease"
        },
        loop: {
          type: Boolean,
          default: !1
        },
        minSwipeDistance: {
          type: Number,
          default: 8
        },
        mouseDrag: {
          type: Boolean,
          default: !0
        },
        touchDrag: {
          type: Boolean,
          default: !0
        },
        navigateTo: {
          type: [Number, Array],
          default: 0
        },
        navigationClickTargetSize: {
          type: Number,
          default: 8
        },
        navigationEnabled: {
          type: Boolean,
          default: !1
        },
        navigationNextLabel: {
          type: String,
          default: "&#9654"
        },
        navigationPrevLabel: {
          type: String,
          default: "&#9664"
        },
        paginationActiveColor: {
          type: String,
          default: "#000000"
        },
        paginationColor: {
          type: String,
          default: "#efefef"
        },
        paginationEnabled: {
          type: Boolean,
          default: !0
        },
        paginationPadding: {
          type: Number,
          default: 10
        },
        paginationPosition: {
          type: String,
          default: "bottom"
        },
        paginationSize: {
          type: Number,
          default: 10
        },
        perPage: {
          type: Number,
          default: 2
        },
        perPageCustom: {
          type: Array
        },
        resistanceCoef: {
          type: Number,
          default: 20
        },
        scrollPerPage: {
          type: Boolean,
          default: !0
        },
        spacePadding: {
          type: Number,
          default: 0
        },
        spacePaddingMaxOffsetFactor: {
          type: Number,
          default: 0
        },
        speed: {
          type: Number,
          default: 500
        },
        tagName: {
          type: String,
          default: "slide"
        },
        value: {
          type: Number
        },
        maxPaginationDotCount: {
          type: Number,
          default: -1
        },
        rtl: {
          type: Boolean,
          default: !1
        }
      },
      watch: {
        value: function value(t) {
          t !== this.currentPage && (this.goToPage(t), this.render());
        },
        navigateTo: {
          immediate: !0,
          handler: function handler(t) {
            var e = this;
            "object" === b(t) ? (0 == t[1] && (this.dragging = !0, setTimeout(function () {
              e.dragging = !1;
            }, this.refreshRate)), this.$nextTick(function () {
              e.goToPage(t[0]);
            })) : this.$nextTick(function () {
              e.goToPage(t);
            });
          }
        },
        currentPage: function currentPage(t) {
          this.$emit("pageChange", t), this.$emit("page-change", t), this.$emit("input", t);
        },
        autoplay: function autoplay(t) {
          !1 === t ? this.pauseAutoplay() : this.restartAutoplay();
        }
      },
      computed: {
        breakpointSlidesPerPage: function breakpointSlidesPerPage() {
          if (!this.perPageCustom) return this.perPage;
          var t = this.perPageCustom,
              e = this.browserWidth,
              n = t.sort(function (t, e) {
            return t[0] > e[0] ? -1 : 1;
          }).filter(function (t) {
            return e >= t[0];
          });
          return n[0] && n[0][1] || this.perPage;
        },
        canAdvanceForward: function canAdvanceForward() {
          return this.loop || this.offset < this.maxOffset;
        },
        canAdvanceBackward: function canAdvanceBackward() {
          return this.loop || this.currentPage > 0;
        },
        currentPerPage: function currentPerPage() {
          return !this.perPageCustom || this.$isServer ? this.perPage : this.breakpointSlidesPerPage;
        },
        currentOffset: function currentOffset() {
          return this.isCenterModeEnabled ? 0 : this.rtl ? 1 * (this.offset - this.dragOffset) : -1 * (this.offset + this.dragOffset);
        },
        isHidden: function isHidden() {
          return this.carouselWidth <= 0;
        },
        maxOffset: function maxOffset() {
          return Math.max(this.slideWidth * (this.slideCount - this.currentPerPage) - this.spacePadding * this.spacePaddingMaxOffsetFactor, 0);
        },
        pageCount: function pageCount() {
          return this.scrollPerPage ? Math.ceil(this.slideCount / this.currentPerPage) : this.slideCount - this.currentPerPage + 1;
        },
        slideWidth: function slideWidth() {
          return (this.carouselWidth - 2 * this.spacePadding) / this.currentPerPage;
        },
        isNavigationRequired: function isNavigationRequired() {
          return this.slideCount > this.currentPerPage;
        },
        isCenterModeEnabled: function isCenterModeEnabled() {
          return this.centerMode && !this.isNavigationRequired;
        },
        transitionStyle: function transitionStyle() {
          var t = "".concat(this.speed / 1e3, "s"),
              e = "".concat(t, " ").concat(this.easing, " transform");
          return this.adjustableHeight ? "".concat(e, ", height ").concat(t, " ").concat(this.adjustableHeightEasing || this.easing) : e;
        },
        padding: function padding() {
          var t = this.spacePadding;
          return t > 0 && t;
        }
      },
      methods: {
        getNextPage: function getNextPage() {
          return this.currentPage < this.pageCount - 1 ? this.currentPage + 1 : this.loop ? 0 : this.currentPage;
        },
        getPreviousPage: function getPreviousPage() {
          return this.currentPage > 0 ? this.currentPage - 1 : this.loop ? this.pageCount - 1 : this.currentPage;
        },
        advancePage: function advancePage(t) {
          t && "backward" === t && this.canAdvanceBackward ? this.goToPage(this.getPreviousPage(), "navigation") : (!t || t && "backward" !== t) && this.canAdvanceForward && this.goToPage(this.getNextPage(), "navigation");
        },
        goToLastSlide: function goToLastSlide() {
          var t = this;
          this.dragging = !0, setTimeout(function () {
            t.dragging = !1;
          }, this.refreshRate), this.$nextTick(function () {
            t.goToPage(t.pageCount);
          });
        },
        attachMutationObserver: function attachMutationObserver() {
          var t = this,
              e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

          if (e) {
            var n = {
              attributes: !0,
              data: !0
            };
            if (this.adjustableHeight && (n = function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), r.forEach(function (e) {
                  m(t, e, n[e]);
                });
              }

              return t;
            }({}, n, {
              childList: !0,
              subtree: !0,
              characterData: !0
            })), this.mutationObserver = new e(function () {
              t.$nextTick(function () {
                t.computeCarouselWidth(), t.computeCarouselHeight();
              });
            }), this.$parent.$el) for (var r = this.$el.getElementsByClassName("VueCarousel-inner"), i = 0; i < r.length; i++) {
              this.mutationObserver.observe(r[i], n);
            }
          }
        },
        handleNavigation: function handleNavigation(t) {
          this.advancePage(t), this.pauseAutoplay(), this.$emit("navigation-click", t);
        },
        detachMutationObserver: function detachMutationObserver() {
          this.mutationObserver && this.mutationObserver.disconnect();
        },
        getBrowserWidth: function getBrowserWidth() {
          return this.browserWidth = window.innerWidth, this.browserWidth;
        },
        getCarouselWidth: function getCarouselWidth() {
          for (var t = this.$el.getElementsByClassName("VueCarousel-inner"), e = 0; e < t.length; e++) {
            t[e].clientWidth > 0 && (this.carouselWidth = t[e].clientWidth || 0);
          }

          return this.carouselWidth;
        },
        getCarouselHeight: function getCarouselHeight() {
          var t = this;
          if (!this.adjustableHeight) return "auto";

          var e = this.currentPerPage * (this.currentPage + 1) - 1,
              n = function (t) {
            return function (t) {
              if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) {
                  n[e] = t[e];
                }

                return n;
              }
            }(t) || function (t) {
              if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
            }(t) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
          }(Array(this.currentPerPage)).map(function (n, r) {
            return t.getSlide(e + r);
          }).reduce(function (t, e) {
            return Math.max(t, e && e.$el.clientHeight || 0);
          }, 0);

          return this.currentHeight = 0 === n ? "auto" : "".concat(n, "px"), this.currentHeight;
        },
        getSlideCount: function getSlideCount() {
          var t = this;
          this.slideCount = this.$slots && this.$slots.default && this.$slots.default.filter(function (e) {
            return e.tag && null !== e.tag.match("^vue-component-\\d+-".concat(t.tagName, "$"));
          }).length || 0;
        },
        getSlide: function getSlide(t) {
          var e = this;
          return this.$children.filter(function (t) {
            return null !== t.$vnode.tag.match("^vue-component-\\d+-".concat(e.tagName, "$"));
          })[t];
        },
        goToPage: function goToPage(t, e) {
          t >= 0 && t <= this.pageCount && (this.offset = this.scrollPerPage ? Math.min(this.slideWidth * this.currentPerPage * t, this.maxOffset) : this.slideWidth * t, this.autoplay && !this.autoplayHoverPause && this.restartAutoplay(), this.currentPage = t, "pagination" === e && (this.pauseAutoplay(), this.$emit("pagination-click", t)));
        },
        onStart: function onStart(t) {
          2 != t.button && (document.addEventListener(this.isTouch ? "touchend" : "mouseup", this.onEnd, !0), document.addEventListener(this.isTouch ? "touchmove" : "mousemove", this.onDrag, !0), this.startTime = t.timeStamp, this.dragging = !0, this.dragStartX = this.isTouch ? t.touches[0].clientX : t.clientX, this.dragStartY = this.isTouch ? t.touches[0].clientY : t.clientY);
        },
        onEnd: function onEnd(t) {
          this.autoplay && !this.autoplayHoverPause && this.restartAutoplay(), this.pauseAutoplay();
          var e = this.isTouch ? t.changedTouches[0].clientX : t.clientX,
              n = this.dragStartX - e;

          if (this.dragMomentum = n / (t.timeStamp - this.startTime), 0 !== this.minSwipeDistance && Math.abs(n) >= this.minSwipeDistance) {
            var r = this.scrollPerPage ? this.slideWidth * this.currentPerPage : this.slideWidth;
            this.dragOffset = this.dragOffset + Math.sign(n) * (r / 2);
          }

          this.rtl ? this.offset -= this.dragOffset : this.offset += this.dragOffset, this.dragOffset = 0, this.dragging = !1, this.render(), document.removeEventListener(this.isTouch ? "touchend" : "mouseup", this.onEnd, !0), document.removeEventListener(this.isTouch ? "touchmove" : "mousemove", this.onDrag, !0);
        },
        onDrag: function onDrag(t) {
          var e = this.isTouch ? t.touches[0].clientX : t.clientX,
              n = this.isTouch ? t.touches[0].clientY : t.clientY,
              r = this.dragStartX - e,
              i = this.dragStartY - n;

          if (!(this.isTouch && Math.abs(r) < Math.abs(i))) {
            t.stopImmediatePropagation(), this.dragOffset = r;
            var o = this.offset + this.dragOffset;
            this.rtl ? 0 == this.offset && this.dragOffset > 0 ? this.dragOffset = Math.sqrt(this.resistanceCoef * this.dragOffset) : this.offset == this.maxOffset && this.dragOffset < 0 && (this.dragOffset = -Math.sqrt(-this.resistanceCoef * this.dragOffset)) : o < 0 ? this.dragOffset = -Math.sqrt(-this.resistanceCoef * this.dragOffset) : o > this.maxOffset && (this.dragOffset = Math.sqrt(this.resistanceCoef * this.dragOffset));
          }
        },
        onResize: function onResize() {
          var t = this;
          this.computeCarouselWidth(), this.computeCarouselHeight(), this.dragging = !0, this.render(), setTimeout(function () {
            t.dragging = !1;
          }, this.refreshRate);
        },
        render: function render() {
          this.rtl ? this.offset -= Math.max(1 - this.currentPerPage, Math.min(Math.round(this.dragMomentum), this.currentPerPage - 1)) * this.slideWidth : this.offset += Math.max(1 - this.currentPerPage, Math.min(Math.round(this.dragMomentum), this.currentPerPage - 1)) * this.slideWidth;
          var t = this.scrollPerPage ? this.slideWidth * this.currentPerPage : this.slideWidth,
              e = t * Math.floor(this.slideCount / (this.currentPerPage - 1)),
              n = e + this.slideWidth * (this.slideCount % this.currentPerPage);
          this.offset > (e + n) / 2 ? this.offset = n : this.offset = t * Math.round(this.offset / t), this.offset = Math.max(0, Math.min(this.offset, this.maxOffset)), this.currentPage = this.scrollPerPage ? Math.round(this.offset / this.slideWidth / this.currentPerPage) : Math.round(this.offset / this.slideWidth);
        },
        computeCarouselWidth: function computeCarouselWidth() {
          this.getSlideCount(), this.getBrowserWidth(), this.getCarouselWidth(), this.setCurrentPageInBounds();
        },
        computeCarouselHeight: function computeCarouselHeight() {
          this.getCarouselHeight();
        },
        setCurrentPageInBounds: function setCurrentPageInBounds() {
          if (!this.canAdvanceForward && this.scrollPerPage) {
            var t = this.pageCount - 1;
            this.currentPage = t >= 0 ? t : 0, this.offset = Math.max(0, Math.min(this.offset, this.maxOffset));
          }
        },
        handleTransitionStart: function handleTransitionStart() {
          this.$emit("transitionStart"), this.$emit("transition-start");
        },
        handleTransitionEnd: function handleTransitionEnd() {
          this.$emit("transitionEnd"), this.$emit("transition-end");
        }
      },
      mounted: function mounted() {
        window.addEventListener("resize", function (t, e, n) {
          var r;
          return function () {
            var i = n && !r;
            clearTimeout(r), r = setTimeout(function () {
              r = null, n || t.apply(void 0);
            }, e), i && t.apply(void 0);
          };
        }(this.onResize, this.refreshRate)), (this.isTouch && this.touchDrag || this.mouseDrag) && this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch ? "touchstart" : "mousedown", this.onStart), this.attachMutationObserver(), this.computeCarouselWidth(), this.computeCarouselHeight(), this.transitionstart = P(), this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart, this.handleTransitionStart), this.transitionend = P(), this.$refs["VueCarousel-inner"].addEventListener(this.transitionend, this.handleTransitionEnd), this.$emit("mounted"), "backward" === this.autoplayDirection && this.goToLastSlide();
      },
      beforeDestroy: function beforeDestroy() {
        this.detachMutationObserver(), window.removeEventListener("resize", this.getBrowserWidth), this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart, this.handleTransitionStart), this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend, this.handleTransitionEnd), this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch ? "touchstart" : "mousedown", this.onStart);
      }
    },
        C = (n(101), s(S, r, [], !1, null, null, null));

    C.options.__file = "src/Carousel.vue";
    var w = C.exports;
    n.d(e, "Carousel", function () {
      return w;
    }), n.d(e, "Slide", function () {
      return y;
    }), e.default = {
      install: function install(t) {
        t.component("carousel", w), t.component("slide", y);
      }
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=template&id=d471f2f8&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/packs/components/static_pages/appExplain.vue?vue&type=template&id=d471f2f8& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "top-explain" }, [
      _c("div", { staticClass: "explain-wrapper" }, [
        _c("img", {
          attrs: { src: __webpack_require__(/*! /public/assets/images/coffee_gif.gif */ "./public/assets/images/coffee_gif.gif") }
        }),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "explain-wrapper" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("p", { staticClass: "explain-wrapper-info" }, [
          _vm._v(
            "\n          出会ったコーヒーの感想を記録して共有しましょう。\n          その投稿が、素敵なコーヒーを求めてる誰かのヒントになるでしょう。\n          "
          )
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "explain-post-img",
          attrs: { src: __webpack_require__(/*! /public/assets/images/post.png */ "./public/assets/images/post.png") }
        })
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "explain-wrapper" },
        [
          _vm._m(3),
          _vm._v(" "),
          _c("p", { staticClass: "explain-wrapper-info" }, [
            _vm._v(
              "\n              コーヒーを家でも楽しみたいなら、素敵なコーヒーのラインナップを\n              取り揃えておりますので、ぜひお求めください。\n            "
            )
          ]),
          _vm._v(" "),
          _c(
            "carousel",
            {
              attrs: {
                "per-page": 1,
                autoplay: true,
                loop: true,
                autoplayTimeout: 1500
              }
            },
            [
              _c("slide", [
                _c("img", {
                  staticClass: "sold-item-explain",
                  attrs: {
                    src: __webpack_require__(/*! /public/assets/images/sold_item1.png */ "./public/assets/images/sold_item1.png")
                  }
                })
              ]),
              _vm._v(" "),
              _c("slide", [
                _c("img", {
                  staticClass: "sold-item-explain",
                  attrs: {
                    src: __webpack_require__(/*! /public/assets/images/sold_item2.png */ "./public/assets/images/sold_item2.png")
                  }
                })
              ]),
              _vm._v(" "),
              _c("slide", [
                _c("img", {
                  staticClass: "sold-item-explain",
                  attrs: {
                    src: __webpack_require__(/*! /public/assets/images/sold_item3.png */ "./public/assets/images/sold_item3.png")
                  }
                })
              ]),
              _vm._v(" "),
              _c("slide", [
                _c("img", {
                  staticClass: "sold-item-explain",
                  attrs: {
                    src: __webpack_require__(/*! /public/assets/images/sold_item4.png */ "./public/assets/images/sold_item4.png")
                  }
                })
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(4)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "explain-wrapper-title" }, [
      _c("h3", { staticClass: "explain-wrapper-title" }, [
        _vm._v("Von Voyage!")
      ]),
      _vm._v(" "),
      _c("p", {}, [
        _vm._v(
          "Coffee Passportとはあなたが出会ったコーヒーの記録を共有できるサービスです"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ruby", [
      _c("h3", { staticClass: "explain-wrapper-title" }, [
        _vm._v("出会ったコーヒーをシェアしよう")
      ]),
      _vm._v(" "),
      _c("rt", { staticClass: "explain-wrapper-title-en" }, [
        _vm._v("share your favorite coffee")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "explain-wrapper" }, [
      _c("ruby", [
        _c("h3", { staticClass: "explain-wrapper-title" }, [
          _vm._v("コーヒーを探す旅へ")
        ]),
        _vm._v(" "),
        _c("rt", { staticClass: "explain-wrapper-title-en" }, [
          _vm._v("vayage to find coffee")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "explain-wrapper-info" }, [
        _vm._v(
          "\n            お気に入りのコーヒーに出会いたいときは、検索してみましょう。\n            コーヒーの名前、コク、酸味、産地、加工法などで検索できます。\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ruby", [
      _c("h3", { staticClass: "explain-wrapper-title" }, [
        _vm._v("素敵なコーヒーがあなたの手元に")
      ]),
      _vm._v(" "),
      _c("rt", { staticClass: "explain-wrapper-title-en" }, [
        _vm._v("special coffee will come to your house")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "explain-wrapper" }, [
      _c("ruby", [
        _c("h3", { staticClass: "explain-wrapper-title" }, [
          _vm._v("いいねやコメントで盛り上がろう")
        ]),
        _vm._v(" "),
        _c("rt", { staticClass: "explain-wrapper-title-en" }, [
          _vm._v("smash that like button and comment ")
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "explain-wrapper-info" }, [
        _vm._v(
          "\n              気に入った投稿に「いいね」を押したり、コメントして\n              一杯のコーヒーが生み出すコミュニティに参加しましょう。\n            "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./public/assets/images/coffee_gif.gif":
/*!*********************************************!*\
  !*** ./public/assets/images/coffee_gif.gif ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/coffee_gif-2c7fb49d.gif";

/***/ }),

/***/ "./public/assets/images/post.png":
/*!***************************************!*\
  !*** ./public/assets/images/post.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/post-9de5d393.png";

/***/ }),

/***/ "./public/assets/images/sold_item1.png":
/*!*********************************************!*\
  !*** ./public/assets/images/sold_item1.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/sold_item1-4b5a14d6.png";

/***/ }),

/***/ "./public/assets/images/sold_item2.png":
/*!*********************************************!*\
  !*** ./public/assets/images/sold_item2.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/sold_item2-fd0ae8c3.png";

/***/ }),

/***/ "./public/assets/images/sold_item3.png":
/*!*********************************************!*\
  !*** ./public/assets/images/sold_item3.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/sold_item3-49860077.png";

/***/ }),

/***/ "./public/assets/images/sold_item4.png":
/*!*********************************************!*\
  !*** ./public/assets/images/sold_item4.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/sold_item4-2189bb94.png";

/***/ })

/******/ });
//# sourceMappingURL=appExplain-5a2bf94887f1f5bbce45.js.map