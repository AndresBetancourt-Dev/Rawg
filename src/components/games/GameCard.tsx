import React from 'react'
import { Game } from 'types/games/Game'
import { Container } from './GameCard.styles'
import GamePlatforms from './GamePlatforms';

interface GameCardProps {
    game: Game;
}

const GameCard: React.FC<GameCardProps> = ({game}) => {
  return (
    <Container background_image={game.background_image} dominant_color={game.dominant_color}>
        <h1>{game.name}</h1>
        <GamePlatforms game={game}/>
    </Container>
  );
};

export default GameCard;