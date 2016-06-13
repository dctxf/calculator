document.addEventListener('DOMContentLoaded', function() {
	var numBtns = document.getElementsByClassName('num');
	var resultShow = document.getElementById('result');
	var addBtn = document.getElementById('add');
	var str = 0;
	var arr = [0];


	/**
	 * 事件绑定
	 */

	// 数字输入
	for (var i = 0; i < numBtns.length; i++) {
		// console.log(numBtns[i]);
		!(function(i) {
			numBtns[i].onclick = function() {
				str += this.innerText;
				show(str);
			}
		})(i);
	}

	// 加法
	addBtn.onclick = function() {
		add(str);
	}

	/**
	 * 方法
	 */

	// 结果显示和输入处理
	function show(str) {
		str = Number(str);
		resultShow.value = str;
	}

  function init(){
    str = 0;
  }

	// 加法
	function add(str) {
		arr.push(Number(str));
		for (var i = 0; i < arr.length; i++) {
			arr[0] += arr[i];
		}
    str = arr[0];
    show(str);
		console.log(arr);
	}

});