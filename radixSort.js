const radixSort = (arr) => {
	let max = arr[0];
	arr.forEach((el) => {
		if(el > max) {
			max = el;
		}
	})
	let l = max.toString().length;
	for(let i = 0; i < arr.length; i++) {
		arr[i] = '' + arr[i];
		while(arr[i].length < l) {
			arr[i] = ('0').concat(arr[i]);
		}
	}
	return helper(arr, l-1);
}

let helper = (arr, l) => {
	if(l < 0) {
		return arr;
	}
	let obj = {};
	for(let i = 0; i < arr.length; i++) {
		if(!obj[arr[i][l]]) {
			obj[arr[i][l]] = [arr[i]];
		} else {
			obj[arr[i][l]].push(arr[i]);
		}
	}
	arr = [];
	for(let i = 0; i <= 9; i++) {
		if(obj[i]) {
			arr = arr.concat(obj[i]);
		}
	}
	return helper(arr, l-1);
}

console.log(radixSort([1,4,2,6,7,8]));
console.log(radixSort([60,50,15,10,5,100]));