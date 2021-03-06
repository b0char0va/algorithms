class Node {
	constructor(val){
		this.value = val;
		this.next = null;
	}
}
class LinkedList{
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	add(val) {
		let node = new Node(val);
		if(this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
	}
	remove(val) {
		if(this.head === null) {
			return null;
		} 
		let current = this.head;
		let prev = this.head;
		while(current) {
			if(current.value === val) {
				if(current === this.head) {
					this.head = this.head.next;
				} 
				if (current === this.tail) {
					if(this.head === null) {
						this.tail = null;
					} else {
						this.tail = prev;
					}
				}
				prev.next = current.next;
				this.size--;
			}
			prev = current;
			current = current.next;
		}
	}
	traverse(callback) {
		let current = this.head;
		while(current) {
			callback(current);
			current = current.next;
		}
	}
	print() {
		let string = '';
		let current = this.head;
		while(current) {
			string += current.value + ' ';
			current = current.next;
		}
		console.log(string.trim());
	}
}


let list = new LinkedList;
list.add(5);
list.add(6);
list.add(7);
// list.remove(5);
// list.remove(7);
// list.remove(6);
// list.traverse((node) => { return node.value*=2;});
list.print();
// console.log(list);