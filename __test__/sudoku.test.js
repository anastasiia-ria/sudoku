import Sudoku from "./../src/sudoku.js";

describe("Sudoku", () => {
  test("should correctly create a sudoku object", () => {
    const newSudoku = new Sudoku();
    expect(newSudoku.board).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
  test("should return false if the row repeats any number 1-9 more than once", () => {
    const newSudoku = new Sudoku();
    expect(newSudoku.sudokuChecker()).toEqual(false);
  });

  test("should return true if the row repeats any number 1-9 more than once", () => {
    const newSudoku = new Sudoku();
    newSudoku.board = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [9, 4, 7, 2, 1, 3, 8, 5, 6],
      [9, 4, 7, 2, 1, 3, 8, 5, 6],
      [5, 2, 3, 1, 9, 6, 8, 7, 4],
      [9, 4, 7, 2, 1, 3, 8, 5, 6],
      [6, 2, 5, 1, 4, 8, 9, 3, 7],
      [5, 2, 3, 1, 9, 6, 8, 7, 4],
      [9, 4, 7, 2, 1, 3, 8, 5, 6],
      [6, 2, 5, 1, 4, 8, 9, 3, 7],
    ];
    expect(newSudoku.sudokuChecker()).toEqual(true);
  });
});
