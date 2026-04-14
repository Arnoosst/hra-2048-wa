import "./Controls.css";

type Props = {
    onNewGame: () => void;
    onPause: () => void;
    onMenu: () => void;
    onUndo: () => void;
};

const Controls = ({ onNewGame, onPause, onMenu, onUndo }: Props) => {
    return (
        <div className="controls">
            <button className="btn btn--secondary" onClick={onUndo}>
                ↩ Zpět
            </button>

            <button className="btn btn--secondary" onClick={onNewGame}>
                ↺ Restart
            </button>

            <button className="btn btn--secondary" onClick={onMenu}>
                ≡ Menu
            </button>

            <button className="btn btn--secondary" onClick={onPause}>
                ⏸ Pause
            </button>
        </div>
    );
};

export default Controls;