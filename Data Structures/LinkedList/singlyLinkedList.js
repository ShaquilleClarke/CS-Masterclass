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
}

let list = new LinkedList;
list.push('humpty');
list.push('dumpty');
list.push('butt cheeks');
list.push('keeo pushin');
list.push('abracadabra')
log(list.head);
// log(list.head.next);
// log(list.head.next.next);
// log(list.head.next.next.next);
// log(list.head.next.next.next.next);

