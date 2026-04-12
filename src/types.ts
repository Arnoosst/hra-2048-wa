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

export type Direction = "left" | "right" | "up" | "down";
export type Cell = number | null;
export type Board = Cell[][];

export interface MoveResult {
    board: Board;
    moved: boolean;
    gainedScore: number;
}