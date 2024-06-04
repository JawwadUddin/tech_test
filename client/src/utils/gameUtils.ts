import { XorO } from "../types";

let winningCombinations = [
  // Rows
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  // Columns
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  // Diagonals
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

export function calculateWinningCombinations(
  gridSize: number,
  winLength: number
) {
  return;
}

export const checkWinner = (board: (XorO | undefined)[][]) => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    const valueA = board[a[0]][a[1]];
    const valueB = board[b[0]][b[1]];
    const valueC = board[c[0]][c[1]];
    if (valueA && valueA === valueB && valueA === valueC) return valueA;
  }
  return undefined;
};
