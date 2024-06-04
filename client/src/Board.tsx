import React from "react";
import { GameState } from "./hooks/useGameState";
import { Board, XorO } from "./types";

interface BoardProps {
  board: Board;
  playerTurn: XorO;
  gameState: number;
  handleClick: (rowIndex: number, colIndex: number) => void;
}

const Board = ({ board, playerTurn, gameState, handleClick }: BoardProps) => {
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
