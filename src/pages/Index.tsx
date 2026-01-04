import { useEffect, useRef } from "react";
import GameBoard from "@/components/game/GameBoard";
import ScoreBoard from "@/components/game/ScoreBoard";
import GameStatus from "@/components/game/GameStatus";
import GameControls from "@/components/game/GameControls";
import { useTicTacToe } from "@/hooks/useTicTacToe";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const Index = () => {
  const {
    board,
    currentPlayer,
    winner,
    winningLine,
    isDraw,
    scores,
    handleCellClick,
    startNewGame,
    resetScores,
    gameOver,
  } = useTicTacToe();

  const { playPlaceSound, playWinSound, playDrawSound } = useSoundEffects();
  const prevBoardRef = useRef(board);
  const prevWinnerRef = useRef(winner);
  const prevDrawRef = useRef(isDraw);

  useEffect(() => {
    // Detect new piece placed
    const prevBoard = prevBoardRef.current;
    const newMoveIndex = board.findIndex((cell, i) => cell !== null && prevBoard[i] === null);
    
    if (newMoveIndex !== -1 && board[newMoveIndex]) {
      playPlaceSound(board[newMoveIndex] as "X" | "O");
    }
    prevBoardRef.current = board;
  }, [board, playPlaceSound]);

  useEffect(() => {
    // Detect win
    if (winner && !prevWinnerRef.current) {
      playWinSound();
    }
    prevWinnerRef.current = winner;
  }, [winner, playWinSound]);

  useEffect(() => {
    // Detect draw
    if (isDraw && !prevDrawRef.current) {
      playDrawSound();
    }
    prevDrawRef.current = isDraw;
  }, [isDraw, playDrawSound]);

  return (
    <div className="h-screen bg-background flex flex-col items-center justify-center p-3 sm:p-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-playerX/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-playerO/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-3 sm:gap-4">
        {/* Title */}
        <header className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-wider">
            TIC TAC TOE
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-1">
            Challenge a friend
          </p>
        </header>

        {/* Score Board */}
        <ScoreBoard scores={scores} currentPlayer={currentPlayer} />

        {/* Game Status */}
        <GameStatus
          winner={winner}
          isDraw={isDraw}
          currentPlayer={currentPlayer}
        />

        {/* Game Board */}
        <GameBoard
          board={board}
          onCellClick={handleCellClick}
          winningLine={winningLine}
          winner={winner}
          disabled={gameOver}
        />

        {/* Controls */}
        <GameControls
          onNewGame={startNewGame}
          onResetScores={resetScores}
          gameOver={gameOver}
        />
      </div>
    </div>
  );
};

export default Index;
