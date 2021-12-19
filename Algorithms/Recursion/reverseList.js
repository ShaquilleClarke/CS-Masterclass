const reverseList = (head) => {
    if (!head || !head.next) return head; // Our base case. The last node will become the head

    let p = reverseList(head.next); // We store the value of our base case

    head.next.next = head; // Point the node at the end of the list to this node
    head.next = null; // Remove this nodes connection to the next node

    return p; // Return our base case
}