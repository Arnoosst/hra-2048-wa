
export interface TileType {
    id: number;
    value: number;
    row: number;
    col: number;
}

export interface GameState {
    boardSize: number;
    tiles: TileType[];
    score: number;
    bestScore: number;
    gameOver: boolean;
    won: boolean;
}