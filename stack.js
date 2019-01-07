class Stack {
	constructor () {
		this.items = []
	}
	push(item) {
		this.items.push(item);
	}
	pop(item) {
		if(this.items.length === 0) {
			return 'undeflow';
		}
		this.items.pop();
	}
}

let stack = new Stack;
stack.push(12);
stack.push(15);
stack.pop();
console.log(stack);