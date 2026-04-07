import Tile from "./Tile.tsx";
import { mockGameStates } from "../data/mockGameData.ts";

const GameBoard = () => {
    const game = mockGameStates[0];

    return (
        <section>
            <h2>Game Board</h2>
            <div>
                {game.tiles.map((tile) => (
                    <Tile key={tile.id} value={tile.value} />
                ))}
            </div>
        </section>
    );
};

export default GameBoard;