import "./GameOverScreen.css";

type Props = {
    score: number;
    bestScore: number;
    won: boolean;
    onRestart: () => void;
    onMenu: () => void;
};

export default function GameOverScreen({
                                           score,
                                           bestScore,
                                           won,
                                           onRestart,
                                           onMenu,
                                       }: Props) {
    return (
        <div className="gameover-overlay">
            <div className="gameover-card">
                <h2>{won ? "YOU WIN!" : "GAME OVER!"}</h2>

                <p>Score: {score}</p>
                <p>Best: {bestScore}</p>

                <div className="gameover-actions">
                    <button className="btn btn--primary" onClick={onRestart}>
                        {won ? "PLAY AGAIN" : "TRY AGAIN"}
                    </button>

                    <button className="btn btn--secondary" onClick={onMenu}>
                        EXIT TO MENU
                    </button>
                </div>
            </div>
        </div>
    );
}