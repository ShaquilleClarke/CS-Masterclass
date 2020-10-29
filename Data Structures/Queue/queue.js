const log = console.log;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.next = null;
        this.size = 0;
    }

    enqueue(data) {
        let node = new Node(data);
        if(!this.first) {
            this.first = node;
            this.last = this.first;
        } else {
            this.last.next = node;
            this.last = this.last.next;
        }
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;
        let removed = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return removed.val;
    }

    peek() {
        return this.first;
    }
}

let queue = new Queue;
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
log(queue)