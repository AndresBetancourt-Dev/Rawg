import { BASE_URL, KEY } from ".";

const GAMES = "games"

export const getGames = async () => {
    const response = await fetch(`${BASE_URL}${GAMES}${KEY}`);
    const { results } = await response.json();
    return results;
}

export const getLatestGames = async () => {
    const currentYear = new Date().getFullYear();
    const [currentDate] = new Date().toISOString().split('T');
    const response = await fetch(`${BASE_URL}${GAMES}${KEY}&dates=${currentYear}-01-01,${currentDate}`);
    const { results } = await response.json();
    return results;
}

export const getGame = async (slug: string | string[] | undefined) => {
    const response = await fetch(`${BASE_URL}${GAMES}/${slug}${KEY}`);
    const game = await response.json();
    return game;
}

export const getGamesByPage = async (page: number) => {
    const response = await fetch(`${BASE_URL}${GAMES}${KEY}&page=${page}`);
    const { results, next } = await response.json();
    return { results, next };
}

export const getLatestGamesByPage = async (page: number) => {
    const currentYear = new Date().getFullYear();
    const [currentDate] = new Date().toISOString().split('T');
    const response = await fetch(`${BASE_URL}${GAMES}${KEY}&dates=${currentYear}-01-01,${currentDate}&page=${page}`);
    const { results, next } = await response.json();
    return { results, next };
}