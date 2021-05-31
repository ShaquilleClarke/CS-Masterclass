const log = console.log;

const longestCommonPrefix = (strs) => {
    if (!strs.length) return "";
    const firstWrd = strs[0];
    for (let i = 0; i < firstWrd.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== firstWrd[i]) return strs[j].slice(0, i)
        }
    }
    return strs[0];
}
log(longestCommonPrefix(["flower", "flow", "flows"]))