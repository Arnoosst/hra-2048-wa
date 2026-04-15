import { useEffect } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Controls from "./Controls";
import { use2048 } from "../hooks/use2048";
import type { Direction } from "../types";

type Props = {
    paused: boolean;
    onPause: () => void;
    onMenu: () => void;
};

export default function Game({ paused, onPause, onMenu }: Props) {
    const {
        board,
        score,
        bestScore,
        gameOver,
        won,
        move,
        undoMove,
        resetGame,
        canUndo,
    } = use2048();

    useEffect(() => {
        if (paused) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            let direction: Direction | null = null;

            switch (e.key) {
                case "ArrowLeft":
                    direction = "left";
                    break;
                case "ArrowRight":
                    direction = "right";
                    break;
                case "ArrowUp":
                    direction = "up";
                    break;
                case "ArrowDown":
                    direction = "down";
                    break;
                case "Escape":
                    onPause();
                    return;
                default:
                    return;
            }

            e.preventDefault();
            move(direction);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [move, onPause, paused]);

    return (
        <div className="app">
            <Header
                score={score}
                bestScore={bestScore}
                onPause={onPause}
            />

            <main className="app__main">
                <GameBoard
                    board={board}
                    disabled={paused}
                    onSwipe={move}
                />

                <Controls
                    onBack={undoMove}
                    onNewGame={resetGame}
                    onMenu={onMenu}
                    canGoBack={canUndo}
                />
            </main>

            <footer className="app__footer">
                {gameOver ? (
                    <strong>Game Over</strong>
                ) : won ? (
                    <strong>You reached 2048!</strong>
                ) : (
                    <>
                        Posouvej dlaždice (šipky nebo swipe)
                        <div style={{ marginTop: 8, fontSize: 28 }}>↑ ↓ ← →</div>
                    </>
                )}
            </footer>
        </div>
    );
}