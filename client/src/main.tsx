import React from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import useGameState from "./hooks/useGameState";

export const Main = () => {
  const { gameState, playerTurn, board, handleClick } = useGameState();
  return (
    <div className="flex flex-col mt-10 items-center gap-10">
      <div className="font-bold text-2xl">Tic Tac Toe</div>
      <Board
        board={board}
        playerTurn={playerTurn}
        gameState={gameState}
        handleClick={handleClick}
      />
      <GameOver gameState={gameState} />
    </div>
  );
};
