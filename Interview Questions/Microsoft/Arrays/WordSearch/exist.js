// Given an m x n grid of characters 'board' and a string 'word', return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
// horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input: board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
], word = "SEE"
// Output: true

// Input: board = [
//     ["A","B","C","E"],
//     ["S","F","C","S"],
//     ["A","D","E","E"]
// ], word = "ABCB"
// Output: false

const log = console.log;

const exist = (board, word) => {
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] === word[0] && 
                search(board, word, r, c)) return true;
        }
    }
    return false;
};

const search = (board, word, r, c) => {
    if (!word.length) return true;
    if (
        r < 0 || 
        r >= board.length || 
        c < 0 || 
        c >= board[0].length || 
        board[r][c] !== word[0]
        ) return false;
    
    let temp = board[r][c], newWrd = word.slice(1);
    board[r][c] = '';

    let found = search(board, newWrd, r-1, c) ||
    search(board, newWrd, r+1, c) ||
    search(board, newWrd, r, c-1) ||
    search(board, newWrd, r, c+1);

    board[r][c] = temp;
    return found;
}
log(exist([
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
], "ABCB"))
