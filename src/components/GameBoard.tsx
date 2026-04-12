import type { Board } from "../types";

type Props = {
    board: Board;
};

export default function GameBoard({ board }: Props) {
    return (
        <div style={{ marginTop: "20px" }}>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: "flex" }}>
                    {row.map((cell, colIndex) => (
                        <div
                            key={colIndex}
                            style={{
                                width: "60px",
                                height: "60px",
                                border: "1px solid black",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "20px",
                                background: "#eeeeee",
                                color: "black",
                            }}
                        >
                            {cell ?? ""}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}