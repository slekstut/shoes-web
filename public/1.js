(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/record/Record.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/record/Record.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecordOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecordOptions */ "./resources/js/views/record/RecordOptions.vue");
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
    RecordOptions: _RecordOptions__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      record: null,
      loading: false
    };
  },
  created: function created() {
    var _this = this;

    this.loading = true;
    axios.get("/api/records/".concat(this.$route.params.id)).then(function (response) {
      _this.record = response.data.data;
      _this.loading = false;
    });
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
    price: Number,
    size: Number,
    color: String
  },
  data: function data() {
    return {
      value: null,
      sizeSelection: [{
        text: "6",
        value: "six"
      }, {
        text: "7",
        value: "seven"
      }, {
        text: "8",
        value: "eight"
      }, {
        text: "9",
        value: "nine"
      }, {
        text: "10",
        value: "ten"
      }, {
        text: "11",
        value: "eleven"
      }, {
        text: "12",
        value: "twelve"
      }],
      colorSelection: [{
        text: "Red",
        value: "R"
      }, {
        text: "Green",
        value: "G"
      }, {
        text: "Black",
        value: "B"
      }, {
        text: "White",
        value: "W"
      }],
      selectedSize: "",
      selectedColor: ""
    };
  },
  methods: {
    increase: function increase() {
      this.value += 1;
    },
    decrease: function decrease() {
      if (this.value === 0) return;
      this.value -= 1;
    },
    check: function check() {
      //
      alert("Alert from check method.");
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
  return _c("div", { staticClass: "record-wrapper" }, [
    _c("div", { staticClass: "record-info" }, [
      _c("div", { staticClass: "record-text" }, [
        !_vm.loading
          ? _c("div", [
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
            ])
          : _c("div", { staticClass: "loading" }, [_vm._v("Loading...")])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      [_c("record-options", _vm._b({}, "record-options", _vm.record, false))],
      1
    )
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
              _vm._l(_vm.sizeSelection, function(size, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: size.value } },
                  [
                    _vm._v(
                      "\n            " + _vm._s(size.text) + "\n          "
                    )
                  ]
                )
              })
            ],
            2
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
              _vm._l(_vm.colorSelection, function(color, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: color.value } },
                  [
                    _vm._v(
                      "\n            " + _vm._s(color.text) + "\n          "
                    )
                  ]
                )
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "quantity-selector" }, [
          _c("label", { attrs: { for: "quantity" } }, [_vm._v("Quantity")]),
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
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.value,
                expression: "value"
              }
            ],
            attrs: {
              type: "number",
              min: "0",
              step: "1",
              onkeypress:
                "return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
            },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.value = $event.target.value
              }
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
          _c("button", { staticClass: "add-btn", on: { click: _vm.check } }, [
            _vm._v("Add to Card · $ 244.34")
          ])
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