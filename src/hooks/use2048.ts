import { useState } from "react";
import type { Board, Direction } from "../types";
import {
    addRandomTile,
    canMove,
    createInitialBoard,
    hasWon,
    moveBoard,
} from "../utils/game2048";
import { loadBestScore, saveBestScore } from "../utils/storage";

type HistoryEntry = {
    board: Board;
    score: number;
};

function cloneBoard(board: Board): Board {
    return board.map((row) => [...row]);
}

export function use2048() {
    const [board, setBoard] = useState<Board>(createInitialBoard());
    const [score, setScore] = useState<number>(0);
    const [bestScore, setBestScore] = useState<number>(loadBestScore());
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [won, setWon] = useState<boolean>(false);
    const [history, setHistory] = useState<HistoryEntry[]>([]);

    const move = (direction: Direction) => {
        if (gameOver) return;

        const result = moveBoard(board, direction);
        if (!result.moved) return;

        setHistory((prev) => [
            ...prev,
            {
                board: cloneBoard(board),
                score,
            },
        ]);

        const updatedBoard = addRandomTile(result.board);
        const newScore = score + result.gainedScore;

        setBoard(updatedBoard);
        setScore(newScore);

        if (newScore > bestScore) {
            setBestScore(newScore);
            saveBestScore(newScore);
        }

        if (hasWon(updatedBoard)) {
            setWon(true);
        } else {
            setWon(false);
        }

        if (!canMove(updatedBoard)) {
            setGameOver(true);
        } else {
            setGameOver(false);
        }
    };

    const undoMove = () => {
        if (history.length === 0) return;

        const previousState = history[history.length - 1];

        setBoard(cloneBoard(previousState.board));
        setScore(previousState.score);
        setGameOver(false);
        setWon(hasWon(previousState.board));
        setHistory((prev) => prev.slice(0, -1));
    };

    const resetGame = () => {
        setBoard(createInitialBoard());
        setScore(0);
        setGameOver(false);
        setWon(false);
        setHistory([]);
    };

    return {
        board,
        score,
        bestScore,
        gameOver,
        won,
        move,
        undoMove,
        resetGame,
        canUndo: history.length > 0,
    };
}