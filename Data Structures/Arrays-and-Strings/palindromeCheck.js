// Given a string as an input, check to see if it is a palindrome. Return a boolean

let log = console.log; 

const palindromeCheck = (str) => {
    let begin = 0, end = str.length-1;
    
    while (end > begin) {
        //log(begin)
        if (str[begin] !== str[end]) return false;
        begin++;
        end--;
    }
    return true;
}

log(palindromeCheck('wabhaw'))