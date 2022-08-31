import React from 'react'
import { Game } from '../../types/games/Game'
import { Container } from './GameCard.styles'

interface GameCardProps {
    game: Game;
}

const GameCard: React.FC<GameCardProps> = ({game}) => {
  return (
    <Container background_image={game.background_image} dominant_color={game.dominant_color}>
        <h1>{game.name}</h1>
    </Container>
  )
}

export default GameCard