const log = console.log;

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(data) {
        this.values.push(data);
        this.bubbleUp();
    }

    bubbleUp() {
        let indx = this.values.length - 1,
            element = this.values[indx];
        while(indx > 0) {
            let parentIndx = Math.floor((indx - 1)/2),
                parent = this.values[parentIndx];
            if (element <= parent) break;
            this.values[parentIndx] = element;
            this.values[indx] = parent;
            indx = parentIndx;
        }
    }

    extractMax() {
        let max = this.values[0], end = this.values.pop();
        if(this.values.length > 0) this.values[0] = end;
        this.sinkDown();
        return max;
    }

    sinkDown() {
        let parentIndx = 0, length = this.values.length,
            element = this.values[parentIndx];
        while(true) {
            let leftIndx = 2 * parentIndx + 1, rightIndx = 2 * parentIndx + 2,
                leftChild, rightChild, swap = null;
            if (leftIndx < length) {
                leftChild = this.values[leftIndx];
                if (leftChild > element) swap = leftIndx;
            }
            if(rightIndx < length) {
                rightChild = this.values[rightIndx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) swap = rightIndx
            }
            if (swap === null) break;
            this.values[parentIndx] = this.values[swap];
            this.values[swap] = element;
            parentIndx = swap;
        }
    }
}

let heap = new MaxBinaryHeap;
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extractMax();
heap.extractMax();
heap.extractMax();
log(heap);