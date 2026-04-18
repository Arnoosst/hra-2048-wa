import "./MainMenu.css";
import "./Controls.css";
import { useState } from "react";

type Props = {
    onStart: () => void;
    onHowTo: () => void;
};

export default function MainMenu({ onStart, onHowTo }: Props) {
    const [bestScore] = useState<number>(() => {
        const value = localStorage.getItem("game2048-best-score");
        return value ? Number(value) : 0;
    });

    return (
        <div className="main-menu">
            <div className="main-menu__phone">
                <h1 className="main-menu__title">2048</h1>

                <div className="main-menu__best">
                    <span className="main-menu__best-icon">👑</span>
                    <span>BEST: {bestScore}</span>
                </div>

                <div className="main-menu__actions">
                    <button
                        className="btn btn--primary main-menu__button"
                        onClick={onStart}
                    >
                        ▶ START GAME
                    </button>

                    <button
                        className="btn btn--ghost main-menu__button"
                        onClick={onHowTo}
                    >
                        ? HOW TO PLAY
                    </button>
                </div>
            </div>
        </div>
    );
}