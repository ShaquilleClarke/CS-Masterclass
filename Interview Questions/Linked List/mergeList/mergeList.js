const log = console.log;

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? null : val);
        this.next = (next === undefined ? null : next);
    }
}

const mergeList = (l1, l2) => {
    let dummy = new ListNode(), curr = dummy;
    while (l1 && l2) {
        if(l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    while(l1) {
        curr.next = l1;
        l1 = l1.next;
        curr = curr.next;
    }
    while(l2) {
        curr.next = l2;
        l2 = l2.next;
        curr = curr.next;
    }
    return dummy.next;
}