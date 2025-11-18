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

     - Count the frequency of characters in each string
     - If a character in ransomNote is also in magazine and has the same frequency, return true
     - Otherwise, return false

*/ 
const canConstruct = (ransomNote, magazine) => {
    const freqCounterOne = {};
    const freqCounterTwo = {};
    
    for (const char of ransomNote)
    {
        freqCounterOne[char] = (freqCounterOne[char] || 0) + 1;
    }

    for (const char of magazine)
    {
        freqCounterTwo[char] = (freqCounterTwo[char] || 0) + 1;
    } 
    Log("Counter One: ", freqCounterOne)
    Log("Counter Two: ",freqCounterTwo)

    // for (const key in freqCounterOne)
    // {
    //     if ((key in freqCounterTwo) && (freqCounterOne[key] <= freqCounterTwo[key] || freqCounterOne[key] >= freqCounterTwo[key])) return true

    // }
    // return false;
};
Log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))