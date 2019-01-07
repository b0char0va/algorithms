class Queue {
	constructor() {
		this.items = [];
	}
	enqueue(item) {
		this.items.push(item);
	}
	dequeue() {
		if(this.items.length === 0) {
			return 'underflow';
		}
		this.items.shift();
	}
}

let queue = new Queue;
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
console.log(queue);