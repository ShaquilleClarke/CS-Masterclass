const log = console.log;

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const hasCycle = (head) => {
    let fast = head, slow = fast;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) return true;
    }
    return false;
}