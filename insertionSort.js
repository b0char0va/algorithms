//pseudocode
	//function insertionSort(array) 
	  // Loop through array
	  //   Create temp var for current element
	  //   Create var and set equal to previous element's index
	  //   Loop backwards while index >= 0 and current element > temp var
	  //     Set next element equal to current element
	  //   Set next element equal to temp 

// const insertionSort = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//     	let temp = arr[i];
//     	let j = i-1;
//         for(; j >= 0 && arr[j] > temp; j--) {
//         	arr[j+1] = arr[j];
//         }
//         arr[j+1] = temp;
//     }    
//     return arr;
// };

// console.log(insertionSort([6,1,3,5,2,4,9]));






const insertionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let temp = arr[i];
		let j = i - 1;
		while(j >= 0 && arr[j] < temp) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = temp;
	}
	return arr;
}

console.log(insertionSort([31, 41, 59, 26, 41, 58]));















