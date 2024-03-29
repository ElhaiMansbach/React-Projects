import "./GameBoard.css";

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbole, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbole !== null}
                >
                  {playerSymbole}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
