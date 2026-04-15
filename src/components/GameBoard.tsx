import { useRef } from "react";
import "./GameBoard.css";
import type { Board, Direction } from "../types";
import Tile from "./Tile";

type Props = {
    board: Board;
    onSwipe?: (direction: Direction) => void;
    disabled?: boolean;
};

const MIN_SWIPE_DISTANCE = 30;

const GameBoard = ({ board, onSwipe, disabled = false }: Props) => {
    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (disabled) return;

        const touch = e.touches[0];
        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (disabled || !onSwipe) return;
        if (touchStartX.current === null || touchStartY.current === null) return;

        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStartX.current;
        const deltaY = touch.clientY - touchStartY.current;

        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);

        if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
            touchStartX.current = null;
            touchStartY.current = null;
            return;
        }

        let direction: Direction;

        if (absX > absY) {
            direction = deltaX > 0 ? "right" : "left";
        } else {
            direction = deltaY > 0 ? "down" : "up";
        }

        onSwipe(direction);

        touchStartX.current = null;
        touchStartY.current = null;
    };

    return (
        <section className="gameboard-wrapper">
            <div
                className="gameboard"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
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
        </section>
    );
};

export default GameBoard;