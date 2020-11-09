const treeify = require('treeify');
const log = console.log;

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        if(data === this.root.value) return undefined;
        const searchTree = (node) => {
            if (data < node.value) {
                if (!node.left) node.left = newNode;
                else searchTree(node.left);
            } 
            else if (data > node.value) {
                if (!node.right) node.right = newNode;
                else searchTree(node.right)
            }
        }
        searchTree(this.root);
    }

    contains(data) {
        if (!this.root) return undefined;
        let current = this.root;
        while(current) {
            if (data === current.value) return true;
            else if (data < current.value) current = current.left;
            else if (data > current.value) current = current.right;
        }
        return false;
    }

    BFS() {
        let visited = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            visited.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return visited;
    }
}

const tree = new BST;
tree.insert(10);
tree.insert(20);
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(13);
tree.insert(27);
tree.insert(11);
// log(treeify.asTree(tree, true));
log(tree.BFS());