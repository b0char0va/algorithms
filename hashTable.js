class Node {
	constructor(key,val) {
		this[key] = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
}

class hashTable {
	constructor(size) {
		this.value = {};
		this.size = size || 20;
		this.numberOfValues = 0;
	}
	
	calculateHash(key) {
		let hash = 5381;
		for (let i = 0; i < key.length; i++) {
			let ascii = key.charCodeAt(i);
			hash = ((hash << 5) + hash) + ascii;
		}
		return (hash & ~(1 << 31)).toString(16);
	}

	add(key, value) {
		let hash = this.calculateHash(key);
		if(!this.value[hash]) {
			if(this.numberOfValues === this.size) {
				return;
			}
			this.value[hash] = new LinkedList;
		} 
		let node = new Node(key, value);
		let current = this.value[hash];
		if(current.head === null) {
			current.head = node;
			current.tail = node;
		} else {
			let current = this.value[hash].head;
			while(current) {
				if(current[key]) {
					current[key] = value;
					console.log(current);
					return;
				}
				current = current.next;
			}
			current.tail.next = node;
			current.tail = node;
		}
		this.numberOfValues++;
		current.size++;
	}

	search(key) {
		let hash = this.calculateHash(key);
		if(!this.value[hash]) {
			return null;
		} else {
			let current = this.value[hash].head;
			while(current) {
				if(current[key]) {
					return current[key];
				}
				current = current.next;
			}
			return null;
		}
	}

	remove(key) {
		let hash = this.calculateHash(key);
		if(!this.value[hash]) {
			return null;
		} else {
			let current = this.value[hash].head;
			let previous = this.value[hash].head;
			while(current) {
				if(current[key]) {
					if (current === this.value[hash].head && current === this.value[hash].tail) {
						delete this.value[hash];
						this.size--;
						return;
					} else if (current === this.value[hash].head) {
						this.value[hash].head = current.next;
					} else if (current === this.value[hash].tail) {
							this.value[hash].tail = previous;
					}
				}
				previous.next = current.next;
				this.value[hash].size--;
			}
			previous = current;
			current = current.next;
		}
	}
}

let table = new hashTable(4);
console.log(table);

