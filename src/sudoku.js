export default function Sudoku() {
  this.board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}

Sudoku.prototype.sudokuChecker = function () {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let check = true;
  for (let i = 0; i < this.board.length; i++) {
    this.board[i].sort();
    for (let j = 0; j < this.board[i].length; j++) {
      if (array[j] !== this.board[i][j]) {
        check = false;
        break;
      }
    }
  }
  return check;
};
