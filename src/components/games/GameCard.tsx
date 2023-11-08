import MetacriticRating from "components/others/MetacriticRating";
import Image from "next/image";
import React from "react";
import { Game } from "types/games/Game";
import { IoCalendarSharp } from "react-icons/io5";
import {
  Container,
  GameCardContent,
  GameCardHighlights,
  GameCardInformation,
  GameCardTitle,
  GameCardDate,
  GameCardMeta
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
      href={`/${game.slug}`}
    >
      <GameCardTitle>{game.name}</GameCardTitle>
      <GameCardContent>
        <GamePlatforms platforms={game.platforms} />
        <GameCardInformation>
          <GameCardRating rating={game.rating} />
          <GameCardMeta>
          <MetacriticRating metacritic={game.metacritic} />
          <GameCardDate>
          <IoCalendarSharp/>
          <time>
            {game.released.split('-').join(' | ')}
          </time>
          </GameCardDate>
          </GameCardMeta>
        </GameCardInformation>
        <GameCardHighlights>
        </GameCardHighlights>
      </GameCardContent>
    </Container>
  );
};

export default GameCard;
