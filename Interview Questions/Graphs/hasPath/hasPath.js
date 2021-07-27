
const log = console.log;

// const hasPath = (start, graph, dst) => {
//     const queue = [start], visited = {};
//     let curr;
//     visited[start] = true;
//     while(queue.length) {
//         curr = queue.shift();
//         if(curr === dst) return true;
//         for(let neighbor of graph[curr]) {
//             if(!visited[neighbor]) {
//                 visited[neighbor] = true;
//                 queue.push(neighbor);
//             }
//         }
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