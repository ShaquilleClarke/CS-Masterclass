const log = console.log;

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        let newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;

    }

    pop() {
        if (!this.head) return;

        let prev = this.head, next = prev.next;

        while (next.next !== null) {
            prev = prev.next;
            next = next.next
        }
        prev.next = null;
        this.length--;
        this.tail = prev;
        return next;
    }

    shift() {
        if (!this.head) return;
        this.head = this.head.next;
        this.length--;
    }

    unShift(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        }
        newNode.next = this.head; 
        this.head = newNode
        this.length++;
        return this;
    }

    get(index) {
        if (!this.head) return;

        if(index === 0) return this.head;

        let current = this.head, indx = 0;

        while(current) {
            if(indx === index) return current;
            current = current.next;
            indx++;
        }
        return null;

    }
}

let list = new LinkedList;
list.push('humpty');
list.push('dumpty');
list.push('butt cheeks');
list.push('keeo pushin');
list.push('abracadabra')
log(list.pop());
log(list)
log(list.pop());
log(list)
log(list.shift());
log(list)
log(list.unShift('coochie'))
log(list.get(2))

// log(list.pop());
// log(list.pop());

