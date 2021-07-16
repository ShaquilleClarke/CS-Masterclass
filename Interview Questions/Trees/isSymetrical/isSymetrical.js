// recursive
const isSymetrical = (root) => {
    if(!root) return true;
    const isMirror = (left, right) => {
        if(!left || !right) return left === right;
        if(left.val !== right.val) return false;
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    return isMirror(root.left, root.right);
}

// iterative
const isSymetrical = (root) => {
    const queue = [root.left, root.right];
    let left, right;
    while(queue.length) {
        [left, right] = [queue.shift(), queue.shift()];

        if(!left && !right) continue;
        if(!left || !right) return false;
        if(left.val !== right.val) return false;
        
        queue.push(left.left, right.right, left.right, right.left);
    }
    return true;
}