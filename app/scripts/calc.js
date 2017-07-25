! function (global) {
  'use strict';

  function Calc() {
    this._reslut = ''
    this._cache = ''
    this.BTNS_ID = 'btns'
    this.RESULT_ID = 'result'
    this.point = true
    this.NUM_LOCK = false
    this.symbol = ''
    this._init()
  }
  Calc.prototype._init = function () {
    var self = this
    document.getElementById(this.BTNS_ID).addEventListener('click', function (e) {
      if (e.target.nodeName === 'LI') {
        // 判断类型 并根据不同类型做不同动作
        self.switchType(self.typeof(e.target.innerHTML), e.target.innerHTML)
      }
    }, false)
  }
  Calc.prototype.switchType = function (state, str) {
    switch (state) {
      case 'NUMBER':
        // 输入数字
        if (this._cache !== '0') {
          this._cache += str
        } else {
          this._cache = ''
        }
        this.show(this._cache)
        break;
      case 'POINT':
        // 输入小数点
        if (this._cache === '') {
          this._cache = '0'
        }
        if (this.point) {
          this.point = false
          this._cache += str
        }
        this.show(this._cache)
        break;
      case 'BACKSPACE':
        // 输入退格
        if (this._cache.length > 0) {
          this._cache = this._cache.substr(0, this._cache.length - 1)
        } else {
          this._cache = ''
        }
        this.show(this._cache)
        break;
      case 'RZ':
        // 输入重置
        this._cache = ''
        this._reslut = 0
        this.point = true
        this.symbol = ''
        this.show(this._cache)
        break;
      case 'LOW_LEVEL':
        // 低阶计算符
        this.symbol = str
        this.method_low(str)
        this.show(this._reslut)
        break;
      case 'HIGH_LEVEL':
        // 高阶计算符
        this.symbol = str
        this.method_high(str)
        this.show(this._reslut)
        break;
      case 'RESULT':
        this.method_low(this.symbol)
        this.show(this._reslut)
    }
  }
  Calc.prototype.method_low = function (symbol) {
    var cache = Number(this._cache)
    if (this._reslut !== '') {
      switch (symbol) {
        case '+':
          this._reslut = this._reslut + cache
          this._cache = ''
          break
        case '-':
          this._reslut = this._reslut - cache
          this._cache = ''
          break
        case '×':
          this._reslut = this._reslut * cache
          this._cache = ''
          break
        case '÷':
          this._reslut = this._reslut / cache
          this._cache = ''
          break
        default:
      }
    } else {
      this._reslut = cache
      this._cache = ''
    }
  }
  Calc.prototype.method_high = function (symbol) {
    var cache = Number(this._cache)
    switch (symbol) {
      case '×²':
        this._reslut = cache * cache
        this._cache = this._reslut
        break
      case '√':
        this._reslut = Math.sqrt(cache)
        this._cache = this._reslut
        break
      case '+/-':
        this._reslut = -cache
        this._cache = ''
        break
      case '%':
        this._reslut = cache / 100
        this._cache = ''
        break
      default:
    }
  }
  Calc.prototype.show = function (str) {
    document.getElementById(this.RESULT_ID).value = str === '' ? '0' : str
  }
  Calc.prototype.typeof = function (str) {
    str = str.toLocaleUpperCase()
    if (/^\d+$/.test(str)) {
      return 'NUMBER'
    }
    if (/\./.test(str)) {
      return 'POINT'
    }
    if (str === 'BACKSPACE') {
      return 'BACKSPACE'
    }
    if (str === 'C') {
      return 'RZ'
    }
    if (/\×²|√|%|(\+\/-)/.test(str)) {
      return 'HIGH_LEVEL'
    }
    if (/\+|-|×|÷/.test(str)) {
      return 'LOW_LEVEL'
    }
    if (str === '=') {
      return 'RESULT'
    }
  }
  global.calc = new Calc()
}(window)
