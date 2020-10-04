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
      worldWind: null,
      selectSatellite: false
    };
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
    update: function update(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.selectSatellite) {
                  _this.worldWind.update(event.clientX, event.clientY);
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
    /**
     * @param {[Satellite]}
     */
    satellites: {
      type: Array,
      "default": function _default() {
        return [];
      }
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


function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      satellites: []
    };
  },
  methods: {
    construct: function construct() {
      this.getSatellites();
    },
    getSatellites: function getSatellites() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$axios.get("".concat(_this.$apiUrl, "/satellites"));

              case 2:
                response = _context.sent;

                if (response.status === 200) {
                  response.data.forEach(function (basicSatellite) {
                    _this.satellites.push(_construct(_classes_Body_Satellite__WEBPACK_IMPORTED_MODULE_2__["default"], _toConsumableArray(Object.values(basicSatellite))));
                  });
                  response.data.forEach(function (basicSatellite) {
                    _this.satellites.push(_construct(_classes_Body_Satellite__WEBPACK_IMPORTED_MODULE_2__["default"], _toConsumableArray(Object.values(basicSatellite))));
                  });
                  response.data.forEach(function (basicSatellite) {
                    _this.satellites.push(_construct(_classes_Body_Satellite__WEBPACK_IMPORTED_MODULE_2__["default"], _toConsumableArray(Object.values(basicSatellite))));
                  });
                  response.data.forEach(function (basicSatellite) {
                    _this.satellites.push(_construct(_classes_Body_Satellite__WEBPACK_IMPORTED_MODULE_2__["default"], _toConsumableArray(Object.values(basicSatellite))));
                  });
                  response.data.forEach(function (basicSatellite) {
                    _this.satellites.push(_construct(_classes_Body_Satellite__WEBPACK_IMPORTED_MODULE_2__["default"], _toConsumableArray(Object.values(basicSatellite))));
                  });
                  response.data.forEach(function (basicSatellite) {
                    _this.satellites.push(_construct(_classes_Body_Satellite__WEBPACK_IMPORTED_MODULE_2__["default"], _toConsumableArray(Object.values(basicSatellite))));
                  });
                  response.data.forEach(function (basicSatellite) {
                    _this.satellites.push(_construct(_classes_Body_Satellite__WEBPACK_IMPORTED_MODULE_2__["default"], _toConsumableArray(Object.values(basicSatellite))));
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      return _this2.construct();
    });
  },
  components: {
    WorldWind: _components_nasa_world_WorldWind__WEBPACK_IMPORTED_MODULE_1__["default"]
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
  return _c("div", [
    _c(
      "canvas",
      {
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
  return _c(
    "div",
    [
      _vm.satellites.length > 0
        ? _c("world-wind", { attrs: { satellites: _vm.satellites } })
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
      return 'duck.dae';
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nasaworldwind/worldwind */ "./node_modules/@nasaworldwind/worldwind/build/dist/worldwind.min.js");
/* harmony import */ var _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        _this.addModel('/objects/macro/', satellite.object, new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.Position(satellite.lat, satellite["long"], satellite.height), 'activeAmateurSatellites');
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(mouseX, mouseY) {
        var _this2 = this;

        var clickPoint, clickRay;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                clickPoint = this._worldWind.canvasCoordinates(mouseX, mouseY);
                clickRay = this._worldWind.rayThroughScreenPoint(clickPoint);

                this._scenes.forEach(function (scene, index) {
                  _this2.pick(scene, clickRay, index);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update(_x, _x2) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "pick",
    value: function () {
      var _pick = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(scene, click, index) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  console.log(index);
                  var intersections = [];

                  if (scene.hasBeenClicked(_this3._worldWind.globe, click)) {
                    console.log(22222222);
                  }

                  resolve();
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function pick(_x3, _x4, _x5) {
        return _pick.apply(this, arguments);
      }

      return pick;
    }()
  }, {
    key: "addModel",
    value: function addModel(path, file, position, layer) {
      var _this4 = this;

      var scale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5000;
      var colladaLoader = new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.ColladaLoader(position);
      colladaLoader.init({
        dirPath: path
      });
      colladaLoader.load(file, function (scene) {
        scene.scale = scale;

        _this4._layers[layer].addRenderable(scene);

        _this4._addComputePointsToScene(scene);

        _this4._addPickMethodToScene(scene);

        _this4._addClickMethodToScene(scene);

        _this4._scenes.push(scene);
      });
    }
  }, {
    key: "_addLayers",
    value: function _addLayers(layers) {
      var _this5 = this;

      var names = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      layers.forEach(function (layer, index) {
        layer.layer.enabled = layer.enabled;

        _this5._worldWind.addLayer(layer.layer);

        if (names !== null) {
          layer.layer.pickEnabled = true;
          _this5._layers[names[index]] = layer.layer;
        }
      });
    }
  }, {
    key: "createSatelliteLayers",
    value: function createSatelliteLayers() {
      var layers = this.satelliteLayers;

      this._addLayers(Object.values(layers), Object.keys(layers));
    }
  }, {
    key: "_addPickMethodToScene",
    // Taken from The Worldwind Github Project
    value: function _addPickMethodToScene(scene) {
      var self = this;

      scene.computePointIntersections = function (globe, pointRay, results) {
        if (this._currentData === undefined) {
          this._currentData = {
            expired: true,
            transformedPoints: []
          };
        }

        if (!globe) {
          throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "ColladaScene", "computePointIntersections", "missingGlobe"));
        }

        if (!pointRay) {
          throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "ColladaScene", "computePointIntersections", "missingRay"));
        }

        if (!results) {
          throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "ColladaScene", "computePointIntersections", "missingResults"));
        }

        var eyePoint = pointRay.origin;
        var computeTransforms = this._currentData.transformedPoints.length <= this._entities.length;

        if (computeTransforms) {
          this._currentData.transformedPoints = [];
        }

        var eyeDists = [];

        for (var i = 0, len = this._entities.length; i < len; i++) {
          var mesh = this._entities[i].mesh;

          if (computeTransforms) {
            this._currentData.transformedPoints.push(this.computeTransformedPoints(mesh));
          }

          var intersectionPoints = [];

          if (self.computeTriangleListIntersection(pointRay, this._currentData.transformedPoints[i], intersectionPoints)) {
            for (var j = 0, iLen = intersectionPoints.length; j < iLen; j++) {
              var position = new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.Position(0, 0, 0);
              globe.computePositionFromPoint(intersectionPoints[j][0], intersectionPoints[j][1], intersectionPoints[j][2], position);
              var jEyeDist = intersectionPoints[j].distanceTo(eyePoint);
              var inserted = false;

              for (var k = 0, eLen = eyeDists.length; k < eLen && !inserted; k++) {
                if (jEyeDist < eyeDists[k]) {
                  results.splice(k, 0, position);
                  eyeDists.splice(k, 0, jEyeDist);
                  inserted = true;
                }
              }

              if (!inserted) {
                results.push(position);
                eyeDists.push(jEyeDist);
              }
            }
          }
        }

        return results.length > 0;
      };
    }
  }, {
    key: "_addClickMethodToScene",
    value: function _addClickMethodToScene(scene) {
      var self = this;

      scene.hasBeenClicked = function (globe, pointRay) {
        if (this._currentData === undefined) {
          this._currentData = {
            expired: true,
            transformedPoints: []
          };
        }

        if (!globe) {
          throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "ColladaScene", "computePointIntersections", "missingGlobe"));
        }

        if (!pointRay) {
          throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "ColladaScene", "computePointIntersections", "missingRay"));
        }

        var computeTransforms = this._currentData.transformedPoints.length <= this._entities.length;

        if (computeTransforms) {
          this._currentData.transformedPoints = [];
        }

        for (var i = 0, len = this._entities.length; i < len; i++) {
          var mesh = this._entities[i].mesh;

          if (computeTransforms) {
            this._currentData.transformedPoints.push(this.computeTransformedPoints(mesh));
          }

          var intersectionPoints = [];
          return self.computeTriangleListIntersection(pointRay, this._currentData.transformedPoints[i], intersectionPoints);
        }

        return false;
      };
    } // Taken from The Worldwind Github Project

  }, {
    key: "_addComputePointsToScene",
    value: function _addComputePointsToScene(scene) {
      scene.computeTransformedPoints = function (mesh) {
        var vtxs = mesh.vertices;
        var points = [];

        if (mesh.indexedRendering) {
          var idxs = mesh.indices;

          for (var i = 0, len = idxs.length; i < len; i += 3) {
            for (var j = 0; j < 3; j++) {
              var vtxOfs = idxs[i + j] * 3;
              var vtx = new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.Vec3(vtxs[vtxOfs], vtxs[vtxOfs + 1], vtxs[vtxOfs + 2]);
              vtx.multiplyByMatrix(this._transformationMatrix);
              points.push(vtx);
            }
          }
        } else {
          for (var i = 0, len = vtxs.length; i < len; i += 3) {
            var vtx = new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.Vec3(vtxs[i], vtxs[i + 1], vtxs[i + 2]);
            vtx.multiplyByMatrix(this._transformationMatrix);
            points.push(vtx);
          }
        }

        return points;
      };
    }
  }, {
    key: "computeTriangleIntersection",
    value: function computeTriangleIntersection(line, vertex0, vertex1, vertex2, result) {
      if (!line) {
        throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath", "computeTriangleIntersection", "missingLine"));
      }

      if (!vertex0 || !vertex1 || !vertex2) {
        throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath", "computeTriangleIntersection", "missingVertex"));
      }

      if (!result) {
        throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath", "computeTriangleIntersection", "missingResult"));
      } // Taken from Moller and Trumbore
      // https://www.cs.virginia.edu/~gfx/Courses/2003/ImageSynthesis/papers/Acceleration/Fast%20MinimumStorage%20RayTriangle%20Intersection.pdf


      var vx = line.direction[0],
          vy = line.direction[1],
          vz = line.direction[2],
          sx = line.origin[0],
          sy = line.origin[1],
          sz = line.origin[2],
          EPSILON = 0.00001; // find vectors for two edges sharing point a: vertex1 - vertex0 and vertex2 - vertex0

      var edge1x = vertex1[0] - vertex0[0],
          edge1y = vertex1[1] - vertex0[1],
          edge1z = vertex1[2] - vertex0[2],
          edge2x = vertex2[0] - vertex0[0],
          edge2y = vertex2[1] - vertex0[1],
          edge2z = vertex2[2] - vertex0[2]; // Compute cross product of line direction and edge2

      var px = vy * edge2z - vz * edge2y,
          py = vz * edge2x - vx * edge2z,
          pz = vx * edge2y - vy * edge2x; // Get determinant

      var det = edge1x * px + edge1y * py + edge1z * pz; // edge1 dot p

      if (det > -EPSILON && det < EPSILON) {
        // if det is near zero then ray lies in plane of triangle
        return false;
      }

      var inv_det = 1.0 / det; // Compute distance for vertex A to ray origin: origin - vertex0

      var tx = sx - vertex0[0],
          ty = sy - vertex0[1],
          tz = sz - vertex0[2]; // Calculate u parameter and test bounds: 1/det * t dot p

      var u = inv_det * (tx * px + ty * py + tz * pz);

      if (u < -EPSILON || u > 1 + EPSILON) {
        return false;
      } // Prepare to test v parameter: t cross edge1


      var qx = ty * edge1z - tz * edge1y,
          qy = tz * edge1x - tx * edge1z,
          qz = tx * edge1y - ty * edge1x; // Calculate v parameter and test bounds: 1/det * dir dot q

      var v = inv_det * (vx * qx + vy * qy + vz * qz);

      if (v < -EPSILON || u + v > 1 + EPSILON) {
        return false;
      } // Calculate the point of intersection on the line: t = 1/det * edge2 dot q


      var t = inv_det * (edge2x * qx + edge2y * qy + edge2z * qz);

      if (t < 0) {
        return false;
      } else {
        result[0] = sx + vx * t;
        result[1] = sy + vy * t;
        result[2] = sz + vz * t;
        return true;
      }
    }
  }, {
    key: "computeTriangleListIntersection",
    value: function computeTriangleListIntersection(line, points, results) {
      if (!line) {
        throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath", "computeIndexedTrianglesIntersection", "missingLine"));
      }

      if (!points) {
        throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath", "computeIndexedTrianglesIntersection", "missingPoints"));
      }

      if (!results) {
        throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath", "computeIndexedTrianglesIntersection", "missingResults"));
      }

      var iPoint = new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.Vec3(0, 0, 0);

      for (var i = 0, len = points.length; i < len; i += 3) {
        if (this.computeTriangleIntersection(line, points[i], points[i + 1], points[i + 2], iPoint)) {
          results.push(iPoint);
          iPoint = new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.Vec3(0, 0, 0);
        }
      }

      return results.length > 0;
    }
  }, {
    key: "basicLayers",
    get: function get() {
      return [// Imagery layers.
      {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.BMNGLayer(),
        enabled: true
      }, {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.BMNGLandsatLayer(),
        enabled: true
      }, {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.BingAerialLayer(null),
        enabled: false
      }, {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.BingAerialWithLabelsLayer(null),
        enabled: false
      }, {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.BingRoadsLayer(null),
        enabled: false
      }, // Add atmosphere layer on top of all base layers.
      {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.AtmosphereLayer(),
        enabled: true
      }, // WorldWindow UI layers.
      {
        layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.CoordinatesDisplayLayer(this._worldWind),
        enabled: true
      }];
    }
  }, {
    key: "satelliteLayers",
    get: function get() {
      return {
        activeAmateurSatellites: {
          layer: new _nasaworldwind_worldwind__WEBPACK_IMPORTED_MODULE_1___default.a.RenderableLayer('activeAmateurSatellites'),
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