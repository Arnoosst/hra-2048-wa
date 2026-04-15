import "./HowToPlay.css";
import "./Controls.css";

type Props = {
    onBack: () => void;
};

export default function HowToPlay({ onBack }: Props) {
    return (
        <div className="howto">
            <div className="howto__phone">
                <div className="howto__header">
                    <button className="btn btn--secondary" onClick={onBack}>
                        ← Back
                    </button>
                </div>

                <h1 className="howto__title">How to Play</h1>

                <div className="howto__content">
                    <p>
                        Use your <strong>arrow keys</strong> or <strong>swipe</strong> to move tiles.
                    </p>

                    <p>
                        When two tiles with the same number touch, they <strong>merge into one</strong>.
                    </p>

                    <p>
                        After every move, a new tile appears on the board.
                    </p>

                    <p>
                        Your goal is to reach the tile <strong>2048</strong>.
                    </p>

                    <div className="howto__example">
                        <div className="howto__tile">2</div>
                        <div className="howto__plus">+</div>
                        <div className="howto__tile">2</div>
                        <div className="howto__equals">=</div>
                        <div className="howto__tile howto__tile--result">4</div>
                    </div>
                </div>
            </div>
        </div>
    );
}