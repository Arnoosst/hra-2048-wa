export const BEST_SCORE_KEY = "game2048-best-score";

export function loadBestScore(): number {
    const value = localStorage.getItem(BEST_SCORE_KEY);
    return value ? Number(value) : 0;
}

export function saveBestScore(score: number): void {
    localStorage.setItem(BEST_SCORE_KEY, String(score));
}