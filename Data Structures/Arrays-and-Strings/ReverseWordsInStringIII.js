/*

Given a string s, reverse the order of characters in each word within a 
sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "God Ding"
Output: "doG gniD"

*/

const log = console.log;

const reverseWords = (s) => {
    const strArr = [];
    let str = '', start = s.length-1, 
    end = start;

    while (start >= 0) {
        if (s[start] === ' ' || s[start-1] === ' ' || start === 0) {
            strArr.unshift(s.slice(start, end+1));
            start--;
            end = start;
        } else {
            start--;
        }
    }

    for (let word of strArr) {
        str += reverse(word);
    }
    
    return str;
};
const reverse = (str) => {
    if (str === ' ') return ' ';
    let wrd = '';

    for (let i = str.length-1; i >= 0; i--) {
        wrd += str[i];
    }

    return wrd;
};

// log(reverse("let's"))
log(reverseWords("God Ding"))
