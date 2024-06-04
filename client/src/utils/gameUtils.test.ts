import { calculateWinningCombinations } from "./gameUtils";

describe("calculateWinningCombinations", () => {
  test("should correctly calculate winning combinations for a 4x4 grid", () => {
    const expectedCombinations: [number, number][][] = [
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
