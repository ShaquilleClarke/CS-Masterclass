// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:

// Input: lists = []
// Output: []


// Example 3:

// Input: lists = [[]]
// Output: []


//   Definition for singly-linked list.
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

const log = console.log;

const mergeKLists = (lists) => {
  if (!lists.length) return null;
  else if (lists.length === 1) return lists[0];
  
  let mid = (lists.length + 1) / 2, 
  left = lists.slice(0, mid), 
  right = lists.slice(mid), 
  divL = mergeKLists(left),
  divR = mergeKLists(right);

  return merged(divL, divR)
};

const merged = (l1, l2) => {
  let dummy = new ListNode(0), curr = dummy;
  
  while (l1 && l2) {
      if (l1.val < l2.val) {
          curr.next = l1;
          l1 = l1.next;
      } else {
          curr.next = l2;
          l2 = l2.next;
      }
      curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
}

log(mergeKLists([[1,8,11],[5, 9, 10],[3,4,7]]))