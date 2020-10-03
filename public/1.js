(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nasa/world/WorldWind.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/nasa/world/WorldWind.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nasaworldwind/worldwind */ "./node_modules/@nasaworldwind/worldwind/build/dist/worldwind.min.js");
/* harmony import */ var _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_WorldWindWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../classes/WorldWindWrapper */ "./resources/js/classes/WorldWindWrapper.js");
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'WorldWind',
  data: function data() {
    return {
      worldWind: null
    };
  },
  methods: {
    construct: function construct() {
      this.setupCanvas();
      this.createWorldwind();
      this.worldWind.createBasicLayers();
    },
    setupCanvas: function setupCanvas() {
      var canvas = this.$el.querySelector('#main-view');
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;
    },
    createWorldwind: function createWorldwind() {
      _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.Logger.setLoggingLevel(_nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.Logger.LEVEL_WARNING);
      this.worldWind = new _classes_WorldWindWrapper__WEBPACK_IMPORTED_MODULE_1__["default"](new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.WorldWindow("main-view"));
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      return _this.construct();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_nasa_world_WorldWind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/nasa/world/WorldWind */ "./resources/js/components/nasa/world/WorldWind.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Index',
  components: {
    WorldWind: _components_nasa_world_WorldWind__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nasa/world/WorldWind.vue?vue&type=template&id=0290dada&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/nasa/world/WorldWind.vue?vue&type=template&id=0290dada&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "canvas",
        {
          staticStyle: {
            width: "100%",
            height: "auto",
            "background-color": "black"
          },
          attrs: { id: "main-view" }
        },
        [_vm._v("\n    Your browser does not support HTML5 Canvas.\n  ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=template&id=71c33819&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Index.vue?vue&type=template&id=71c33819&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("world-wind")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/classes/WorldWindWrapper.js":
/*!**************************************************!*\
  !*** ./resources/js/classes/WorldWindWrapper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldWindWrapper; });
/* harmony import */ var _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nasaworldwind/worldwind */ "./node_modules/@nasaworldwind/worldwind/build/dist/worldwind.min.js");
/* harmony import */ var _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var WorldWindWrapper = /*#__PURE__*/function () {
  /**
   * @param {WorldWind} worldwind
   */
  function WorldWindWrapper(worldwind) {
    _classCallCheck(this, WorldWindWrapper);

    this._worldWind = worldwind;
  }

  _createClass(WorldWindWrapper, [{
    key: "createBasicLayers",
    value: function createBasicLayers() {
      var _this = this;

      this.basicLayers.forEach(function (layer) {
        layer.layer.enabled = layer.enabled;

        _this._worldWind.addLayer(layer.layer);
      });
    }
  }, {
    key: "basicLayers",
    get: function get() {
      return [// Imagery layers.
      {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.BMNGLayer(),
        enabled: true
      }, {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.BMNGLandsatLayer(),
        enabled: false
      }, {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.BingAerialLayer(null),
        enabled: false
      }, {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.BingAerialWithLabelsLayer(null),
        enabled: false
      }, {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.BingRoadsLayer(null),
        enabled: false
      }, // Add atmosphere layer on top of all base layers.
      {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.AtmosphereLayer(),
        enabled: true
      }, // WorldWindow UI layers.
      {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.CompassLayer(),
        enabled: true
      }, {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.CoordinatesDisplayLayer(this._worldWind),
        enabled: true
      }, {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.ViewControlsLayer(this._worldWind),
        enabled: true
      }];
    }
  }]);

  return WorldWindWrapper;
}();



/***/ }),

/***/ "./resources/js/components/nasa/world/WorldWind.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/nasa/world/WorldWind.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorldWind_vue_vue_type_template_id_0290dada_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorldWind.vue?vue&type=template&id=0290dada&scoped=true& */ "./resources/js/components/nasa/world/WorldWind.vue?vue&type=template&id=0290dada&scoped=true&");
/* harmony import */ var _WorldWind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorldWind.vue?vue&type=script&lang=js& */ "./resources/js/components/nasa/world/WorldWind.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WorldWind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorldWind_vue_vue_type_template_id_0290dada_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WorldWind_vue_vue_type_template_id_0290dada_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0290dada",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/nasa/world/WorldWind.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/nasa/world/WorldWind.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/nasa/world/WorldWind.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WorldWind.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nasa/world/WorldWind.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/nasa/world/WorldWind.vue?vue&type=template&id=0290dada&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/nasa/world/WorldWind.vue?vue&type=template&id=0290dada&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_template_id_0290dada_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WorldWind.vue?vue&type=template&id=0290dada&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nasa/world/WorldWind.vue?vue&type=template&id=0290dada&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_template_id_0290dada_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_template_id_0290dada_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Index.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_71c33819_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=71c33819&scoped=true& */ "./resources/js/pages/Index.vue?vue&type=template&id=71c33819&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_71c33819_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_71c33819_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71c33819",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Index.vue?vue&type=template&id=71c33819&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Index.vue?vue&type=template&id=71c33819&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_71c33819_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=71c33819&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=template&id=71c33819&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_71c33819_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_71c33819_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);