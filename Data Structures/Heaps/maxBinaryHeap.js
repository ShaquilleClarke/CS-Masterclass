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
            let parent = this.values[parentIndx],
                parentIndx = Math.floor((indx - 1)/2);
            if (element <= parent) break;
            this.values[parentIndx] = element;
            this.values[indx] = parent;
            indx = parent;
        }
    }
}