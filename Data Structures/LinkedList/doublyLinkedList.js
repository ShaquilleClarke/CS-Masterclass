const log = console.log;

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        let node = new Node(data);

        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return;
        let poppedNode = this.tail
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) return;
        let removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
        }
        this.length--;
        return removed;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if (!this.head || index < 0) return;
        if (index === 0) return this.head;
        let current = this.head, count = 0;
        while (current) {
            if (index === count) return current;
            current = current.next;
            count++;
        }
        return false;
    }
}



let list = new DoublyLinkedList;
list.push(1);
list.push(2);
list.shift();
list.unshift(1);
list.unshift(6);
list.unshift(8);
// list.pop();
log(list.get(3))