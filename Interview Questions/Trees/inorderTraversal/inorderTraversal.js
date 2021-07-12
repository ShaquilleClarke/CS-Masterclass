// Recursive
const inorderTraversal = (root) => {
    if(!root) return [];
    let res = [];
    const traverse = (node) => {
        if(node.left) traverse(node.left);
        res.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return res;
}

// Iterative
// const inorderTraversal = (root) => {
//     if(!root) return [];
//     const stack = [], res = [];
//     while(root || stack.length) {
//         if(root) {
//             stack.push(root);
//             root = root.left;
//         } else {
//             root = stack.pop();
//             res.push(root.val);
//             root = root.right;
//         }
//     }
//     return res;
// }