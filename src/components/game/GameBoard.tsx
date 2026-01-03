import GameCell from "./GameCell";

interface GameBoardProps {
  board: (string | null)[];
  onCellClick: (index: number) => void;
  winningLine: number[] | null;
  disabled: boolean;
}

const GameBoard = ({ board, onCellClick, winningLine, disabled }: GameBoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] mx-auto">
      {board.map((cell, index) => (
        <GameCell
          key={index}
          value={cell as "X" | "O" | null}
          onClick={() => onCellClick(index)}
          isWinning={winningLine?.includes(index) ?? false}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default GameBoard;
