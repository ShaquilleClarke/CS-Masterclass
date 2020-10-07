const log = console.log;

const reverseSentence = (str) => {
  let strArr = str.split(' '); 
  let i = strArr.length-1; 
  let buffer = ''; 
  
  while (i >= 0) {
    if (i === strArr.length - 1) buffer += '';
    else buffer += ' ';
    buffer += strArr[i];
    i--
  }
  return '"' + buffer + '"';  
}
log(reverseSentence('walk my dog'))
        


