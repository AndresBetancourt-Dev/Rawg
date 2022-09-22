import useRating from "hooks/useRating";
import React from "react";
import { Game } from "types/games/Game";
import { GameCardRatingContainer } from "./GameCard.styles";

interface GameCardRatingProps {
  rating: Game["rating"];
}

const GameCardRating = ({ rating }: GameCardRatingProps) => {
  const { transformStars, LastStar } = useRating(rating);
  return (
    <GameCardRatingContainer>
      <p>{rating}</p>
      {transformStars()}
      {LastStar && <LastStar />}
    </GameCardRatingContainer>
  );
};

export default GameCardRating;
