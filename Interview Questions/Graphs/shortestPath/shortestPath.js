const log = console.log;

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges), queue = [[nodeA, 0]],
    visited = new Set([nodeA]);
    let node, distance;

    while(queue.length) {
        [node, distance] = queue.shift();

        if(node === nodeB) return distance;

        for(let neighbor of graph[node]) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }

    return -1;
}

const buildGraph = (edges) => {
    const graph = {};
    let a, b;

    for (let edge of edges) {
        [a, b] = edge;

        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

log(shortestPath(edges, 'y', 'v'));