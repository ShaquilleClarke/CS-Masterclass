const log = console.log;

const strStr = (haystack, needle) => {
    const len = needle.length;
    if(!len) return 0;
    for (let i = 0; i <= haystack.length-len; i++) {
        if(haystack.slice(i, i + len) === needle) return i;
    }
    return -1;
}
log(strStr('aaa', 'aaaaa'))