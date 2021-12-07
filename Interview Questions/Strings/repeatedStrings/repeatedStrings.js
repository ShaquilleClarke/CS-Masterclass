const log = console.log;

// const repeatedString = (s, n) => {
//     let a = 0;
//     const k = s.length;
    
//     if (n >= k) 
//     {
//         for (let char of s) 
//         {
//             a += (char === 'a') ? 1 : 0;
//         }
//         a += Math.floor(n/k);
//     }
//     for (let i = 0; i < n%k; i++) 
//     {
//         a += (s[i] === 'a') ? 1 : 0;
//     }
//     return a;
// }
const repeatedString = (s, n) => {
    if (s.length === 1 && s[0] === 'a') return n;

    let len = s.length, count = 0, 
    freq = Math.floor(n/len), str = [];

    for (let i = 0; i < freq; i++) 
    {
        str.push(...s);
    }

    for (let char of str) 
    {
        count += (char === 'a') ? 1 : 0;
    }

    for (let i = 0; i < n%len; i++) 
    {
        count += (str[i] === 'a') ? 1 : 0;
    }

    return count;
}

log(repeatedString('aba', 10))