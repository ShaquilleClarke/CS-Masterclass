/*

Given the head of a linked list, remove the nth node 
from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]


Example 2:

Input: head = [1], n = 1
Output: []


Example 3:

Input: head = [1,2], n = 1
Output: [1]

*/
/* A list can still be altered with pointers */ 

const removeNthFromEnd = (head, n) => {
    const dummy = new ListNode(0);
    let length = 0, current = head;
    dummy.next = head; // pointing to prev memory of head

    while(current != null){ // get the length
        length++;
        current = current.next;
    }

    length -= n; // reset the length to target index 
    current = dummy; // pointing to current memory of dummy list

    while(length > 0){ // loop until we reach node before target 
        length--;
        current = current.next;
    }
    current.next = current.next.next; // remove the target node;
    /* A list can still be altered with pointers */ 
    return dummy.next; // return new memory of head;
};