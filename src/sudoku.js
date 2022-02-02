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
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let check = true;
  for (let i = 0; i < this.board.length; i++) {
    let column = [];
    for (let j = 0; j < this.board[i].length; j++) {
      column.push(this.board[j][i]);
    }
    column.sort();
    for (let k = 0; k < this.board[i].length; k++) {
      if (column[k] !== array[k]) {
        check = false;
        break;
      }
    }
  }
  return check;
};

Sudoku.prototype.gridChecker = function () {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let gridBoard = [[], [], [], [], [], [], [], [], []];
  let check = true;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gridBoard[0].push(this.board[i][j]);
    }
    for (let j = 3; j < 6; j++) {
      gridBoard[1].push(this.board[i][j]);
    }
    for (let j = 6; j < 9; j++) {
      gridBoard[2].push(this.board[i][j]);
    }
  }

  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      gridBoard[3].push(this.board[i][j]);
    }
    for (let j = 3; j < 6; j++) {
      gridBoard[4].push(this.board[i][j]);
    }
    for (let j = 6; j < 9; j++) {
      gridBoard[5].push(this.board[i][j]);
    }
  }

  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      gridBoard[6].push(this.board[i][j]);
    }
    for (let j = 3; j < 6; j++) {
      gridBoard[7].push(this.board[i][j]);
    }
    for (let j = 6; j < 9; j++) {
      gridBoard[8].push(this.board[i][j]);
    }
  }

  for (let i = 0; i < gridBoard.length; i++) {
    gridBoard[i].sort();
    for (let j = 0; j < gridBoard[i].length; j++) {
      if (array[j] !== gridBoard[i][j]) {
        check = false;
        break;
      }
    }
  }

  return check;
};
