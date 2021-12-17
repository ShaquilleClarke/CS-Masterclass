/*

You are given a set of synonyms, such as [[big, large], [eat, consume]]. 

Each item in the set has two synonymous values. Using this set, determine 
if two sentences with the same number of words are equivalent.

For example, the following two sentences are equivalent:

"He wants to eat food."
"He wants to consume food."
With synonyms [['eat', 'consume'], ['big', 'large']]

Note that the synonyms [a, b] and [a, c] do not necessarily imply 
[b, c]: consider the case of [coach, bus] and [coach, teacher].

Follow-up: what if we can assume that [a, b] and [a, c] do in fact imply [b, c]?

*/

const log = console.log;

const checkSyns = (str1, str2, synonyms) => {
    for (let pair of synonyms) { // Look through each pair of synonyms
        if (str1 === pair[0] && str2 === pair[1]) return true;  // Return true if strings are synonyms
    }
    return false;
}

const sentenceEquivalency = (string1, string2, synonyms) => {
    const strArr1 = string1.split(" "), // Convert strings to arrays
    strArr2 = string2.split(" ");

    if (strArr1.length !== strArr2.length) return false; // Check if the lengths match

    return strArr1.every((el, i) => {
        if (el === strArr2[i]) return true; // Check for strings that don't match
        return checkSyns(el, strArr2[i], synonyms); // Check if these non matching strings are synonyms
    })
}

log(sentenceEquivalency("He wants to eat food.", "He wants to consume food.", [['eat', 'consume'], ['big', 'large']]))