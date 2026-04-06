import type { GameState } from "../../../src/types.ts";

export const mockGameStates: GameState[] = [
    {
        boardSize: 4,
        tiles: [
            { id: 1, value: 2, row: 0, col: 0 },
            { id: 2, value: 2, row: 0, col: 1 },
        ],
        score: 4,
        bestScore: 10,
        gameOver: false,
        won: false,
    },
    {
        boardSize: 4,
        tiles: [
            { id: 3, value: 4, row: 1, col: 1 },
            { id: 4, value: 8, row: 2, col: 2 },
        ],
        score: 12,
        bestScore: 50,
        gameOver: false,
        won: false,
    },
    {
        boardSize: 4,
        tiles: [{ id: 5, value: 2048, row: 0, col: 0 }],
        score: 3000,
        bestScore: 3000,
        gameOver: false,
        won: true,
    },
];