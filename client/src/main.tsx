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
    <div className="flex flex-col pt-10 items-center gap-10 bg-sky-950 text-white min-h-screen">
      <div className="font-bold text-2xl">Tic Tac Toe</div>
      {boardLength > 3 && (
        <p className="opacity-40 italic">You need to obtain 4 in a row</p>
      )}
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
