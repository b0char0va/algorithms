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
	recursiveDepthFirstSearch(val) {
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
	breadthFirstSearch(val) {
		if(this.root === null) {
			return [];
		}
		let queue = [this.root];
		while(queue.length > 0) {
			let currentNode = queue[0];
			if(currentNode.value === val) {
				return currentNode;
			}
			if(currentNode.left !== null) {
				queue.push(currentNode.left);
			} 
			if(currentNode.right !== null) {
				queue.push(currentNode.right);
			}
			queue.shift();
		}
		return null;
	}
	depthFirstSearch(val) {
		if(this.root === null) {
			return [];
		}
		let stack = [this.root];
		let result = [this.root.value];
		while(stack.length > 0) {
			let currentNode = stack.pop();
			if(currentNode.value === val) {
				return currentNode;
			}
			if(currentNode.right !== null) {
				stack.push(currentNode.right);
			} 
			if(currentNode.left !== null) {
				stack.push(currentNode.left);
			}
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
console.log(tree.breadthFirstSearch(5));
console.log(tree.depthFirstSearch(2));
console.log(tree.recursiveDepthFirstSearch(10));