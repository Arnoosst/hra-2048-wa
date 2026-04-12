import type { Board, Cell, Direction, MoveResult } from "../types";

const SIZE = 4;

export function createEmptyBoard(): Board {
    return Array.from({ length: SIZE }, () => Array<Cell>(SIZE).fill(null));
}

export function getRandomEmptyCell(board: Board): [number, number] | null {
    const emptyCells: [number, number][] = [];

    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            if (board[row][col] === null) {
                emptyCells.push([row, col]);
            }
        }
    }

    if (emptyCells.length === 0) return null;
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

export function addRandomTile(board: Board): Board {
    const emptyCell = getRandomEmptyCell(board);
    if (!emptyCell) return board;

    const [row, col] = emptyCell;
    const newBoard = board.map((r) => [...r]);

    newBoard[row][col] = Math.random() < 0.9 ? 2 : 4;
    return newBoard;
}

export function createInitialBoard(): Board {
    let board = createEmptyBoard();
    board = addRandomTile(board);
    board = addRandomTile(board);
    return board;
}

function compressRow(row: Cell[]): number[] {
    return row.filter((cell): cell is number => cell !== null);
}

function mergeRowLeft(row: Cell[]): { newRow: Cell[]; gainedScore: number; moved: boolean } {
    const compact = compressRow(row);
    const merged: Cell[] = [];
    let gainedScore = 0;

    for (let i = 0; i < compact.length; i++) {
        if (compact[i] === compact[i + 1]) {
            const mergedValue = compact[i] * 2;
            merged.push(mergedValue);
            gainedScore += mergedValue;
            i++;
        } else {
            merged.push(compact[i]);
        }
    }

    while (merged.length < SIZE) {
        merged.push(null);
    }

    const moved = merged.some((value, index) => value !== row[index]);

    return {
        newRow: merged,
        gainedScore,
        moved,
    };
}

function reverseRows(board: Board): Board {
    return board.map((row) => [...row].reverse());
}

function transpose(board: Board): Board {
    return board[0].map((_, colIndex) => board.map((row) => row[colIndex]));
}

export function moveLeft(board: Board): MoveResult {
    let moved = false;
    let gainedScore = 0;

    const newBoard = board.map((row) => {
        const result = mergeRowLeft(row);
        if (result.moved) moved = true;
        gainedScore += result.gainedScore;
        return result.newRow;
    });

    return { board: newBoard, moved, gainedScore };
}

export function moveRight(board: Board): MoveResult {
    const reversed = reverseRows(board);
    const result = moveLeft(reversed);

    return {
        board: reverseRows(result.board),
        moved: result.moved,
        gainedScore: result.gainedScore,
    };
}

export function moveUp(board: Board): MoveResult {
    const transposed = transpose(board);
    const result = moveLeft(transposed);

    return {
        board: transpose(result.board),
        moved: result.moved,
        gainedScore: result.gainedScore,
    };
}

export function moveDown(board: Board): MoveResult {
    const transposed = transpose(board);
    const result = moveRight(transposed);

    return {
        board: transpose(result.board),
        moved: result.moved,
        gainedScore: result.gainedScore,
    };
}

export function moveBoard(board: Board, direction: Direction): MoveResult {
    switch (direction) {
        case "left":
            return moveLeft(board);
        case "right":
            return moveRight(board);
        case "up":
            return moveUp(board);
        case "down":
            return moveDown(board);
    }
}

export function hasWon(board: Board): boolean {
    return board.some((row) => row.some((cell) => cell === 2048));
}

export function canMove(board: Board): boolean {
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            const cell = board[row][col];

            if (cell === null) return true;
            if (col < SIZE - 1 && board[row][col + 1] === cell) return true;
            if (row < SIZE - 1 && board[row + 1][col] === cell) return true;
        }
    }

    return false;
}