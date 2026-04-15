import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import MainMenu from "./components/MainMenu";
import PauseModal from "./components/PauseModal";
import HowToPlay from "./components/HowToPlay";

function App() {
    const [screen, setScreen] = useState<"menu" | "game" | "howto">("menu");
    const [paused, setPaused] = useState(false);
    const [gameKey, setGameKey] = useState(0);

    const handleStartGame = () => {
        setPaused(false);
        setGameKey((prev) => prev + 1);
        setScreen("game");
    };

    const handleOpenMenu = () => {
        setPaused(false);
        setScreen("menu");
    };

    const handleRestartFromPause = () => {
        setPaused(false);
        setGameKey((prev) => prev + 1);
        setScreen("game");
    };

    return (
        <>
            {screen === "menu" && (
                <MainMenu
                    onStart={handleStartGame}
                    onHowTo={() => setScreen("howto")}
                />
            )}

            {screen === "howto" && (
                <HowToPlay onBack={handleOpenMenu} />
            )}

            {screen === "game" && (
                <Game
                    key={gameKey}
                    paused={paused}
                    onPause={() => setPaused(true)}
                    onMenu={handleOpenMenu}
                />
            )}

            {paused && (
                <PauseModal
                    onResume={() => setPaused(false)}
                    onRestart={handleRestartFromPause}
                    onExit={handleOpenMenu}
                />
            )}
        </>
    );
}

export default App;