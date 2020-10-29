const log = console.log;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    print() {
        let count = 0;
        let arr = []
        let current = this.first;
        while (count < this.size) {
            arr.push(current.val);
            current = current.next;
            count++;
        }
        return arr;
    }

    push(data) {
        let node = new Node(data);
        if(!this.first) {
            this.first = node;
            this.last = this.first;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if(!this.first) return null;
        let removed = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return removed;
    }

    peek() {
        return this.first;
    }
}

let stack = new Stack;
stack.push('1')
stack.push('2')
stack.push('3')
stack.push('4')
stack.pop()
stack.pop()
stack.pop()
stack.peek()
log(stack);

