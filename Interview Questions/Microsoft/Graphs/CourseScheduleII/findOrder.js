// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must 
// take course bi first if you want to take course ai.

// - For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

// Return the ordering of courses you should take to finish all courses. If there are many valid answers, 
// return any of them. If it is impossible to finish all courses, return an empty array.


// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. 
// So the correct course order is [0,1].


// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. 
// Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].


// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

const log = console.log;

const buildList = (n, edges) => {
    const adjList = Array.from({length: n}, () => []);

    for (let edge of edges) {
        let [src, dst] = edge;
        adjList[src].push(dst);
    }
    return adjList;
}

const dfs = (node, adjList, visited, arrive, depart, topSort) => {
    arrive[node]++;
    visited[node] = true;

    for (let neighbor of adjList[node]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            if (dfs(neighbor, adjList, visited, arrive, depart, topSort)) return true;
        } else {
            if (depart[neighbor] === 0) return true;
        }
    }
    /* 
        This is a timestamp. 
        If we haven't departed the node
        then there is a cycle. We don't 
        want cycles
    */
    depart[node]++;
    topSort.push(node);
    return false;
}

const findOrder = (numCourses, prerequisites) => {
    const adjList = buildList(numCourses, prerequisites),
    visited = {}, arrive = new Array(numCourses).fill(0),
    depart = new Array(numCourses).fill(0),
    topSort = [];

    for (let vrtx = 0; vrtx < adjList.length; vrtx++) {
        if (!visited[vrtx]) {
            if(dfs(vrtx, adjList, visited, arrive, depart, topSort)) return [];
        }
    }
    return topSort;
};

log(findOrder(2, [[1,0]]))