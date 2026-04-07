import { mockGameStates } from "../data/mockGameData.ts";

const Header = () => {
    const game = mockGameStates[0];

    return (
        <header>
            <h1>2048</h1>
            <p>Score: {game.score}</p>
            <p>Best: {game.bestScore}</p>
        </header>
    );
};

export default Header;