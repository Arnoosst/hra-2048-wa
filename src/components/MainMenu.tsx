import "./MainMenu.css";
import "./Controls.css";
import { loadBestScore } from "../utils/storage";
import { useEffect, useState } from "react";

type Props = {
    onStart: () => void;
    onHowTo: () => void;
};

export default function MainMenu({ onStart, onHowTo }: Props) {
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        setBestScore(loadBestScore());
    }, []);

    return (
        <div className="main-menu">
            <div className="main-menu__phone">
                <h1 className="main-menu__title">2048</h1>

                <div className="main-menu__best">
                    <span className="main-menu__best-icon">👑</span>
                    <span>BEST: {bestScore}</span>
                </div>

                <div className="main-menu__actions">
                    <button className="btn btn--primary main-menu__button" onClick={onStart}>
                        ▶ START GAME
                    </button>

                    <button className="btn btn--ghost main-menu__button" onClick={onHowTo}>
                        ? HOW TO PLAY
                    </button>

                </div>
            </div>
        </div>
    );
}