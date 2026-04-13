import "./GameBoard.css";
import type { Board } from "../types";
import Tile from "./Tile";

type Props = { board: Board; };

const GameBoard = ({ board }: Props) => {
    return (
        <section className="gameboard-wrapper">
            <div className="gameboard">
                {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="gameboard__cell" />
                ))}

                {board.map((row, rowIndex) =>
                    row.map((cell, colIndex) =>
                        cell ? (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className="gameboard__tile"
                                style={{ gridRow: rowIndex + 1, gridColumn: colIndex + 1 }}
                            >
                                <Tile value={cell} />
                            </div>
                        ) : null
                    )
                )}
            </div>

            <p className="gameboard__hint">Posouvej dlaždice (šipky nebo swipe)</p>
            <div className="gameboard__arrows" aria-hidden="true">
                <span>↑</span><span>↓</span><span>←</span><span>→</span>
            </div>
        </section>
    );
};

export default GameBoard;