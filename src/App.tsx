import { useEffect } from "react";
import "./App.css";
import { use2048 } from "./hooks/use2048";
import Header from "./components/Header";
import Controls from "./components/Controls";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import MainMenu from "./components/MainMenu";

function App() {
    const { board, score, bestScore, gameOver, won, move, resetGame } = use2048();

    const [screen, setScreen] = useState<"menu" | "game">("menu");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (screen !== "game") return;

            const map: Record<string, "left" | "right" | "up" | "down"> = {
                ArrowLeft: "left",
                ArrowRight: "right",
                ArrowUp: "up",
                ArrowDown: "down",
            };

            if (map[e.key]) move(map[e.key]);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [move, screen]);

    return (
        <div className="app">

            {screen === "menu" && (
                <MainMenu
                    bestScore={bestScore}
                    onStart={() => setScreen("game")}
                />
            )}

            {screen === "game" && (
                <>
                    <Header score={score} bestScore={bestScore} />

                    <main className="app__main">
                        <GameBoard board={board} />

                        <Controls onNewGame={resetGame} />

                        <div className="gameboard__hint">
                            Posouvej dlaždice (šipky nebo swipe)
                        </div>

                        <div className="gameboard__arrows">
                            ↑ → ↓ ←
                        </div>

                        {won && <p className="status status--win">Vyhrál jsi!</p>}
                        {gameOver && <p className="status status--over">Konec hry!</p>}
                    </main>
                </>
            )}

        </div>
    );
}


export default App;