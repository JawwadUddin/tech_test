import { Combinations, XorO } from "../types";

let winningCombinations: Combinations = [];

export function calculateWinningCombinations(
  gridSize: number,
  winLength: number = 4
) {
  if (gridSize === 3) {
    return (winningCombinations = [
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
    ]);
  }

  const solNo = gridSize + 1 - winLength;
  const combinations: Combinations = [];

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < solNo; j++) {
      // horizontal combinations
      combinations.push([
        [i, j],
        [i, j + 1],
        [i, j + 2],
        [i, j + 3],
      ]);

      // vertical combinations
      combinations.push([
        [j, i],
        [j + 1, i],
        [j + 2, i],
        [j + 3, i],
      ]);

      // diagonal combinations
      if (i < solNo && j < solNo) {
        // positive gradient diagonals
        combinations.push([
          [i, j],
          [i + 1, j + 1],
          [i + 2, j + 2],
          [i + 3, j + 3],
        ]);

        // negative gradient diagonals
        combinations.push([
          [i, gridSize - 1 - j],
          [i + 1, gridSize - 1 - j - 1],
          [i + 2, gridSize - 1 - j - 2],
          [i + 3, gridSize - 1 - j - 3],
        ]);
      }
    }
  }
  return (winningCombinations = combinations);
}

export const checkWinner = (board: (XorO | undefined)[][]) => {
  for (const combination of winningCombinations) {
    const [a, b, c, d] = combination;
    const valueA = board[a[0]][a[1]];
    const valueB = board[b[0]][b[1]];
    const valueC = board[c[0]][c[1]];

    if (d) {
      const valueD = board[d[0]][d[1]];
      if (valueA && valueA === valueB && valueA === valueC && valueA === valueD)
        return valueA; // Return 'X' or 'O' if there's a winner
    } else if (valueA && valueA === valueB && valueA === valueC) return valueA; // Return 'X' or 'O' if there's a winner
  }
  return undefined; // Return undefined if there is no winner
};
