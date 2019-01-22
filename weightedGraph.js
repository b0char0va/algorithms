// A weighted directed graph
class Graph {
	constructor() {
		this.adjList = new Map();
	}
	addVertex(v) {
		this.adjList.set(v, {}); 
	}
	addEdge(v1,v2,weight) {
		this.adjList.get(v1)[v2] = weight;
	}
	findSmallest(dist, q) {
		let min = Infinity;
		let minNode;
		for(let key in q) {
			if (dist[key] <= min) {
				min = dist[key];
				minNode = key;
			}
		}
		delete q[minNode];
		return minNode;
	}
	shortestPath(source) {
		var dist = {};
		var prev = {};
		var q = {};
		var paths = {};

		for (let vertex of this.adjList.keys()) {
			dist[vertex] = Infinity;
			prev[vertex] = null;
			q[vertex] = this.adjList.get(vertex);
			paths[vertex] = [];
		}
		dist[source] = 0;

		while(Object.keys(q).length !== 0) {
			let smallest = this.findSmallest(dist, q);
			let edges = this.adjList.get(smallest);
			for(let key in edges) {
				let totalCost = dist[smallest] + edges[key];
				if(totalCost < dist[key]) {
					dist[key] = totalCost;
					prev[key] = smallest;
				}
			}
		}

		this.printPaths(prev, paths, source);
		return paths;
	}

	printPaths(linkData, shortestPaths) {
		for(let key in shortestPaths) {
			let vertex = key;
			while(true) {
				if(linkData[vertex] === null) {
					break;
				}
				shortestPaths[key].push(linkData[vertex]);
				vertex = linkData[vertex];
			}
		}
	}
}

let graph = new Graph;
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A','B',3);
graph.addEdge('B','C',4);
graph.addEdge('B','D',7);
graph.addEdge('D','E',5);
graph.addEdge('C','E',10);
console.log(graph);
console.log(graph.shortestPath('A'));