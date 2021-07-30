const log = console.log;

const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0, size;

    for (let vrtx in graph) {
        size = exploreSize(graph, vrtx, visited);

        if(size > longest) longest = size;
    }

    return longest;
}

const exploreSize = (graph, start, visited) => {
    if(visited.has(start)) return 0;

    visited.add(start);

    let size = 1;

    for(let neighbor of graph[start]) {
        size += exploreSize(graph, neighbor, visited);
    }

    return size;
}

const graph = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
};

log(largestComponent(graph));