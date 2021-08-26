// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
// (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null; 
    }
}

const zigzagLevelOrder = (root) => {
    
};