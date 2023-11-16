import MetacriticRating from "components/others/MetacriticRating";
import React from "react";
import { Game } from "types/games/Game";
import {
  Container,
  GameCardContent,
  GameCardHighlights,
  GameCardInformation,
  GameCardTitle,
  GameCardDate,
} from "./GameCard.styles";
import GameCardRating from "./GameCardRating";
import GamePlatforms from "./GamePlatforms";

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {

  return (
    <Container
      background_image={game.background_image}
      dominant_color={game.dominant_color}
      href={`/games/${game.slug}`}
    >
      <GameCardTitle>{game.name}</GameCardTitle>
      <GameCardContent>
        <GamePlatforms platforms={game.platforms} />
        <GameCardInformation>
          <GameCardRating rating={game.rating} />
          <GameCardDate>
          <time>
            {game.released?.split('-').shift()}
          </time>
          </GameCardDate>
          <MetacriticRating metacritic={game.metacritic} />
        </GameCardInformation>
        <GameCardHighlights>
        </GameCardHighlights>
      </GameCardContent>
    </Container>
  );
};

export default GameCard;
