const log = console.log;

const isPalindrome = (string) => {
    let result;
    const reverse = (str) => {
        if(str.length <= 1) return str;
        return reverse(str.slice(1)) + str[0];
    }
    return string === reverse(string);
}
log(isPalindrome('racecar'))
log(isPalindrome('bob'))
log(isPalindrome('boby'))