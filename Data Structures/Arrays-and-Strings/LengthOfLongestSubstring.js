/*

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.


Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.


Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Example 4:

Input: s = ""
Output: 0


*/

const log = console.log;

const lengthOfLongestSubstring = (s) => {
    const seen = new Set();
    let start = 0, end = start, max = 0;

    while (start < s.length && end < s.length) {
        if (!seen.has(s[end])) {
            seen.add(s[end]);
            max = Math.max(end-start+1, max);
            end++
        } else {
            seen.delete(s[start]);
            start++;
        }
    }
    return max;
};

log(lengthOfLongestSubstring("aab"))