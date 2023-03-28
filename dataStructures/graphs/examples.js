/* 
Graphs são estruturas de dados que representam relações entre objetos, onde cada objeto é representado por um vértice e cada relação é representada por uma aresta.
 As adjacency lists são uma forma de representar grafos, onde cada vértice é armazenado em uma lista e as arestas são representadas por ligações entre os vértices.
  Isso permite uma fácil implementação de algoritmos para percorrer o grafo e encontrar relações entre os vértices. As adjacency lists também permitem uma representação compacta de grafos esparsos,
   onde a maioria das arestas não existem.
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }

    return false;
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (value) => value !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (value) => value !== vertex1
      );
      return true;
    }

    return false;
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");
myGraph.addEdge("C", "A");
// myGraph.removeEdge("A", "B")
// myGraph.removeVertex("C")
console.log(myGraph);
