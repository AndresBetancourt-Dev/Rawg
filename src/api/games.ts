import { BASE_URL, KEY } from ".";

const GAMES = "games"

export const getGames = async () => {
    const response = await fetch(`${BASE_URL}${GAMES}${KEY}`);
    const { results } = await response.json();
    return results;
}

export const getLatestGames = async () => {
    const response = await fetch(`${BASE_URL}${GAMES}${KEY}`);
    const { results } = await response.json();
    return results;
}

export const getGamesByPage = async (page: number) => {
    const response = await fetch(`${BASE_URL}${GAMES}${KEY}&page=${page}`);
    const { results, next } = await response.json();
    return { results, next };
}