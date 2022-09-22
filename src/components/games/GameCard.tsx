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
    >
      <GameCardTitle>{game.name}</GameCardTitle>
      <GameCardContent>
        <GamePlatforms platforms={game.platforms} />
        <GameCardInformation>
          <GameCardRating rating={game.rating} />
          <MetacriticRating metacritic={game.metacritic} />
          <IoCalendarSharp/>
          <time>
            {game.released.split('-').join(' | ')}
          </time>
        </GameCardInformation>
        <GameCardHighlights>
          <Image src={game.short_screenshots[1].image ?? ""} title={game.name+"Screenshot"+"1"} alt={game.name+"Screenshot"+"1"} width={100} height={60}/>
        </GameCardHighlights>
      </GameCardContent>
    </Container>
  );
};

export default GameCard;
