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
    expect(newSudoku.rowChecker()).toEqual(false);
  });

  test("should return true if the row does not repeat any number 1-9 more than once", () => {
    const newSudoku = new Sudoku();
    newSudoku.board = [
      [4, 3, 5, 2, 6, 9, 7, 8, 1],
      [6, 8, 2, 5, 7, 1, 4, 9, 3],
      [1, 9, 7, 8, 3, 4, 5, 6, 2],
      [8, 2, 6, 1, 9, 5, 3, 4, 7],
      [3, 7, 4, 6, 8, 2, 9, 1, 5],
      [9, 5, 1, 7, 4, 3, 6, 2, 8],
      [5, 1, 9, 3, 2, 6, 8, 7, 4],
      [2, 4, 8, 9, 5, 7, 1, 3, 6],
      [7, 6, 3, 4, 1, 8, 2, 5, 9],
    ];
    expect(newSudoku.rowChecker()).toEqual(true);
  });

  test("should return true if the column does not repeat any number 1-9 more than once", () => {
    const newSudoku = new Sudoku();
    newSudoku.board = [
      [4, 3, 5, 2, 6, 9, 7, 8, 1],
      [6, 8, 2, 5, 7, 1, 4, 9, 3],
      [1, 9, 7, 8, 3, 4, 5, 6, 2],
      [8, 2, 6, 1, 9, 5, 3, 4, 7],
      [3, 7, 4, 6, 8, 2, 9, 1, 5],
      [9, 5, 1, 7, 4, 3, 6, 2, 8],
      [5, 1, 9, 3, 2, 6, 8, 7, 4],
      [2, 4, 8, 9, 5, 7, 1, 3, 6],
      [7, 6, 3, 4, 1, 8, 2, 5, 9],
    ];
    expect(newSudoku.columnChecker()).toEqual(true);
  });

  test("should return false if columns repeat any number 1-9 more than once", () => {
    const newSudoku = new Sudoku();
    expect(newSudoku.columnChecker()).toEqual(false);
  });

  test("should return true if the grid does not repeat any number 1-9 more than once", () => {
    const newSudoku = new Sudoku();
    newSudoku.board = [
      [4, 3, 5, 2, 6, 9, 7, 8, 1],
      [6, 8, 2, 5, 7, 1, 4, 9, 3],
      [1, 9, 7, 8, 3, 4, 5, 6, 2],
      [8, 2, 6, 1, 9, 5, 3, 4, 7],
      [3, 7, 4, 6, 8, 2, 9, 1, 5],
      [9, 5, 1, 7, 4, 3, 6, 2, 8],
      [5, 1, 9, 3, 2, 6, 8, 7, 4],
      [2, 4, 8, 9, 5, 7, 1, 3, 6],
      [7, 6, 3, 4, 1, 8, 2, 5, 9],
    ];
    expect(newSudoku.gridChecker()).toEqual(true);
  });

  test("should return false if the grid repeats any number 1-9 more than once", () => {
    const newSudoku = new Sudoku();
    expect(newSudoku.gridChecker()).toEqual(false);
  });
});
