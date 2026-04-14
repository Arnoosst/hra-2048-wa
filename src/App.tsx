import { useEffect, useState } from "react";
import "./App.css";
import { use2048 } from "./hooks/use2048";
import Header from "./components/Header";
import Controls from "./components/Controls";
import GameBoard from "./components/GameBoard";

function App() {
    const { board, score, bestScore, gameOver, won, move, resetGame } = use2048();

    // 🆕 nové stavy
    const [isPaused, setIsPaused] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [history, setHistory] = useState<any[]>([]);

    // 🆕 KEYBOARD HANDLING (blok při pause/menu + ukládání history)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isPaused || isMenuOpen) return;

            const map: Record<string, "left"|"right"|"up"|"down"> = {
                ArrowLeft: "left",
                ArrowRight: "right",
                ArrowUp: "up",
                ArrowDown: "down",
            };

            if (map[e.key]) {
                // uložíme předchozí stav
                setHistory(prev => [...prev, { board, score }]);

                move(map[e.key]);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [move, board, score, isPaused, isMenuOpen]);

    // 🆕 HANDLERY
    const handlePauseToggle = () => {
        setIsPaused(prev => !prev);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleUndo = () => {
        if (history.length === 0) return;

        const prev = history[history.length - 1];

        // ⚠️ Tady POZOR:
        // use2048 nemá setter → tohle bude fungovat jen pokud ho tam přidáš
        console.log("UNDO", prev);

        setHistory(h => h.slice(0, -1));
    };

    const handleRestart = () => {
        setHistory([]);
        resetGame();
        setIsMenuOpen(false);
        setIsPaused(false);
    };

    return (
        <div className="app">
            <Header score={score} bestScore={bestScore} />

            <main className="app__main">
                {/* 🆕 Controls */}
                <Controls
                    onNewGame={handleRestart}
                    onPause={handlePauseToggle}
                    onMenu={handleMenuToggle}
                    onUndo={handleUndo}
                />

                <GameBoard board={board} />

                {won && <p className="status status--win">Vyhrál jsi!</p>}
                {gameOver && <p className="status status--over">Konec hry!</p>}

                {/* 🆕 PAUSE OVERLAY */}
                {isPaused && (
                    <div className="overlay">
                        <p>⏸️ Pauza</p>
                    </div>
                )}

                {/* 🆕 MENU */}
                {isMenuOpen && (
                    <div className="menu">
                        <button onClick={handleRestart}>Nová hra</button>
                        <button onClick={handleMenuToggle}>Zavřít</button>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;