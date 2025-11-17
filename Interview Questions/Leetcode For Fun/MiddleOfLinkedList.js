/*

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.


Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100


*/ 

const Log = console.log;

const middleNode = (head) => {
    /*
    
        - Create a varible called tail that points to the head
        - Create a loop that continues while tail.next isn't null
            - If tail.next.next isn't null, point tail to tail.next.next
            - Point head to head.next
        - Return head
    
    */ 
};
Log(middleNode())