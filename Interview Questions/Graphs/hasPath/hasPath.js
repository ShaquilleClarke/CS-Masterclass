
const log = console.log;

// const hasPath = (start, graph, dst) => {
//     if(start === dst) return true;
//     // log(graph[start])
//     for(let neighbor of graph[start]) {
//         // log(neighbor)
//         if(hasPath(neighbor, graph, dst) === true) return true;
//     }
//     return false;
// }

const hasPath = (start, graph, dst) => {
    const visited = {};
    const traverse = (vrtx) => {
        if(vrtx === dst) return true;
        visited[vrtx] = true;
        for (let neighbor of graph[vrtx]) {
            if(!visited[neighbor] && traverse(neighbor) === true) return true;
        }
        return false;
    }
    return traverse(start);
}

const adjList = {
   f: ['g', 'i'],
   g: ['h'],
   h: [],
   i: ['g', 'k'],
   j: ['i'],
   k: []
}

console.log(hasPath('f', adjList, 'k'));
// console.log(adjList['f'])