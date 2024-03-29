// Design and implement a data structure for a Least Frequently Used (LFU) cache.

// Implement the LFUCache class:

// - LFUCache(int capacity) Initializes the object with the capacity of the data structure.

// - int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.

// - void put(int key, int value) Update the value of the key if present, or inserts the key if not 
//   already present. When the cache reaches its capacity, it should invalidate and remove the least 
//   frequently used key before inserting a new item. For this problem, when there is a tie 
//   (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.

// To determine the least frequently used key, a use counter is maintained for each key in the cache. 
// The key with the smallest use counter is the least frequently used key.

// When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). 
// The use counter for a key in the cache is incremented either a get or put operation is called on it.

// The functions get and put must each run in O(1) average time complexity.


// Example 1:

// Input
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

// Explanation
// // cnt(x) = the use counter for key x
// // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
// LFUCache lfu = new LFUCache(2);
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// lfu.get(1);      // return 1
//                  // cache=[1,2], cnt(2)=1, cnt(1)=2
// lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// lfu.get(2);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// lfu.get(1);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// lfu.get(4);      // return 4
//                  // cache=[3,4], cnt(4)=2, cnt(3)=3

const log = console.log;

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.dLL = new DLL();
        this.map = new Map();
        this.freqMap = new Map();
    }
    
    get(key) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            this.freqMap.get(node.freq).delete(node);
            node.freq++;
            if(!this.freqMap.has(node.freq)) {
                this.freqMap.set(node.freq, new DLL());
            }
            this.freqMap.get(node.freq).add(node);
            return node.val;
        } else {
            return -1;
        }
    }
    
    put(key, value) {
        if (this.capacity === 0) return;
        if (this.map.has(key)) {
            let node = this.map.get(key);
            this.freqMap.get(node.freq).delete(node);
            node.val = value;
            node.freq++;
            if(!this.freqMap.has(node.freq)) {
                this.freqMap.set(node.freq, new DLL());
            }
            this.freqMap.get(node.freq).add(node);
            return;
        }
        
        if (this.map.size === this.capacity) {
           let min = Infinity;
           for (let freq of this.freqMap.keys()) {
               if (this.freqMap.get(freq).isEmpty()) continue;
               min = Math.min(freq, min);
           }
           let lastNode = this.freqMap.get(min).removeLast();
           this.map.delete(lastNode.key);
        }
        
        let node = new Node(key, value, 1);
        this.map.set(key, node);
        if (!this.freqMap.has(node.freq)) {
            this.freqMap.set(node.freq, new DLL());
        }
        this.freqMap.get(node.freq).add(node);
    }
}

class DLL {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.connect(this.head, this.tail);
        this.length = 0;
    }
    
    connect(node1, node2) {
        node1.next = node2;
        node2.prev = node1;
    }
    
    add(node) {
        this.connect(node, this.head.next);
        this.connect(this.head, node);
        this.length++;
    }
    
    removeLast() {
        let last = this.tail.prev;
        this.delete(last);
        return last;
    }
    
    moveToFront(node) {
        this.delete(node);
        this.add(node);
    }
    
    delete(node) {
        this.connect(node.prev, node.next);
        this.length--;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }
}

class Node {
    constructor(key, val, freq) {
        this.key = key;
        this.val = val;
        this.freq = freq;
        this.prev = null;
        this.next = null;
    }
}


const lfu = new LFUCache(0);
// lfu.put(2, 2)
log(lfu.put(0, 0))
// lfu.put(1, 1)
// lfu.get(2)
// lfu.get(1)
// lfu.get(2)
// lfu.put(3, 3)
// lfu.put(4, 4)
// lfu.get(3)
// lfu.get(2)
// lfu.get(1)
// lfu.get(4)


