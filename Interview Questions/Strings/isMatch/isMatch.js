// Given an input string s and a pattern p, implement 
// regular expression matching with support for '.' and '*' where:

//  - '.' Matches any single character.​​​​
//  - '*' Matches zero or more of the preceding element.
//  - The matching should cover the entire input string (not partial).

 

// Example 1:

// Input: text = "aa", pattern = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".


// Example 2:

// Input: text = "aa", pattern = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".


// Example 3:

// Input: text = "ab", pattern = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".


// Example 4:

// Input: text = "aab", pattern = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".


// Example 5:

// Input: text = "mississippi", pattern = "mis*is*p*."
// Output: false



const log = console.log;

const isMatch = (text, pattern) => {
    let dp = new Map();
    
    const checker = (tIndx, pIndx) => {
        if (tIndx > text.length) return false;
        if (tIndx === text.length && pIndx === pattern.length) return true;

        let key = tIndx + '-' + pIndx;
        if (dp.has(key)) return dp.get(key);

        let match = text[tIndx] === pattern[pIndx] || pattern[pIndx] === '.';
        if (pattern[pIndx+1] === '*') {
            let val = (match && checker(tIndx+1, pIndx)) || checker(tIndx, pIndx+2);
            dp.set(key, val);
        } else {
            let val = match && checker(tIndx+1, pIndx+1);
            dp.set(key, val);
        }
        return dp.get(key);
    }
    return checker(0, 0);
};
log(isMatch('aa', 'a*'))