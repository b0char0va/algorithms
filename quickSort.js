// with first item as pivot

const quickSort = (arr) => {
	if(arr.length < 2) {
		return arr;
	}
	let pivot = arr[0];
	let lesser = [];
	let greater = [];
	for(let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			lesser.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}
	return quickSort(lesser).concat(pivot, quickSort(greater));
}

console.log(quickSort([1,4,2,6,7,8]));