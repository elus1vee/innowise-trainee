/*

 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").

 * This devtool is neither made for production nor for readable output files.

 * It uses "eval()" calls to create a separate source file in the browser devtools.

 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)

 * or disable the default devtool with "devtool: false".

 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).

 */

/** *** */ (() => { // webpackBootstrap

/** *** */

  /** *** */ 	const __webpack_modules__ = ({



    /***/ './src/Calculator.js':

    /*! ***************************!*\

  !*** ./src/Calculator.js ***!

  \************************** */

    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calculator\": () => (/* binding */ Calculator)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n// eslint-disable-next-line import/prefer-default-export\nvar Calculator = /*#__PURE__*/function () {\n  function Calculator() {\n    _classCallCheck(this, Calculator);\n    this.currentValue = 0;\n    this.memory = 0;\n    this.commands = [];\n    this.command = null;\n    this.flag = false;\n  }\n  _createClass(Calculator, [{\n    key: \"add\",\n    value: function add(operand) {\n      this.currentValue += operand;\n    }\n  }, {\n    key: \"subtract\",\n    value: function subtract(operand) {\n      this.currentValue -= operand;\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply(operand) {\n      this.currentValue *= operand;\n    }\n  }, {\n    key: \"divide\",\n    value: function divide(operand) {\n      if (operand === 0) {\n        throw Error('division by zero');\n      }\n      this.currentValue /= operand;\n    }\n  }, {\n    key: \"exp\",\n    value: function exp(operand) {\n      var _this;\n      _this = this, _this[\"currentValue\"] = Math.pow(_this[\"currentValue\"], operand);\n    }\n  }, {\n    key: \"cbrt\",\n    value: function cbrt(value) {\n      var _this2;\n      if (this.currentValue < 0) {\n        throw Error('square root of negative number');\n      }\n      _this2 = this, _this2[\"currentValue\"] = Math.pow(_this2[\"currentValue\"], 1 / value);\n    }\n  }, {\n    key: \"inv\",\n    value: function inv() {\n      if (this.currentValue === 0) {\n        throw Error('division by zero');\n      }\n      this.currentValue = 1 / this.currentValue;\n    }\n  }, {\n    key: \"percent\",\n    value: function percent(operand) {\n      if (this.currentValue === 0) {\n        this.currentValue = 1 * (operand / 100);\n      }\n      return this.currentValue * (operand / 100);\n    }\n  }, {\n    key: \"unpercent\",\n    value: function unpercent(operand) {\n      this.currentValue /= 1 + operand / 100;\n    }\n  }, {\n    key: \"signChange\",\n    value: function signChange() {\n      this.currentValue = -this.currentValue;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.currentValue = 0;\n    }\n  }, {\n    key: \"factorial\",\n    value: function factorial() {\n      if (!Number.isInteger(this.currentValue)) {\n        throw Error('factorial is available only for integers');\n      }\n      var flag = this.currentValue;\n      var result = 1;\n      for (var i = 1; i <= flag; i += 1) {\n        result *= i;\n      }\n      this.currentValue = result;\n    }\n  }, {\n    key: \"memoryClear\",\n    value: function memoryClear() {\n      this.memory = 0;\n    }\n\n    // eslint-disable-next-line consistent-return\n  }, {\n    key: \"memoryRead\",\n    value: function memoryRead() {\n      if (this.memory !== 0) {\n        return this.memory;\n      }\n      console.warn('Memory is empty');\n    }\n  }, {\n    key: \"memorySave\",\n    value: function memorySave(number) {\n      this.memory = number;\n    }\n  }, {\n    key: \"memoryPlus\",\n    value: function memoryPlus(number) {\n      this.memory += number;\n    }\n  }, {\n    key: \"memoryMinus\",\n    value: function memoryMinus(number) {\n      this.memory -= number;\n    }\n  }, {\n    key: \"getResult\",\n    value: function getResult() {\n      return this.currentValue;\n    }\n  }, {\n    key: \"setValue\",\n    value: function setValue(number) {\n      this.currentValue = number;\n    }\n  }, {\n    key: \"changeFlag\",\n    value: function changeFlag(value) {\n      this.flag = value;\n    }\n  }, {\n    key: \"pushCommand\",\n    value: function pushCommand(command) {\n      this.commands.push(command);\n      this.command = command;\n    }\n  }]);\n  return Calculator;\n}();\n\n//# sourceURL=webpack://task_5new/./src/Calculator.js?");

      /***/ }),



    /***/ './src/Command.js':

    /*! ************************!*\

  !*** ./src/Command.js ***!

  \*********************** */

    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddCommand\": () => (/* binding */ AddCommand),\n/* harmony export */   \"CbrtCommand\": () => (/* binding */ CbrtCommand),\n/* harmony export */   \"ClearCommand\": () => (/* binding */ ClearCommand),\n/* harmony export */   \"Command\": () => (/* binding */ Command),\n/* harmony export */   \"DivideCommand\": () => (/* binding */ DivideCommand),\n/* harmony export */   \"ExpCommand\": () => (/* binding */ ExpCommand),\n/* harmony export */   \"FactorialCommand\": () => (/* binding */ FactorialCommand),\n/* harmony export */   \"InvCommand\": () => (/* binding */ InvCommand),\n/* harmony export */   \"MemoryClearCommand\": () => (/* binding */ MemoryClearCommand),\n/* harmony export */   \"MemoryMinusCommand\": () => (/* binding */ MemoryMinusCommand),\n/* harmony export */   \"MemoryPlusCommand\": () => (/* binding */ MemoryPlusCommand),\n/* harmony export */   \"MemoryReadCommand\": () => (/* binding */ MemoryReadCommand),\n/* harmony export */   \"MemorySaveCommand\": () => (/* binding */ MemorySaveCommand),\n/* harmony export */   \"MultiplyCommand\": () => (/* binding */ MultiplyCommand),\n/* harmony export */   \"PercentCommand\": () => (/* binding */ PercentCommand),\n/* harmony export */   \"SignChangeCommand\": () => (/* binding */ SignChangeCommand),\n/* harmony export */   \"SubtractCommand\": () => (/* binding */ SubtractCommand)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n/* eslint-disable func-names */\nvar Command = /*#__PURE__*/_createClass(function Command() {\n  _classCallCheck(this, Command);\n  this.execute = function () {};\n  this.unexecute = function () {};\n  this.setParams = function () {};\n});\nvar AddCommand = /*#__PURE__*/function (_Command) {\n  _inherits(AddCommand, _Command);\n  var _super = _createSuper(AddCommand);\n  function AddCommand(calculator, operand) {\n    var _this;\n    _classCallCheck(this, AddCommand);\n    _this = _super.call(this);\n    _this.calculator = calculator;\n    _this.operand = operand;\n    _this.setParams = function (calc, opa) {\n      this.calculator = calc;\n      this.operand = opa;\n    };\n    _this.execute = function () {\n      this.calculator.add(this.operand);\n    };\n    _this.unexecute = function () {\n      this.calculator.substract(this.operand);\n    };\n    return _this;\n  }\n  return _createClass(AddCommand);\n}(Command);\nvar SubtractCommand = /*#__PURE__*/function (_Command2) {\n  _inherits(SubtractCommand, _Command2);\n  var _super2 = _createSuper(SubtractCommand);\n  function SubtractCommand(calculator, operand) {\n    var _this2;\n    _classCallCheck(this, SubtractCommand);\n    _this2 = _super2.call(this);\n    _this2.calculator = calculator;\n    _this2.operand = operand;\n    _this2.setParams = function (calc, opa) {\n      this.calculator = calc;\n      this.operand = opa;\n    };\n    _this2.execute = function () {\n      this.calculator.subtract(this.operand);\n    };\n    _this2.unexecute = function () {\n      this.calculator.add(this.operand);\n    };\n    return _this2;\n  }\n  return _createClass(SubtractCommand);\n}(Command);\nvar MultiplyCommand = /*#__PURE__*/function (_Command3) {\n  _inherits(MultiplyCommand, _Command3);\n  var _super3 = _createSuper(MultiplyCommand);\n  function MultiplyCommand(calculator, operand) {\n    var _this3;\n    _classCallCheck(this, MultiplyCommand);\n    _this3 = _super3.call(this);\n    _this3.calculator = calculator;\n    _this3.operand = operand;\n    _this3.setParams = function (calc, opa) {\n      this.calculator = calc;\n      this.operand = opa;\n    };\n    _this3.execute = function () {\n      this.calculator.multiply(this.operand);\n    };\n    _this3.unexecute = function () {\n      this.calculator.divide(this.operand);\n    };\n    return _this3;\n  }\n  return _createClass(MultiplyCommand);\n}(Command);\nvar DivideCommand = /*#__PURE__*/function (_Command4) {\n  _inherits(DivideCommand, _Command4);\n  var _super4 = _createSuper(DivideCommand);\n  function DivideCommand(calculator, operand) {\n    var _this4;\n    _classCallCheck(this, DivideCommand);\n    _this4 = _super4.call(this);\n    _this4.calculator = calculator;\n    _this4.operand = operand;\n    _this4.setParams = function (calc, opa) {\n      this.calculator = calc;\n      this.operand = opa;\n    };\n    _this4.execute = function () {\n      this.calculator.divide(this.operand);\n    };\n    _this4.unexecute = function () {\n      this.calculator.multiply(this.operand);\n    };\n    return _this4;\n  }\n  return _createClass(DivideCommand);\n}(Command);\nvar ExpCommand = /*#__PURE__*/function (_Command5) {\n  _inherits(ExpCommand, _Command5);\n  var _super5 = _createSuper(ExpCommand);\n  function ExpCommand(calculator, operand) {\n    var _this5;\n    _classCallCheck(this, ExpCommand);\n    _this5 = _super5.call(this);\n    _this5.calculator = calculator;\n    _this5.operand = operand;\n    _this5.setParams = function (calc, opa) {\n      this.calculator = calc;\n      this.operand = opa;\n    };\n    _this5.execute = function () {\n      this.calculator.exp(this.operand);\n    };\n    _this5.unexecute = function () {\n      this.calculator.cbrt(this.operand);\n    };\n    return _this5;\n  }\n  return _createClass(ExpCommand);\n}(Command);\nvar CbrtCommand = /*#__PURE__*/function (_Command6) {\n  _inherits(CbrtCommand, _Command6);\n  var _super6 = _createSuper(CbrtCommand);\n  function CbrtCommand(calculator, operand) {\n    var _this6;\n    _classCallCheck(this, CbrtCommand);\n    _this6 = _super6.call(this);\n    _this6.calculator = calculator;\n    _this6.operand = operand;\n    _this6.setParams = function (calc, opa) {\n      this.calculator = calc;\n      this.operand = opa;\n    };\n    _this6.execute = function () {\n      this.calculator.cbrt(this.operand);\n    };\n    _this6.unexecute = function () {\n      this.calculator.exp(this.operand);\n    };\n    return _this6;\n  }\n  return _createClass(CbrtCommand);\n}(Command);\nvar InvCommand = /*#__PURE__*/function (_Command7) {\n  _inherits(InvCommand, _Command7);\n  var _super7 = _createSuper(InvCommand);\n  function InvCommand(calculator) {\n    var _this7;\n    _classCallCheck(this, InvCommand);\n    _this7 = _super7.call(this);\n    _this7.execute = function () {\n      calculator.inv();\n    };\n    _this7.unexecute = function () {\n      calculator.inv();\n    };\n    return _this7;\n  }\n  return _createClass(InvCommand);\n}(Command);\nvar PercentCommand = /*#__PURE__*/function (_Command8) {\n  _inherits(PercentCommand, _Command8);\n  var _super8 = _createSuper(PercentCommand);\n  function PercentCommand(calculator, operand) {\n    var _this8;\n    _classCallCheck(this, PercentCommand);\n    _this8 = _super8.call(this);\n    _this8.calculator = calculator;\n    _this8.operand = operand;\n    _this8.setParams = function (calc, opa) {\n      this.calculator = calc;\n      this.operand = opa;\n    };\n    _this8.execute = function () {\n      return this.calculator.percent(this.operand);\n    };\n    _this8.unexecute = function () {\n      this.calculator.unpercent(this.operand);\n    };\n    return _this8;\n  }\n  return _createClass(PercentCommand);\n}(Command);\nvar SignChangeCommand = /*#__PURE__*/function (_Command9) {\n  _inherits(SignChangeCommand, _Command9);\n  var _super9 = _createSuper(SignChangeCommand);\n  function SignChangeCommand(calculator) {\n    var _this9;\n    _classCallCheck(this, SignChangeCommand);\n    _this9 = _super9.call(this);\n    _this9.execute = function () {\n      calculator.signChange();\n    };\n    _this9.unexecute = function () {\n      calculator.signChange();\n    };\n    return _this9;\n  }\n  return _createClass(SignChangeCommand);\n}(Command);\nvar ClearCommand = /*#__PURE__*/function (_Command10) {\n  _inherits(ClearCommand, _Command10);\n  var _super10 = _createSuper(ClearCommand);\n  function ClearCommand(calculator) {\n    var _this10;\n    _classCallCheck(this, ClearCommand);\n    _this10 = _super10.call(this);\n    _this10.execute = function () {\n      calculator.clear();\n    };\n    return _this10;\n  }\n  return _createClass(ClearCommand);\n}(Command);\nvar FactorialCommand = /*#__PURE__*/function (_Command11) {\n  _inherits(FactorialCommand, _Command11);\n  var _super11 = _createSuper(FactorialCommand);\n  function FactorialCommand(calculator) {\n    var _this11;\n    _classCallCheck(this, FactorialCommand);\n    _this11 = _super11.call(this);\n    _this11.execute = function () {\n      calculator.factorial();\n    };\n    return _this11;\n  }\n  return _createClass(FactorialCommand);\n}(Command);\nvar MemoryClearCommand = /*#__PURE__*/function (_Command12) {\n  _inherits(MemoryClearCommand, _Command12);\n  var _super12 = _createSuper(MemoryClearCommand);\n  function MemoryClearCommand(calculator) {\n    var _this12;\n    _classCallCheck(this, MemoryClearCommand);\n    _this12 = _super12.call(this);\n    _this12.calculator = calculator;\n    _this12.execute = function () {\n      calculator.memoryClear();\n    };\n    return _this12;\n  }\n  return _createClass(MemoryClearCommand);\n}(Command);\nvar MemorySaveCommand = /*#__PURE__*/function (_Command13) {\n  _inherits(MemorySaveCommand, _Command13);\n  var _super13 = _createSuper(MemorySaveCommand);\n  function MemorySaveCommand(calculator) {\n    var _this13;\n    _classCallCheck(this, MemorySaveCommand);\n    _this13 = _super13.call(this);\n    _this13.calculator = calculator;\n    _this13.execute = function () {\n      calculator.memorySave();\n    };\n    _this13.unexecute = function () {\n      calculator.memoryClear();\n    };\n    return _this13;\n  }\n  return _createClass(MemorySaveCommand);\n}(Command);\nvar MemoryPlusCommand = /*#__PURE__*/function (_Command14) {\n  _inherits(MemoryPlusCommand, _Command14);\n  var _super14 = _createSuper(MemoryPlusCommand);\n  function MemoryPlusCommand(calculator, value) {\n    var _this14;\n    _classCallCheck(this, MemoryPlusCommand);\n    _this14 = _super14.call(this);\n    _this14.calculator = calculator;\n    _this14.execute = function () {\n      calculator.memoryPlus(value);\n    };\n    _this14.unexecute = function () {\n      calculator.memoryMinus(value);\n    };\n    return _this14;\n  }\n  return _createClass(MemoryPlusCommand);\n}(Command);\nvar MemoryMinusCommand = /*#__PURE__*/function (_Command15) {\n  _inherits(MemoryMinusCommand, _Command15);\n  var _super15 = _createSuper(MemoryMinusCommand);\n  function MemoryMinusCommand(calculator, value) {\n    var _this15;\n    _classCallCheck(this, MemoryMinusCommand);\n    _this15 = _super15.call(this);\n    _this15.calculator = calculator;\n    _this15.execute = function () {\n      calculator.memoryMinus(value);\n    };\n    _this15.unexecute = function () {\n      calculator.memoryPlus(value);\n    };\n    return _this15;\n  }\n  return _createClass(MemoryMinusCommand);\n}(Command);\nvar MemoryReadCommand = /*#__PURE__*/function (_Command16) {\n  _inherits(MemoryReadCommand, _Command16);\n  var _super16 = _createSuper(MemoryReadCommand);\n  function MemoryReadCommand(calculator) {\n    var _this16;\n    _classCallCheck(this, MemoryReadCommand);\n    _this16 = _super16.call(this);\n    _this16.calculator = calculator;\n    _this16.execute = function () {\n      return this.calculator.memoryRead();\n    };\n    return _this16;\n  }\n  return _createClass(MemoryReadCommand);\n}(Command);\n\n//# sourceURL=webpack://task_5new/./src/Command.js?");

      /***/ }),



    /***/ './src/index.js':

    /*! **********************!*\

  !*** ./src/index.js ***!

  \********************* */

    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Command.js */ \"./src/Command.js\");\n/* harmony import */ var _Calculator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calculator.js */ \"./src/Calculator.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* eslint-disable import/extensions */\n// eslint-disable-next-line import/extensions, quotes\n\n\n\nvar calculator = new _Calculator_js__WEBPACK_IMPORTED_MODULE_1__.Calculator();\nvar input = document.getElementsByClassName('calculator__input')[0];\nvar calc = document.getElementsByClassName('calculator__body')[0];\ncalc.addEventListener('click', function (event) {\n  var button = event.target;\n  var buttonClass = button.className.split(' ')[1];\n  switch (buttonClass) {\n    case 'item1':\n      calculator.setValue(Number(input.value));\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.ExpCommand(calculator, 2));\n      calculator.command.execute();\n      input.value = calculator.getResult();\n      break;\n    case 'item2':\n      calculator.setValue(Number(input.value));\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.InvCommand(calculator));\n      calculator.command.execute();\n      input.value = calculator.getResult();\n      break;\n    case 'item3':\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.MemoryReadCommand(calculator));\n      input.value = calculator.command.execute();\n      break;\n    case 'item4':\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.ClearCommand(calculator));\n      calculator.command.execute();\n      input.value = '0';\n      calculator.changeFlag(false);\n      break;\n    case 'item5':\n      calculator.setValue(Number(input.value));\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.SignChangeCommand(calculator));\n      calculator.command.execute();\n      input.value = calculator.getResult();\n      break;\n    case 'item6':\n      if (calculator.getResult() === 0) {\n        calculator.percent(Number(input.value));\n        input.value = calculator.getResult();\n      } else {\n        input.value = calculator.percent(Number(input.value));\n      }\n      break;\n    case 'item7':\n      if (calculator.flag) {\n        calculator.command.setParams(calculator, Number(input.value));\n        calculator.command.execute();\n      } else {\n        calculator.setValue(Number(input.value));\n        calculator.changeFlag(true);\n      }\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.DivideCommand());\n      input.value = '0';\n      break;\n    case 'item8':\n      calculator.setValue(Number(input.value));\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.ExpCommand(calculator, 3));\n      calculator.command.execute();\n      input.value = calculator.getResult();\n      break;\n    case 'item9':\n      calculator.setValue(Number(input.value));\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.CbrtCommand(calculator, 2));\n      calculator.command.execute();\n      input.value = calculator.getResult();\n      break;\n    case 'item10':\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.MemoryPlusCommand(calculator, Number(input.value)));\n      calculator.command.execute();\n      input.value = '0';\n      break;\n    case 'item11':\n      if (input.value === '0') {\n        input.value = '7';\n      } else {\n        input.value += '7';\n      }\n      break;\n    case 'item12':\n      if (input.value === '0') {\n        input.value = '8';\n      } else {\n        input.value += '8';\n      }\n      break;\n    case 'item13':\n      if (input.value === '0') {\n        input.value = '9';\n      } else {\n        input.value += '9';\n      }\n      break;\n    case 'item14':\n      if (calculator.flag) {\n        calculator.command.setParams(calculator, Number(input.value));\n        calculator.command.execute();\n      } else {\n        calculator.setValue(Number(input.value));\n        calculator.changeFlag(true);\n      }\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.MultiplyCommand());\n      input.value = '0';\n      break;\n    case 'item15':\n      if (calculator.flag) {\n        calculator.command.setParams(calculator, Number(input.value));\n        calculator.command.execute();\n      } else {\n        calculator.setValue(Number(input.value));\n        calculator.changeFlag(true);\n      }\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.ExpCommand());\n      input.value = '0';\n      break;\n    case 'item16':\n      calculator.setValue(Number(input.value));\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.CbrtCommand(calculator, 3));\n      calculator.command.execute();\n      input.value = calculator.getResult();\n      break;\n    case 'item17':\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.MemoryMinusCommand(calculator, Number(input.value)));\n      calculator.command.execute();\n      input.value = '0';\n      break;\n    case 'item18':\n      if (input.value === '0') {\n        input.value = '4';\n      } else {\n        input.value += '4';\n      }\n      break;\n    case 'item19':\n      if (input.value === '0') {\n        input.value = '5';\n      } else {\n        input.value += '5';\n      }\n      break;\n    case 'item20':\n      if (input.value === '0') {\n        input.value = '6';\n      } else {\n        input.value += '6';\n      }\n      break;\n    case 'item21':\n      if (calculator.flag) {\n        calculator.command.setParams(calculator, Number(input.value));\n        calculator.command.execute();\n        input.value = '0';\n      } else if (input.value === '0') {\n        input.value = '-';\n      } else {\n        calculator.setValue(Number(input.value));\n        calculator.changeFlag(true);\n        input.value = '0';\n      }\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.SubtractCommand());\n      break;\n    case 'item22':\n      calculator.setValue(Number(input.value));\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.FactorialCommand(calculator));\n      calculator.command.execute();\n      input.value = calculator.getResult();\n      break;\n    case 'item23':\n      if (calculator.flag) {\n        calculator.command.setParams(calculator, Number(input.value));\n        calculator.command.execute();\n      } else {\n        calculator.setValue(Number(input.value));\n        calculator.changeFlag(true);\n      }\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.CbrtCommand());\n      input.value = '0';\n      break;\n    case 'item24':\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.MemoryClearCommand(calculator));\n      calculator.command.execute();\n      break;\n    case 'item25':\n      if (input.value === '0') {\n        input.value = '1';\n      } else {\n        input.value += '1';\n      }\n      break;\n    case 'item26':\n      if (input.value === '0') {\n        input.value = '2';\n      } else {\n        input.value += '2';\n      }\n      break;\n    case 'item27':\n      if (input.value === '0') {\n        input.value = '3';\n      } else {\n        input.value += '3';\n      }\n      break;\n    case 'item28':\n      if (calculator.flag) {\n        calculator.command.setParams(calculator, Number(input.value));\n        calculator.command.execute();\n      } else {\n        calculator.setValue(Number(input.value));\n        calculator.changeFlag(true);\n      }\n      calculator.pushCommand(new _Command_js__WEBPACK_IMPORTED_MODULE_0__.AddCommand());\n      input.value = '0';\n      break;\n    case 'item29':\n      document.getElementsByClassName('.calulator')[0];\n      break;\n    case 'item30':\n      if (input.value !== '0') {\n        input.value += '0';\n      }\n      break;\n    case 'item31':\n      input.value += '.';\n      break;\n    case 'item32':\n      if (calculator.flag) {\n        calculator.command.setParams(calculator, Number(input.value));\n        calculator.command.execute();\n        input.value = calculator.getResult();\n        calculator.changeFlag(false);\n      }\n      break;\n    default:\n      break;\n  }\n});\ndocument.addEventListener('keydown', function (event) {\n  var key = event.key;\n  switch (key) {\n    case '1':\n      if (input.value === '0') {\n        input.value = '1';\n      } else {\n        input.value += '1';\n      }\n      break;\n    case '2':\n      if (input.value === '0') {\n        input.value = '2';\n      } else {\n        input.value += '2';\n      }\n      break;\n    case '3':\n      if (input.value === '0') {\n        input.value = '3';\n      } else {\n        input.value += '3';\n      }\n      break;\n    case '4':\n      if (input.value === '0') {\n        input.value = '4';\n      } else {\n        input.value += '4';\n      }\n      break;\n    case '5':\n      if (input.value === '0') {\n        input.value = '5';\n      } else {\n        input.value += '5';\n      }\n      break;\n    case '6':\n      if (input.value === '0') {\n        input.value = '6';\n      } else {\n        input.value += '6';\n      }\n      break;\n    case '7':\n      if (input.value === '0') {\n        input.value = '7';\n      } else {\n        input.value += '7';\n      }\n      break;\n    case '8':\n      if (input.value === '0') {\n        input.value = '8';\n      } else {\n        input.value += '8';\n      }\n      break;\n    case '9':\n      if (input.value === '0') {\n        input.value = '9';\n      } else {\n        input.value += '9';\n      }\n      break;\n    case '0':\n      if (input.value !== '0') {\n        input.value += '0';\n      }\n      break;\n    case '.':\n      input.value += '.';\n      break;\n    default:\n      break;\n  }\n});\n\n//# sourceURL=webpack://task_5new/./src/index.js?");

      /***/ }),



    /***/ './src/styles.css':

    /*! ************************!*\

  !*** ./src/styles.css ***!

  \*********************** */

    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      eval('__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://task_5new/./src/styles.css?');

      /***/ }),



    /** *** */ 	});

  /** ********************************************************************* */

  /** *** */ 	// The module cache

  /** *** */ 	const __webpack_module_cache__ = {};

  /** *** */

  /** *** */ 	// The require function

  /** *** */ 	function __webpack_require__(moduleId) {

    /** *** */ 		// Check if module is in cache

    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];

    /** *** */ 		if (cachedModule !== undefined) {

      /** *** */ 			return cachedModule.exports;

      /** *** */ 		}

    /** *** */ 		// Create a new module (and put it into the cache)

    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {

      /** *** */ 			// no module.id needed

      /** *** */ 			// no module.loaded needed

      /** *** */ 			exports: {},

      /** *** */ 		};

    /** *** */
    /** *** */ 		// Execute the module function

    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    /** *** */
    /** *** */ 		// Return the exports of the module

    /** *** */ 		return module.exports;

    /** *** */ 	}

  /** *** */
  /** ********************************************************************* */

  /** *** */ 	/* webpack/runtime/define property getters */

  /** *** */ 	(() => {

    /** *** */ 		// define getter functions for harmony exports

    /** *** */ 		__webpack_require__.d = (exports, definition) => {

      /** *** */ 			for (const key in definition) {

        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {

          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });

          /** *** */ 				}

        /** *** */ 			}

      /** *** */ 		};

    /** *** */ 	})();

  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */

  /** *** */ 	(() => {

    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));

    /** *** */ 	})();

  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */

  /** *** */ 	(() => {

    /** *** */ 		// define __esModule on exports

    /** *** */ 		__webpack_require__.r = (exports) => {

      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {

        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

        /** *** */ 			}

      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });

      /** *** */ 		};

    /** *** */ 	})();

  /** *** */
  /** ********************************************************************* */

  /** *** */
  /** *** */ 	// startup

  /** *** */ 	// Load entry module and return exports

  /** *** */ 	// This entry module can't be inlined because the eval devtool is used.

  /** *** */ 	const __webpack_exports__ = __webpack_require__('./src/index.js');

/** *** */

/** *** */ })();

