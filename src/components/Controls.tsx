type Props = {
    onNewGame: () => void;
};

export default function Controls({ onNewGame }: Props) {
    return (
        <div>
            <button onClick={onNewGame}>New Game</button>
        </div>
    );
}