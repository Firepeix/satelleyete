(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nasa/world/WorldWind.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/nasa/world/WorldWind.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nasaworldwind/worldwind */ "./node_modules/@nasaworldwind/worldwind/build/dist/worldwind.min.js");
/* harmony import */ var _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_WorldWindWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../classes/WorldWindWrapper */ "./resources/js/classes/WorldWindWrapper.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  computed: {
    canvasClass: function canvasClass() {
      return {
        'cursor-pointer': this.selectSatellites
      };
    }
  },
  methods: {
    construct: function construct() {
      this.setupCanvas();
      this.createWorldwind();
      this.worldWind.createBasicLayers();
      this.worldWind.createSatelliteLayers();
      this.worldWind.addSatellites(this.satellites);
    },
    setupCanvas: function setupCanvas() {
      var canvas = this.$el.querySelector('#main-view');
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight - 48 * 3;
    },
    selectSatellite: function selectSatellite(id) {
      this.worldWind.selectSatellite(this.satellites.find(function (satellite) {
        return id === satellite.id;
      }));
    },
    update: function update(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.selectSatellites) {
                  _this.worldWind.update(event.clientX, event.clientY);

                  _this.$emit('updated');
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    createWorldwind: function createWorldwind() {
      _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.Logger.setLoggingLevel(_nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.Logger.LEVEL_WARNING);
      this.worldWind = new _classes_WorldWindWrapper__WEBPACK_IMPORTED_MODULE_2__["default"](new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.WorldWindow("main-view"));
    }
  },
  props: {
    satellites: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    selectSatellites: {
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      return _this2.construct();
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_nasa_world_WorldWind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/nasa/world/WorldWind */ "./resources/js/components/nasa/world/WorldWind.vue");
/* harmony import */ var _classes_Body_Satellite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/Body/Satellite */ "./resources/js/classes/Body/Satellite.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: 'Index',
  data: function data() {
    return {
      satelliteInfo: false,
      selectedSatellite: null,
      satellites: [],
      selectSatellites: false
    };
  },
  computed: {
    displaySatellite: function displaySatellite() {
      var _this = this;

      return this.satellites.find(function (satellite) {
        return satellite.id === _this.selectedSatellite;
      });
    }
  },
  watch: {
    selectedSatellite: function selectedSatellite() {
      this.$refs.world.selectSatellite(this.selectedSatellite);
    }
  },
  methods: {
    construct: function construct() {
      this.getSatellites();
    },
    getSatellites: function getSatellites() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$axios.get("".concat(_this2.$apiUrl, "/satellites"));

              case 2:
                response = _context.sent;

                if (response.status === 200) {
                  response.data.forEach(function (basicSat) {
                    if (basicSat.lat !== undefined) {
                      var satellite = new _classes_Body_Satellite__WEBPACK_IMPORTED_MODULE_2__["default"](basicSat.id, basicSat.lat, basicSat["long"], basicSat.height, basicSat.name, basicSat.status, basicSat.type);

                      _this2.satellites.push(satellite);
                    }
                  });

                  _this2.$emit('input', _this2.satellites);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    enableSelectSatellites: function enableSelectSatellites() {
      this.selectSatellites = true;
    },
    hoverSat: function hoverSat(id) {},
    selectSat: function selectSat(id) {
      if (id === this.selectedSatellite) {
        this.selectedSatellite = null;
      }

      this.selectedSatellite = id;
      this.satelliteInfo = true;
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      return _this3.construct();
    });
  },
  components: {
    WorldWind: _components_nasa_world_WorldWind__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nasa/world/WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/nasa/world/WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cursor-pointer[data-v-0290dada] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=style&index=0&lang=stylus&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Index.vue?vue&type=style&index=0&lang=stylus& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-dialog {\n  margin: 24px 24px 154px 24px;\n}\n.v-dialog .v-card__text {\n  padding-top: 24px !important;\n}\n.v-dialog .v-card__text .header {\n  font-weight: 800;\n}\n.v-dialog__content {\n  justify-content: flex-start;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nasa/world/WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/nasa/world/WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/stylus-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nasa/world/WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=style&index=0&lang=stylus&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Index.vue?vue&type=style&index=0&lang=stylus& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-2!../../../node_modules/stylus-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=style&index=0&lang=stylus&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
  return _c("div", [
    _c(
      "canvas",
      {
        class: _vm.canvasClass,
        staticStyle: {
          width: "100%",
          height: "auto",
          "background-color": "black"
        },
        attrs: { id: "main-view" },
        on: { click: _vm.update }
      },
      [_vm._v("\n    Your browser does not support HTML5 Canvas.\n  ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=template&id=71c33819&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Index.vue?vue&type=template&id=71c33819& ***!
  \***************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm.satellites.length > 0
        ? _c("world-wind", {
            ref: "world",
            attrs: {
              "select-satellites": _vm.selectSatellites,
              satellites: _vm.satellites
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.selectedSatellite !== null
        ? _c(
            "v-dialog",
            {
              attrs: { persistent: "", "hide-overlay": "", width: "400" },
              model: {
                value: _vm.satelliteInfo,
                callback: function($$v) {
                  _vm.satelliteInfo = $$v
                },
                expression: "satelliteInfo"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    { staticClass: "headline grey lighten-2" },
                    [
                      _vm._v(
                        "\n        Satellite: " +
                          _vm._s(_vm.displaySatellite.name) +
                          "\n      "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c(
                      "div",
                      { staticClass: "header d-flex justify-space-between" },
                      [
                        _c("div", [_vm._v("Latitude")]),
                        _vm._v(" "),
                        _c("div", [_vm._v("Longitude")]),
                        _vm._v(" "),
                        _c("div", [_vm._v("Altitude")])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex justify-space-between" }, [
                      _c("div", [
                        _vm._v(
                          _vm._s(
                            _vm.displaySatellite.lat < 0
                              ? String(_vm.displaySatellite.lat * -1).slice(
                                  0,
                                  6
                                )
                              : String(_vm.displaySatellite.lat).slice(0, 6)
                          ) +
                            "° " +
                            _vm._s(_vm.displaySatellite.lat < 0 ? "S" : "N")
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v(
                          _vm._s(
                            _vm.displaySatellite.long < 0
                              ? String(_vm.displaySatellite.long * -1).slice(
                                  0,
                                  6
                                )
                              : String(_vm.displaySatellite.long).slice(0, 6)
                          ) +
                            "° " +
                            _vm._s(_vm.displaySatellite.long < 0 ? "W" : "E")
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v(
                          _vm._s(
                            String(_vm.displaySatellite.height).slice(0, 5)
                          ) + "m"
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary", text: "" },
                          on: {
                            click: function($event) {
                              _vm.satelliteInfo = false
                            }
                          }
                        },
                        [_vm._v("\n          Close\n        ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/classes/Body/Satellite.js":
/*!************************************************!*\
  !*** ./resources/js/classes/Body/Satellite.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Satellite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Satellite = /*#__PURE__*/function () {
  function Satellite(id, lat, _long, height, name, status, type) {
    _classCallCheck(this, Satellite);

    this._id = id;
    this._lat = lat;
    this._long = _long;
    this._height = height;
    this._name = name;
    this._status = status;
    this._type = type;
  }

  _createClass(Satellite, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "lat",
    get: function get() {
      return this._lat;
    }
  }, {
    key: "long",
    get: function get() {
      return this._long;
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this._status !== 'Lixo';
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "object",
    get: function get() {
      return 'ball.dae';
    }
  }]);

  return Satellite;
}();



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
    this._scenes = [];
    this._satellites = [];
    this._layers = {};

    this._prepareWorldWind();
  }

  _createClass(WorldWindWrapper, [{
    key: "_prepareWorldWind",
    value: function _prepareWorldWind() {
      this._worldWind.navigator.range = 100981352;

      this._worldWind.redraw();
    }
  }, {
    key: "createBasicLayers",
    value: function createBasicLayers() {
      this._addLayers(this.basicLayers);
    }
    /**
     * @param {[Satellite]} satellites
     */

  }, {
    key: "addSatellites",
    value: function addSatellites(satellites) {
      this._satellites = satellites;

      this._renderSatellites();
    }
  }, {
    key: "_renderSatellites",
    value: function _renderSatellites() {
      var _this = this;

      this._satellites.forEach(function (satellite) {
        _this.addModel('/objects/macro/', satellite.object, new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.Position(satellite.lat, satellite["long"], satellite.height), 'activeAmateurSatellites');
      });
    }
  }, {
    key: "update",
    value: function update(mouseX, mouseY) {
      var clickPoint = this._worldWind.canvasCoordinates(mouseX, mouseY);

      var clickRay = this._worldWind.rayThroughScreenPoint(clickPoint);

      var pickedScene = null;
      var index = 0;

      while (pickedScene === null && index < this._scenes.length) {
        pickedScene = this.pick(this._scenes[index], clickRay, index);
        console.log(index);
        index++;
      }
    }
  }, {
    key: "pick",
    value: function pick(scene, click) {
      if (scene.hasBeenClicked(this._worldWind.globe, click)) {
        return scene;
      }

      return null;
    }
  }, {
    key: "addModel",
    value: function addModel(path, file, position, layer) {
      var _this2 = this;

      var scale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5000;
      var colladaLoader = new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.ColladaLoader(position);
      colladaLoader.init({
        dirPath: path
      });
      colladaLoader.load(file, function (scene) {
        scene.scale = scale;

        _this2._layers[layer].addRenderable(scene);

        _this2._scenes.push(scene);
      });
    }
  }, {
    key: "_addLayers",
    value: function _addLayers(layers) {
      var _this3 = this;

      var names = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      layers.forEach(function (layer, index) {
        layer.layer.enabled = layer.enabled;

        _this3._worldWind.addLayer(layer.layer);

        if (names !== null) {
          layer.layer.pickEnabled = true;
          _this3._layers[names[index]] = layer.layer;
        }
      });
    }
  }, {
    key: "selectSatellite",
    value: function selectSatellite(satellite) {
      this._worldWind.goTo(new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.Position(satellite.lat, satellite["long"], satellite.height + 5e6));
    }
  }, {
    key: "createSatelliteLayers",
    value: function createSatelliteLayers() {
      var layers = this.satelliteLayers;

      this._addLayers(Object.values(layers), Object.keys(layers));
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
        enabled: true
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
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.CoordinatesDisplayLayer(this._worldWind),
        enabled: true
      }];
    }
  }, {
    key: "satelliteLayers",
    get: function get() {
      return {
        activeAmateurSatellites: {
          layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_0___default.a.RenderableLayer('activeAmateurSatellites'),
          enabled: true
        }
      };
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
/* empty/unused harmony star reexport *//* harmony import */ var _WorldWind_vue_vue_type_style_index_0_id_0290dada_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus& */ "./resources/js/components/nasa/world/WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/nasa/world/WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/nasa/world/WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_style_index_0_id_0290dada_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/stylus-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nasa/world/WorldWind.vue?vue&type=style&index=0&id=0290dada&scoped=true&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_style_index_0_id_0290dada_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_style_index_0_id_0290dada_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_style_index_0_id_0290dada_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_style_index_0_id_0290dada_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_WorldWind_vue_vue_type_style_index_0_id_0290dada_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
/* harmony import */ var _Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=71c33819& */ "./resources/js/pages/Index.vue?vue&type=template&id=71c33819&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=stylus& */ "./resources/js/pages/Index.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/pages/Index.vue?vue&type=style&index=0&lang=stylus&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Index.vue?vue&type=style&index=0&lang=stylus& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-2!../../../node_modules/stylus-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Index.vue?vue&type=template&id=71c33819&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Index.vue?vue&type=template&id=71c33819& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=71c33819& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=template&id=71c33819&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);