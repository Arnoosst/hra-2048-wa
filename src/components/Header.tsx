import "./Header.css";

type Props = { score: number; bestScore: number; };

const Header = ({ score, bestScore }: Props) => {
    return (
        <header className="header">
            <h1 className="header__title">2048</h1>
            <div className="header__scores">
                <div className="score-card">
                    <span className="score-card__label">SCORE</span>
                    <span className="score-card__value">{score}</span>
                </div>
                <div className="score-card">
                    <span className="score-card__label">BEST</span>
                    <span className="score-card__value">{bestScore}</span>
                </div>
            </div>
            <button className="btn btn--secondary">PAUSE</button>
        </header>
    );
};

export default Header;