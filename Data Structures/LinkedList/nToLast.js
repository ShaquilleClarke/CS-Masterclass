const nToLast = (list, n) => {
    if(!list.head) return;

    let target = (list.length - 1) - n;
    let indx = 0;
    let current = list.head;

    while (current) {
        if (indx === target) return current.data;
        current = current.next;
        indx++;
    }
    return null;
}