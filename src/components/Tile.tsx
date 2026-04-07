

type TileProps = {
    value: number;
};

const Tile = ({ value }: TileProps) => {
    return <div>{value}</div>;
};

export default Tile;