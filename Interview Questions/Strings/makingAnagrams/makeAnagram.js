const log = console.log;

const makeAnagram = (a, b) => {
    let aMap = {}, bMap = {},
    res1, res2;

    for (let char of a) 
    {
        aMap[char] = (aMap[char] || 0)+1;
    }
    
    for (let char of b) 
    {
        bMap[char] = (bMap[char] || 0)+1;
    }

   res1 = getDeletions(a, aMap, bMap);
   res2 = getDeletions(b, bMap, aMap);
   
   return res1 + res2
}

const getDeletions = (str, strMap, strMap2) => {
    let s = [...str] , char, count = 0;

    for (let i = 0; i < s.length; i++) 
    {
        char = s[i];
        if (!(char in strMap2) || (char in strMap2)  && strMap[char] !== strMap2[char]) count++
    }
    return count;
}

log(makeAnagram('cde', 'abc'))