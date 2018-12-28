class Node {
	constructor(val){
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		let node = new Node(val);
		if(this.root === null) {
			this.root = node;
		} else {
			this.insertNode(this.root, node);
		}
	}
	insertNode(node, newNode) {
		if(node.value > newNode.value) {
			if(node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else if(node.value < newNode.value) {
			if(node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}
	search(val) {
		if (this.root === null) {
			return null;
		} else {
			let helper = (node) => {
				if(node.value === val) {
					return true;
				} else if(node.value > val && node.left !== null) {
					return helper(node.left);
				} else if (node.value < val && node.right !== null) { 
					return helper(node.right);
				}
				return false;
			}
			return helper(this.root);
		}
	}
	breadthFirstTraverse() {
		if(this.root === null) {
			return [];
		}
		let result = [this.root.value];
		let queue = [this.root];
		while(queue.length > 0) {
			let currentNode = queue[0];
			if(currentNode.left !== null) {
				result.push(currentNode.left.value);
				queue.push(currentNode.left);
			} 
			if(currentNode.right !== null) {
				result.push(currentNode.right.value);
				queue.push(currentNode.right);
			}
			queue.shift();
		}
		return result;
	}
}

let tree = new Tree();
tree.insert(6);
tree.insert(2);
tree.insert(5);
tree.insert(8);
tree.insert(9);
console.log(tree.breadthFirstTraverse());
console.log(tree.search(10));