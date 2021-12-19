const mergeList = (a, b) => {
    if (!a) return b; // Our base case
    if (!b) return a; // If one node is null then we return the other

    if (a.val <= b.val) {
        a.next = mergeList(a.next, b); // If node a is less than node b, we determine the next smallest value between a.next and b
        return a; // Return the list
    } else {
        b.next = mergeList(a, b.next); // Same as above
        return b;
    }
}