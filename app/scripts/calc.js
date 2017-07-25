! function (global) {
  'use strict';

  function Calc() {
    this._reslut = ''
    this._cache = ''
    this.BTNS_ID = 'btns'
    this.RESULT_ID = 'result'
    this.point = true
    this.symbol = ''
    this._init()
  }
  Calc.prototype._init = function () {
    var self = this
    document.getElementById(this.BTNS_ID).addEventListener('click', function (e) {
      if (e.target.nodeName === 'LI') {
        self.save(e.target.innerHTML)
      }
    }, false)
  }
  Calc.prototype.save = function (str) {
    str = str.toLocaleUpperCase()
    if (/^\d+$/.test(str)) {
      // 输入数字
      if (this._cache !== '0') {
        this._cache += str
      } else {
        this._cache = 0
      }
      this.show(this._cache)
    } else if (/\./.test(str)) {
      // 输入小数点
      if (this.point) {
        this.point = false
        this._cache += str
      }
      this.show(this._cache)
    } else if (str === 'BACKSPACE') {
      // 输入退格
      if (this._cache.length > 0) {
        this._cache = this._cache.substr(0, this._cache.length - 1)
      } else {
        this._cache = ''
      }
      this.show(this._cache)
    } else if (str === 'C') {
      // 输入重置
      this._cache = ''
      this._reslut = 0
      this.show(this._cache)
    } else {
      // 计算符
      this.symbol = str
      this.method(this._cache, this.symbol)
    }
  }
  Calc.prototype.show = function (str) {
    document.getElementById(this.RESULT_ID).value = str === '' ? '0' : str
  }
  Calc.prototype.method = function (cache, symbol) {
    cache = Number(cache)
    console.log(symbol)
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
        case '×²':
          this._reslut = cache * cache
          this._cache = this._reslut
          break
        default:
      }
    } else {
      this._reslut = cache
    }
    this.show(this._reslut)
  }
  global.calc = new Calc()
}(window)
