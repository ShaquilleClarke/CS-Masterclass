const log = console.log;

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let indx = this.values.length - 1,
            element = this.values[indx];
        while(indx > 0) {
            let parentIndx = Math.floor((indx - 1)/2),
                parent = this.values[parentIndx];
            if (element.priority >= parent.priority) break;
            this.values[parentIndx] = element;
            this.values[indx] = parent;
            indx = parentIndx;
        }
    }

    dequeue() {
        let min = this.values[0], end = this.values.pop();
        if(this.values.length > 0) this.values[0] = end;
        this.sinkDown();
        return min;
    }

    sinkDown() {
        let parentIndx = 0, length = this.values.length,
            element = this.values[parentIndx];
        while(true) {
            let leftIndx = 2 * parentIndx + 1, rightIndx = 2 * parentIndx + 2,
                leftChild, rightChild, swap = null;
            if (leftIndx < length) {
                leftChild = this.values[leftIndx];
                if (leftChild.priority < element.priority) swap = leftIndx;
            }
            if(rightIndx < length) {
                rightChild = this.values[rightIndx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) swap = rightIndx
            }
            if (swap === null) break;
            this.values[parentIndx] = this.values[swap];
            this.values[swap] = element;
            parentIndx = swap;
        }
    }
}

let errands = new PriorityQueue;
errands.enqueue('pick up groceries', 2);
errands.enqueue('pay rent', 1);
errands.enqueue('cop some henny', 3);
log(errands.dequeue())
log(errands.dequeue())
log(errands.dequeue())


