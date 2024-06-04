import React, { useState } from "react";
import { XorO } from "../types";

const PLAYER_X: XorO = "X";
const PLAYER_Y: XorO = "O";

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

const checkWinner = (board: (XorO | undefined)[][]) => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    const valueA = board[a[0]][a[1]];
    const valueB = board[b[0]][b[1]];
    const valueC = board[c[0]][c[1]];
    if (valueA && valueA === valueB && valueA === valueC) return valueA;
  }
  return undefined;
};

export const GameState = {
  playerXWins: 0,
  playerOWins: 1,
  draw: 2,
  inProgress: 3,
};

const useGameState = () => {
  const [board, setBoard] = useState<(XorO | undefined)[][]>(
    Array.from({ length: 3 }, () => Array(3).fill(undefined))
  );
  const [playerTurn, setPlayerTurn] = useState<XorO>(PLAYER_X);
  const [gameState, setGameState] = useState<number>(GameState.inProgress);

  const handleClick = (rowIndex: number, colIndex: number) => {
    // do not update tile if value within tile already exists (previously selected)
    if (board[rowIndex][colIndex] || gameState !== GameState.inProgress) return;

    const updatedBoard = board.map((row, rowI) => {
      if (rowI !== rowIndex) return row;
      return row.map((column, colI) => {
        if (colI !== colIndex) return column;
        return column || playerTurn;
      });
    });
    setBoard(updatedBoard);

    // see if there is a winner
    const winner = checkWinner(updatedBoard);
    if (winner) {
      setGameState(
        winner === PLAYER_X ? GameState.playerXWins : GameState.playerOWins
      );
    } else if (updatedBoard.flat().every((cell) => cell !== undefined)) {
      // set game state to draw if all tiles are full
      setGameState(GameState.draw);
    }

    // alternate player turn
    setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_Y : PLAYER_X);
  };

  return {
    playerTurn,
    gameState,
    board,
    handleClick,
  };
};

export default useGameState;
