// Write function that gives a count of each character in a string

const charCount = (str) => {
    const cache = {};

    for (let char of str.toLowerCase()) {
        if(isAlphaNumeric(char)) {
            cache[char] = ++cache[char] || 1; 
        }
    }
    return cache
}

const isAlphaNumeric = (char) => {
    const code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // numeric (0-9)
       !(code > 64 && code < 91) && // upper Alphabet (A-Z)
       !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false
    }
    return true
}



console.log(charCount("Apple was here"))