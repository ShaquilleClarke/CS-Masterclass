const log = console.log;

/*

strArr = ['abc', 'bcb', 'ece', 'aa', 'e']
queries = ['1-3', '2-5', '2-2']

queries are formatted l to r => starting index to ending index

Determine how many strings from l-r have vowels


*/

const flattenQuery = (query) => {
    for (let i = 0; i < query.length; i++) {
        query[i] = query[i].split('-');
    }

    for (let pair of query) {
        pair[0] = parseInt(pair[0]);
        pair[1] = parseInt(pair[1]);
    }
    return query;
}

const checkForVowels = (str) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0, start, end;
    
    for (let i = 0; i < str.length; i++) {
        [start, end] = [str[i][0], str[i][str[i].length-1]];
        if (vowels.has(start) && vowels.has(end)) count++;
    }
    return count;
}

const hasVowels = (strArr, query) => {
    let queries = flattenQuery(query), 
    res = Array.from({length: queries.length});
    
    for (let i = 0; i < queries.length; i++) {
        res[i] = checkForVowels(strArr.slice(queries[i][0]-1, queries[i][1]));
    }
    
    return res;
}

log(hasVowels(["yy", "u", "oe"], [ "1-2", "2-3"])) // [2, 3, 0]