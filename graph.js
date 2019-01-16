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
         if(!visited[vertex]){
            visited[vertex] = true;
            result.push(vertex);
         } else {
            return;
         }
         for(let i = 0; i < array.length; i++) {
            helper(this.edges[array[i]], array[i]);
         }
      }
      helper(this.edges[this.vertices[0]], this.vertices[0]);
      return result;
   }
}

let graph = new Graph;
graph.addVertices(6);
graph.addVertices(4);
graph.addVertices(3);
graph.addVertices(2);
graph.addVertices(5);
graph.addVertices(1);
graph.addEdges(6,4);
graph.addEdges(4,3);
graph.addEdges(4,5);
graph.addEdges(2,1);
graph.addEdges(5,2);
graph.addEdges(3,2);
// graph.removeVertices(2);
// graph.removeEdge(1,5);
console.log(graph);
console.log(graph.dfsTraverse());