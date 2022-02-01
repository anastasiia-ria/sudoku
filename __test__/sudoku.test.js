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
});
