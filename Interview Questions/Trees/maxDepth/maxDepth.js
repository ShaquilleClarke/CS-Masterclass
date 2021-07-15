const maxDepth = (root) => {
    let depth = 0;
    if(!root) return depth;
    const DFS = (node, d) => {
        if(node.left) DFS(node.left, d+1);
        if(node.right) DFS(node.right, d+1);
        depth = Math.max(depth, d);
    }
    DFS(root, 1);
    return depth;
}