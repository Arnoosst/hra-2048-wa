import "./Controls.css";

type Props = {
    onBack: () => void;
    onNewGame: () => void;
    onMenu: () => void;
    canGoBack: boolean;
};

const Controls = ({ onBack, onNewGame, onMenu, canGoBack }: Props) => {
    return (
        <div className="controls">
            <button
                className="btn btn--secondary"
                onClick={onBack}
                disabled={!canGoBack}
            >
                ↩ Zpět
            </button>

            <button className="btn btn--secondary" onClick={onNewGame}>
                ↺ Restart
            </button>

            <button className="btn btn--secondary" onClick={onMenu}>
                ≡ Menu
            </button>
        </div>
    );
};

export default Controls;