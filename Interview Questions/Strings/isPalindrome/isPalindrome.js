const log = console.log;

const isPalindrome = (s) => {
    let i = 0, j = s.length - 1, start, end;
    while (i < j) {
        start = s.charCodeAt(i);
        end = s.charCodeAt(j);
    
        if (isLetter(start)) {
            i++
            continue
        }
        if (isLetter(end)) {
            j--
            continue
        }
    
        if (toLowerCase(start) !== toLowerCase(end)) return false;  
        start++
        end--
  }
  return true
};

const isLetter = (code) => {
    if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
        return false;
    }
    else {
        return true;
    }
}

const toLowerCase = (code) => {
    if (code >= 65 && code <= 90) return code + 32;    
    else return code;
}

log(isPalindrome('bat'))