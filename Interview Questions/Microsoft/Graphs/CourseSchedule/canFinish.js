/*

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites 
where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.


Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.


Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

*/

const log = console.log;

const buildList = (n, edges) => {
    const adjList = Array.from({length: n}, () => []);

    for (let edge of edges) {
        let [src, dst] = edge;
        adjList[src].push(dst);
    }
    return adjList;
}

const dfs = (node, adjList, visited, arrive, depart) => {
    arrive[node]++;
    visited[node] = true;

    for (let neighbor of adjList[node]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            if (dfs(neighbor, adjList, visited, arrive, depart)) return true;
        } else {
            if (depart[neighbor] === 0) return true;
        }
    }
    depart[node]++;
    return false;
}

const canFinish = (numCourses, prerequisites) => {
    const adjList = buildList(numCourses, prerequisites),
    visited = {}, arrive = new Array(numCourses).fill(0),
    depart = new Array(numCourses).fill(0);

    for (let vrtx = 0; vrtx < adjList.length; vrtx++) {
        if (!visited[vrtx]) {
            if(dfs(vrtx, adjList, visited, arrive, depart)) return false;
        }
    }
    return true;
};

log(canFinish(3, [[1,0],[2,1]]))