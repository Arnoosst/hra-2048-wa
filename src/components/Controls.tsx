import "./Controls.css";

type Props = { onNewGame: () => void; };

const Controls = ({ onNewGame }: Props) => {
    return (
        <div className="controls">
            <button className="btn btn--secondary" onClick={onNewGame}>↩ Zpět</button>
            <button className="btn btn--secondary" onClick={onNewGame}>↺ Restart</button>
            <button className="btn btn--secondary">≡ Menu</button>
        </div>
    );
};

export default Controls;