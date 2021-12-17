/*

There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of 
input strings. Return an array of the results.

 
strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']

results[i] = frequency of queries[i]

*/

const log = console.log;

const matchingStrings = (strings, queries) => {
    const res = Array.from({length: queries.length}), 
    freq = new Map();

    for (let str of strings) {
        if (!freq.has(str)) {
            freq.set(str, 1)
        } else {
            freq.set(str, freq.get(str)+1);
        }
    }
    
    
    for (let i = 0; i < queries.length; i++) {
        if (freq.has(queries[i])) res[i] = freq.get(queries[i]);
        else res[i] = 0;
    }
    return res;
}

log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))