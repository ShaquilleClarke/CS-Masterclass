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

        let current = this.head, indx = 0;

        while(current) {
            if(indx === index) return current;
            current = current.next;
            indx++;
        }
        return null;
    }

    set(index, val) {
        let newNode = new Node(val);
        let indx = this.get(index);
        
        if (indx) {
            indx.data = newNode
            return true;
        }
        return false;;
    }

    insert(index, val) {
        if(index > this.length || index < 0) return;
        if(index === this.length) this.push(val);
        if(index === 0) this.unShift(val);
        
        let prev = this.get(index - 1);
        let next = prev.next;
        let newNode = new Node(val);
        newNode.next = next;
        prev.next = newNode;
        this.length++

        return this;
    }

}


let list = new LinkedList;
list.push('humpty');
list.push('dumpty');
list.push('butt cheeks');
list.push('keeo pushin');
list.push('abracadabra')
list.set(4, 'pootie tang')
list.insert(2, 'dogma')
log(list.get(1))
// log(list.pop());
// log(list)
// log(list.pop());
// log(list)
// log(list.shift());
// log(list)
// log(list.unShift('coochie'))
// log(list.get(2))


// log(list.pop());
// log(list.pop());

// const list2 = new LinkedList;
// list2.push(1);
// list2.push(2);
// list2.push(3);
// list2.push(4);
// list2.push(5);

// const nToLast = (list, n) => {
//     if(!list.head) return;

//     let target = (list.length - 1) - n;
//     let indx = 0;
//     let current = list.head;

//     while (current) {
//         if (indx === target) return current.data;
//         current = current.next;
//         indx++;
//     }
//     return null;
// }

// log(nToLast(list2, ))