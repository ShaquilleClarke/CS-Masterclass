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

    removeVertex(vertex) {
        let vrtx = this.adjacencyList[vertex];
        while(vrtx.length) {
            let adjVrtx = vrtx.pop();
            this.removeEdge(vertex, adjVrtx);
        }
        delete this.adjacencyList[vertex];
    }

    dfsRecursive(start) {
        let results = [], visited = {}, adjList = this.adjacencyList;
        const traverse = (vertex) => {
            if(!vertex) return;
            visited[vertex] = true;
            results.push(vertex);
            for(let val of adjList[vertex]) {
                if(!visited[val]) traverse(val)
            }
        }
        traverse(start)
        return results;
    }

    dfsIterative(start) {
        let results = [], visited = {}, adjList = this.adjacencyList, stack = [start], next
        visited[start] = true;
        while(stack.length) {
            next = stack.pop();
            results.push(next);
            for(let val of adjList[next]) {
                if(!visited[val]) {
                    visited[val] = true;
                    stack.push(val);
                }
            }
        }
        return results;
    }
}

let g = new Graph;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

log(g.dfsIterative('A'))


