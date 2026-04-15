import "./PauseModal.css";
import "./Controls.css";

type Props = {
    onResume: () => void;
    onRestart: () => void;
    onExit: () => void;
};

export default function PauseModal({ onResume, onRestart, onExit }: Props) {
    return (
        <div className="pause-overlay">
            <div className="pause-modal">
                <div className="pause-modal__header">
                    <h2 className="pause-modal__title">Paused</h2>
                    <button className="pause-modal__close" onClick={onResume}>
                        ✕
                    </button>
                </div>

                <div className="pause-modal__actions">
                    <button className="btn btn--primary pause-modal__button" onClick={onResume}>
                        ▶ Resume
                    </button>

                    <button className="btn btn--ghost pause-modal__button" onClick={onRestart}>
                        ↺ Restart
                    </button>

                    <button className="btn btn--ghost pause-modal__button" onClick={onExit}>
                        ⌂ Exit to Menu
                    </button>
                </div>

                <p className="pause-modal__text">Hra je pozastavena</p>
            </div>
        </div>
    );
}