const log = console.log;

const undirectedPath = (nodeA, nodeB, edges) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB);
}

const buildGraph = (edges) => {
    const graph = {};
    let a, b;
    for(let edge of edges) {
        [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const hasPath = (graph, start, dst) => {
    const queue = [start], visited = {};
    let curr;
    visited[start] = true;
    while(queue.length) {
        curr = queue.shift();
        if(curr === dst) return true;
        for(let neighbor of graph[curr]) {
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    return false;
}



const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

log(undirectedPath('j', 'm', edges))
// log(edges)