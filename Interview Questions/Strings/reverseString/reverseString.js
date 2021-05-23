const log = console.log;

const reverseString = (s) => {
    let left = 0, right = s.length-1;
    while(left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}
log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']))