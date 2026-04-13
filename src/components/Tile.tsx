import "./Tile.css";

type TileProps = {
    value: number;
};

const Tile = ({ value }: TileProps) => {
    const tileClass = value <= 2048
        ? `tile tile--${value}`
        : "tile tile--high";


    const fontSize = value >= 1000 ? "small" : value >= 100 ? "medium" : "large";

    return (
        <div className={`${tileClass} tile--font-${fontSize}`}>
            {value}
        </div>
    );
};

export default Tile;