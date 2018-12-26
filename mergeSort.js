const mergeSort = (arr) => {
	if(arr.length === 1) {
		return arr;
	}
	let middle = Math.floor(arr.length/2);
	let arrOne = arr.slice(0, middle);
	let arrTwo = arr.slice(middle, arr.length);

	arrOne = mergeSort(arrOne);
	arrTwo = mergeSort(arrTwo);
	return merge(arrOne, arrTwo);
}

const merge = (left, right) => {
	let merged = [];
	while(left.length > 0 && right.length > 0) {
		if(left[0] < right[0]) {
			merged.push(left[0]);
			left.shift();
		} else if (left[0] > right[0]) {
			merged.push(right[0]);
			right.shift();
		} 
	}
	while(left.length > 0) {
		merged.push(left[0]);
		left.shift();
	}
	while(right.length > 0) {
		merged.push(right[0]);
		right.shift();
	}
	return merged;
}

console.log(mergeSort([2,5,3,8,1,6,9]));