/*

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]


Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

const log = console.log;

// const reverseString = (s) => {
//     let start = 0, end = s.length-1;

//     while(start < end) {
//         [s[start], s[end]] = [s[end], s[start]];
//         start++;
//         end--;
//     }
//     return s;
// }

const reverseString = (s) => {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }
    for (let i = 0; i < s.length; i++) {
        s[i] = stack.pop();
    }
    return s;
}

log(reverseString(["h","e","l","l","o"]))