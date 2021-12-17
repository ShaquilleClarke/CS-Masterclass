const log = console.log;

const repeatedString = (s, n) => {
    let a = 0;
    const k = s.length;
    
    if (n >= k) 
    {
        for (let char of s) 
        {
            a += (char === 'a') ? 1 : 0;
        }
        a += Math.floor(n/k);
    }
    for (let i = 0; i < n%k; i++) 
    {
        a += (s[i] === 'a') ? 1 : 0;
    }
    return a;
}


log(repeatedString('aba', 10))