import { useEffect } from "react";
import "./App.css";
import { use2048 } from "./hooks/use2048";
import Header from "./components/Header";
import Controls from "./components/Controls";
import GameBoard from "./components/GameBoard";

function App() {
    const { board, score, bestScore, gameOver, won, move, resetGame } = use2048();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowLeft":
                    move("left");
                    break;
                case "ArrowRight":
                    move("right");
                    break;
                case "ArrowUp":
                    move("up");
                    break;
                case "ArrowDown":
                    move("down");
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [move]);

    return (
        <main style={{ padding: "20px" }}>
            <Header score={score} bestScore={bestScore} />
            <Controls onNewGame={resetGame} />
            <GameBoard board={board} />

            {won && <p>Vyhrál jsi!</p>}
            {gameOver && <p>Konec hry!</p>}
        </main>
    );
}

export default App;