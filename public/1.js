(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/record/Record.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/record/Record.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RecordOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecordOptions */ "./resources/js/views/record/RecordOptions.vue");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RecordOptions: _RecordOptions__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      record: null,
      loading: false
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.next = 3;
              return axios.get("/api/records/".concat(_this.$route.params.id)).then(function (response) {
                _this.record = response.data.data;
                _this.loading = false;
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/record/RecordOptions.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/record/RecordOptions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
  props: {
    units: {
      type: Number,
      required: false
    },
    size: {
      type: Number,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },
  data: function data() {
    return {
      selectedSize: "",
      selectedColor: "",
      quantity: 1,
      totalCartPrice: 0,
      quantityError: false
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.next = 3;
              return axios.get("/api/records/".concat(_this.$route.params.id)).then(function (response) {
                _this.record = response.data.data;
                _this.loading = false;
                _this.totalCartPrice = _this.record.price;
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    increase: function increase() {
      if (this.quantity === this.units) {
        return this.quantityError = true;
      } else {
        this.quantity += 1;
        this.totalCartPrice = this.record.price * this.quantity;
        this.quantityError = false;
      }
    },
    decrease: function decrease() {
      if (this.quantity === 1) return;
      this.quantity -= 1;
      this.totalCartPrice = this.record.price * this.quantity;
      this.quantityError = false;
    },
    clear: function clear() {
      this.quantity = 0;
      this.quantityError = false;
      this.totalCartPrice = this.record.price * this.quantity;
    },
    check: function check(event) {
      var value = parseInt(event.target.value);
      this.quantityError = false;

      if (value <= this.units) {
        this.quantity = value;
        this.totalCartPrice = this.record.price * this.quantity;
      } else {
        this.quantityError = true;
      }

      this.$forceUpdate();
    },
    toShoppingCart: function toShoppingCart() {
      console.log("to shopping cart");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/record/Record.vue?vue&type=template&id=4419ee00&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/record/Record.vue?vue&type=template&id=4419ee00& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "review-page" }, [
    !_vm.loading
      ? _c(
          "div",
          { staticClass: "record-wrapper" },
          [
            _c("div", { staticClass: "record-text" }, [
              _c("img", {
                attrs: {
                  src: "/storage/" + _vm.record.image,
                  alt: _vm.record.title
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "record-title" }, [
                _vm._v(_vm._s(_vm.record.title))
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", [_vm._v("Product Details")]),
              _vm._v(" "),
              _c("div", { staticClass: "record-description" }, [
                _vm._v(_vm._s(_vm.record.description))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "record-details-price" }, [
                _vm._v("€" + _vm._s(_vm.record.price))
              ])
            ]),
            _vm._v(" "),
            _c(
              "record-options",
              _vm._b({}, "record-options", _vm.record, false)
            )
          ],
          1
        )
      : _c("div", { staticClass: "loading" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/record/RecordOptions.vue?vue&type=template&id=2a7501ae&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/record/RecordOptions.vue?vue&type=template&id=2a7501ae& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "record-options" }, [
    _c("h6", { staticClass: "record-options-header" }, [
      _vm._v("Choose your best fit")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "selection-wrapper" }, [
      _c("form", [
        _c("div", { staticClass: "size" }, [
          _c("label", { attrs: { for: "size-number" } }, [_vm._v("Size")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selectedSize,
                  expression: "selectedSize"
                }
              ],
              attrs: { name: "size-number", id: "size-number" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.selectedSize = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "", disabled: "" } }, [
                _vm._v("Please choose size")
              ]),
              _vm._v(" "),
              _c("option", [
                _vm._v("\n            " + _vm._s(_vm.size) + "\n          ")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "color" }, [
          _c("label", { attrs: { for: "color-name" } }, [_vm._v("Color")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selectedColor,
                  expression: "selectedColor"
                }
              ],
              attrs: { name: "color-name", id: "color-name" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.selectedColor = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { disabled: "", value: "" } }, [
                _vm._v("Please choose a color")
              ]),
              _vm._v(" "),
              _c("option", [
                _vm._v("\n            " + _vm._s(_vm.color) + "\n          ")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "quantity-selector" }, [
          _c("label", { attrs: { for: "quantity" } }, [
            _vm._v("Quantity "),
            _c("span", [_vm._v("(" + _vm._s(_vm.units) + " Available)")])
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { id: "decrease" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.decrease($event)
                }
              }
            },
            [_vm._v("-")]
          ),
          _vm._v(" "),
          _c("input", {
            attrs: {
              type: "number",
              min: "0",
              step: "1",
              onkeypress:
                "return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
            },
            domProps: { value: _vm.quantity },
            on: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                    "Backspace",
                    "Delete",
                    "Del"
                  ])
                ) {
                  return null
                }
                return _vm.clear($event)
              },
              input: _vm.check
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { id: "increase" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.increase($event)
                }
              }
            },
            [_vm._v("+")]
          ),
          _c("br"),
          _vm._v(" "),
          _vm.quantityError
            ? _c("span", { staticClass: "units-error" }, [
                _vm._v("Only " + _vm._s(_vm.units) + " pieces available")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "add-btn",
              attrs: { type: "submit" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toShoppingCart($event)
                }
              }
            },
            [
              _vm._v(
                "\n          Add to Card · € " +
                  _vm._s(_vm.totalCartPrice) +
                  "\n        "
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/record/Record.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/record/Record.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Record_vue_vue_type_template_id_4419ee00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Record.vue?vue&type=template&id=4419ee00& */ "./resources/js/views/record/Record.vue?vue&type=template&id=4419ee00&");
/* harmony import */ var _Record_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Record.vue?vue&type=script&lang=js& */ "./resources/js/views/record/Record.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Record_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Record_vue_vue_type_template_id_4419ee00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Record_vue_vue_type_template_id_4419ee00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/record/Record.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/record/Record.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/record/Record.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Record.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/record/Record.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/record/Record.vue?vue&type=template&id=4419ee00&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/record/Record.vue?vue&type=template&id=4419ee00& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_template_id_4419ee00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Record.vue?vue&type=template&id=4419ee00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/record/Record.vue?vue&type=template&id=4419ee00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_template_id_4419ee00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_template_id_4419ee00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/record/RecordOptions.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/record/RecordOptions.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecordOptions_vue_vue_type_template_id_2a7501ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecordOptions.vue?vue&type=template&id=2a7501ae& */ "./resources/js/views/record/RecordOptions.vue?vue&type=template&id=2a7501ae&");
/* harmony import */ var _RecordOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecordOptions.vue?vue&type=script&lang=js& */ "./resources/js/views/record/RecordOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecordOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecordOptions_vue_vue_type_template_id_2a7501ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecordOptions_vue_vue_type_template_id_2a7501ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/record/RecordOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/record/RecordOptions.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/record/RecordOptions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecordOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/record/RecordOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/record/RecordOptions.vue?vue&type=template&id=2a7501ae&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/record/RecordOptions.vue?vue&type=template&id=2a7501ae& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordOptions_vue_vue_type_template_id_2a7501ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecordOptions.vue?vue&type=template&id=2a7501ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/record/RecordOptions.vue?vue&type=template&id=2a7501ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordOptions_vue_vue_type_template_id_2a7501ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordOptions_vue_vue_type_template_id_2a7501ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);