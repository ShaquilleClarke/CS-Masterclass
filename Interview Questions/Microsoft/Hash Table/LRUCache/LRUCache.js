// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.

// - int get(int key) Return the value of the key if the key exists, otherwise return -1.

// -void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. 
// If the number of keys exceeds the capacity from this operation, evict the least recently used key.

// The functions get and put must each run in O(1) average time complexity.


// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

const log = console.log;

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.DLL = new DLL()
        this.map = new Map();
    }

    get(key) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            this.DLL.moveToFront(node);
            return node;
        } else {
            return -1;
        }
    };


    put(key, value) {
        if (this.get(key) !== -1) {
            let node = this.get(key);
            node.val = value;
            this.DLL.moveToFront(node);
            return;
        }

        if (this.map.size === this.capacity) {
            let node = this.DLL.removeLast();
            this.map.delete(node.key);
        }

        let newNode = new Node(key, value);
        this.DLL.add(newNode);
        this.map.set(key, newNode);
    };
    
};

class DLL {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.connect(this.head, this.tail);
        this.length = 0
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
        const node = this.tail.prev;
        this.delete(node);
        return node;
    }

    moveToFront(node) {
        this.delete(node);
        this.add(node);
    }

    delete(node) {
        this.connect(node.prev, node.next);
        this.length--;
    }
}

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


let lruCache = new LRUCache(2);
lruCache.put(2, 1);
lruCache.put(1, 1);
lruCache.put(2, 3);
// lruCache.put(4, 1);
// lruCache.get(1);
// lruCache.get(2);
log(lruCache.DLL)

