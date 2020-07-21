const reverseString = (str) => {
  let rev = str
            .split('')
            .reduce((char, rev) => rev + char)

  console.log(rev);
}

reverseString('dog');