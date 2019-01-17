class Graph {
   constructor() {
      this.edges = [];
      this.vertices = [];
      this.numberOfEdges = 0;
   }

   addVertices(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];
   }

   removeVertices(vertex) {
      let index = this.vertices.indexOf(vertex);
      if (index < 0) {
         return;
      }
      this.vertices.splice(index,1); 
      let connectedVertices = this.edges[vertex];
      connectedVertices.forEach(el => {
         this.removeEdge(vertex, el);
      })
      this.edges.splice(vertex,1);
   }

   addEdges(v1, v2) {
      this.edges[v1].push(v2);
      this.edges[v2].push(v1);
      this.numberOfEdges++;
   }

   removeEdge(v1,v2) {
      let index1 = this.edges[v1].indexOf(v2);
      let index2 = this.edges[v2].indexOf(v1);
      if(index1 >= 0 ) {
         this.edges[v1].splice(index1,1);
         this.numberOfEdges--;
      } 
      if(index2 >= 0) {
         this.edges[v2].splice(index2,1);
      }
   }

   graphSize() {
      return this.vertices.length;
   }

   dfsTraverse() {
      let result = [];
      let visited = [];
      let helper = (array, vertex) => {
         visited[vertex] = true;
         result.push(vertex);
         for(let i = 0; i < array.length; i++) {
            if(!visited[array[i]]){
               helper(this.edges[array[i]], array[i]);
            }
         }
      }
      helper(this.edges[this.vertices[0]], this.vertices[0]);
      return result;
   }

   bfsTraverse() {
      let result = [this.vertices[0]];
      let visited = [];
      visited[this.vertices[0]] = true;
      let queue = [this.edges[this.vertices[0]]];

      while(queue.length > 0) {
         let current = queue.shift();
         for(let i = 0; i < current.length; i++) {
            if(!visited[current[i]]) {
               visited[current[i]] = true;
               result.push(current[i]);
               queue.push(this.edges[current[i]]);
            }
         }
      }
      return result;
   }
}

let graph = new Graph;
graph.addVertices(1);
graph.addVertices(2);
graph.addVertices(3);
graph.addVertices(4);
graph.addVertices(5);
graph.addVertices(6);
graph.addEdges(1,2);
graph.addEdges(1,5);
graph.addEdges(2,3);
graph.addEdges(2,5);
graph.addEdges(3,4);
graph.addEdges(4,5);
graph.addEdges(4,6);
// graph.removeVertices(2);
// graph.removeEdge(1,5);
// console.log(graph);
console.log(graph.bfsTraverse());
console.log(graph);
console.log(graph.dfsTraverse());
