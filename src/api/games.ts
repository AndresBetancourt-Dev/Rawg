import { BASE_URL, KEY } from ".";

const GAMES = "games"

export const getGames = async () => {
    const response = await fetch(`${BASE_URL}${GAMES}${KEY}`);
    const { results } = await response.json();
    return results;
}