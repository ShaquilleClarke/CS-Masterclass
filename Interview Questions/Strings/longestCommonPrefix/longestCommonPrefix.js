const log = console.log;

const longestCommonPrefix = (strs) => {
    if (!strs.length) return "";
    if (strs.length === 1) return strs[0];
    let frstWrd = strs[0], len = frstWrd.length, currStr;
    while (len > 0) {
        for (let i = 1; i < strs.length; i++) {
            currStr = strs[i].substr(0, len);
            if (currStr !== frstWrd) {
                break;
            } else {
                if (i === strs.length-1) return frstWrd.substr(0, len);
            }
        }
        len--;
        frstWrd = frstWrd.substr(0, len);
    }
    return '';
}
log(longestCommonPrefix(['flow', 'flight', 'flowers']))