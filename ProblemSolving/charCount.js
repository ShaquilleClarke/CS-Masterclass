// Write function that gives a count of each character in a string

const charCount = (str) => {
    const cache = {};

    for (let char of str.toLowerCase()) {
        !cache[char] ? cache[char] = 1 : cache[char]++; 
    }

    return cache
}

console.log(charCount("Apple"))