// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells 
// are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example 1:

// Input: board = [
//     ["o","a","a","n"],
//     ["e","t","a","e"],
//     ["i","h","k","r"],
//     ["i","f","l","v"]
// ], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

/*

root: {
    o: {
        a: {
            t: {
                h: oath
            }
        }
    },
    p: {
        e: {
            a: pea
        }
    },
    e: {
        a: {
            t: eat
        }
    },
    r: {
        a: {
            i: {
                n: rain
            }
        }
    }
}

*/

// Example 2:

// Input: board = [
//     ["a","b"],
//     ["c","d"]
// ], words = ["abcb"]
// Output: []

const log = console.log;

// class TrieNode {
//     constructor(value) {
//       this.value = value;
//       this.isWord = false;
//       this.children = {};
//     }
// }

// class Trie {
//     constructor() {
//         this.children = {};
//     }

//     insert(word) {
//         let cur = this;
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i];
//             if (!cur.children[char]) {
//                 cur.children[char] = new Trie();
//             }
//             cur = cur.children[char];
//         }
//         cur.isWord = true;
//     }
    
//     search(word) {
//         let cur = this;
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i];
//             if (!cur.children[char]) return false;
//             cur = cur.children[char];
//         }
//         return cur.isWord === true;
//     }

//     startsWith(prefix) {
//         let cur = this;
//         for (let i = 0; i < prefix.length; i++) {
//             let char = prefix[i];
//             if (!cur.children[char]) return false;
//             cur = cur.children[char];
//         }
//         return true;
//     }

//     // Walk throughh these steps
//     // autocomplete(fragment) {
//     //     if (!fragment) { return; }
//     //     let result = [];
//     //     let n = this.root;
//     //     for (let i = 0; i < fragment.length; i++) {
//     //       let c = fragment[i];
//     //       if (!n.children[c]) {
//     //         break;
//     //       }
//     //       n = n.children[c];
//     //       if (i === fragment.length - 1) {
//     //         const queue = [];
//     //         queue.push([n, fragment]);
//     //         while (queue.length) {
//     //           let element = queue.shift();
//     //           let [node, word] = element;
//     //           if (node.isWord) {
//     //             result.push(word)
//     //           }
//     //           for (const j in node.children) {
//     //             const child = node.children[j];
//     //             queue.push([child, word + child.value]);
//     //           }
//     //         }
//     //       }
//     //     }
//     //     return result;
//     // }
// }

const buildTrie = (words) => {
    const root = {};

    for (let word of words) { // Each word becomes its own tree
        let curr = root;
        for (let char of word) { // Each character in the word becomes a key with it's value being the next character
            if (!curr[char]) curr[char] = {};
            curr = curr[char]; // We move our pointer down the trie
        }
        curr.end = word; // When we reach the last character in the trie, assign the word as it's value
    }
    return root;
}

const dfs = (root, row, col, board, res) => {
    if (root.end) {
        res.push(root.end); // If we reach the last char in the prefix trie then we have found a word
        root.end = null;
    }

    if (row < 0 || row >= board.length || 
        col < 0 || col >= board[0].length || 
        !root[board[row][col]] // This means the character at the current location of the board is not a key in the root
    ) return;

    let temp = board[row][col];
    board[row][col] = ' ';
    
    // We pass in temp so we can look at its children within the trie
    dfs(root[temp], row-1, col, board, res);
    dfs(root[temp], row+1, col, board, res);
    dfs(root[temp], row, col-1, board, res);
    dfs(root[temp], row, col+1, board, res);

    board[row][col] = temp;
    return;
}

const findWords = (board, words) => {
    const root = buildTrie(words), res = [];

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            dfs(root, row, col, board, res);
        }
    }
    return res;
};



// log(buildTrie(["oath","pea","eat","rain"]))

// log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],["oath","pea","eat","rain"]))

const trie = new Trie();
trie.insert('dog')
trie.insert('door')
trie.insert('does')
trie.insert('dolo')
trie.insert('dollar')

log(trie.autocomplete('doll'))