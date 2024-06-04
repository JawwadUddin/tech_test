import React from "react";
import useGameState, { GameState } from "./hooks/useGameState";

const Board = () => {
  const { playerTurn, board, handleClick, gameState } = useGameState();

  return (
    <div className="flex flex-col gap-1">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((column, colIndex) => (
            <div
              onClick={() => handleClick(rowIndex, colIndex)}
              key={colIndex}
              className={`border-2 border-gray-900 w-10 h-10 items-center justify-center text-2xl font-bold flex ${
                gameState === GameState.inProgress && "cursor-pointer"
              }`}
            >
              {column}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
