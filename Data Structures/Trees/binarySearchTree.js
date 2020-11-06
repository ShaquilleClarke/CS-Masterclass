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
        // return this;
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
log(treeify.asTree(tree, true));
// log(tree)