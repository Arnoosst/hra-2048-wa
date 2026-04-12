type Props = {
    score: number;
    bestScore: number;
};

export default function Header({ score, bestScore }: Props) {
    return (
        <header>
            <h1>2048</h1>
            <p>Score: {score}</p>
            <p>Best: {bestScore}</p>
        </header>
    );
}