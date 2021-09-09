const log = console.log;





// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }
    
//     insert(data) {
//         let newNode = new Node(data);
//         if(!this.root) {
//             this.root = newNode;
//             return this;
//         }
//         if(data === this.root.value) return undefined;
//         const searchTree = (node) => {
//             if (data < node.value) {
//                 if (!node.left) node.left = newNode;
//                 else searchTree(node.left);
//             } 
//             else if (data > node.value) {
//                 if (!node.right) node.right = newNode;
//                 else searchTree(node.right)
//             }
//         }
//         searchTree(this.root);
//     }
    
    
// }

function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
}
  
// Constructor to create a new BST 
function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.insert = function(key) {
    var root = this.root;
  
    // 1. If the tree is empty, create the root
    if(!root) {
        this.root = new Node(key);
        return;
    }
  
    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert the new node
    var currentNode = root;
    var newNode = new Node(key);
  
    while(currentNode !== null) {
        if(key < currentNode.key) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
  }
  
  



const findLargestSmallerKey = (root, num) => {
    let result = -1;

    while (root) {
        if (root.key < num) {
            result = root.key;
            root = root.right;
        } else {
            root.left;
        }
    }

    return result;
}


var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

log(findLargestSmallerKey(bst, 18))