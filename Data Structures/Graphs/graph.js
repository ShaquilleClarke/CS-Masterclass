const log = console.log;
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
        if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
        return this.adjacencyList;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vrtx => 
                vrtx !== vertex2
            );
        }
        if (this.adjacencyList[vertex2].includes(vertex1)) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vrtx => 
                vrtx !== vertex1
            );
        }
    }
}

let g = new Graph;
g.addVertex('Dani');
g.addVertex('Red');
g.addEdge('Dani', 'Red');
g.removeEdge('Dani', 'Red')
log(g.adjacencyList)
