window.onload = function() {
	var calculator = document.getElementById('calculator');
	var resultInput = document.getElementById('result');
	var resultInputValue = document.getElementById('result').value;
	var numBtn = calculator.getElementsByClassName('num');
	var clearBtn = document.getElementById('clear');
	var backBtn = document.getElementById('back');
	var equalBtn = document.getElementById('equal');
	var addBtn = document.getElementById('add');
	var subtractBtn = document.getElementById('subtract');
	var pointBtn = document.getElementById('point');
	var minusBtn = document.getElementById('minus');
	var result = 0;

	resultShow(0);
	resultInputValue = '0';

	// 数字输入
	for (var i = 0; i < numBtn.length; i++) {
		(function(i) {
			numBtn[i].onclick = function() {

				if (resultInputValue === '0') {
					resultInputValue = '';
					resultInputValue += this.innerText;
					resultShow(resultInputValue);
				} else {
					resultInputValue += this.innerText;
					resultShow(resultInputValue);
				}
			}
		})(i);
	}


	function parse(str) {
		if (str.indexOf('.') > 0) {
			return parseFloat(str);
		} else {
			return parseInt(str);
		}
	}


	// 清空按钮
	clearBtn.onclick = function() {
		clear();
	}

	// 回退按钮
	backBtn.onclick = function() {

		if (resultInputValue.length > 1) {
			backspace();
		} else if (resultInputValue === '0') {
			return false;
		} else if (resultInputValue.length == 1) {
			resultShow(0);
			resultInputValue = '0';
			return false;
		}

	}

	// 取反
	minusBtn.onclick = function() {
			minus();
		}
		// 加法
	addBtn.onclick = function() {
		add();
		this.Switch = true;
	}

	// 减法
	subtractBtn.onclick = function() {
		subtract();
		this.Switch = true;
	}

	// 等于按钮
	equalBtn.onclick = function() {
		if (addBtn.Switch === true) {
			add();
			addBtn.Switch = false;
		} else if (subtractBtn.Switch === true) {
			subtract();
			subtractBtn.Switch = false;
		}
	}

	function minus() {
		result = -resultInputValue;
		resultInputValue = String(-parse(resultInputValue));
		resultShow(result);
	}
	// 加法
	function add() {
		result += parse(resultInputValue);
		resultInputValue = '0';
		resultShow(result);
	}
	// 减法
	function subtract() {
		// result = result - parse(resultInputValue);
		resultInputValue = '0';
		resultShow(result);
	}

	// 回退按钮方法
	function backspace() {
		var val = resultInputValue.substr(0, resultInputValue.length - 1);
		if (val === '') {
			resultShow(0);
			result = 0;
			resultInputValue = 0;
		} else if (val === '0') {
			return false;
		} else {
			resultShow(val);
			result = parse(val);
			resultInputValue = val;
		}
	}

	// 清空按钮方法
	function clear() {
		resultShow(0);
		result = 0;
		resultInputValue = '0';
	}

	// 结果显示方法
	function resultShow(num) {
		if (num === 0) {
			num = 0;
			resultInput.value = num;
			result = 0;
		} else if (String(num).substr(0, 1) == '0') {
			num = num.substr(1);
			resultInput.value = num;
		} else {
			resultInput.value = num;
		}
	}
}