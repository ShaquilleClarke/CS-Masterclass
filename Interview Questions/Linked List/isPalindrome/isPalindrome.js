const isPalindrome = () => {
    let curr = this.head, mid = this.head, temp, reverse = null;
    while(curr && curr.next) {
        curr = curr.next.next;
        temp = mid.next;
        mid.next = reverse;
        reverse = mid;
        mid = temp;
    }
    if(curr) mid = mid.next;
    while(mid) {
        if(mid.val !== reverse.val) return false;
        mid = mid.next;
        reverse = reverse.next;
    }
    return true;
}