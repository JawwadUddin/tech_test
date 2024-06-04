import React from "react";
import { GameState } from "./hooks/useGameState";

const GameOver = ({ gameState }: { gameState: number }) => {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerXWins:
      return <div className="font-bold">Player X Wins</div>;
    case GameState.playerOWins:
      return <div className="font-bold">Player O Wins</div>;
    case GameState.draw:
      return <div className="font-bold">Draw</div>;
    default:
      return <></>;
  }
};

export default GameOver;
