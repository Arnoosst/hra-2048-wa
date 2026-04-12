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

export function use2048() {
    const [board, setBoard] = useState<Board>(createInitialBoard());
    const [score, setScore] = useState<number>(0);
    const [bestScore, setBestScore] = useState<number>(loadBestScore());
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [won, setWon] = useState<boolean>(false);

    const move = (direction: Direction) => {
        if (gameOver) return;

        const result = moveBoard(board, direction);
        if (!result.moved) return;

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
        }

        if (!canMove(updatedBoard)) {
            setGameOver(true);
        }
    };

    const resetGame = () => {
        setBoard(createInitialBoard());
        setScore(0);
        setGameOver(false);
        setWon(false);
    };

    return {
        board,
        score,
        bestScore,
        gameOver,
        won,
        move,
        resetGame,
    };
}