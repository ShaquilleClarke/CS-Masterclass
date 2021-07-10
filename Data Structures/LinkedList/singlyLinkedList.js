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
        if (index < 0 || index > this.length) return false;
        if(index === 0) this.unShift(val);
        if(index === this.length) this.push(val);

        let prev = this.get(index - 1);
        let next = prev.next;
        let newNode = new Node(val);

        prev.next = newNode;
        newNode.next = next;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) this.shift();
        if (index === (this.length-1)) this.pop();

        let prev = this.get(index - 1);
        let next = prev.next.next;
    
        prev.next = next;
        this.length--;
        return prev.next
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;

        while (node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    isPalindrome() {
        let curr = this.head, mid = this.head, temp, reverse = null;
        while(curr && curr.next) {
            curr = curr.next.next;
            temp = mid.next;
            mid.next = reverse;
            reverse = mid;
            mid = temp;
        }
        if(curr) mid = mid.next;
        while(mid) {
            if(mid.val !== reverse.val) return false;
            mid = mid.next;
            reverse = reverse.next;
        }
        return true;
    }

}


let list = new LinkedList;
list.push(1)
// list.push(2)
// list.push(2)
// list.push(1)
log(list.isPalindrome());
// list.push('humpty');
// list.push('dumpty');
// list.push('butt cheeks');
// list.push('keeo pushin');
// list.push('abracadabra')
// list.set(4, 'pootie tang')
// list.insert(2, 'dogma')
// list.insert(1, 'cupertino');
// list.remove(3);
// list.reverse();
// log(list.get(0))
//log(list.get(3))

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