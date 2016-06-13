(function(window, document) {
	'use strict';
	var calculator = {
		zero: function(ele) {
			return ele.value = 0;
		},
		add: function(ele, cache) {
			if (cache.length === 0) {
				cache.push(Number(ele.value));
				ele.value = cache[0];
				return cache;
			} else if (cache.length === 1) {
				cache.push(Number(ele.value));
				ele.value = cache[0] + cache[1];
				return cache;
			} else {
				cache[0] = cache[0] + cache[1];
				cache[1] = Number(ele.value);
				ele.value = cache[0] + cache[1];
				return cache;
			}
		},
		subtraction: function(ele, cache) {
			if (cache.length === 0) {
				cache.push(Number(ele.value));
				ele.value = cache[0];
				return cache;
			} else if (cache.length === 1) {
				cache.push(Number(ele.value));
				ele.value = cache[0] - cache[1];
				return cache;
			} else {
				cache[0] = cache[0] - cache[1];
				cache[1] = Number(ele.value);
				ele.value = cache[0] - cache[1];
				return cache;
			}
		},
		multiplication: function(ele, cache) {
			if (cache.length === 0) {
				cache.push(Number(ele.value));
				ele.value = cache[0];
				return cache;
			} else if (cache.length === 1) {
				cache.push(Number(ele.value));
				ele.value = cache[0] * cache[1];
				return cache;
			} else {
				cache[0] = cache[0] * cache[1];
				cache[1] = Number(ele.value);
				ele.value = cache[0] * cache[1];
				return cache;
			}
		},
		division: function(ele, cache) {
			if (cache.length === 0) {
				cache.push(Number(ele.value));
				ele.value = cache[0];
				return cache;
			} else if (cache.length === 1) {
				cache.push(Number(ele.value));
				ele.value = cache[0] / cache[1];
				return cache;
			} else {
				cache[0] = cache[0] / cache[1];
				cache[1] = Number(ele.value);
				ele.value = cache[0] / cache[1];
				return cache;
			}
		},
		square: function(ele, cache) {
			cache[0] = Number(ele.value) * Number(ele.value);
			ele.value = cache[0];
			return cache;
		},
		isNot: function(ele, cache) {
			cache[0] = -Number(ele.value);
			ele.value = cache[0];
			return cache;
		},
		prescribing: function(ele, cache) {
			cache[0] = Math.sqrt(Number(ele.value));
			ele.value = cache[0];
			return cache;
		},
		percentage: function(ele, cache) {
			cache[0] = Number(ele.value) * 0.01;
			ele.value = cache[0];
			return cache;
		},
		backspace: function(ele) {
			if (typeof ele.value === 'number') {
				var length = String(ele.value).length;
				ele.value = String(ele.value);
				if (length === 1 && ele.value !== '0') {
					return ele.value = '0';
				} else if (ele.value === '0' || ele.value === 0) {
					return ele.value = '0';
				} else {
					return ele.value = ele.value.substr(0, length - 1);
				}
			} else if (typeof ele.value === 'string') {
				var length = ele.value.length;
				if (length === 1 && ele.value !== '0') {
					return ele.value = '0';
				} else if (ele.value === '0' || ele.value === 0) {
					return ele.value = '0';
				} else {
					return ele.value = ele.value.substr(0, length - 1);
				}
			}
		}
	};
	window.calculator = calculator;
})(window, document);