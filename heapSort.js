const heapSort = (arr) => {
	buildMaxHeap(arr, arr.length);
	let n = arr.length;
	for(let i = n-1; i >= 0; i--) {
		let temp = arr[i];
		arr[i] = arr[0];
		arr[0] = temp;
		heapify(arr, 0, i);
	}
	return arr;
}

const buildMaxHeap = (arr, n) => {
	for(i = Math.floor(n/2) -1; i >= 0; i--) {
		heapify(arr, i, n);
	}
}

const heapify = (arr, i, n) => {
	let left = 2*i+1;
	let right = 2*i+2;
	let max = i;
	if(left < n && arr[left] > arr[i]) {
		max = left;
	}
	if(right < n && arr[right] > arr[max]) {
		max = right;
	}
	if(max !== i) {
		let temp = arr[i];
		arr[i] = arr[max];
		arr[max] = temp;
		heapify(arr, max, n);
	}
}

console.log(heapSort([2,9,3,1,5,7,6]));