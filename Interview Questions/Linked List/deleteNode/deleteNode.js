const log = console.log;

class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

const deleteNode = (node) => {
    [node.val, node.next.val] = [node.next.val, node.val];
    node.next = node.next.next;
}

const firstNode = new Node(1), second = new Node(2), third = new Node(3), fourth = new Node(4);

firstNode.next = second;
firstNode.next.next = third;
firstNode.next.next.next = fourth;

deleteNode(second)
log(firstNode)