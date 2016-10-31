window.onload = function() {
	'use strict';

	/**
	 * 说明
	 * dispaly 结果显示器
	 * calculate 计算方法
	 * matching 按钮判断及相关逻辑
	 */

	/*初始化定义*/
	var cache = [];
	var operation = false;

	/*计算方法*/
	var calculate = function() {
		var btns = document.getElementById('btns').getElementsByTagName('li');
		var btnsLength = btns.length;
		for (var i = 0; i < btnsLength; i++) {
			(function(i) {
				btns[i].onclick = function() {
					matching(this);
				}
			})(i)
		}
	}

	/*按钮判断及相关逻辑*/
	var matching = function(obj) {
		var str = obj.innerText;
		var display = document.getElementById('result');

		switch (str) {
			case 'C':
				console.log('归零');
				calculator.zero(display, cache);
				cache = [];
				break;
			case '+/-':
				console.log('取反');
				calculator.isNot(display, display.value);
			case '%':
				console.log('百分转换');
				calculator.percentage(display, display.value);
				break;
			case 'backspace':
				console.log('退格');
				calculator.backspace(display);
				break;
			case '1':
				input(display, '1');
				break;
			case '2':
				input(display, '2');
				break;
			case '3':
				input(display, '3');
				break;
			case '4':
				input(display, '4');
				break;
			case '5':
				input(display, '5');
				break;
			case '6':
				input(display, '6');
				break;
			case '7':
				input(display, '7');
				break;
			case '8':
				input(display, '8');
				break;
			case '9':
				input(display, '9');
				break;
			case '0':
				input(display, '0');
				break;
			case '.':
				input(display, '.');
				break;
			case '+':
				calculator.add(display, cache);
				operation = true;
				break;
			case '-':
				calculator.subtraction(display, cache);
				operation = true;
				break;
			case '*':
				calculator.multiplication(display, cache);
				operation = true;
				break;
			case '÷':
				calculator.division(display, cache);
				operation = true;
				break;
			case '×²':
				calculator.square(display, cache);
				operation = true;
				break;
			case '+/-':
				calculator.isNot(display, cache);
				operation = true;
				break;
			case '√':
				calculator.prescribing(display, cache);
				operation = true;
				break;
			case '%':
				calculator.percentage(display, cache);
				operation = true;
				break;
		}
	}

	var input = function(ele, str) {
		if (operation) {
			if (ele.value === '0' && str !== '.') {
				ele.value = str;
			} else if (ele.value.indexOf('.') >= 0 && str === '.') {
				ele.value = ele.value;
			} else {
				ele.value = str;
			}
			operation = false;
		} else {
			if (ele.value === '0' && str !== '.') {
				ele.value = str;
			} else if (ele.value.indexOf('.') >= 0 && str === '.') {
				ele.value = ele.value;
			} else {
				ele.value += str;
			}
		}

	}

	/*方法调用*/
	calculate();
}