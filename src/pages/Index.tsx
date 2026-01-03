import GameBoard from "@/components/game/GameBoard";
import ScoreBoard from "@/components/game/ScoreBoard";
import GameStatus from "@/components/game/GameStatus";
import GameControls from "@/components/game/GameControls";
import { useTicTacToe } from "@/hooks/useTicTacToe";

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

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-playerX/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-playerO/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-6 sm:gap-8">
        {/* Title */}
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground tracking-wider">
            TIC TAC TOE
          </h1>
          <p className="text-muted-foreground font-body mt-2">
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
