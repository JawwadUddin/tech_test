import React from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import useGameState, { GameState } from "./hooks/useGameState";
import SelectGridSize from "./SelectGridSize";

export const Main = () => {
  const {
    gameState,
    playerTurn,
    board,
    boardLength,
    setBoardLength,
    handleClick,
    handleReset,
  } = useGameState();
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
      {gameState !== GameState.inProgress && (
        <button
          className="bg-pink-600 rounded-md text-white font-bold py-2 px-4"
          onClick={handleReset}
        >
          Reset
        </button>
      )}
      <SelectGridSize
        boardLength={boardLength}
        setBoardLength={setBoardLength}
      />
    </div>
  );
};
