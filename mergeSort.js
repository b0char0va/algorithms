//pseudocode
	//function mergeSort(array)
		//if array length is 1 then return array (recursion base condition)
		//divide the array in two parts
		//create two arrays a[0].... a[n/2] and a[n/2+1]...a[n]
		// call mergeSort on both arrays
		//call merge function on both arrays
	//function merge(leftpart, rightpart)
		// create an empty array to store merged array elements
		// while left and right have elements
			// if left[0] < right[0]
				//add left[0] to merged array
				//remove left[0] from left
			// if right[0] > left[0]
				// add right[0] to merged array
				//remove right[0] from right
		// at this point either one of them must have exhausted elements so
		// while left has elements
			// add left[0] to merged array
			// remove left[0] from left
		// while right has elements
			// add right[0] to merged array
			// remove right[0] from right
		//return merged array

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