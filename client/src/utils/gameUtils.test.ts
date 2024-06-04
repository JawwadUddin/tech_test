import { Board, Combinations, XorO } from "../types";
import { calculateWinningCombinations, checkWinner } from "./gameUtils";

describe("calculateWinningCombinations", () => {
  test("should correctly calculate winning combinations for a 4x4 grid", () => {
    const expectedCombinations: Combinations = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      [
        [0, 3],
        [1, 2],
        [2, 1],
        [3, 0],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
      ],
      [
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 3],
      ],
      [
        [0, 3],
        [1, 3],
        [2, 3],
        [3, 3],
      ],
    ];
    let winningCombinations = calculateWinningCombinations(4, 4);
    expect(winningCombinations).toEqual(expectedCombinations);
  });
});

describe("checkWinnerRow", () => {
  test("should return X as winner for a row X victory", () => {
    const board: Board = [
      ["X", "X", "X", "X"],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
    ];
    expect(checkWinner(board)).toBe("X");
  });
});

describe("checkWinnerColumn", () => {
  test("should return O as winner for a column O victory", () => {
    const board: Board = [
      ["O", "X", "O", "X"],
      ["X", "O", "O", "X"],
      ["X", "O", "O", "X"],
      [undefined, "X", "O", undefined],
    ];
    expect(checkWinner(board)).toBe("O");
  });
});

describe("checkWinnerDiagonal", () => {
  test("should return O as winner for a diagonal O victory", () => {
    const board: Board = [
      ["O", "X", "O", "X"],
      ["X", "O", "O", "X"],
      ["X", "O", "O", undefined],
      [undefined, "X", "X", "O"],
    ];
    expect(checkWinner(board)).toBe("O");
  });
});

describe("checkDraw", () => {
  test("should return undefined when board is full and game is a draw", () => {
    const board: Board = [
      ["O", "X", "O", "X"],
      ["X", "O", "O", "X"],
      ["X", "O", "X", "O"],
      ["X", "X", "X", "O"],
    ];
    expect(checkWinner(board)).toBe(undefined);
  });
});
