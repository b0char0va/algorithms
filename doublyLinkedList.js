class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
		this.prev = null;
	}
}
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	insert(val) {
		let node = new Node(val);
		if(this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
	}
	remove(val) {
		let current = this.head;
		let previous = this.head;
		while(current) {
			if(current.value === val) {
				if(current === this.head) {
					if(this.head === this.tail) {
						this.head = null;
						this.tail = null;
					} else {
						this.head = this.head.next;
						this.head.prev = null;
					}
				}
				if(current === this.tail) {
					this.tail = this.tail.prev;
					this.tail.next = null;
				}
				previous.next = current.next;
				this.size--;
			}
				previous = current;
				current = current.next;
		}
	}
	traverse(callback) {
		let current = this.head;
		while(current) {
			callback(callback);
			current = current.next;
		}
	}
	reverseTraverse(callback) {
		let current = this.tail;
		while(current) {
			callback(current);
			current = current.prev;
		}
	}
}

let doublyLL = new DoublyLinkedList;
doublyLL.insert(4);
doublyLL.insert(8);
doublyLL.insert(9);
// doublyLL.remove(9);
// doublyLL.remove(8);
// doublyLL.remove(4);
doublyLL.reverseTraverse((node) => { return node.value*=2;});
console.log(doublyLL);