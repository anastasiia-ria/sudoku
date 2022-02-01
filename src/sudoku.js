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

Sudoku.prototype.rowChecker = function () {
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

Sudoku.prototype.columnChecker = function () {
  // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // let check = true;
  // for (let i = 0; i < this.board.length; i++) {
  //   let column = [];
  //   for (let j = 0; j < this.board[i].length; j++) {
  //     column.push(this.board[j][i]);
  //   }
  //   console.log(column);
  //   column.sort();
  //   for (let k = 0; k < this.board[i].length; k++) {
  //     if (column[k] !== array[k]) {
  //       check = false;
  //       break;
  //     }
  //   }
  // }
  // return check;
};
