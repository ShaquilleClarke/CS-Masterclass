const log = console.log;

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vrtx) {
        if(!this.adjList[vrtx]) this.adjList[vrtx] = [];
    }
    
    addEdge(vrtx1, vrtx2, weight) {
        if(this.adjList[vrtx1]) this.adjList[vrtx1].push({node: vrtx2, weight});
        if(this.adjList[vrtx2]) this.adjList[vrtx2].push({node: vrtx1, weight});
        return this.adjList;
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue(), distance = {}, previous = {};
        let smallest, path = [];
        for (let vertex in this.adjList) {
            if (vertex === start) {
                distance[vertex] = 0;
                nodes.enqueue(vertex);
            } else {
                distance[vertex] = Infinity;
                nodes.enqueue(vertex);
            }
            previous[vertex] = null;
        }
        // smallest = nodes.dequeue().val;
        // candidate = distance[smallest] + nextNode.weight,
        // nextNeighbor = nextNode.node;
        
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distance[smallest] !== Infinity) {
                for (let neighbor in this.adjList[smallest]) {
                    let nextNode = this.adjList[smallest][neighbor],
                    candidate = distance[smallest] + nextNode.weight,
                    nextNeighbor = nextNode.node;

                    if (candidate < distance[nextNeighbor]) {
                        distance[nextNeighbor] = canditate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, canditate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}
const g = new WeightedGraph;
g.addVertex('Brooklyn');
g.addVertex('Baldwin');
g.addVertex('Bronx');
g.addVertex('Bayonne');
g.addEdge('Brooklyn', 'Baldwin', "$12");
g.addEdge('Bayonne', 'Baldwin', "$14");
g.addEdge('Brooklyn', 'Bayonne', "$18");
g.addEdge('Brooklyn', 'Bronx', "$2.75");
g.addEdge('Baldwin', 'Bronx', "$9");
log(g.Dijkstra('Brooklyn', 'Bayonne'));
