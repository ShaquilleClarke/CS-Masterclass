const log = console.log;

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


// DFS Approach
const kthSmallest = (root, k) => {
    let res, count = 0;
    const inOrder = (node) => {
        if (node) {
            inOrder(node.left);
            count++;
            if (count === k) res = node.val
            inOrder(node.right);
        }
        
    }
    inOrder(root);
    return res;
}


// Iterative Approach (with Stack)
const kthSmallest = (root, k) => {
    const stack = [];
    let counter = 1;

    while (true) {
        if (root) {
            stack.push(root);
            root = root.left;
            continue;
        }
        if (stack.length) {
            root = stack.pop();
            if (counter === k) {
                return root.val;
            } else {
                counter++;
                root = root.right;
            }
        }
    }
    return null;
}


