/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false


Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false


Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true


Example 4:

Input: ransomNote = "bg", magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

*/ 

const Log = console.log;

/*

    - Create a frequency counter for the characters in magazine
    - Loop through the characters in ransomNote
        - If the character is not in magazine, return false
        - Otherwise, decrement the value of the character in the frequency counter by 1
    - Return true. This indicates that every character in ransomNote has appeared the same number of times within magazine

*/ 

const canConstruct = (ransomNote, magazine) => {
    const freqCount = {}

    for(const char of magazine)
    {
        freqCount[char] = (freqCount[char] || 0) + 1;
    }
    
    for(const char of ransomNote)
    {
        if(!freqCount[char]) return false;
        else freqCount[char] -= 1;
    }
    return true;
};
Log(canConstruct("aa", "aab"))