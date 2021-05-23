const log = console.log;

const firstUniqChar = (s) => {
   let map = {};
   for (let i = 0; i < s.length; i++) {
       let char = s[i];
       map[char] = (map[char] || 0)+1;
   }
   
   for (let i = 0; i < s.length; i++) {
       let char = s[i];
       if (map[char] === 1) return i;
   }
   return -1
}
log(firstUniqChar('leetcode'))