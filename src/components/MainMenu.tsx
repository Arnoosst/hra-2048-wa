type MainMenuProps = {
    bestScore?: number;
    onStart?: () => void;
};

function MainMenu({ bestScore = 5678, onStart }: MainMenuProps) {
    return (
        <div className="main-menu-overlay">
            <div className="main-menu">

                <div className="main-menu__handle" />

                <h1 className="main-menu__title">2048</h1>

                <div className="main-menu__best">
                    <span className="main-menu__best-value">
                        👑 {bestScore}
                    </span>
                    <span className="main-menu__best-label">Best</span>
                </div>

                <div className="main-menu__actions">
                    <button
                        className="main-menu__button main-menu__button--primary"
                        onClick={onStart}
                    >
                        ▶ Start Game
                    </button>

                    <button className="main-menu__button main-menu__button--secondary">
                        ❔ How to Play
                    </button>

                    <button className="main-menu__button main-menu__button--secondary">
                        🏆 Leaderboard
                    </button>
                </div>

                <div className="main-menu__bottom">
                    <button className="main-menu__icon-button"></button>
                    <button className="main-menu__icon-button"></button>
                    <button className="main-menu__icon-button"></button>
                </div>

            </div>
        </div>
    );
}

export default MainMenu;