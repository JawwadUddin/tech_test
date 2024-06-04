import React, { useState } from "react";
import { Board, XorO } from "../types";
import { checkWinner } from "../utils/gameUtils";

const PLAYER_X: XorO = "X";
const PLAYER_Y: XorO = "O";

export const GameState = {
  playerXWins: 0,
  playerOWins: 1,
  draw: 2,
  inProgress: 3,
};

function newBoard(length: number) {
  return Array.from({ length }, () => Array(length).fill(undefined));
}

const useGameState = () => {
  const [board, setBoard] = useState<Board>(newBoard(3));
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

  const handleReset = () => {
    setBoard(newBoard(3));
    setGameState(GameState.inProgress);
  };

  return {
    playerTurn,
    gameState,
    board,
    handleClick,
    handleReset,
  };
};

export default useGameState;
