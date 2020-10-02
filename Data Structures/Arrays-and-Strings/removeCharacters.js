// Remove specified characters from a string

// Input: string = 'Cowbell', remove = 'wll'
// Output: 'Cobe'

const log = console.log;

const removeCharacters = (string, remove) => {
    let map = {}, results = ''
    
    for (let char of remove) {
        map[char] = map[char]+1 || 1;
    }


    for (let char of string ) {
        if(!map[char]) results += char
    }

   return results

}

log(removeCharacters('P u', ' '))