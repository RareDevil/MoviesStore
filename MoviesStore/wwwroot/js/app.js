/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/Main.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Main.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ \"./node_modules/core-js/modules/es.string.search.js\");\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Main',\n  data: function data() {\n    return {\n      languages: {},\n      locations: {}\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/movie/languages').then(function (_ref) {\n      var data = _ref.data;\n      return _this.languages = data;\n    });\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/movie/locations').then(function (_ref2) {\n      var data = _ref2.data;\n      return _this.locations = data;\n    });\n  },\n  methods: {\n    keypressedInSearch: function keypressedInSearch(event) {\n      if (event.key === \"Enter\") {\n        this.search();\n      }\n    },\n    search: function search() {\n      var searchfield = document.getElementsByClassName(\"searchField\");\n      this.$router.push({\n        name: 'Home',\n        params: {\n          query: searchfield[0].value\n        }\n      });\n    },\n    changeLang: function changeLang(lang) {\n      this.$router.push({\n        name: 'Home',\n        params: {\n          language: lang === \"All\" ? \"\" : lang\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/Main.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Home.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Home',\n  props: ['query', 'language', 'location'],\n  data: function data() {\n    return {\n      moviesCollection: {}\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/movies').then(function (_ref) {\n      var data = _ref.data;\n      return _this.moviesCollection = data;\n    });\n  },\n  watch: {\n    query: function query(newVal) {\n      var _this2 = this;\n\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/movies?query=' + this.getValueOrEmptyString(newVal) + '&language=' + this.getValueOrEmptyString(this.language) + '&location' + this.getValueOrEmptyString(this.location)).then(function (_ref2) {\n        var data = _ref2.data;\n        return _this2.moviesCollection = data;\n      });\n    },\n    language: function language(newVal) {\n      var _this3 = this;\n\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/movies?query=' + this.getValueOrEmptyString(this.query) + '&language=' + this.getValueOrEmptyString(newVal) + '&location' + this.getValueOrEmptyString(this.location)).then(function (_ref3) {\n        var data = _ref3.data;\n        return _this3.moviesCollection = data;\n      });\n    },\n    location: function location(newVal) {\n      var _this4 = this;\n\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/movies?query=' + this.getValueOrEmptyString(this.query) + '&language=' + this.getValueOrEmptyString(this.language) + '&location' + this.getValueOrEmptyString(newVal)).then(function (_ref4) {\n        var data = _ref4.data;\n        return _this4.moviesCollection = data;\n      });\n    }\n  },\n  methods: {\n    getValueOrEmptyString: function getValueOrEmptyString(value) {\n      if (value == null) {\n        return \"\";\n      }\n\n      return value;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Movie.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Movie.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Movie\",\n  data: function data() {\n    return {\n      movieInformation: {}\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/movie/' + this.$route.params.id).then(function (_ref) {\n      var data = _ref.data;\n      return _this.movieInformation = data;\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Movie.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/Main.vue?vue&type=template&id=3ffae6b2":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Main.vue?vue&type=template&id=3ffae6b2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ \"./node_modules/core-js/modules/es.string.search.js\");\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\n\n\nvar _hoisted_1 = {\n  class: \"navbar navbar-expand-md navbar-dark fixed-top bg-dark\"\n};\nvar _hoisted_2 = {\n  class: \"container-fluid\"\n};\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createTextVNode\"])(\"Movie Store\");\n\nvar _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"button\", {\n  class: \"navbar-toggler\",\n  type: \"button\",\n  \"data-bs-toggle\": \"collapse\",\n  \"data-bs-target\": \"#navbarCollapse\",\n  \"aria-controls\": \"navbarCollapse\",\n  \"aria-expanded\": \"false\",\n  \"aria-label\": \"Toggle navigation\"\n}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"span\", {\n  class: \"navbar-toggler-icon\"\n})], -1\n/* HOISTED */\n);\n\nvar _hoisted_5 = {\n  class: \"collapse navbar-collapse\",\n  id: \"navbarCollapse\"\n};\nvar _hoisted_6 = {\n  class: \"navbar-nav me-auto mb-2 mb-md-0\"\n};\nvar _hoisted_7 = {\n  class: \"nav-item\"\n};\n\nvar _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createTextVNode\"])(\"Home\");\n\nvar _hoisted_9 = {\n  class: \"nav-item\"\n};\n\nvar _hoisted_10 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createTextVNode\"])(\"About\");\n\nvar _hoisted_11 = {\n  key: 0,\n  class: \"d-flex\"\n};\nvar _hoisted_12 = {\n  class: \"collapse navbar-collapse\",\n  id: \"navbarNavLanguageDropdown\"\n};\nvar _hoisted_13 = {\n  class: \"navbar-nav\"\n};\nvar _hoisted_14 = {\n  class: \"nav-item dropdown\"\n};\n\nvar _hoisted_15 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"a\", {\n  class: \"nav-link dropdown-toggle\",\n  href: \"#\",\n  id: \"navbarLanguageDropdownMenuLink\",\n  role: \"button\",\n  \"data-bs-toggle\": \"dropdown\",\n  \"aria-expanded\": \"false\"\n}, \" Language \", -1\n/* HOISTED */\n);\n\nvar _hoisted_16 = {\n  class: \"dropdown-menu dropdown-menu-dark\",\n  \"aria-labelledby\": \"navbarLanguageDropdownMenuLink\"\n};\nvar _hoisted_17 = [\"onClick\"];\nvar _hoisted_18 = {\n  class: \"collapse navbar-collapse\",\n  id: \"navbarNavLocationDropdown\"\n};\nvar _hoisted_19 = {\n  class: \"navbar-nav\"\n};\nvar _hoisted_20 = {\n  class: \"nav-item dropdown\"\n};\n\nvar _hoisted_21 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"a\", {\n  class: \"nav-link dropdown-toggle\",\n  href: \"#\",\n  id: \"navbarLocationDropdownMenuLink\",\n  role: \"button\",\n  \"data-bs-toggle\": \"dropdown\",\n  \"aria-expanded\": \"false\"\n}, \" Location \", -1\n/* HOISTED */\n);\n\nvar _hoisted_22 = {\n  class: \"dropdown-menu dropdown-menu-dark\",\n  \"aria-labelledby\": \"navbarLocationDropdownMenuLink\"\n};\n\nvar _hoisted_23 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"li\", null, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"span\", {\n  class: \"dropdown-item\"\n}, \"All\")], -1\n/* HOISTED */\n);\n\nvar _hoisted_24 = {\n  class: \"dropdown-item\"\n};\nvar _hoisted_25 = {\n  class: \"flex-shrink-0\"\n};\nvar _hoisted_26 = {\n  class: \"container\"\n};\n\nvar _hoisted_27 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"footer\", {\n  class: \"footer mt-auto py-3 bg-light\"\n}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"div\", {\n  class: \"container\"\n}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"span\", {\n  class: \"text-muted\"\n}, \"Copyright Movie Store.\")])], -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"resolveComponent\"])(\"router-link\");\n\n  var _component_router_view = Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"resolveComponent\"])(\"router-view\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"header\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\" Fixed navbar \"), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"nav\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(_component_router_link, {\n    class: \"navbar-brand\",\n    to: \"/\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"withCtx\"])(function () {\n      return [_hoisted_3];\n    }),\n    _: 1\n    /* STABLE */\n\n  }), _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"div\", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"ul\", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"li\", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(_component_router_link, {\n    class: \"nav-link\",\n    to: \"/\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"withCtx\"])(function () {\n      return [_hoisted_8];\n    }),\n    _: 1\n    /* STABLE */\n\n  })]), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"li\", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(_component_router_link, {\n    class: \"nav-link\",\n    to: \"/about\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"withCtx\"])(function () {\n      return [_hoisted_10];\n    }),\n    _: 1\n    /* STABLE */\n\n  })])]), _ctx.$route.name === 'Home' ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementBlock\"])(\"div\", _hoisted_11, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"div\", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"ul\", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"li\", _hoisted_14, [_hoisted_15, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"ul\", _hoisted_16, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"li\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"span\", {\n    class: \"dropdown-item\",\n    onClick: _cache[0] || (_cache[0] = function ($event) {\n      return $options.changeLang('All');\n    })\n  }, \"All\")]), (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"renderList\"])(_ctx.languages, function (lang) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementBlock\"])(\"li\", {\n      key: lang\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"span\", {\n      class: \"dropdown-item\",\n      onClick: function onClick($event) {\n        return $options.changeLang(lang);\n      }\n    }, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])(lang), 9\n    /* TEXT, PROPS */\n    , _hoisted_17)]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"div\", _hoisted_18, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"ul\", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"li\", _hoisted_20, [_hoisted_21, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"ul\", _hoisted_22, [_hoisted_23, (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"renderList\"])(_ctx.locations, function (loc) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementBlock\"])(\"li\", {\n      key: loc\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"span\", _hoisted_24, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])(loc), 1\n    /* TEXT */\n    )]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"input\", {\n    class: \"form-control me-2 searchField\",\n    type: \"search\",\n    placeholder: \"Search\",\n    \"aria-label\": \"Search\",\n    onKeypress: _cache[1] || (_cache[1] = function () {\n      return $options.keypressedInSearch && $options.keypressedInSearch.apply($options, arguments);\n    })\n  }, null, 32\n  /* HYDRATE_EVENTS */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"button\", {\n    class: \"btn btn-outline-success\",\n    type: \"button\",\n    onClick: _cache[2] || (_cache[2] = function () {\n      return $options.search && $options.search.apply($options, arguments);\n    })\n  }, \"Search\")])) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true)])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"main\", _hoisted_25, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createElementVNode\"])(\"div\", _hoisted_26, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(_component_router_view)])]), _hoisted_27], 64\n  /* STABLE_FRAGMENT */\n  );\n}\n\n//# sourceURL=webpack:///./src/Main.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/About.vue?vue&type=template&id=039c5b43":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/About.vue?vue&type=template&id=039c5b43 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"about\"\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h1\", null, \"This is an about page\", -1\n/* HOISTED */\n);\n\nvar _hoisted_3 = [_hoisted_2];\nfunction render(_ctx, _cache) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, _hoisted_3);\n}\n\n//# sourceURL=webpack:///./src/views/About.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Home.vue?vue&type=template&id=fae5bece ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"album py-5 home\"\n};\nvar _hoisted_2 = {\n  class: \"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 moviesCollection\"\n};\nvar _hoisted_3 = {\n  class: \"card shadow-sm\"\n};\nvar _hoisted_4 = [\"src\", \"alt\"];\nvar _hoisted_5 = {\n  class: \"card-body\"\n};\nvar _hoisted_6 = {\n  class: \"card-text\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-link\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_2, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(_ctx.moviesCollection, function (value) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      class: \"col\",\n      key: value.imdbID\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n      to: /movie/ + value.imdbID\n    }, {\n      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n        return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n          class: \"bd-placeholder-img card-img-top\",\n          src: value.poster,\n          alt: value.title\n        }, null, 8\n        /* PROPS */\n        , _hoisted_4), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(value.title), 1\n        /* TEXT */\n        )])];\n      }),\n      _: 2\n      /* DYNAMIC */\n\n    }, 1032\n    /* PROPS, DYNAMIC_SLOTS */\n    , [\"to\"])])]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))])]);\n}\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Movie.vue?vue&type=template&id=cb822534":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Movie.vue?vue&type=template&id=cb822534 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"row featurette\"\n};\nvar _hoisted_2 = {\n  class: \"col-md-7\"\n};\nvar _hoisted_3 = {\n  class: \"featurette-heading\"\n};\nvar _hoisted_4 = {\n  class: \"lead\"\n};\nvar _hoisted_5 = {\n  class: \"card-text mb-auto\"\n};\nvar _hoisted_6 = {\n  class: \"card-text mb-auto\"\n};\nvar _hoisted_7 = {\n  class: \"card-text mb-auto\"\n};\n\nvar _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", {\n  class: \"card-text mb-auto\"\n}, \"Sound effects:\", -1\n/* HOISTED */\n);\n\nvar _hoisted_9 = [\"href\"];\nvar _hoisted_10 = {\n  class: \"row row-cols-md-3 mb-3\"\n};\nvar _hoisted_11 = [\"src\"];\nvar _hoisted_12 = {\n  class: \"col-md-5\"\n};\nvar _hoisted_13 = [\"src\", \"alt\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h2\", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.movieInformation.title), 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.movieInformation.plot), 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", _hoisted_5, \"Languange: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.movieInformation.language), 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", _hoisted_6, \"Location: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.movieInformation.location), 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", _hoisted_7, \"Rating: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.movieInformation.imdbRating), 1\n  /* TEXT */\n  ), _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"ul\", null, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(_ctx.movieInformation.soundEffects, function (soundEffect) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"li\", {\n      key: soundEffect\n    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(soundEffect), 1\n    /* TEXT */\n    );\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", {\n    href: 'https://www.imdb.com/title/' + _ctx.movieInformation.imdbID\n  }, \"Imdb\", 8\n  /* PROPS */\n  , _hoisted_9), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_10, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(_ctx.movieInformation.stills, function (value) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      class: \"col themed-grid-col\",\n      key: value\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n      class: \"bd-placeholder-img card-img-top\",\n      src: value,\n      alt: \"still image\"\n    }, null, 8\n    /* PROPS */\n    , _hoisted_11)]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n    class: \"bd-placeholder-img card-img-top\",\n    src: _ctx.movieInformation.poster,\n    alt: _ctx.movieInformation.title\n  }, null, 8\n  /* PROPS */\n  , _hoisted_13)])]);\n}\n\n//# sourceURL=webpack:///./src/views/Movie.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nmain > .container {\\n    margin-top: 60px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Main.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3857883e\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/Main.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./src/Main.vue":
/*!**********************!*\
  !*** ./src/Main.vue ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Main_vue_vue_type_template_id_3ffae6b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=3ffae6b2 */ \"./src/Main.vue?vue&type=template&id=3ffae6b2\");\n/* harmony import */ var _Main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js */ \"./src/Main.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_id_3ffae6b2_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css */ \"./src/Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css\");\n\n\n\n\n\n_Main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _Main_vue_vue_type_template_id_3ffae6b2__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_Main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/Main.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/Main.vue?");

/***/ }),

/***/ "./src/Main.vue?vue&type=script&lang=js":
/*!**********************************************!*\
  !*** ./src/Main.vue?vue&type=script&lang=js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./Main.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/Main.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/Main.vue?");

/***/ }),

/***/ "./src/Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css":
/*!******************************************************************!*\
  !*** ./src/Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Main_vue_vue_type_style_index_0_id_3ffae6b2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/Main.vue?vue&type=style&index=0&id=3ffae6b2&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Main_vue_vue_type_style_index_0_id_3ffae6b2_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Main_vue_vue_type_style_index_0_id_3ffae6b2_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Main_vue_vue_type_style_index_0_id_3ffae6b2_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Main_vue_vue_type_style_index_0_id_3ffae6b2_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/Main.vue?");

/***/ }),

/***/ "./src/Main.vue?vue&type=template&id=3ffae6b2":
/*!****************************************************!*\
  !*** ./src/Main.vue?vue&type=template&id=3ffae6b2 ***!
  \****************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Main_vue_vue_type_template_id_3ffae6b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./Main.vue?vue&type=template&id=3ffae6b2 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/Main.vue?vue&type=template&id=3ffae6b2\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Main_vue_vue_type_template_id_3ffae6b2__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/Main.vue?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_K_gli_Documents_MoviesStore_MoviesStore_MoviesStore_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _Main_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main.vue */ \"./src/Main.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"../node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap */ \"../node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n\n\n\n\n\n\n\n\n\ndocument.title = 'Movie store'; // Hack to get bootstrap to work properly\n\nvar body = document.getElementsByTagName(\"BODY\")[0];\nvar html = document.getElementsByTagName(\"HTML\")[0];\nvar app = document.getElementById(\"app\");\nhtml.classList.add(\"h-100\");\nbody.classList.add(\"d-flex\", \"flex-column\", \"h-100\");\napp.classList.add(\"d-flex\", \"flex-column\", \"h-100\");\nObject(vue__WEBPACK_IMPORTED_MODULE_4__[\"createApp\"])(_Main_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).use(_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Home.vue */ \"./src/views/Home.vue\");\n/* harmony import */ var _views_About_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/About.vue */ \"./src/views/About.vue\");\n/* harmony import */ var _views_Movie_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Movie.vue */ \"./src/views/Movie.vue\");\n\n\n\n\nvar routes = [{\n  path: '/',\n  name: 'Home',\n  component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  props: true\n}, {\n  path: '/about',\n  name: 'About',\n  component: _views_About_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: '/movie/:id',\n  name: 'Movie',\n  component: _views_Movie_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_0__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_0__[\"createWebHistory\"])(\"/\"),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/views/About.vue":
/*!*****************************!*\
  !*** ./src/views/About.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _About_vue_vue_type_template_id_039c5b43__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=039c5b43 */ \"./src/views/About.vue?vue&type=template&id=039c5b43\");\n\nconst script = {}\nscript.render = _About_vue_vue_type_template_id_039c5b43__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\nscript.__file = \"src/views/About.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (script);\n\n//# sourceURL=webpack:///./src/views/About.vue?");

/***/ }),

/***/ "./src/views/About.vue?vue&type=template&id=039c5b43":
/*!***********************************************************!*\
  !*** ./src/views/About.vue?vue&type=template&id=039c5b43 ***!
  \***********************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_About_vue_vue_type_template_id_039c5b43__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./About.vue?vue&type=template&id=039c5b43 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/About.vue?vue&type=template&id=039c5b43\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_About_vue_vue_type_template_id_039c5b43__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/About.vue?");

/***/ }),

/***/ "./src/views/Home.vue":
/*!****************************!*\
  !*** ./src/views/Home.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_fae5bece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=fae5bece */ \"./src/views/Home.vue?vue&type=template&id=fae5bece\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ \"./src/views/Home.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */\n\n\n_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _Home_vue_vue_type_template_id_fae5bece__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/views/Home.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=script&lang=js":
/*!****************************************************!*\
  !*** ./src/views/Home.vue?vue&type=script&lang=js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Home.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=template&id=fae5bece":
/*!**********************************************************!*\
  !*** ./src/views/Home.vue?vue&type=template&id=fae5bece ***!
  \**********************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Home_vue_vue_type_template_id_fae5bece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Home.vue?vue&type=template&id=fae5bece */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Home_vue_vue_type_template_id_fae5bece__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Movie.vue":
/*!*****************************!*\
  !*** ./src/views/Movie.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Movie_vue_vue_type_template_id_cb822534__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movie.vue?vue&type=template&id=cb822534 */ \"./src/views/Movie.vue?vue&type=template&id=cb822534\");\n/* harmony import */ var _Movie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Movie.vue?vue&type=script&lang=js */ \"./src/views/Movie.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */\n\n\n_Movie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _Movie_vue_vue_type_template_id_cb822534__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_Movie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/views/Movie.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Movie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/views/Movie.vue?");

/***/ }),

/***/ "./src/views/Movie.vue?vue&type=script&lang=js":
/*!*****************************************************!*\
  !*** ./src/views/Movie.vue?vue&type=script&lang=js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Movie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Movie.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Movie.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Movie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/Movie.vue?");

/***/ }),

/***/ "./src/views/Movie.vue?vue&type=template&id=cb822534":
/*!***********************************************************!*\
  !*** ./src/views/Movie.vue?vue&type=template&id=cb822534 ***!
  \***********************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Movie_vue_vue_type_template_id_cb822534__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Movie.vue?vue&type=template&id=cb822534 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Movie.vue?vue&type=template&id=cb822534\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Movie_vue_vue_type_template_id_cb822534__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Movie.vue?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });