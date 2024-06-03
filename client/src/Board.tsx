import React, { useState } from "react";
import { XorO } from "./types";

const PLAYER_X: XorO = "X";
const PLAYER_Y: XorO = "O";

const Board = () => {
  const [board, setBoard] = useState<(XorO | undefined)[][]>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);
  const [playerTurn, setPlayerTurn] = useState<XorO>(PLAYER_X);

  const handleClick = (rowIndex: number, colIndex: number) => {
    const updatedBoard = board.map((row, rowI) => {
      if (rowI !== rowIndex) return row;
      return row.map((column, colI) => {
        if (colI !== colIndex) return column;
        return column || playerTurn;
      });
    });
    setBoard(updatedBoard);
  };

  return (
    <div className="flex flex-col gap-1">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((column, colIndex) => (
            <div
              onClick={() => handleClick(rowIndex, colIndex)}
              key={colIndex}
              className="border-2 border-gray-900 w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex"
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
