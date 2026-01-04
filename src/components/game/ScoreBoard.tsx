import { cn } from "@/lib/utils";

interface ScoreBoardProps {
  scores: {
    X: number;
    O: number;
    draws: number;
  };
  currentPlayer: "X" | "O";
}

const ScoreBoard = ({ scores, currentPlayer }: ScoreBoardProps) => {
  return (
    <div className="flex justify-center gap-2 sm:gap-4 w-full max-w-md mx-auto">
      {/* Player X Score */}
      <div
        className={cn(
          "flex-1 p-2 sm:p-3 rounded-xl bg-card/60 backdrop-blur-sm border transition-all duration-300",
          currentPlayer === "X"
            ? "border-playerX/60 box-glow-x"
            : "border-gridLine/30"
        )}
      >
        <div className="text-center">
          <span className="text-xl sm:text-2xl font-display font-bold text-playerX text-glow-x">
            X
          </span>
          <p className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            {scores.X}
          </p>
          <p className="text-xs text-muted-foreground font-body">wins</p>
        </div>
      </div>

      {/* Draws */}
      <div className="flex-1 p-2 sm:p-3 rounded-xl bg-card/60 backdrop-blur-sm border border-gridLine/30">
        <div className="text-center">
          <span className="text-xl sm:text-2xl font-display font-bold text-muted-foreground">
            ═
          </span>
          <p className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            {scores.draws}
          </p>
          <p className="text-xs text-muted-foreground font-body">draws</p>
        </div>
      </div>

      {/* Player O Score */}
      <div
        className={cn(
          "flex-1 p-2 sm:p-3 rounded-xl bg-card/60 backdrop-blur-sm border transition-all duration-300",
          currentPlayer === "O"
            ? "border-playerO/60 box-glow-o"
            : "border-gridLine/30"
        )}
      >
        <div className="text-center">
          <span className="text-xl sm:text-2xl font-display font-bold text-playerO text-glow-o">
            O
          </span>
          <p className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            {scores.O}
          </p>
          <p className="text-xs text-muted-foreground font-body">wins</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
